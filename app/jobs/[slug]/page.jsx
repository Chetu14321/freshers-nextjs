"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "./job-details.css";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

export default function JobDetails() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [job, setJob] = useState(null);
  const [latestJobs, setLatestJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const loadData = async () => {
      try {
        const [jobRes, jobsRes] = await Promise.all([
          fetch(`${BACKEND_URL}/api/jobs/${slug}`, { cache: "no-store" }),
          fetch(`${BACKEND_URL}/api/jobs?limit=6`, { cache: "no-store" }),
        ]);

        if (!jobRes.ok) {
          setJob(null);
          return;
        }

        const jobData = await jobRes.json();
        const jobsData = await jobsRes.json();
        const currentJob = jobData.job || jobData;

        setJob({
          ...currentJob,
          description:
            typeof currentJob.description === "string" &&
            currentJob.description.trim()
              ? currentJob.description
              : "<p>No description available.</p>",
        });

        setLatestJobs(
          (jobsData.jobs || []).filter((j) => j.slug !== currentJob.slug)
        );
      } catch (err) {
        console.error("Error loading job:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  if (loading) return <p className="center-text">Loading job details…</p>;
  if (!job) return <p className="center-text">Job not found</p>;

  return (
    <main className="job-page">
      <div className="job-layout">

        {/* ================= MAIN ARTICLE ================= */}
        <article className="job-article">
          {/* HEADER */}
          <header className="doc-header">
            <h1>{job.title}</h1>
            <p className="company">{job.company}</p>
            <p className="location">📍 {job.location || "India"}</p>
          </header>

          {/* JOB INFO TABLE */}
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
                  <th>Salary</th>
                  <td>{job.salary || "As per company standards"}</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>{job.location || "Across India"}</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* JOB CONTENT */}
          <section className="ck-content">
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </section>

          {/* APPLY */}
          {job.applyUrl && (
            <section className="apply">
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Official Job Posting →
              </a>

              <p className="apply-disclaimer">
                Disclaimer: FreshersJobs.shop is not a recruitment agency. We do
                not charge candidates. Always apply through official company
                career websites.
              </p>
            </section>
          )}
        </article>

        {/* ================= SIDEBAR ================= */}
        <aside className="latest-jobs screen-only">
          <h3>Latest Job Guides</h3>
          <ul>
            {latestJobs.map((j) => (
              <li
                key={j.slug}
                onClick={() => router.push(`/jobs/${j.slug}`)}
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