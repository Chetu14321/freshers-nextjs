"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

/* ===================== Loader ===================== */
function JobDetailsLoader() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 animate-pulse">

        <div className="h-8 bg-gray-200 w-3/4 mb-3" />
        <div className="h-4 bg-gray-200 w-1/3 mb-8" />

        <div className="h-64 bg-gray-200 mb-8" />

        <div className="space-y-3">
          <div className="h-4 bg-gray-200 w-1/2" />
          <div className="h-4 bg-gray-200 w-1/3" />
          <div className="h-4 bg-gray-200 w-2/3" />
        </div>

        <div className="h-12 bg-blue-200 mt-10 w-full" />

        <p className="text-center text-sm text-gray-500 mt-8">
          Loading job details…
        </p>
      </div>
    </div>
  );
}

/* ===================== Page ===================== */
export default function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadJob = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/jobs/${id}`);
        const data = await res.json();
        setJob(data.job || data);
      } catch (err) {
        console.error("Error loading job:", err);
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [id]);

  /* ---------------- Loading ---------------- */
  if (loading) return <JobDetailsLoader />;

  /* ---------------- Not Found ---------------- */
  if (!job?._id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600 text-lg">Job not found</p>
      </div>
    );
  }

  /* ---------------- Page ---------------- */
  return (
    <main className="min-h-screen bg-white pt-20 pb-20">

      <div className="max-w-4xl mx-auto px-4">

        {/* ================= Header ================= */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {job.title}
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            {job.company}
          </p>
        </header>

        {/* ================= Image ================= */}
        {job.img && (
          <img
            src={job.img}
            alt={job.title}
            className="w-full h-64 md:h-72 object-cover mb-10"
          />
        )}

        {/* ================= Meta ================= */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-gray-800 text-sm mb-10">
          <p><b>📍 Location:</b> {job.location || "Not specified"}</p>
          <p><b>💼 Experience:</b> {job.experience || "Not specified"}</p>
          <p><b>💰 Salary:</b> {job.salary || "Not disclosed"}</p>
          <p><b>🧑‍💻 Role:</b> {job.role || "Not specified"}</p>
        </section>

        {/* ================= Description ================= */}
        <section className="prose max-w-none text-gray-800 leading-relaxed">
          <h2>Job Description</h2>
          <div
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
        </section>

        {/* ================= CTA ================= */}
        {job.applyUrl && (
          <section className="mt-14">
            <a
              href={job.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 transition text-white py-4 text-lg font-semibold"
            >
              Apply Now →
            </a>
          </section>
        )}

      </div>
    </main>
  );
}
