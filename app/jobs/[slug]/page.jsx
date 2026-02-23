import Link from "next/link";
import "./job-details.css";

export const dynamic = "force-dynamic";

const BACKEND_URL = "https://freshersjobs-shop-pq8u.onrender.com";

/* ---------------- FETCH DATA ---------------- */
async function loadJob(slug) {
  const res = await fetch(`${BACKEND_URL}/api/jobs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  const currentJob = data.job || data;

  return {
    ...currentJob,
    description:
      typeof currentJob.description === "string" &&
      currentJob.description.trim()
        ? currentJob.description
        : "<p>No description available.</p>",
  };
}

async function loadLatestJobs(slug) {
  const res = await fetch(`${BACKEND_URL}/api/jobs?limit=6`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  const data = await res.json();
  return (data.jobs || []).filter((j) => j.slug !== slug);
}

/* ---------------- PAGE ---------------- */
export default async function JobDetails({ params }) {
  const { slug } = await params;

  const job = await loadJob(slug);
  const latestJobs = await loadLatestJobs(slug);

  if (!job) return <p className="center-text">Job not found</p>;

  return (
    <main className="job-page">
      <div className="job-layout">

        {/* ================= MAIN ARTICLE ================= */}
        <article className="job-article">
          <header className="doc-header">
            <h1>{job.title}</h1>
            <p className="company">{job.company}</p>
            <p className="location">📍 {job.location || "India"}</p>

            <p className="editorial-intro">
              FreshersJobs Editorial Desk provides verified hiring insights
              and simplified role explanations to help fresh graduates prepare
              confidently before applying.
            </p>
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
      <li key={j.slug}>
        <Link
          href={`/jobs/${j.slug}`}
          className="latest-job-card"
        >
          <p className="lj-title">{j.title}</p>
          <p className="lj-company">{j.company}</p>
        </Link>
      </li>
    ))}
  </ul>
</aside>

      </div>
    </main>
  );
}