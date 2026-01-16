"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "./job-details.css";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

export default function JobDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [job, setJob] = useState(null);
  const [latestJobs, setLatestJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      try {
        const [jobRes, jobsRes] = await Promise.all([
          fetch(`${BACKEND_URL}/api/jobs/${id}`, { cache: "no-store" }),
          fetch(`${BACKEND_URL}/api/jobs?limit=6`, { cache: "no-store" }),
        ]);

        const jobData = await jobRes.json();
        const jobsData = await jobsRes.json();

        setJob(jobData.job || jobData);
        setLatestJobs(
          (jobsData.jobs || jobsData || []).filter((j) => j._id !== id)
        );
      } catch (err) {
        console.error("Error loading jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) return <p className="center-text">Loading job details…</p>;
  if (!job?._id) return <p className="center-text">Job not found</p>;

  return (
    <main className="document-page">
      {/* ================= MAIN LAYOUT ================= */}
      <div className="layout">
        {/* ================= LEFT: JOB DOCUMENT ================= */}
        <article className="document print-area">
          {/* HEADER */}
          <header className="doc-header">
            <h1>{job.title}</h1>
            <p className="company">{job.company}</p>
          </header>

          {/* ================= JOB DETAILS TABLE ================= */}
          <section className="job-table">
            <table>
              <tbody>
                <tr>
                  <th>Company Name</th>
                  <td>{job.company}</td>
                </tr>

                <tr>
                  <th>Job Role</th>
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

          {/* ================= DESCRIPTION ================= */}
          <section className="content">
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </section>

          {/* ================= APPLY ================= */}
          {/* ================= APPLY ================= */}
{job.applyUrl && (
  <div className="apply">
    <a
      href={job.applyUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Apply on Official Company Website →
    </a>

    <p className="apply-disclaimer">
      Disclaimer: FreshersJobs.shop does not charge any fees for job applications.
      Candidates are advised to apply only through official company career pages
      or verified hiring partners.
    </p>
  </div>
)}

        </article>

        {/* ================= RIGHT: LATEST JOBS ================= */}
        <aside className="latest-jobs screen-only">
          <h3>Latest Jobs</h3>
          <ul>
            {latestJobs.slice(0, 6).map((j) => (
              <li key={j._id} onClick={() => router.push(`/jobs/${j._id}`)}>
                <p className="lj-title">{j.title}</p>
                <p className="lj-company">{j.company}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* ================= COMMENTS ================= */}
      <section className="comments">
        <h2>Leave a Comment</h2>

        <form className="comment-form">
          <input type="text" placeholder="Your name" required />
          <textarea
            placeholder="Write your comment..."
            rows="5"
            required
          />
          <button type="submit">Post Comment</button>
        </form>
      </section>
    </main>
  );
}
