"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, FileSearch, ShieldCheck } from "lucide-react";
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

  useEffect(() => {
    if (!debouncedSearch || debouncedSearch.trim().length < 2) {
      setShowResults(false);
      setResults([]);
      return;
    }

    const filtered = jobs.filter((job) =>
      job.title?.toLowerCase().includes(debouncedSearch.toLowerCase())
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

  return (
    <main className="mx-auto bg-white text-black min-h-screen">
      
      {/* Performance Optimization: Preconnect to Backend API */}
      <link rel="preconnect" href={BACKEND_URL} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Find the Best Jobs & Internships for Freshers
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          FreshersJobs.shop helps students and fresh graduates discover verified
          job openings, internships, and career opportunities across India.
        </p>
      </section>

      {/* SEARCH SECTION */}
      <div className="max-w-xl mx-auto mt-1 relative px-4">
        <form onSubmit={submitSearch} role="search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search job titles or companies"
            placeholder="Search job titles, roles, or companies..."
            className="w-full px-4 py-4 border-2 border-gray-100 rounded-2xl shadow-sm text-gray-800 focus:border-blue-500 outline-none transition-all"
          />
        </form>

        {showResults && (
          <div className="absolute w-[calc(100%-2rem)] bg-white border rounded-xl shadow-lg mt-2 z-50 max-h-80 overflow-auto border-gray-100">
            {results.length > 0 ? (
              results.map((job) => (
                <Link
                  key={job._id}
                  href={`/jobs/${job._id}`}
                  onClick={() => setShowResults(false)}
                  className="block px-4 py-3 hover:bg-blue-50 text-sm border-b last:border-0 transition"
                >
                  <span className="font-medium text-blue-700">{job.title}</span>
                  <span className="text-gray-500 ml-2">— {job.company}</span>
                </Link>
              ))
            ) : (
              <p className="px-4 py-4 text-sm text-gray-500 text-center">
                No matching jobs found
              </p>
            )}
          </div>
        )}
      </div>

      {/* FEATURE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-4 max-w-6xl mx-auto">
        {cardData.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
              <item.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
            <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
            <p className="mt-4 text-blue-600 font-semibold inline-flex items-center">
              Explore Now <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </p>
          </Link>
        ))}
      </section>

      {/* LATEST JOBS SECTION */}
      <section className="mt-20 px-4 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Latest Job Openings
          </h2>
          <Link href="/jobs" className="text-blue-600 font-semibold hover:underline">View All</Link>
        </div>

        {fetchError && (
          <div className="text-center bg-red-50 p-4 rounded-xl text-red-600 font-medium">
            {fetchError}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <JobSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.slice(0, 6).map((job) => (
              <Link
                key={job._id}
                href={`/jobs/${job._id}`}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{job.title}</h3>
                </div>
                <p className="text-blue-600 font-medium text-sm">{job.company}</p>
                <p className="text-gray-500 text-xs mt-2 flex items-center">
                  📍 {job.location || "India (Remote/On-site)"}
                </p>
                <div className="mt-6 flex items-center justify-between border-t pt-4">
                   <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Full Time</span>
                   <span className="text-blue-600 text-sm font-bold">Apply →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* SEO & TRUST SECTION (Crucial for AdSense Approval) */}
      <section className="mt-24 px-4 py-16 bg-gray-50 border-t">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Your Trusted Source for Freshers Jobs 2026
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              FreshersJobs.shop is a career discovery platform built specifically
              for fresh graduates and students. We focus on providing verified 
              <strong> off-campus job listings</strong>, <strong>internships</strong>, and 
              career opportunities from trusted companies across India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our goal is to simplify the job search process by offering clear,
              well-structured job information and practical preparation tips for 
              the 2024, 2025, and 2026 batches.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-4">
               <ShieldCheck className="text-green-600" size={28} />
               <h3 className="font-bold text-lg text-gray-900">Verified & Safe</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We prioritize your safety. FreshersJobs.shop never charges candidates 
              any fees for applications or interview scheduling. We recommend 
              applying only through official company portals.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
               <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 px-2 py-1 rounded">Updated Jan 2026</span>
               <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 px-2 py-1 rounded">Verified Listings</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}