import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Internship Opportunities for Freshers | FreshersJobs.shop",
  description:
    "Explore the latest internship opportunities for students and freshers across India.",
  alternates: {
    canonical: "https://freshersjobs.shop/internships",
  },
};

const API_BASE = "https://freshersjobs-shop.onrender.com";

/* -------------------- Server-side Fetch -------------------- */
async function loadInternships(page) {
  try {
    const res = await fetch(
      `${API_BASE}/api/jobs?page=${page}&limit=9&type=internship`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    console.error("Internship Fetch Error:", e);
    return null;
  }
}

/* -------------------- Page -------------------- */
export default async function InternshipsPage({ searchParams }) {
  // ✅ Next.js 15 safe
  const params = await searchParams;

  const page =
    Number(params?.page) && Number(params.page) > 0
      ? Number(params.page)
      : 1;

  const data = await loadInternships(page);

  if (!data || !data.jobs?.length) {
    return (
      <p className="text-center text-gray-500 mt-24 text-lg">
        No internships available right now.
      </p>
    );
  }

  const { jobs, totalPages } = data;
  const latestPosts = jobs.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-50 text-black w-full">

      {/* ================= TITLE ================= */}
      <div className="w-full py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          🎓 Internship Opportunities for Freshers
        </h1>
      </div>

      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ================= LEFT ================= */}
          <section className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {jobs.map((internship) => (
                <Link
                  key={internship._id}
                  href={`/internships/${internship._id}`}
                  className="block bg-white rounded-xl border p-6 hover:shadow-lg transition"
                >
                  <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full mb-3">
                    Internship
                  </span>

                  <h3 className="font-bold text-lg mb-2">
                    {internship.title}
                  </h3>

                  <p className="text-sm text-gray-700">
                    {internship.company}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    📍 {internship.location || "Not specified"}
                  </p>

                  {internship.salary && (
                    <p className="text-sm text-gray-600 mt-2">
                      💰 {internship.salary}
                    </p>
                  )}
                </Link>
              ))}
            </div>

            {/* ================= PAGINATION ================= */}
            <div className="flex justify-center gap-3 mt-14">
              {page > 1 && (
                <Link
                  href={`/internships?page=${page - 1}`}
                  className="px-4 py-2 border rounded"
                >
                  ← Previous
                </Link>
              )}

              {[...Array(totalPages)].map((_, i) => {
                const p = i + 1;
                return (
                  <Link
                    key={p}
                    href={`/internships?page=${p}`}
                    className={`px-4 py-2 border rounded ${
                      p === page ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}

              {page < totalPages && (
                <Link
                  href={`/internships?page=${page + 1}`}
                  className="px-4 py-2 border rounded"
                >
                  Next →
                </Link>
              )}
            </div>
          </section>

          {/* ================= RIGHT ================= */}
          <aside className="lg:col-span-3">
            <div className="bg-white border rounded-xl p-5 sticky top-24">
              <h3 className="font-bold mb-4">Latest Internships</h3>

              <ul className="space-y-2 text-sm">
                {latestPosts.map((post) => (
                  <li key={post._id}>
                    <Link
                      href={`/internships/${post._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-gray-500">
                      {post.company}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
