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
      <h1 className="text-4xl font-bold text-center py-10">
        Internship Opportunities for Freshers
      </h1>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ================= LEFT: INTERNSHIP CARDS ================= */}
          <section className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

              {jobs.map((internship) => (
                <Link
                  key={internship.slug}
                  href={`/internships/${internship.slug}`}
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

                  {(internship.salary || internship.stipend) && (
                    <p className="text-sm text-gray-600 mt-2">
                      💰 {internship.salary || internship.stipend}
                    </p>
                  )}
                </Link>
              ))}

            </div>

            {/* ================= PAGINATION ================= */}
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

          {/* ================= RIGHT SIDEBAR BLOG (ADSENSE SAFE) ================= */}
          <aside className="lg:col-span-3">
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
                  to real-world industry experience. At FreshersJobs.shop, we
                  observe that candidates who focus on strong fundamentals,
                  problem-solving skills, and communication often perform
                  better during internship interviews.
                </p>

                <p>
                  Instead of applying randomly, freshers should evaluate role
                  responsibilities, learning opportunities, and company growth
                  potential. Understanding what you will learn is often more
                  important than the stipend amount.
                </p>

                <p>
                  Recruiters typically expect candidates to demonstrate basic
                  technical clarity, willingness to learn, and the ability to
                  explain projects confidently. Even small personal projects
                  can make a strong impression when explained clearly.
                </p>

                <p>
                  FreshersJobs.shop recommends avoiding platforms that promise
                  guaranteed jobs or request payments. Always verify internship
                  updates through official employer career portals before
                  applying.
                </p>

                <p className="text-xs text-gray-500">
                  Editorial Note: FreshersJobs.shop is an independent career
                  guidance platform sharing internship information for
                  educational purposes only.
                </p>

              </article>

              {/* MINI BLOG LINKS */}
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
