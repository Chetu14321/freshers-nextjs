export const dynamic = "force-dynamic";

// Fetch single internship
async function getInternship(id) {
  try {
    const res = await fetch(
      `https://freshersjobs-shop.onrender.com/api/jobs/${id}`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;

    return await res.json();
  } catch (e) {
    console.error("Internship Fetch Error:", e);
    return null;
  }
}

// Fetch related internships
async function getAllInternships() {
  try {
    const res = await fetch(
      `https://freshersjobs-shop.onrender.com/api/jobs`,
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
  } catch {
    return [];
  }
}

export default async function InternshipDetailsPage({ params }) {
  const id = (await params).id;

  const internship = await getInternship(id);
  const all = await getAllInternships();

  // Related internships
  const related = all
    .filter((i) => i._id !== id && i.type === "internship")
    .slice(0, 3);

  if (!internship) {
    return (
      <div className="text-center py-10 text-gray-600">
        Internship not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 text-black px-4 md:px-10 py-10">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-6">
        🎓 {internship.title}
      </h1>

      <p className="text-center text-gray-700 text-lg mb-10">
        {internship.company}
      </p>

      {/* Details Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200">

        {/* Banner if exists */}
        {internship.banner && (
          <img
            src={internship.banner}
            alt="Internship Banner"
            className="w-full h-72 object-cover rounded-lg mb-6"
          />
        )}

        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <p><strong>📍 Location:</strong> {internship.location}</p>
          <p><strong>💼 Stipend:</strong> {internship.stipend || "Not Mentioned"}</p>
          <p><strong>🕒 Duration:</strong> {internship.duration || "Not Mentioned"}</p>
          <p><strong>📅 Posted:</strong> {new Date(internship.postedAt).toLocaleDateString()}</p>
          <p><strong>🧑‍🎓 Qualification:</strong> {internship.qualification || "-"}</p>
          <p><strong>Batch:</strong> {internship.batch || "-"}</p>
        </div>

        {/* Description */}
        <h2 className="text-2xl font-bold mb-4">Internship Description</h2>

        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: internship.description }}
        />

        {/* Apply Button */}
        <div className="mt-10">
          <a
            href={internship.applyUrl}
            target="_blank"
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            🚀 Apply Now
          </a>
        </div>
      </div>

      {/* RELATED Internships */}
      {related.length > 0 && (
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Related Internships</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((intern, i) => (
              <a
                key={intern._id}
                href={`/internships/${intern._id}`}
                className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-lg transition hover:-translate-y-1"
              >
                <h4 className="font-bold text-lg text-blue-700">{intern.title}</h4>
                <p className="text-gray-700">{intern.company}</p>
                <p className="text-gray-500 text-sm mt-1">📍 {intern.location}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
