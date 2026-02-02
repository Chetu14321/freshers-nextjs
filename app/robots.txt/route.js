export async function GET() {
  const baseUrl = "https://www.freshersjobs.shop";

  /* ---------------- STATIC PAGES ---------------- */
  const staticPages = [
    "",
    "/jobs",
    "/internships",
    "/resume-checker",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
    "/disclaimer",
  ];

  const staticUrls = staticPages.map(
    (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>`
  ).join("");

  /* ---------------- JOB POSTS (ALL PAGES) ---------------- */
  let jobUrls = "";

  try {
    // first page (to get totalPages)
    const firstRes = await fetch(
      "https://freshersjobs-shop.onrender.com/api/jobs?page=1&limit=50",
      { cache: "no-store" }
    );
    const firstData = await firstRes.json();

    const totalPages = firstData.totalPages || 1;
    let allJobs = [...firstData.jobs];

    // fetch remaining pages
    for (let page = 2; page <= totalPages; page++) {
      const res = await fetch(
        `https://freshersjobs-shop.onrender.com/api/jobs?page=${page}&limit=50`,
        { cache: "no-store" }
      );
      const data = await res.json();
      allJobs.push(...data.jobs);
    }

    jobUrls = allJobs.map((job) => `
      <url>
        <loc>${baseUrl}/jobs/${job.slug}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
      </url>
    `).join("");

  } catch (error) {
    console.error("❌ Sitemap job fetch failed:", error);
  }

  /* ---------------- FINAL XML ---------------- */
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${staticUrls}
       ${jobUrls}
     </urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    }
  );
}
