"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, FileSearch } from "lucide-react";
import { useRouter } from "next/navigation";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

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
    <div className="bg-white border rounded-xl p-6 shadow-sm animate-pulse">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-100 rounded w-1/3" />
      <div className="h-4 bg-blue-100 rounded w-1/4 mt-4" />
    </div>
  );
}

/* -------------------- Main Page -------------------- */
export default function Home() {
  const router = useRouter();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  /* -------------------- Load Jobs -------------------- */
  const loadJobs = useCallback(async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/jobs`, {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed to load jobs");

      const data = await res.json();
      const raw = Array.isArray(data)
        ? data
        : data.jobs || data.data || [];

      setJobs(
        raw.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))
      );
    } catch (err) {
      setFetchError("Error fetching jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  /* -------------------- Live Search Logic -------------------- */
  useEffect(() => {
    if (!debouncedSearch || debouncedSearch.trim().length < 2) {
      setShowResults(false);
      setResults([]);
      return;
    }

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    setResults(filtered.slice(0, 8));
    setShowResults(true);
  }, [debouncedSearch, jobs]);

  const submitSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/jobs?q=${search}`);
      setShowResults(false);
    }
  };

  /* -------------------- Cards -------------------- */
  const cardData = [
    {
      title: "Jobs",
      description: "Explore verified job openings across trusted companies.",
      icon: Briefcase,
      link: "/jobs",
    },
    {
      title: "Internships",
      description: "Find real-world internships to start your career.",
      icon: GraduationCap,
      link: "/internships",
    },
    {
      title: "Resume ATS Checker",
      description: "Analyze your resume for ATS compatibility.",
      icon: FileSearch,
      link: "/resume-checker",
    },
  ];

  /* -------------------- JSX -------------------- */
  return (
    <main className="mx-auto bg-white text-black">

      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Find the Best Jobs & Internships for Freshers
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Welcome to <strong>FreshersJobs</strong> — helping fresh graduates
          discover verified jobs, internships, and career tools.
        </p>
      </section>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto mt-10 relative px-4">
        <form onSubmit={submitSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search job titles, roles, or companies..."
            className="w-full px-4 py-3 border rounded-xl shadow-sm text-gray-800"
          />
        </form>

        {showResults && (
          <div className="absolute w-full bg-white border rounded-xl shadow-lg mt-2 z-50 max-h-80 overflow-auto">
            {results.length > 0 ? (
              results.map((job) => (
                <Link
                  key={job._id}
                  href={`/jobs/${job._id}`}
                  onClick={() => setShowResults(false)}
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                >
                  {job.title}
                </Link>
              ))
            ) : (
              <p className="px-4 py-3 text-sm text-gray-500">
                No matching jobs found
              </p>
            )}
          </div>
        )}
      </div>

      {/* FEATURE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
        {cardData.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md"
          >
            <div className="w-14 h-14 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
              <item.icon size={30} stroke="#1d4ed8" />
            </div>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700 text-sm mt-2">{item.description}</p>
            <p className="mt-4 text-blue-600 font-medium">Explore →</p>
          </Link>
        ))}
      </section>

      {/* LATEST JOBS */}
      <section className="mt-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">
          Latest Job Openings
        </h2>

        {fetchError && (
          <p className="text-center text-red-600">{fetchError}</p>
        )}

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <JobSkeleton key={i} />
            ))}
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.slice(0, 6).map((job) => (
              <Link
                key={job._id}
                href={`/jobs/${job._id}`}
                className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-700">{job.company}</p>
                <p className="text-gray-600 text-sm mt-1">
                  {job.location || "Location not specified"}
                </p>
                <p className="mt-4 text-blue-600 font-medium">
                  Apply Now →
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}
