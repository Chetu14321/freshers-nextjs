import Link from "next/link";

export const dynamic = "force-dynamic";

const API_BASE = "https://freshersjobs-shop-pq8u.onrender.com";

/* -------------------- Fetch Jobs -------------------- */
async function loadJobs(page) {
  const res = await fetch(
    `${API_BASE}/api/jobs?page=${page}&limit=9&type=job`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;
  return res.json();
}

/* -------------------- Page -------------------- */
export default async function JobsPage({ searchParams }) {
  const params = await searchParams;

  const page =
    Number(params?.page) && Number(params.page) > 0
      ? Number(params.page)
      : 1;

  const data = await loadJobs(page);

  if (!data?.jobs?.length) {
    return (
      <p className="text-center text-gray-500 mt-24 text-lg">
        No jobs available right now.
      </p>
    );
  }

  const { jobs, totalPages } = data;

  return (
    <main className="min-h-screen bg-gray-50 text-black">
      {/* ================= HEADER ================= */}
      <div className="max-w-4xl mx-auto text-center py-12 px-4">
      

        <p className="text-gray-600 leading-relaxed">
          Explore fresher opportunities with eligibility details, hiring
          insights, and application guidance curated for fresh graduates.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ================= LEFT: JOB LIST ================= */}
          <section className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <Link
                  key={job.slug}
                  href={`/jobs/${job.slug}`}
                  className="block bg-white border rounded-xl p-6 hover:shadow-xl transition duration-200"
                >
                  {/* TITLE */}
                  <h3 className="font-bold text-lg mb-2 leading-snug">
                    {job.title}
                  </h3>

                  {/* COMPANY + LOCATION */}
                  <p className="text-sm text-gray-600">
                    {job.company} • 📍 {job.location || "India"}
                  </p>

                  {/* BLOG STYLE PREVIEW FROM DESCRIPTION */}
                  <p className="text-sm text-gray-700 mt-3 line-clamp-3">
                    {job.description
                      ? job.description
                          .replace(/<[^>]+>/g, "")
                          .slice(0, 160) + "..."
                      : "Explore this latest fresher opportunity with hiring insights and application guidance."}
                  </p>

                  {/* META INFO */}
                  <div className="flex justify-between items-center mt-5 text-xs text-gray-500">
                    <span>
                      🗓{" "}
                      {job.createdAt
                        ? job.createdAt.slice(0, 10)
                        : "Latest Update"}
                    </span>
                    <span className="text-black font-semibold">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* ================= PAGINATION ================= */}
            <div className="flex justify-center gap-3 mt-12 flex-wrap">
              {page > 1 && (
                <Link
                  href={`/jobs?page=${page - 1}`}
                  className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100"
                >
                  ← Prev
                </Link>
              )}

              {[...Array(totalPages)].map((_, i) => (
                <Link
                  key={i}
                  href={`/jobs?page=${i + 1}`}
                  className={`px-4 py-2 border rounded-lg ${
                    page === i + 1
                      ? "bg-black text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </Link>
              ))}

              {page < totalPages && (
                <Link
                  href={`/jobs?page=${page + 1}`}
                  className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100"
                >
                  Next →
                </Link>
              )}
            </div>
          </section>

          {/* ================= RIGHT: BLOG SIDEBAR ================= */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* CAREER GUIDE CARD */}
            <div className="bg-white border rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">
                📘 Career Guidance for Freshers
              </h2>

              <article className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  Freshers entering the job market often face confusion about
                  resumes, interviews, and job selection. Understanding the
                  hiring process helps candidates apply with confidence.
                </p>

                <p>
                  Most entry-level roles focus on{" "}
                  <strong>concept clarity</strong>, willingness to learn, and
                  communication skills rather than advanced technical expertise.
                </p>

                <p>
                  Candidates are advised to apply only through official company
                  career portals and avoid paying for job registrations or
                  interview guarantees.
                </p>
              </article>
            </div>

            {/* MINI BLOG LINKS */}
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-bold mb-3">Helpful Reads</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• How to prepare for fresher interviews</li>
                <li>• Resume mistakes freshers should avoid</li>
                <li>• Difference between mass hiring and lateral hiring</li>
                <li>• How companies shortlist resumes</li>
                <li>• Skills freshers should focus on in 2026</li>
              </ul>
            </div>

            {/* TRUST NOTE */}
            <div className="bg-gray-100 border rounded-xl p-5 text-xs text-gray-600 leading-relaxed">
              <strong>Safety Note:</strong> FreshersJobs.shop never asks for
              registration fees or payments. Always verify job updates from
              official employer websites before applying.
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
