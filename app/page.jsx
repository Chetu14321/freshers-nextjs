"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
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
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm animate-pulse h-64">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-100 rounded w-full mb-2" />
      <div className="h-4 bg-gray-100 rounded w-full" />
    </div>
  );
}

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
        cache: "no-store",
      });
      const data = await res.json();
      const raw = data.jobs || [];
      setJobs(raw.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt)));
    } catch (err) {
      console.error("Fetch Error:", err);
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
    <main className="bg-white text-slate-900 min-h-screen">
      {/* ================= SEARCH ================= */}
      <div className="max-w-4xl mx-auto pt-10 px-4 relative">
        <form onSubmit={submitSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search job titles or company names..."
            className="w-full px-6 py-4 border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
          />
        </form>

        {showResults && (
          <div className="absolute left-4 right-4 bg-white border-2 border-black rounded-2xl shadow-xl mt-2 z-50 max-h-80 overflow-auto">
            {results.map((job) => {
              if (!job.slug) return null; // ✅ prevent undefined
              return (
                <Link
                  key={job.slug}
                  href={`/jobs/${job.slug}`}
                  className="block px-6 py-4 hover:bg-slate-50 border-b border-gray-100 last:border-0 font-bold text-blue-600 text-sm"
                >
                  {job.title}{" "}
                  <span className="text-slate-400 font-medium">
                    — {job.company}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* ================= ORIGINAL CAREER CONTENT ================= */}
      <section className="max-w-4xl mx-auto px-4 mt-14 mb-16">
        <h1 className="text-3xl font-black text-slate-900 mb-6">
          Career Guidance & Verified Job Updates for Freshers (2026)
        </h1>

        <div className="space-y-5 text-slate-600 text-sm leading-relaxed">
          <p>
            FreshersJobs.shop is an independent career guidance platform designed
            to help fresh graduates and entry-level professionals understand real
            hiring requirements, skill expectations, and preparation strategies
            across IT, analytics, software, and non-technical roles.
          </p>

          <p>
            We do not conduct recruitment or collect applications. All job updates
            shared on this platform are manually verified and redirected only to
            official company career portals. This helps candidates avoid fake job
            scams and misleading third-party recruitment sources.
          </p>

          <p>
            Our focus is on clarity and preparation. Along with job updates, we
            explain role responsibilities, required skills, interview patterns,
            and realistic career paths so candidates can prepare confidently
            before applying through official channels.
          </p>

          <p>
            FreshersJobs.shop aims to support informed career decisions by
            presenting structured, easy-to-understand information. We encourage
            all users to cross-check details directly on company websites before
            proceeding with any application.
          </p>
        </div>
      </section>

      {/* ================= JOB GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {loading
              ? [...Array(6)].map((_, i) => <JobSkeleton key={i} />)
              : currentJobs.map((job) => {
                  if (!job.slug) return null; // ✅ prevent undefined
                  return (
                    <Link
                      key={job.slug}
                      href={`/jobs/${job.slug}`}
                      className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                    >
                      <div className="px-4 py-2 bg-white border-b border-gray-50">
                        <span className="text-blue-600 text-[10px] font-bold uppercase tracking-wider">
                          Fresher Jobs
                        </span>
                      </div>

                      <div className="p-5 flex-1">
                        <h2 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-700 transition-colors">
                          {job.title} at {job.company}
                        </h2>

                        <p className="text-[11px] text-slate-400 mt-2 font-medium">
                          Admin /{" "}
                          {new Date(job.postedAt || Date.now()).toLocaleDateString(
                            "en-US",
                            { month: "long", day: "numeric", year: "numeric" }
                          )}
                        </p>

                        <p className="text-sm text-slate-500 mt-4 line-clamp-3 leading-relaxed">
                          Verified hiring details for {job.title}. View official
                          career information on {job.company}’s website.
                        </p>
                      </div>
                    </Link>
                  );
                })}
          </div>

          {!loading && totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 border-2 border-black rounded-lg disabled:opacity-20"
              >
                <ChevronLeft size={20} />
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 border-2 border-black rounded-lg font-bold ${
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
                className="p-2 border-2 border-black rounded-lg disabled:opacity-20"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* ================= SIDEBAR ================= */}
        <aside className="w-full lg:w-80 space-y-10">
          <div>
            <h3 className="text-xl font-bold border-b-2 border-black pb-2 mb-6">
              Recent Job Guides
            </h3>
            <div className="space-y-4">
              {jobs.slice(0, 6).map((job) => {
                if (!job.slug) return null;
                return (
                  <Link
                    key={job.slug}
                    href={`/jobs/${job.slug}`}
                    className="block text-sm font-bold text-blue-700 hover:underline"
                  >
                    {job.title} Preparation Guide
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
      </div>

      <footer className="border-t py-10 text-center text-[10px] font-bold text-slate-400">
        FreshersJobs.shop • Career Guidance Platform • 2026
      </footer>
    </main>
  );
}
