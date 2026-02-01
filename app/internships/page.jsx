import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Internship Opportunities for Freshers | FreshersJobs.shop",
  description:
    "Browse verified internship opportunities for students and freshers across India.",
  alternates: {
    canonical: "https://freshersjobs.shop/internships",
  },
};

const API_BASE = "https://freshersjobs-shop.onrender.com";

/* -------------------- Fetch Internships -------------------- */
async function loadInternships(page) {
  const res = await fetch(
    `${API_BASE}/api/jobs?page=${page}&limit=9&type=internship`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

/* -------------------- Page -------------------- */
export default async function InternshipsPage({ searchParams }) {
  const params = await searchParams;

  const page =
    Number(params?.page) && Number(params.page) > 0
      ? Number(params.page)
      : 1;

  const data = await loadInternships(page);

  if (!data?.jobs?.length) {
    return (
      <p className="text-center text-gray-500 mt-24 text-lg">
        No internship opportunities available right now.
      </p>
    );
  }

  const { jobs, totalPages } = data;
  const latestInternships = jobs.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <h1 className="text-4xl font-bold text-center py-10">
        Internship Opportunities for Freshers
      </h1>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <section className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {jobs.map((internship) => {
                const slugOrId = internship.slug || internship._id;

                return (
                  <Link
                    key={slugOrId}
                    href={`/internships/${slugOrId}`}
                    className="block bg-white border rounded-xl p-6 hover:shadow-lg transition"
                  >
                    <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full mb-3">
                      Internship
                    </span>

                    <h3 className="font-bold text-lg mb-1">
                      {internship.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {internship.company}
                    </p>

                    <p className="text-sm text-gray-500 mt-1">
                      📍 {internship.location || "India / Remote"}
                    </p>

                    {internship.stipend && (
                      <p className="text-sm text-gray-600 mt-2">
                        💰 {internship.stipend}
                      </p>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center gap-3 mt-12">
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
                      p === page ? "bg-black text-white" : ""
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

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-3">
            <div className="bg-white border rounded-xl p-5 sticky top-24">
              <h3 className="font-bold mb-4">
                Latest Internship Updates
              </h3>

              <ul className="space-y-3 text-sm">
                {latestInternships.map((post) => {
                  const slugOrId = post.slug || post._id;

                  return (
                    <li key={slugOrId}>
                      <Link
                        href={`/internships/${slugOrId}`}
                        className="text-blue-600 hover:underline font-semibold"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-gray-500">
                        {post.company}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <p className="text-xs text-gray-400 mt-6">
                Internship updates are shared for informational purposes only.
                Apply via official company websites.
              </p>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
