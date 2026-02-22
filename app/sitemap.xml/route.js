export async function GET() {
  const baseUrl = "https://www.freshersjobs.shop";

  /* ===============================
     STATIC PAGES
  =============================== */
  const staticPages = [
    { path: "/",               changefreq: "daily",   priority: "1.0" },
    { path: "/jobs",           changefreq: "daily",   priority: "0.9" },
    { path: "/internships",    changefreq: "daily",   priority: "0.9" },
    { path: "/blog",           changefreq: "weekly",  priority: "0.8" }, // ⭐ BLOG PAGE
    { path: "/resume-checker", changefreq: "weekly",  priority: "0.7" },
    { path: "/about",          changefreq: "monthly", priority: "0.4" },
    { path: "/contact",        changefreq: "monthly", priority: "0.4" },
    { path: "/terms",          changefreq: "monthly", priority: "0.3" },
    { path: "/privacy-policy", changefreq: "monthly", priority: "0.3" },
    { path: "/disclaimer",     changefreq: "monthly", priority: "0.3" },
  ];

  const staticUrls = staticPages
    .map(
      ({ path, changefreq, priority }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("");

  /* ===============================
     ⭐ STATIC BLOG POSTS (16 TOTAL)
  =============================== */
  const blogPosts = [
    // AI & Skills (5 NEW High-Value Posts - 3000+ words each)
    {
      slug: "ai-tools-freshers-2026",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      slug: "python-freshers-guide-2026",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      slug: "data-science-freshers-roadmap",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      slug: "web-development-freshers-2026",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      slug: "github-portfolio-freshers-2026",
      priority: "0.9",
      changefreq: "weekly",
    },

    // Job Search & Career (11 Original Posts)
    {
      slug: "how-to-get-first-job",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      slug: "ats-resume-tips",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      slug: "internship-guide-2026",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      slug: "linkedin-profile-tips-freshers",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "fresher-interview-questions",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      slug: "remote-jobs-freshers-india",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      slug: "naukri-tips-freshers",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "not-getting-interview-calls",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      slug: "high-paying-careers-freshers-2026",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      slug: "salary-negotiation-freshers",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      slug: "fresher-resume-no-experience",
      priority: "0.8",
      changefreq: "monthly",
    },
  ];

  const blogUrls = blogPosts
    .map(
      ({ slug, priority, changefreq }) => `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("");

  /* ===============================
     DYNAMIC JOB POSTS (ALL PAGES)
  =============================== */
  let jobUrls = "";

  try {
    const firstRes = await fetch(
      "https://freshersjobs-shop.onrender.com/api/jobs?page=1&limit=50",
      { cache: "no-store" }
    );

    const firstData = await firstRes.json();
    const totalPages = firstData.totalPages || 1;
    let allJobs = [...(firstData.jobs || [])];

    for (let page = 2; page <= totalPages; page++) {
      const res = await fetch(
        `https://freshersjobs-shop.onrender.com/api/jobs?page=${page}&limit=50`,
        { cache: "no-store" }
      );
      const data = await res.json();
      allJobs.push(...(data.jobs || []));
    }

    jobUrls = allJobs
      .filter((job) => {
        if (!job.slug) return false;
        if (job.lastDate && new Date(job.lastDate) < new Date()) return false;
        return true;
      })
      .map((job) => {
        const lastmod = job.postedAt
          ? new Date(job.postedAt).toISOString().split("T")[0]
          : new Date().toISOString().split("T")[0];

        return `
  <url>
    <loc>${baseUrl}/jobs/${job.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
      })
      .join("");
  } catch (error) {
    console.error("❌ Sitemap job fetch failed:", error);
  }

  /* ===============================
     FINAL XML RESPONSE
  =============================== */
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
${jobUrls}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
}