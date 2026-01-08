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
export default async function JobsPage({ searchParams = {} }) {
  const page =
    Number(searchParams.page) && Number(searchParams.page) > 0
      ? Number(searchParams.page)
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

      {/* TITLE – FULL WIDTH */}
      <div className="w-full py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 tracking-tight">
          Latest Job Openings
        </h1>
      </div>

      {/* CONTENT – MAX WIDTH BUT NO SIDE PADDING */}
      <div className="max-w-[1600px] mx-auto">


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ================= LEFT: JOB GRID ================= */}
          <section className="lg:col-span-9">

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {jobs.map((job, idx) => (
                <a
                  key={job._id}
                  href={`/jobs/${job._id}`}
                  className="group block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1 job-card"
                  style={{ animationDelay: `${idx * 0.06}s` }}
                >
                  <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-2">
                    Private Job
                  </p>

                  <h3 className="font-bold text-lg text-gray-900 leading-snug mb-2 group-hover:text-blue-700">
                    {job.title}
                  </h3>

                  <p className="text-gray-700 text-sm font-medium mb-3">
                    {job.company}
                  </p>

                  <p className="text-gray-500 text-sm">
                    📍 {job.location || "Not specified"}
                  </p>

                  <p className="text-gray-400 text-xs mt-3">
                    📅{" "}
                    {job.postedAt
                      ? new Date(job.postedAt).toLocaleDateString()
                      : "Date not available"}
                  </p>

                  <button className="mt-5 w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
                    View Details →
                  </button>
                </a>
              ))}
            </div>

            {/* ================= PAGINATION ================= */}
            <div className="flex flex-wrap justify-center mt-14 gap-3">
              {page > 1 && (
                <a
                  href={`/jobs?page=${page - 1}`}
                  className="px-4 py-2 rounded-lg border bg-white hover:bg-gray-100 text-sm"
                >
                  ← Previous
                </a>
              )}

              {[...Array(totalPages)].map((_, i) => {
                const p = i + 1;
                return (
                  <a
                    key={p}
                    href={`/jobs?page=${p}`}
                    className={`px-4 py-2 rounded-lg border text-sm ${
                      p === page
                        ? "bg-blue-600 text-white font-semibold"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {p}
                  </a>
                );
              })}

              {page < totalPages && (
                <a
                  href={`/jobs?page=${page + 1}`}
                  className="px-4 py-2 rounded-lg border bg-white hover:bg-gray-100 text-sm"
                >
                  Next →
                </a>
              )}
            </div>
          </section>

          {/* ================= RIGHT: SIDEBAR ================= */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 sticky top-24">
              <h2 className="text-xl font-bold mb-5">
                Latest Posts
              </h2>

              <ul className="space-y-3 text-sm">
                {latestPosts.map((post) => (
                  <li key={post._id}>
                    <a
                      href={`/jobs/${post._id}`}
                      className="text-blue-600 hover:underline leading-snug"
                    >
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* CARD ANIMATION */}
      <style>{`
        .job-card {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.45s ease forwards;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
