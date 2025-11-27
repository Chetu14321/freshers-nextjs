import InternshipCard from "../components/IntershipCard";

export const dynamic = "force-dynamic";

// 🔹 SEO Metadata
export const metadata = {
  title: "Internship Opportunities for Freshers | FreshersJobs.shop",
  description:
    "Explore the latest internship opportunities for freshers across India. Find remote, paid, part-time, and full-time internships to kickstart your career.",
  alternates: { canonical: "https://freshersjobs.shop/internships" },
};

export default async function InternshipsPage() {
  let internships = [];
  let error = null;

  try {
    const res = await fetch(
      "https://freshersjobs-shop.onrender.com/api/jobs",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Unable to fetch internships");

    const data = await res.json();

    const rawJobs = Array.isArray(data)
      ? data
      : data.jobs
      ? data.jobs
      : data.data
      ? data.data
      : [];

    internships = rawJobs.filter(
      (job) =>
        job.type?.toLowerCase() === "internship" ||
        job.category?.toLowerCase() === "internship" ||
        job.jobType?.toLowerCase() === "internship"
    );
  } catch (err) {
    error = err.message;
  }

  return (
    <main className="w-full min-h-screen bg-white text-black overflow-x-hidden">

      {/* Title */}
      <div className="text-center mt-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          🎓 Internship Opportunities
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto mt-2 leading-relaxed">
          Browse the best internship opportunities for freshers across India.
        </p>
      </div>

      {/* Error */}
      {error && (
        <p className="text-center text-red-600 mt-6">{error}</p>
      )}

      {/* Count */}
      {!error && internships.length > 0 && (
        <p className="text-gray-600 text-center mt-4">
          Showing <strong>{internships.length}</strong> internship opportunities
        </p>
      )}

      {/* Empty State */}
      {internships.length === 0 && !error && (
        <p className="text-center text-gray-500 mt-10">
          No internships available right now 😢
        </p>
      )}

      {/* GRID */}
      <div
        className="
        w-full 
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-5 
        mt-10
        px-2
      "
      >
        {internships.map((intern) => (
          <InternshipCard
            key={intern._id}
            title={intern.title}
            company={intern.company}
            location={intern.location}
            stipend={intern.stipend || intern.salary}
            // ✅ FIXED LINK
            link={`/internships/${intern._id}`}
          />
        ))}
      </div>

      <div className="h-10"></div>
    </main>
  );
}
