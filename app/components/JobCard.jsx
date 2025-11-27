export default function JobCard({ title, company, location, type, link }) {
  return (
    <article className="border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-black">{title}</h3>

      <p className="text-sm text-gray-700 mt-1">{company}</p>

      <p className="text-sm text-gray-500 mt-1">📍 {location}</p>

      <p className="text-sm text-blue-600 font-medium mt-1">{type}</p>

      <a
        href={link}
        className="inline-block mt-4 px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition"
      >
        View Details →
      </a>
    </article>
  );
}
