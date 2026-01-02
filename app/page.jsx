"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, FileSearch } from "lucide-react";
import { useRouter } from "next/navigation";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

export default function Home() {
  const router = useRouter();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

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
        : data.jobs || data.data || [];

      setJobs(
        raw.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt))
      );
    } catch (err) {
      setFetchError("Error fetching jobs.",err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadJobs();
  }, [loadJobs]);

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
    <main className="mx-auto bg-white text-black">
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Find the Best Jobs & Internships for Freshers
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl mx-auto">
          Welcome to <strong>FreshersJobs</strong> — a reliable platform helping
          fresh graduates discover verified jobs, internships, and tools for
          career growth.
        </p>
      </section>

      {/* SEARCH */}
      <div className="max-w-xl mx-auto mt-10 relative px-4">
        <form onSubmit={submitSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search job titles, roles, or companies..."
            className="w-full px-4 py-3 border rounded-xl shadow-sm text-gray-800"
          />
        </form>

        {showResults && results.length > 0 && (
          <div className="absolute w-full bg-white border rounded-xl shadow-lg mt-2 z-50">
            {results.map((job) => (
              <Link
                key={job._id}
                href={`/jobs/${job._id}`}
                onClick={() => setShowResults(false)}
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                {job.title}
              </Link>
            ))}
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
            <p className="text-gray-700 text-sm mt-2">
              {item.description}
            </p>
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
