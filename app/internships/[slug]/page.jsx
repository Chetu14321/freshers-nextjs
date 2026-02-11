import { notFound } from "next/navigation";
import "./job-details.css";

export const dynamic = "force-dynamic";

const API_BASE = "https://freshersjobs-shop.onrender.com";

/* ================= FETCH INTERNSHIP ================= */
async function getInternship(slug) {

  if (!slug) return null;

  const res = await fetch(`${API_BASE}/api/jobs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  const internship = data?.job;

  if (!internship) return null;

  return {
    ...internship,
    description:
      typeof internship.description === "string" &&
      internship.description.trim()
        ? internship.description
        : "<p>No internship description available.</p>",
  };
}

/* ================= METADATA ================= */
export async function generateMetadata({ params }) {

  const slug = params?.slug;
  const internship = await getInternship(slug);

  if (!internship) {
    return { title: "Internship Not Found | FreshersJobs.shop" };
  }

  return {
    title: `${internship.title} Internship | ${internship.company}`,
    description: `Apply for ${internship.title} internship at ${internship.company}. Check eligibility, stipend, location, and official application details.`,
    alternates: {
      canonical: `https://www.freshersjobs.shop/internships/${internship.slug}`,
    },
  };
}

/* ================= PAGE ================= */
export default async function InternshipDetails({ params }) {

  const slug = params?.slug;

  const internship = await getInternship(slug);

  if (!internship) notFound();

  return (
    <main className="document-page">
      <div className="layout">

        {/* ================= LEFT ================= */}
        <article
          className="document print-area"
          itemScope
          itemType="https://schema.org/Article"
        >

          <header className="doc-header">
            <h1 itemProp="headline">{internship.title}</h1>
            <p className="company">{internship.company}</p>
            <p className="meta">
              📍 {internship.location || "India / Remote"}
            </p>
          </header>

          <p className="editor-note">
            This internship update is shared for informational purposes only to
            help students understand eligibility, role expectations, and
            application guidance. Always apply through official company career
            websites.
          </p>

          <section className="job-table">
            <table>
              <tbody>
                <tr>
                  <th>Company</th>
                  <td>{internship.company}</td>
                </tr>

                <tr>
                  <th>Internship Role</th>
                  <td>{internship.role || internship.title}</td>
                </tr>

                <tr>
                  <th>Qualification</th>
                  <td>
                    {internship.qualification || "Any Graduate / Student"}
                  </td>
                </tr>

                <tr>
                  <th>Stipend</th>
                  <td>
                    {internship.stipend ||
                      internship.salary ||
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

          {/* ⭐ FIXED CONTENT RENDER */}
          <section className="content">
            <div
              dangerouslySetInnerHTML={{
                __html: internship.description,
              }}
            />
          </section>

          {internship.applyUrl && (
            <div className="apply">
              <a
                href={internship.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply on Official Company Website →
              </a>

              <p className="apply-disclaimer">
                Disclaimer: FreshersJobs.shop does not charge any fees for
                internship applications. Candidates are advised to apply only
                through official company career portals.
              </p>
            </div>
          )}
        </article>

        {/* ================= RIGHT ================= */}
        <aside className="latest-jobs screen-only">
          <h3>Latest Internships</h3>
          <ul>
            <li className="lj-title">
              Browse more verified internships from our listings page.
            </li>
          </ul>
        </aside>

      </div>
    </main>
  );
}
