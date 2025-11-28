"use client";

import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  FileSearch,
  Info,
  Mail,
  ShieldCheck,
  FileText,
} from "lucide-react";
import HeaderHero from "./components/HeaderHero";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

export default function Home() {
  const router = useRouter();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  // Search states
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  /* ------------------------------------------------
        FETCH ALL JOBS (SAFE VERSION)
  ---------------------------------------------------*/
  const loadJobs = useCallback(async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/jobs`, {
        cache: "no-store",
      });

      if (!res.ok) {
        setFetchError("Failed to load jobs.");
        return;
      }

      const data = await res.json();

      const raw = Array.isArray(data)
        ? data
        : data.jobs
        ? data.jobs
        : data.data
        ? data.data
        : [];

      setJobs(
        raw.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))
      );
    } catch (error) {
      setFetchError("Error fetching jobs.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

  /* ------------------------------------------------
        SEARCH FUNCTION
  ---------------------------------------------------*/
  const handleSearch = (value) => {
    setSearch(value);

    if (value.trim().length < 2) {
      setShowResults(false);
      return;
    }

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered.slice(0, 8));
    setShowResults(true);
  };

  const submitSearch = (e) => {
    e.preventDefault();

    if (search.trim().length > 0) {
      router.push(`/jobs?q=${search}`);
      setShowResults(false);
    }
  };

  /* ------------------------------------------------
        CARD DATA
  ---------------------------------------------------*/
  const cardData = [
    {
      title: "Jobs",
      description: "Explore verified job openings across top companies.",
      icon: Briefcase,
      link: "/jobs",
    },
    {
      title: "Internships",
      description: "Find meaningful internships with real work experience.",
      icon: GraduationCap,
      link: "/internships",
    },
    {
      title: "Resume ATS Checker",
      description: "Check if your resume can pass ATS filters.",
      icon: FileSearch,
      link: "/resume-checker",
    },
  ];

  return (
    <main className="mx-auto bg-white text-black">

      {/* HEADER */}
      <HeaderHero />

      {/* SEARCH BAR */}
      <div className="max-w-lg mx-auto mt-10 relative">
        <form onSubmit={submitSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search jobs..."
            className="w-full px-4 py-3 border rounded-xl shadow-sm text-gray-800 focus:border-blue-600 outline-none"
          />
        </form>

        {showResults && results.length > 0 && (
          <div className="absolute w-full bg-white border rounded-xl shadow-lg mt-2 z-50">
            {results.map((job) => (
              <Link
                key={job._id}
                href={`/job/${job._id}`}
                onClick={() => setShowResults(false)}
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                {job.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* TITLE */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-extrabold">FreshersJobs</h1>
        <p className="text-lg mt-3 leading-relaxed max-w-2xl mx-auto">
          Your trusted platform for freshers jobs, internships, and resume tools —
          designed with a clean, readable, and AdSense-friendly layout.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-18">
        {cardData.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
              <item.icon size={30} stroke="#000" />
            </div>
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700 text-sm mt-1">{item.description}</p>
            <p className="mt-4 font-medium text-blue-600">Learn more</p>
          </Link>
        ))}
      </section>

      {/* LATEST JOBS */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Latest Job Openings
        </h2>

        {fetchError && <p className="text-center text-red-600">{fetchError}</p>}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.slice(0, 6).map((job) => (
              <Link
                key={job._id}
                href={`/job/${job._id}`}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-700">{job.company}</p>
                <p className="text-gray-600 text-sm mt-1">
                  {job.location || "Location not specified"}
                </p>
                <p className="mt-4 text-blue-600 font-medium">Learn more</p>
              </Link>
            ))}
          </div>
        )}
      </section>

    </main>
  );
}
