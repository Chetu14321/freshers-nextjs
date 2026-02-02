export const runtime = "nodejs";

export async function GET() {
  return new Response(
`User-agent: *
Allow: /

User-agent: GPTBot
Disallow: /

Sitemap: https://www.freshersjobs.shop/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
