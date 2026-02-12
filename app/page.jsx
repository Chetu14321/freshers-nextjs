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
    <div className="bg-white border rounded-xl p-6 animate-pulse h-64">
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

      {/* ================= NAVBAR ================= */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-black text-lg">
            FreshersJobs.shop
          </Link>

          <nav className="flex items-center gap-6 text-sm font-semibold">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/jobs" className="hover:text-blue-600">Jobs</Link>
            <Link href="/internships" className="hover:text-blue-600">Internships</Link>
            <Link href="/ats-checker" className="hover:text-blue-600">ATS Checker</Link>
          </nav>
        </div>
      </header>

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

      {/* ================= ARTICLE STYLE JOB GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-16 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loading
            ? [...Array(6)].map((_, i) => <JobSkeleton key={i} />)
            : currentJobs.map((job) =>
                job.slug ? (
                  <Link
                    key={job.slug}
                    href={`/jobs/${job.slug}`}
                    className="block bg-white border rounded-xl p-6 hover:shadow-xl transition duration-200"
                  >
                    <h3 className="font-bold text-lg mb-2">
                      {job.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {job.company} • 📍 {job.location || "India"}
                    </p>

                    <p className="text-sm text-gray-700 mt-3 line-clamp-3">
                      {job.description
                        ? job.description.replace(/<[^>]+>/g, "").slice(0,160)+"..."
                        : "Explore fresher hiring insights and application guidance."}
                    </p>

                    <div className="flex justify-between items-center mt-5 text-xs text-gray-500">
                      <span>
                        🗓 {job.createdAt ? job.createdAt.slice(0,10) : "Latest Update"}
                      </span>
                      <span className="font-semibold">Read Article →</span>
                    </div>
                  </Link>
                ) : null
              )}
        </div>

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
                  currentPage === i + 1 ? "bg-black text-white" : "bg-white"
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
