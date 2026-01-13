import Link from "next/link";

export const dynamic = "force-dynamic";

const API_BASE = "https://freshersjobs-shop.onrender.com";

/* -------------------- Server-side Fetch -------------------- */
async function loadJobs(page) {
  try {
    const res = await fetch(
      `${API_BASE}/api/jobs?page=${page}&limit=9&type=job`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    console.error("Job Fetch Error:", e);
    return null;
  }
}

/* -------------------- Page -------------------- */
export default async function JobsPage({ searchParams }) {
  // ✅ NEXT.JS 15 FIX (IMPORTANT)
  const params = await searchParams;

  const page =
    Number(params?.page) && Number(params.page) > 0
      ? Number(params.page)
      : 1;

  const data = await loadJobs(page);

  if (!data || !data.jobs?.length) {
    return (
      <p className="text-center text-gray-500 mt-24 text-lg">
        No jobs available right now.
      </p>
    );
  }

  const { jobs, totalPages } = data;
  const latestPosts = jobs.slice(0, 6);

  return (
    <main className="min-h-screen bg-gray-50 text-black w-full">

      {/* TITLE */}
      <div className="w-full py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          Latest Job Openings For Freshers
        </h1>
      </div>

      <div className="max-w-[1600px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <section className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <Link
                  key={job._id}
                  href={`/jobs/${job._id}`}
                  className="block bg-white rounded-xl border p-6 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg mb-2">{job.title}</h3>
                  <p className="text-sm text-gray-700">{job.company}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    📍 {job.location || "Not specified"}
                  </p>
                </Link>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center gap-3 mt-14">
              {page > 1 && (
                <Link
                  href={`/jobs?page=${page - 1}`}
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
                    href={`/jobs?page=${p}`}
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
                  href={`/jobs?page=${page + 1}`}
                  className="px-4 py-2 border rounded"
                >
                  Next →
                </Link>
              )}
            </div>
          </section>

          {/* RIGHT */}
          <aside className="lg:col-span-3">
            <div className="bg-white border rounded-xl p-5 sticky top-24">
              <h3 className="font-bold mb-4">Latest Posts</h3>
              <ul className="space-y-2 text-sm">
                {latestPosts.map((post) => (
                  <li key={post._id}>
                    <Link
                      href={`/jobs/${post._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {post.title}
                    </Link>
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
