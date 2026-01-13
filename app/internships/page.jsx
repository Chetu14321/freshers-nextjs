import InternshipCard from "../components/IntershipCard";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Internship Opportunities for Freshers | FreshersJobs.shop",
  description:
    "Explore the latest internship opportunities for freshers across India.",
  alternates: {
    canonical: "https://freshersjobs-shop.onrender.com/internships",
  },
};

const API_BASE = "https://freshersjobs-shop.onrender.com";

/* -------------------- Fetch Internships -------------------- */
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
  /* ✅ NEXT.JS 15 SAFE */
  const params = await searchParams;

  const rawPage = Number(params?.page);
  const page = Number.isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  const data = await loadInternships(page);

  if (!data || !data.jobs?.length) {
    return (
      <p className="text-center text-gray-500 mt-20 text-lg">
        No internships available right now 😢
      </p>
    );
  }

  const { jobs, totalPages } = data;

  return (
    <main className="w-full min-h-screen bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">

        {/* TITLE */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            🎓 Internship Opportunities
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4 text-lg">
            Verified internships for students & freshers across India.
          </p>
        </section>

        {/* GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((intern) => (
            <InternshipCard
              key={intern._id}
              title={intern.title}
              company={intern.company}
              location={intern.location}
              stipend={intern.stipend || intern.salary}
              link={`/internships/${intern._id}`}
            />
          ))}
        </section>

        {/* PAGINATION */}
        <div className="flex flex-wrap justify-center mt-16 gap-4">
          {page > 1 && (
            <a
              href={`/internships?page=${page - 1}`}
              className="px-5 py-2.5 rounded-xl border bg-white hover:bg-gray-100"
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
                className={`px-5 py-2.5 rounded-xl border ${
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
              href={`/internships?page=${page + 1}`}
              className="px-5 py-2.5 rounded-xl border bg-white hover:bg-gray-100"
            >
              Next →
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
