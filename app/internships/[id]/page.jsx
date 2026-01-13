"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import "./job-details.css"; // reuse SAME CSS

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

export default function InternshipDetails() {
  const { id } = useParams();
  const router = useRouter();

  const [internship, setInternship] = useState(null);
  const [latestInternships, setLatestInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadData = async () => {
      try {
        const [internRes, latestRes] = await Promise.all([
          fetch(`${BACKEND_URL}/api/jobs/${id}`, { cache: "no-store" }),
          fetch(`${BACKEND_URL}/api/jobs?limit=6&type=internship`, {
            cache: "no-store",
          }),
        ]);

        const internData = await internRes.json();
        const latestData = await latestRes.json();

        setInternship(internData.job || internData);
        setLatestInternships(
          (latestData.jobs || latestData || []).filter(i => i._id !== id)
        );
      } catch (err) {
        console.error("Error loading internship:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [id]);

  if (loading) return <p className="center-text">Loading internship…</p>;
  if (!internship?._id)
    return <p className="center-text">Internship not found</p>;

  return (
    <main className="document-page">

      {/* ================= MAIN LAYOUT ================= */}
      <div className="layout">

        {/* ================= LEFT: DOCUMENT ================= */}
        <article className="document print-area">

          <header className="doc-header">
            <h1>{internship.title}</h1>
            <p className="company">{internship.company}</p>
          </header>

          <section className="meta">
            <p><b>Location:</b> {internship.location || "N/A"}</p>
            <p><b>Type:</b> Internship</p>
            <p><b>Duration:</b> {internship.duration || "N/A"}</p>
            <p>
              <b>Stipend:</b>{" "}
              {internship.stipend || internship.salary || "Not disclosed"}
            </p>
            {internship.isWFH && <p><b>Work From Home:</b> Yes</p>}
          </section>

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
                Apply Now →
              </a>
            </div>
          )}
        </article>

        {/* ================= RIGHT: LATEST INTERNSHIPS ================= */}
        <aside className="latest-jobs screen-only">
          <h3>Latest Internships</h3>
          <ul>
            {latestInternships.slice(0, 6).map(i => (
              <li
                key={i._id}
                onClick={() => router.push(`/internships/${i._id}`)}
              >
                <p className="lj-title">{i.title}</p>
                <p className="lj-company">{i.company}</p>
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
          <textarea placeholder="Write your comment..." rows="5" required />
          <button type="submit">Post Comment</button>
        </form>
      </section>

    </main>
  );
}
