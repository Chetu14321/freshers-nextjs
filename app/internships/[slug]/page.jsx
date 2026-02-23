import Link from "next/link";
import "./job-details.css";

export const dynamic = "force-dynamic";

const BACKEND_URL = "https://freshersjobs-shop-pq8u.onrender.com";

/* ================= FETCH DATA ================= */
async function loadInternship(slug) {
  const res = await fetch(`${BACKEND_URL}/api/jobs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const jobData = await res.json();
  const currentInternship = jobData.job || jobData;

  return {
    ...currentInternship,
    description:
      typeof currentInternship.description === "string"
        ? currentInternship.description.replace(/&nbsp;/g, "").trim()
        : "<p>No description available.</p>",
  };
}

async function loadLatestInternships(slug) {
  const res = await fetch(
    `${BACKEND_URL}/api/jobs?limit=6&type=internship`,
    { cache: "no-store" }
  );

  if (!res.ok) return [];

  const data = await res.json();
  return (data.jobs || []).filter((j) => j.slug !== slug);
}

/* ================= PAGE ================= */
export default async function InternshipDetails({ params }) {
  const { slug } = await params;

  const internship = await loadInternship(slug);

  if (!internship)
    return <p className="center-text">Internship not found</p>;

  const latestInternships = await loadLatestInternships(slug);

  return (
    <main className="job-page">
      <div className="job-layout">

        {/* ================= MAIN ARTICLE ================= */}
        <article className="job-article">
          <header className="doc-header">
            <h1>{internship.title}</h1>
            <p className="company">{internship.company}</p>
            <p className="location">
              📍 {internship.location || "India / Remote"}
            </p>

            <p className="editorial-intro">
              FreshersJobs Editorial Desk provides verified internship insights
              and simplified explanations to help students prepare confidently.
            </p>
          </header>

          {/* TABLE */}
          <section className="job-table">
            <table>
              <tbody>
                <tr>
                  <th>Company</th>
                  <td>{internship.company}</td>
                </tr>

                <tr>
                  <th>Role</th>
                  <td>{internship.role || internship.title}</td>
                </tr>

                <tr>
                  <th>Qualification</th>
                  <td>{internship.qualification || "Any Graduate"}</td>
                </tr>

                <tr>
                  <th>Stipend</th>
                  <td>
                    {internship.salary ||
                      internship.stipend ||
                      "Not disclosed"}
                  </td>
                </tr>

                <tr>
                  <th>Location</th>
                  <td>{internship.location || "India / Remote"}</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* CKEDITOR CONTENT */}
          <section className="ck-content">
            <div
              dangerouslySetInnerHTML={{
                __html: internship.description,
              }}
            />
          </section>

          {/* APPLY BUTTON */}
          {internship.applyUrl && (
            <section className="apply">
              <a
                href={internship.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Official Internship Posting →
              </a>

              <p className="apply-disclaimer">
                Disclaimer: FreshersJobs.shop is not a recruitment agency.
                Always apply via official company career portals.
              </p>
            </section>
          )}
        </article>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="latest-jobs screen-only">
          <h3>Recent Internship Updates</h3>

          <ul>
            {latestInternships.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/internships/${item.slug}`}
                  className="latest-job-card"
                >
                  <p className="lj-title">{item.title}</p>
                  <p className="lj-company">{item.company}</p>
                </Link>
              </li>
            ))}
          </ul>
        </aside>

      </div>
    </main>
  );
}