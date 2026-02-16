"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";
const JOBS_PER_PAGE = 6;

/* -------------------- Debounce Hook -------------------- */
function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

/* -------------------- Skeleton Loader -------------------- */
function JobSkeleton() {
  return (
    <div className="bg-white border rounded-xl p-6 animate-pulse h-64">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-100 rounded w-full mb-2" />
      <div className="h-4 bg-gray-100 rounded w-full" />
    </div>
  );
}

/* ⭐ ORIGINAL FALLBACK TEXTS (Human Variation) */
const previews = [
  "Understand eligibility details, hiring insights, and fresher application guidance explained clearly.",
  "Explore role expectations, required skills, and interview preparation tips for fresh graduates.",
  "Learn about company hiring patterns and safe application steps through editorial insights.",
  "Discover fresher opportunities explained with practical preparation advice and role clarity.",
  "Read simplified hiring guidance designed to help candidates apply confidently."
];
/* ================= BLOG PREVIEW SECTION ================= */
const blogPosts = [
  {
    title: "How to Get Your First IT Job as a Fresher",
    slug: "how-to-get-first-job",
    desc: "Step-by-step strategy to land your first tech job faster.",
  },
  {
    title: "ATS Resume Tips for Freshers",
    slug: "ats-resume-tips",
    desc: "Create ATS-friendly resumes that recruiters actually read.",
  },
  {
    title: "LinkedIn Profile Tips for Freshers",
    slug: "linkedin-profile-tips-freshers",
    desc: "Optimize your LinkedIn profile to attract recruiters.",
  },
  {
    title: "Top Fresher Interview Questions",
    slug: "fresher-interview-questions",
    desc: "Most asked interview questions with preparation tips.",
  },
];

export default function Home() {
  const router = useRouter();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  /* -------------------- Load Jobs -------------------- */
const loadJobs = useCallback(async () => {
  try {
    const res = await fetch(`${BACKEND_URL}/api/jobs`, {
      cache: "force-cache", // ⭐ PERFORMANCE FIX
    });

    const data = await res.json();
    const raw = data.jobs || [];

    setJobs(raw.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt)));
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
}, []);


  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  /* -------------------- Search Logic -------------------- */
  useEffect(() => {
    if (!debouncedSearch || debouncedSearch.trim().length < 2) {
      setShowResults(false);
      return;
    }

    const filtered = jobs.filter(
      (job) =>
        job.title?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        job.company?.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setResults(filtered.slice(0, 8));
    setShowResults(true);
  }, [debouncedSearch, jobs]);

  /* -------------------- Pagination -------------------- */
  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  const paginate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/jobs?q=${search}`);
      setShowResults(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-black">

      {/* ================= SEARCH ================= */}
      <div className="max-w-4xl mx-auto pt-10 px-4 relative">
        <form onSubmit={submitSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search job titles or company names..."
            className="w-full px-6 py-4 border-2 border-black rounded-full"
          />
        </form>

        {showResults && (
          <div className="absolute left-4 right-4 bg-white border-2 border-black rounded-2xl shadow-xl mt-2 z-50 max-h-80 overflow-auto">
            {results.map((job) =>
              job.slug ? (
                <Link
                  key={job.slug}
                  href={`/jobs/${job.slug}`}
                  className="block px-6 py-4 hover:bg-slate-50 border-b font-bold text-blue-600 text-sm"
                >
                  {job.title} — {job.company}
                </Link>
              ) : null
            )}
          </div>
        )}
      </div>

      {/* ================= HUMAN EDITORIAL INTRO ================= */}
      <section className="max-w-4xl mx-auto px-4 mt-14 mb-10">
        <h2 className="text-xl font-bold mb-3">
          Latest Fresher Hiring Updates Across India
        </h2>
          <p className="text-xs text-gray-600 mt-2">
          FreshersJobs.shop Editorial Desk • Career Guidance Platform
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
  At FreshersJobs.shop, we try to simplify the job search process for fresh
  graduates by highlighting real hiring updates along with practical context.
  Instead of overwhelming you with raw listings, our editorial team explains
  what each opportunity means, what companies usually expect from freshers,
  and how you can prepare before applying. The goal is to help candidates feel
  more confident, informed, and safe while starting their careers.
</p>

       
      </section>
     


      {/* ================= ARTICLE STYLE JOB GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loading
            ? [...Array(6)].map((_, i) => <JobSkeleton key={i} />)
            : currentJobs.map((job) => {
                if (!job.slug) return null;

                const randomPreview =
                  previews[Math.floor(Math.random() * previews.length)];

                return (
                  <Link
                    key={job.slug}
                    href={`/jobs/${job.slug}`}
                    className="block bg-white border rounded-xl p-6 hover:shadow-xl transition duration-200"
                  >
                    <h3 className="font-bold text-lg mb-2">{job.title}</h3>

                    <p className="text-sm text-gray-600">
                      {job.company} • 📍 {job.location || "India"}
                    </p>

                    <p className="text-sm text-gray-700 mt-3 line-clamp-3">
                      {job.description
                        ? job.description
                            .replace(/<[^>]+>/g, "")
                            .slice(0, 160) + "..."
                        : randomPreview}
                    </p>

                    <div className="flex justify-between items-center mt-5 text-xs text-gray-500">
                      <span>
                        🗓{" "}
                        {job.createdAt
                          ? job.createdAt.slice(0, 10)
                          : "Latest Update"}
                      </span>
                      <span className="font-semibold">Read Article →</span>
                    </div>
                  </Link>
                );
              })}
        </div>
        {/* ================= BLOG ARTICLES (AdSense Content Boost) ================= */}
<section className="max-w-7xl mx-auto px-4 mt-16">
  <h2 className="text-xl font-bold mb-4">
    Career Guides & Preparation Blogs
  </h2>

  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
  Along with job updates, we also publish simple career guides written for
  beginners entering the industry. These blogs focus on real preparation —
  improving resumes, understanding interviews, and building confidence during
  the early stages of a career journey. Each article is written to feel clear,
  practical, and genuinely helpful rather than overly technical.
</p>


  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {blogPosts.map((blog, index) => (
      <Link
        key={index}
        href={`/blog/${blog.slug}`}
        className="block bg-white border rounded-xl p-6 hover:shadow-xl transition"
      >
        <h3 className="font-bold text-lg mb-2">{blog.title}</h3>

        <p className="text-sm text-gray-700 leading-relaxed">
  {blog.desc} This guide shares practical tips gathered from common fresher
  experiences, helping you understand what actually works when preparing for
  your first professional opportunities.
</p>


        <div className="mt-4 text-xs text-gray-500 font-semibold">
          Read Blog →
        </div>
      </Link>
    ))}
  </div>
</section>

        {/* ================= PAGINATION ================= */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center gap-3 mt-12 flex-wrap">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg bg-white"
            >
              ← Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === i + 1
                    ? "bg-black text-white"
                    : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-lg bg-white"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
