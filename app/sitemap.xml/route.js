export async function GET() {
  const baseUrl = "https://www.freshersjobs.shop";

  /* ===============================
     STATIC PAGES
  =============================== */
  const staticPages = [
    { path: "/",               changefreq: "daily",   priority: "1.0" },
    { path: "/jobs",           changefreq: "daily",   priority: "0.9" },
    { path: "/internships",    changefreq: "daily",   priority: "0.9" },
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
        // Must have a slug
        if (!job.slug) return false;

        // Remove jobs where lastDate is set and has passed
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