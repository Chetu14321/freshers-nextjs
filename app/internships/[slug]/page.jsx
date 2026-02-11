"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "./job-details.css";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

export default function InternshipDetails() {

  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [job, setJob] = useState(null); // ✅ SAME NAME AS JOB PAGE
  const [latestJobs, setLatestJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const loadData = async () => {
      try {

        // ⭐ EXACT SAME STRUCTURE AS JOB DETAILS
        const [jobRes, jobsRes] = await Promise.all([
          fetch(`${BACKEND_URL}/api/jobs/${slug}`, { cache: "no-store" }),

          // ✅ ONLY DIFFERENCE — filter internships
          fetch(`${BACKEND_URL}/api/jobs?limit=6&type=internship`, {
            cache: "no-store",
          }),
        ]);

        if (!jobRes.ok) {
          setJob(null);
          return;
        }

        const jobData = await jobRes.json();
        const jobsData = await jobsRes.json();
        const currentJob = jobData.job || jobData;

        // ✅ FIX EMPTY DESCRIPTION
        setJob({
          ...currentJob,
          description:
            typeof currentJob.description === "string" &&
            currentJob.description.trim()
              ? currentJob.description
              : "<p>No description available.</p>",
        });

        // ⭐ RIGHT SIDEBAR SAME AS JOB PAGE
        setLatestJobs(
          (jobsData.jobs || []).filter((j) => j.slug !== currentJob.slug)
        );

      } catch (err) {
        console.error("Error loading internship:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  /* ================= STATES ================= */

  if (loading) return <p className="center-text">Loading internship…</p>;
  if (!job) return <p className="center-text">Internship not found</p>;

  /* ================= UI ================= */

  return (
    <main className="job-page">
      <div className="job-layout">

        {/* ================= MAIN ARTICLE ================= */}
        <article className="job-article">

          <header className="doc-header">
            <h1>{job.title}</h1>
            <p className="company">{job.company}</p>
            <p className="location">
              📍 {job.location || "India / Remote"}
            </p>
          </header>

          {/* TABLE — SAME AS JOB DETAILS */}
          <section className="job-table">
            <table>
              <tbody>
                <tr>
                  <th>Company</th>
                  <td>{job.company}</td>
                </tr>

                <tr>
                  <th>Role</th>
                  <td>{job.role || job.title}</td>
                </tr>

                <tr>
                  <th>Qualification</th>
                  <td>{job.qualification || "Any Graduate"}</td>
                </tr>

                <tr>
                  <th>Experience</th>
                  <td>{job.experience || "Freshers Eligible"}</td>
                </tr>

                <tr>
                  <th>Salary / Stipend</th>
                  <td>
                    {job.salary || job.stipend || "Not disclosed"}
                  </td>
                </tr>

                <tr>
                  <th>Location</th>
                  <td>{job.location || "India / Remote"}</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* CONTENT — EXACT SAME */}
          <section className="ck-content">
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </section>

          {/* APPLY BUTTON — SAME */}
          {job.applyUrl && (
            <section className="apply">
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Official Internship Posting →
              </a>

              <p className="apply-disclaimer">
                Disclaimer: FreshersJobs.shop is not a recruitment agency.
                Always apply through official company career portals.
              </p>
            </section>
          )}
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="latest-jobs screen-only">
          <h3>Recent Internship Updates</h3>

          <ul>
            {latestJobs.map((j) => (
              <li
                key={j.slug}
                onClick={() => router.push(`/internships/${j.slug}`)}
              >
                <p className="lj-title">{j.title}</p>
                <p className="lj-company">{j.company}</p>
              </li>
            ))}
          </ul>
        </aside>

      </div>
    </main>
  );
}
