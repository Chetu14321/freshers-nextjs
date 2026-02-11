"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "./job-details.css";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

export default function InternshipDetails() {

  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [internship, setInternship] = useState(null);
  const [latestInternships, setLatestInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!slug) return;

    const loadData = async () => {
      try {
        const [jobRes, jobsRes] = await Promise.all([
          fetch(`${BACKEND_URL}/api/jobs/${slug}`),
          fetch(`${BACKEND_URL}/api/jobs?limit=6&type=internship`),
        ]);

        if (!jobRes.ok) {
          setInternship(null);
          return;
        }

        const jobData = await jobRes.json();
        const jobsData = await jobsRes.json();

        const current = jobData.job;

        setInternship({
          ...current,
          description:
            typeof current.description === "string" &&
            current.description.trim()
              ? current.description
              : "<p>No internship description available.</p>",
        });

        setLatestInternships(
          (jobsData.jobs || []).filter((j) => j.slug !== current.slug)
        );

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();

  }, [slug]);

  if (loading) return <p className="center-text">Loading internship…</p>;
  if (!internship) return <p className="center-text">Internship not found</p>;

  return (
    <main className="job-page">
      <div className="job-layout">

        {/* MAIN */}
        <article className="job-article">

          <header className="doc-header">
            <h1>{internship.title}</h1>
            <p className="company">{internship.company}</p>
            <p className="location">
              📍 {internship.location || "India / Remote"}
            </p>
          </header>

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

          <section className="ck-content">
            <div
              dangerouslySetInnerHTML={{
                __html: internship.description,
              }}
            />
          </section>

          {internship.applyUrl && (
            <section className="apply">
              <a
                href={internship.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Official Internship →
              </a>
            </section>
          )}
        </article>

        {/* SIDEBAR */}
        <aside className="latest-jobs screen-only">
          <h3>Latest Internships</h3>
          <ul>
            {latestInternships.map((j) => (
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
