import Link from "next/link";

export const metadata = {
  title: "Career Blogs | FreshersJobs",
  description:
    "Career tips, internship guides, resume advice and job preparation blogs for freshers.",
};

const blogs = [
  {
    title: "AI Tools & Skills Every Fresher Should Learn in 2026",
    slug: "ai-tools-freshers-2026",
    desc: "Discover the most practical AI tools, skills, and learning resources freshers need in 2026. Real-world applications, no hype.",
  },
  {
  title: "GitHub Portfolio for Freshers: Build & Showcase Projects",
  slug: "github-portfolio-freshers-2026",
  desc: "Create an impressive GitHub portfolio that gets you hired. Projects, documentation, and best practices for freshers.",
  category: "Portfolio Building",
},
    {
    title: "Python for Freshers: Complete Learning Guide 2026",
    slug: "python-freshers-guide-2026",
    desc: "Step-by-step Python learning path for beginners. From basics to getting job-ready in 8-12 weeks.",
    category: "AI & Skills",
  },
    {
    title: "Data Science Skills for Freshers (2026 Roadmap)",
    slug: "data-science-freshers-roadmap",
    desc: "Complete roadmap to learn data science as a fresher. Tools, skills, projects, and timeline.",
    category: "AI & Skills",
  },
  {
    title: "Web Development for Freshers: HTML, CSS, JavaScript Guide",
    slug: "web-development-freshers-2026",
    desc: "Learn web development from zero. Frontend roadmap for getting your first web dev job.",
    category: "AI & Skills",
  },
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
  {
    title: "How to Write a Fresher Resume With No Experience",
    slug: "fresher-resume-no-experience",
    desc: "Build a powerful fresher resume from scratch using projects, skills, and education — even with zero work experience.",
  },
  {
    title: "Remote Jobs for Freshers in India (2026 Guide)",
    slug: "remote-jobs-freshers-india",
    desc: "How to find genuine work-from-home entry-level jobs and what skills you need.",
  },
  {
    title: "How to Use Naukri.com Effectively as a Fresher",
    slug: "naukri-tips-freshers",
    desc: "Step-by-step guide to set up your Naukri profile and get recruiter attention.",
  },
  {
    title: "What to Do If You Are Not Getting Interview Calls",
    slug: "not-getting-interview-calls",
    desc: "Practical steps to fix your resume, applications and job search when nothing is working.",
  },
  {
    title: "Top 10 High-Paying Careers for Freshers in 2026",
    slug: "high-paying-careers-freshers-2026",
    desc: "Explore the best-paying entry-level career paths for fresh graduates in India.",
  },
  {
    title: "How to Negotiate Your First Salary as a Fresher",
    slug: "salary-negotiation-freshers",
    desc: "Simple and confident strategies to negotiate a better offer without risking the job.",
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
      <style>{`
        .blog-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          transform: translateY(-4px);
        }
      `}</style>
      {/* Header */}
      <h1 style={{ marginBottom: "10px", fontSize: "32px" }}>
        FreshersJobs Career Blogs
      </h1>

      <p style={{ marginBottom: "30px", color: "#666" }}>
        Explore career advice, resume tips, internship preparation guides, AI learning,
        and fresher job strategies to land your first role in 2026.
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
                cursor: "pointer",
              }}
              className="blog-card"
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