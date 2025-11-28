export const dynamic = "force-dynamic";

// Fetch job by ID
async function loadJob(id) {
  try {
    const res = await fetch(
      `https://freshersjobs-shop.onrender.com/api/jobs/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Job Fetch Error:", err);
    return null;
  }
}

export default async function JobDetailsPage({ params }) {
  const { id } = params;

  const data = await loadJob(id);
  const job = data?.job || data;  // ✅ FIX: extract actual job object

  if (!job) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-lg">Job not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-black w-full px-6 py-10">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-700 text-lg mt-1">{job.company}</p>
      <p className="text-gray-600 mt-2">📍 {job.location}</p>

      <div className="mt-6">
        <h2 className="font-semibold text-xl mb-2">Job Description</h2>
        <div
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />
      </div>

      {job.applyUrl && (
        <a
          href={job.applyUrl}
          target="_blank"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Apply Now →
        </a>
      )}
    </main>
  );
}
