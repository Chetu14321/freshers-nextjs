import Link from "next/link";

export const metadata = {
  title: "Career Blogs | FreshersJobs",
  description:
    "Career tips, internship guides, resume advice and job preparation blogs for freshers.",
};

const blogs = [
  {
    title: "How to Get Your First IT Job as a Fresher",
    slug: "how-to-get-first-job",
    desc: "Step-by-step guide to help freshers land their first IT job faster.",
  },
  {
    title: "ATS Resume Tips for Freshers (2026 Guide)",
    slug: "ats-resume-tips",
    desc: "Learn how to create ATS friendly resumes that get shortlisted.",
  },
  {
    title: "Internship Guide for Freshers 2026",
    slug: "internship-guide-2026",
    desc: "Complete internship preparation tips for students and freshers.",
  },
  {
    title: "LinkedIn Profile Tips for Freshers",
    slug: "linkedin-profile-tips-freshers",
    desc: "Improve your LinkedIn profile visibility and attract recruiters.",
  },
  {
    title: "Top Fresher Interview Questions (2026 Guide)",
    slug: "fresher-interview-questions",
    desc: "Most asked interview questions for freshers with preparation tips.",
  },
];

export default function BlogPage() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "auto",
        padding: "40px 20px",
      }}
    >
      {/* Header */}
      <h1 style={{ marginBottom: "10px", fontSize: "32px" }}>
        FreshersJobs Career Blogs
      </h1>

      <p style={{ marginBottom: "30px", color: "#666" }}>
        Explore career advice, resume tips, internship preparation guides and
        fresher job strategies.
      </p>

      {/* BLOG GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/blog/${blog.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "22px",
                background: "#ffffff",
                height: "100%",
                boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
                transition: "all 0.25s ease",
              }}
            >
              <h3
                style={{
                  marginBottom: "10px",
                  color: "#111",
                  fontSize: "20px",
                }}
              >
                {blog.title}
              </h3>

              <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.6" }}>
                {blog.desc}
              </p>

              <div
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  color: "#0070f3",
                }}
              >
                Read Article →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
