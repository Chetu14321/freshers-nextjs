"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "./job-details.css";

const BACKEND_URL = "https://freshersjobs-shop-pq8u.onrender.com";

export default function InternshipDetails() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [internship, setInternship] = useState(null);
  const [latestInternships, setLatestInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    if (!slug) return;

    const loadData = async () => {
      try {
        const [jobRes, jobsRes] = await Promise.all([
          fetch(`${BACKEND_URL}/api/jobs/${slug}`, {
            cache: "no-store",
          }),
          fetch(`${BACKEND_URL}/api/jobs?limit=6&type=internship`, {
            cache: "no-store",
          }),
        ]);

        if (!jobRes.ok) {
          setInternship(null);
          return;
        }

        const jobData = await jobRes.json();
        const jobsData = await jobsRes.json();

        const currentInternship = jobData.job;

        /* ✅ CKEDITOR SAFE DESCRIPTION */
        setInternship({
          ...currentInternship,
          description:
            typeof currentInternship.description === "string"
              ? currentInternship.description.replace(/&nbsp;/g, "").trim()
              : "<p>No description available.</p>",
        });

        setLatestInternships(
          (jobsData.jobs || []).filter(
            (j) => j.slug !== currentInternship.slug
          )
        );
      } catch (err) {
        console.error("Internship load error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slug]);

  /* ⭐ UPDATED LOADING BLOCK (ADSENSE + SEO SAFE) */
if (loading)
  return (
    <main className="job-page">
      <article className="job-article">
        <header className="doc-header">
          <h1>Fresher Hiring Career Guide</h1>

          <p className="editorial-intro">
            FreshersJobs Editorial Desk publishes simplified hiring insights,
            eligibility explanations, and fresher preparation guidance to help
            candidates understand opportunities before applying.
          </p>
        </header>

        <section className="ck-content">
          <p>
            This career article explains role expectations, selection process,
            required skills, and preparation strategies for fresh graduates.
            Our editorial team focuses on providing clear hiring insights so
            candidates can confidently prepare for entry-level opportunities.
          </p>

          <p>
            Detailed company information, eligibility criteria, and step-by-step
            preparation tips will appear shortly as the article loads.
          </p>
        </section>
      </article>
    </main>
  );

  if (!internship) return <p className="center-text">Internship not found</p>;

  /* ================= UI ================= */
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

            {/* ⭐ EDITORIAL INTRO FOR E-E-A-T */}
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
              <li
                key={item.slug}
                onClick={() => router.push(`/internships/${item.slug}`)}
              >
                <p className="lj-title">{item.title}</p>
                <p className="lj-company">{item.company}</p>
              </li>
            ))}
          </ul>
        </aside>

      </div>
    </main>
  );
}
