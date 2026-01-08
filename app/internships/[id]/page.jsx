export const dynamic = "force-dynamic";

const API_BASE = "https://freshersjobs-shop.onrender.com";

/* -------------------- Fetch Internships -------------------- */
async function loadInternships(page) {
  try {
    const res = await fetch(
      `${API_BASE}/api/jobs?page=${page}&limit=9&type=internship`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    console.error("Internship Fetch Error:", e);
    return null;
  }
}

/* -------------------- Page -------------------- */
export default async function InternshipsPage({ searchParams }) {

  /* ✅ SAFE PAGINATION */
  const rawPage = Number(searchParams?.page);
  const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  const data = await loadInternships(page);

  if (!data || !data.jobs?.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-600 text-lg">
          No internships available right now.
        </p>
      </div>
    );
  }

  const { jobs, totalPages } = data;

  return (
    <main className="min-h-screen bg-white w-full">

      <h1 className="text-4xl md:text-5xl font-extrabold text-center py-12">
        🎓 Internship Opportunities
      </h1>

      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {jobs.map((intern, idx) => (
          <a
            key={intern._id}
            href={`/internships/${intern._id}`}
            className="bg-white shadow-sm hover:shadow-xl transition p-6 internship-card"
            style={{ animationDelay: `${idx * 0.06}s` }}
          >
            <h3 className="font-bold text-lg text-blue-700 mb-1">
              {intern.title}
            </h3>
            <p className="text-gray-700">{intern.company}</p>
            <p className="text-gray-500 text-sm mt-1">
              📍 {intern.location || "Not specified"}
            </p>
          </a>
        ))}
      </section>

      {/* PAGINATION */}
      <div className="flex justify-center gap-3 py-14">
        {page > 1 && (
          <a
            href={`/internships?page=${page - 1}`}
            className="px-4 py-2 border hover:bg-gray-100"
          >
            ← Previous
          </a>
        )}

        {[...Array(totalPages)].map((_, i) => {
          const p = i + 1;
          return (
            <a
              key={p}
              href={`/internships?page=${p}`}
              className={`px-4 py-2 border ${
                p === page
                  ? "bg-blue-600 text-white font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              {p}
            </a>
          );
        })}

        {page < totalPages && (
          <a
            href={`/internships?page=${page + 1}`}
            className="px-4 py-2 border hover:bg-gray-100"
          >
            Next →
          </a>
        )}
      </div>

      <style>{`
        .internship-card {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeUp 0.4s ease forwards;
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
