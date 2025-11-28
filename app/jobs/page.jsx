export const dynamic = "force-dynamic";

// Fetch jobs server-side (avoids CORS)
async function loadJobs() {
  try {
    const res = await fetch(
      "https://freshersjobs-shop.onrender.com/api/jobs",
      { cache: "no-store" }
    );

    if (!res.ok) return [];

    const data = await res.json();

    return Array.isArray(data)
      ? data
      : data.jobs
      ? data.jobs
      : data.data
      ? data.data
      : [];
  } catch (e) {
    console.error("Job Fetch Error:", e);
    return [];
  }
}

export default async function JobsPage({ searchParams }) {
  const jobs = await loadJobs();

  // Pagination values
  const page = Number(searchParams?.page || 1);
  const perPage = 9;
  const totalPages = Math.ceil(jobs.length / perPage);

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentJobs = jobs.slice(start, end);

  return (
    <main className="min-h-screen bg-gray-50 text-black w-full px-4 md:px-8 py-10">

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
        🔍 Latest Job Openings
      </h1>

      {/* NO JOBS */}
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No jobs available right now.
        </p>
      ) : (
        <>
          {/* JOB CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentJobs.map((job, idx) => (
              <a
                key={job._id}
                href={`/jobs/${job._id}`}
                className="block bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1 job-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="font-bold text-xl text-blue-700 mb-1">
                  {job.title}
                </h3>

                <p className="text-gray-700 text-base mb-2 font-medium">
                  {job.company}
                </p>

                <p className="text-gray-500 text-sm">
                  📍 {job.location || "Not specified"}
                </p>

                <p className="text-gray-400 text-xs mt-3">
                  📅 {new Date(job.postedAt).toLocaleDateString()}
                </p>

                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
                  View Details →
                </button>
              </a>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center mt-12 gap-3">
            
            {/* PREVIOUS BUTTON */}
            {page > 1 && (
              <a
                href={`/jobs?page=${page - 1}`}
                className="px-4 py-2 rounded-lg border bg-white shadow-sm hover:bg-gray-100 text-sm"
              >
                ← Previous
              </a>
            )}

            {/* PAGE NUMBERS */}
            {[...Array(totalPages)].map((_, i) => {
              const p = i + 1;
              const isActive = p === page;

              return (
                <a
                  key={p}
                  href={`/jobs?page=${p}`}
                  className={`px-4 py-2 rounded-lg border shadow-sm text-sm ${
                    isActive
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {p}
                </a>
              );
            })}

            {/* NEXT BUTTON */}
            {page < totalPages && (
              <a
                href={`/jobs?page=${page + 1}`}
                className="px-4 py-2 rounded-lg border bg-white shadow-sm hover:bg-gray-100 text-sm"
              >
                Next →
              </a>
            )}
          </div>
        </>
      )}

      {/* CARD ANIMATION */}
      <style>{`
        .job-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
