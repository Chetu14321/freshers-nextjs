export default function HeaderHero() {
  return (
    <section className="mt-6 mb-8 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Find Freshers Jobs & Internships in India
      </h1>
      <p className="text-sm md:text-base opacity-90 mb-4">
        Daily updates on IT, non-IT, work from home, and off-campus jobs for
        freshers.
      </p>

      <div className="mt-3 flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by role, company, or location..."
          className="flex-1 rounded-md px-3 py-2 text-gray-900 text-sm outline-none"
        />
        <button className="px-4 py-2 rounded-md bg-white text-blue-700 text-sm font-semibold">
          Search Jobs
        </button>
      </div>
    </section>
  );
}
