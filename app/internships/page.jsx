import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Internship Opportunities for Freshers | FreshersJobs.shop",
  description:
    "Browse verified internship opportunities for students and freshers across India. Explore latest internship openings with FreshersJobs.shop insights.",
  alternates: {
    canonical: "https://freshersjobs.shop/internships",
  },
};

const API_BASE = "https://freshersjobs-shop.onrender.com";

/* ================= FETCH INTERNSHIPS ================= */
async function loadInternships(page) {
  const res = await fetch(
    `${API_BASE}/api/jobs?page=${page}&limit=9&type=internship`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();

  // ✅ Only show internships that have slug
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
      {/* ================= HEADER ================= */}
      <div className="max-w-4xl mx-auto text-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Internship Opportunities for Freshers
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Explore latest internships with eligibility insights, role details,
          and application guidance curated for students and fresh graduates.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ================= LEFT: INTERNSHIP CARDS ================= */}
          <section className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {jobs.map((internship) => (
                <Link
                  key={internship.slug}
                  href={`/internships/${internship.slug}`}
                  className="block bg-white border rounded-xl p-6 hover:shadow-xl transition duration-200"
                >
                  <span className="inline-block text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full mb-3">
                    Internship
                  </span>

                  <h3 className="font-bold text-lg mb-2">
                    {internship.title}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {internship.company} • 📍{" "}
                    {internship.location || "India / Remote"}
                  </p>

                  {(internship.salary || internship.stipend) && (
                    <p className="text-sm text-gray-600 mt-2">
                      💰 {internship.salary || internship.stipend}
                    </p>
                  )}

                  {/* BLOG STYLE PREVIEW FROM DESCRIPTION */}
                  <p className="text-sm text-gray-700 mt-3 line-clamp-3">
                    {internship.description
                      ? internship.description
                          .replace(/<[^>]+>/g, "")
                          .slice(0, 160) + "..."
                      : "Explore internship responsibilities, skills required, and application guidance curated for freshers."}
                  </p>

                  {/* META */}
                  <div className="flex justify-between items-center mt-5 text-xs text-gray-500">
                    <span>
                      🗓{" "}
                      {internship.createdAt
                        ? internship.createdAt.slice(0, 10)
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
                  href={`/internships?page=${page - 1}`}
                  className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100"
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
                    className={`px-4 py-2 border rounded-lg ${
                      p === page
                        ? "bg-black text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {p}
                  </Link>
                );
              })}

              {page < totalPages && (
                <Link
                  href={`/internships?page=${page + 1}`}
                  className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-100"
                >
                  Next →
                </Link>
              )}

            </div>
          </section>

          {/* ================= RIGHT SIDEBAR BLOG ================= */}
          <aside className="lg:col-span-4">
            <div className="bg-white border rounded-xl p-6 space-y-5 sticky top-24">

              <p className="text-xs text-gray-400">
                FreshersJobs.shop Editorial
              </p>

              <h3 className="text-lg font-bold">
                Internship Guidance for Freshers
              </h3>

              <article className="text-sm text-gray-700 leading-relaxed space-y-3">

                <p>
                  Internships help students transition from academic learning
                  to real-world industry experience. Candidates who focus on
                  strong fundamentals and project clarity often perform better.
                </p>

                <p>
                  Instead of applying randomly, evaluate learning opportunities
                  and role responsibilities carefully before submitting
                  applications.
                </p>

                <p>
                  Always verify internship updates through official employer
                  portals and avoid platforms requesting payments.
                </p>

                <p className="text-xs text-gray-500">
                  Editorial Note: FreshersJobs.shop shares internship
                  information for educational purposes only.
                </p>

              </article>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2 text-sm">
                  Popular Internship Tips
                </h4>

                <ul className="text-sm space-y-2 text-gray-700">
                  <li>• How freshers should choose internships wisely</li>
                  <li>• Common mistakes during internship applications</li>
                  <li>• Skills recruiters expect from interns in 2026</li>
                  <li>• How to prepare for technical internship interviews</li>
                  <li>• Building projects that improve selection chances</li>
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
