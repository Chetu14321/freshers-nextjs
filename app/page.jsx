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
    <div className="bg-white border-2 border-black rounded-xl p-6 shadow-sm animate-pulse">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-100 rounded w-1/3" />
      <div className="h-4 bg-blue-100 rounded w-1/4 mt-4" />
    </div>
  );
}

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
      const res = await fetch(`${BACKEND_URL}/api/jobs`, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load jobs");
      const data = await res.json();
      const raw = Array.isArray(data) ? data : data.jobs || data.data || [];
      setJobs(raw.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt)));
    } catch (err) {
      setFetchError("Error fetching jobs. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadJobs(); }, [loadJobs]);

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
    { title: "Jobs", description: "Explore verified job openings across India.", icon: Briefcase, link: "/jobs" },
    { title: "Internships", description: "Find real-world internships for students.", icon: GraduationCap, link: "/internships" },
    { title: "Resume Checker", description: "Analyze your resume for ATS scoring.", icon: FileSearch, link: "/resume-checker" },
  ];

  return (
    <main className="mx-auto bg-white text-black min-h-screen">
      <link rel="preconnect" href={BACKEND_URL} />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Find the Best Jobs & Internships for Freshers
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mt-4 max-w-3xl mx-auto">
          FreshersJobs.shop helps graduates discover verified job openings and career opportunities.
        </p>
      </section>

      {/* SEARCH SECTION - Added Black Border */}
      <div className="max-w-xl mx-auto mt-1 relative px-4">
        <form onSubmit={submitSearch} role="search">
          <input
            type="text"
            name="job-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search jobs or companies"
            placeholder="Search job titles, roles, or companies..."
            className="w-full px-4 py-4 border-2 border-black rounded-2xl shadow-sm text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </form>

        {showResults && (
          <div className="absolute w-[calc(100%-2rem)] bg-white border-2 border-black rounded-xl shadow-lg mt-2 z-50 max-h-80 overflow-auto">
            {results.length > 0 ? (
              results.map((job) => (
                <Link
                  key={job._id}
                  href={`/jobs/${job._id}`}
                  onClick={() => setShowResults(false)}
                  className="block px-4 py-3 hover:bg-blue-50 border-b border-gray-200 last:border-0"
                >
                  <span className="font-bold text-blue-800">{job.title}</span>
                  <span className="text-gray-600 ml-2">— {job.company}</span>
                </Link>
              ))
            ) : (
              <p className="px-4 py-4 text-sm text-gray-700 text-center">No matching jobs found</p>
            )}
          </div>
        )}
      </div>

      {/* FEATURE CARDS - Added Black Border */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-4 max-w-6xl mx-auto">
        {cardData.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="group bg-white border-2 border-black rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 border border-black group-hover:bg-blue-600">
              <item.icon size={28} className="text-blue-600 group-hover:text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
            <p className="text-gray-700 text-sm mt-2">{item.description}</p>
            <p className="mt-4 text-blue-700 font-bold">Explore Now →</p>
          </Link>
        ))}
      </section>

      {/* LATEST JOBS - Added Black Border */}
      <section className="mt-20 px-4 max-w-6xl mx-auto pb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-left">Latest Openings</h2>
          <Link href="/jobs" className="text-blue-700 font-bold hover:underline">View All</Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => <JobSkeleton key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.slice(0, 6).map((job) => (
              <Link
                key={job._id}
                href={`/jobs/${job._id}`}
                className="bg-white border-2 border-black rounded-2xl p-6 shadow-sm hover:border-blue-600 transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
                <p className="text-blue-700 font-bold text-sm">{job.company}</p>
                <p className="text-gray-700 text-xs mt-3">📍 {job.location || "India"}</p>
                <div className="mt-6 flex items-center justify-between border-t border-black pt-4">
                   <span className="text-xs font-bold text-green-700 uppercase">New Post</span>
                   <span className="text-blue-700 text-sm font-extrabold uppercase tracking-tighter">Apply Now</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* TRUST SECTION */}
      <section className="bg-gray-50 border-t-2 border-black py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Trusted Jobs for 2026 Batch</h2>
            <p className="text-gray-800 leading-relaxed">
              We focus on providing verified off-campus job listings for fresh graduates. 
              Our platform ensures all content is manually reviewed for accuracy.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border-2 border-black">
            <div className="flex items-center space-x-3 mb-4">
               <ShieldCheck className="text-green-700" size={28} />
               <h3 className="font-bold text-lg">100% Free & Verified</h3>
            </div>
            <p className="text-sm text-gray-800">
              We never charge any fees. Always apply via official company portals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}