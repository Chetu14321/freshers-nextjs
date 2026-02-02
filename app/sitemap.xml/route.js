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

  /* ---------------- JOB POSTS ---------------- */
  let jobUrls = "";

  try {
    const res = await fetch(
      "https://freshersjobs-shop.onrender.com/api/jobs",
      { cache: "no-store" }
    );

    const jobs = await res.json();

    jobUrls = jobs
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
