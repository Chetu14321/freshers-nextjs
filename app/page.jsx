"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const BACKEND_URL = "https://freshersjobs-shop-pq8u.onrender.com";
const JOBS_PER_PAGE = 6;

/* -------------------- Skeleton Loader -------------------- */
function JobSkeleton() {
  return (
    <div className="bg-white border rounded-xl p-6 animate-pulse h-72">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-100 rounded w-full mb-2" />
      <div className="h-4 bg-gray-100 rounded w-full mb-2" />
      <div className="h-4 bg-gray-100 rounded w-3/4" />
    </div>
  );
}

/* ⭐ ORIGINAL FALLBACK TEXTS */
const previews = [
  "Understand eligibility details, hiring insights, and fresher application guidance explained clearly.",
  "Explore role expectations, required skills, and interview preparation tips for fresh graduates.",
  "Learn about company hiring patterns and safe application steps through editorial insights.",
  "Discover fresher opportunities explained with practical preparation advice and role clarity.",
  "Read simplified hiring guidance designed to help candidates apply confidently.",
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
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  /* -------------------- Load Jobs -------------------- */
  const loadJobs = useCallback(async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/jobs`, {
        cache: "force-cache",
      });

      const data = await res.json();
      const raw = data.jobs || [];

      const sorted = [...raw].sort(
        (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
      );

      setJobs(sorted);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  /* -------------------- Pagination -------------------- */
  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  const paginate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      {/* ================= HUMAN EDITORIAL INTRO ================= */}
      <section className="max-w-4xl mx-auto px-4 mt-14 mb-10">
        <h2 className="text-xl font-bold mb-3">
          Latest Fresher Hiring Updates Across India
        </h2>

        <p className="text-xs text-gray-600 mt-2">
          FreshersJobs.shop Editorial Desk • Career Guidance Platform
        </p>

        <p className="text-sm text-gray-600 leading-relaxed mt-3">
          At FreshersJobs.shop, we try to make the early stage of a career
          search less confusing for fresh graduates. Instead of presenting long
          lists of openings without context, our editorial team focuses on
          explaining what each opportunity actually means — from expected
          skills and eligibility details to the type of preparation that helps
          candidates stand out.
        </p>

        <p className="text-sm text-gray-600 leading-relaxed mt-3">
          Many freshers feel unsure about where to begin or which companies are
          actively hiring. Through simple explanations and curated updates, we
          aim to create a space that feels more like guidance than just another
          job board.
        </p>
      </section>

      {/* ================= ARTICLE STYLE JOB GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loading
            ? [...Array(6)].map((_, i) => <JobSkeleton key={i} />)
            : currentJobs.map((job) => {
                if (!job.slug) return null;

                return (
                  <Link
                    key={job.slug}
                    href={`/jobs/${job.slug}`}
                    className="block bg-white border rounded-xl p-6 hover:shadow-xl transition duration-200"
                  >
                    {/* ⭐ ARTICLE LABEL */}
                    <p className="text-[11px] text-blue-600 font-semibold mb-2">
                      FreshersJobs Editorial Guide
                    </p>

                    {/* TITLE */}
                    <h3 className="font-bold text-lg leading-snug">
                      {job.title}
                    </h3>

                    {/* META */}
                    <p className="text-sm text-gray-600 mt-1">
                      {job.company} • 📍 {job.location || "India"}
                    </p>

                    {/* BLOG STYLE INTRO */}
                    <p className="text-sm text-gray-700 mt-3 font-medium">
                      {job.company} is currently hiring fresh graduates for
                      entry-level roles. This article explains eligibility,
                      preparation strategy, and hiring insights in a simplified
                      way for beginners.
                    </p>

                    {/* LONG ARTICLE SNIPPET */}
                    <p className="text-sm text-gray-600 mt-2 line-clamp-5">
                      {job.description
                        ? job.description
                            .replace(/<[^>]+>/g, "")
                            .slice(0, 280) + "..."
                        : previews[
                            Math.floor(Math.random() * previews.length)
                          ]}
                    </p>

                    {/* EXTRA DETAILS */}
                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-3">
                      {job.experience && <span>🎓 {job.experience}</span>}
                      {job.salary && <span>💰 {job.salary}</span>}
                      {job.qualification && (
                        <span>📘 {job.qualification}</span>
                      )}
                    </div>

                    {/* FOOTER */}
                    <div className="flex justify-between items-center mt-5 text-xs text-gray-500">
                      <span>
                        🗓{" "}
                        {job.createdAt
                          ? job.createdAt.slice(0, 10)
                          : "Latest Update"}
                      </span>
                      <span className="font-semibold">
                        Read Full Article →
                      </span>
                    </div>
                  </Link>
                );
              })}
        </div>

        {/* ================= BLOG ARTICLES ================= */}
        {/* ================= LONG BLOG ARTICLES ================= */}
<section className="max-w-7xl mx-auto px-4 mt-16">
  <h2 className="text-xl font-bold mb-4">
    Career Guides & Preparation Blogs
  </h2>

  {/* ⭐ LONGER INTRO TEXT */}
  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
    Along with daily hiring updates, FreshersJobs.shop publishes detailed
    career guidance articles written specifically for students and fresh
    graduates entering the job market. These editorial guides focus on
    real-world preparation — from building resumes and improving interview
    performance to understanding how companies evaluate entry-level
    candidates during recruitment.
  </p>

  <p className="text-sm text-gray-600 mb-8 leading-relaxed">
    Instead of generic advice, our blog content explains practical steps
    based on common fresher experiences, helping readers understand what
    actually matters during early career growth. Whether you are preparing
    for your first interview or trying to improve your profile visibility,
    these articles are designed to simplify complex hiring processes.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {blogPosts.map((blog, index) => (
      <Link
        key={index}
        href={`/blog/${blog.slug}`}
        className="block bg-white border rounded-xl p-6 hover:shadow-xl transition"
      >
        {/* ⭐ BLOG LABEL */}
        <p className="text-[11px] text-blue-600 font-semibold mb-2">
          Career Preparation Guide
        </p>

        {/* TITLE */}
        <h3 className="font-bold text-lg mb-2">{blog.title}</h3>

        {/* ⭐ LONG BLOG PREVIEW */}
        <p className="text-sm text-gray-700 leading-relaxed">
          {blog.desc} This editorial article explains practical strategies
          fresh graduates can follow to improve their chances during early
          hiring stages. Each guide is written with simplified examples so
          beginners can clearly understand real expectations from recruiters.
        </p>

        {/* ⭐ EXTRA PARAGRAPH (MORE CONTENT FOR GOOGLE) */}
        <p className="text-sm text-gray-600 leading-relaxed mt-3 line-clamp-4">
          Many candidates struggle with preparation because advice online
          often feels too technical or confusing. These blogs break down
          complex career steps into easy explanations — covering resume
          structure, interview mindset, profile building, and long-term
          growth planning for entry-level roles.
        </p>

        <div className="mt-4 text-xs text-gray-500 font-semibold">
          Read Full Blog →
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