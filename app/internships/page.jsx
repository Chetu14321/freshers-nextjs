import Link from "next/link";

export const dynamic = "force-dynamic";

const API_BASE = "https://freshersjobs-shop.onrender.com";

/* ================= FETCH INTERNSHIPS ================= */
async function loadInternships(page) {
  const res = await fetch(
    `${API_BASE}/api/jobs?page=${page}&limit=9&type=internship`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();

  // ✅ IMPORTANT — only show items with slug
  data.jobs = (data.jobs || []).filter((j) => j.slug);

  return data;
}

/* ================= PAGE ================= */
export default async function InternshipsPage({ searchParams }) {

  const params = searchParams;

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

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      <h1 className="text-4xl font-bold text-center py-10">
        Latest Internships For Freshers
      </h1>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {jobs.map((internship) => (
            <Link
              key={internship.slug}
              href={`/internships/${internship.slug}`}
              className="block bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg">
                {internship.title}
              </h3>

              <p className="text-sm text-gray-600">
                {internship.company}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                📍 {internship.location || "India / Remote"}
              </p>
            </Link>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center gap-3 mt-10">

          {page > 1 && (
            <Link
              href={`/internships?page=${page - 1}`}
              className="px-4 py-2 border rounded"
            >
              ← Prev
            </Link>
          )}

          {[...Array(totalPages)].map((_, i) => (
            <Link
              key={i}
              href={`/internships?page=${i + 1}`}
              className={`px-4 py-2 border rounded ${
                page === i + 1 ? "bg-black text-white" : ""
              }`}
            >
              {i + 1}
            </Link>
          ))}

          {page < totalPages && (
            <Link
              href={`/internships?page=${page + 1}`}
              className="px-4 py-2 border rounded"
            >
              Next →
            </Link>
          )}

        </div>
      </div>
    </main>
  );
}
