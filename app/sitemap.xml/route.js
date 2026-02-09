export async function GET() {
  const baseUrl = "https://www.freshersjobs.shop";

  /* ===============================
     STATIC PAGES
  =============================== */
  const staticPages = [
    "",
    "/jobs",
    "/internships",
    "/resume-checker",
    "/about",
    "/contact",
    "/terms",
    "/privacy-policy",
    "/disclaimer",
  ];

  const staticUrls = staticPages
    .map(
      (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
      </url>`
    )
    .join("");

  /* ===============================
     DYNAMIC JOB POSTS (ALL PAGES)
  =============================== */
  let jobUrls = "";

  try {
    // First request to know totalPages
    const firstRes = await fetch(
      "https://freshersjobs-shop.onrender.com/api/jobs?page=1&limit=50",
      { cache: "no-store" }
    );

    const firstData = await firstRes.json();

    const totalPages = firstData.totalPages || 1;
    let allJobs = [...(firstData.jobs || [])];

    // Fetch remaining pages
    for (let page = 2; page <= totalPages; page++) {
      const res = await fetch(
        `https://freshersjobs-shop.onrender.com/api/jobs?page=${page}&limit=50`,
        { cache: "no-store" }
      );
      const data = await res.json();
      allJobs.push(...(data.jobs || []));
    }

    // Generate job URLs
    jobUrls = allJobs
      .filter(job => job.slug)
      .map(
        (job) => `
        <url>
          <loc>${baseUrl}/jobs/${job.slug}</loc>
          <changefreq>daily</changefreq>
          <priority>0.9</priority>
        </url>`
      )
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
      },
    }
  );
}
