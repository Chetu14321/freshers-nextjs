import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  FileSearch,
  Home as HomeIcon,
  Info,
  Mail,
  ShieldCheck,
  FileText,
} from "lucide-react";
import HeaderHero from "./components/HeaderHero";

export const dynamic = "force-dynamic";

// Card Data
const cardData = [
  {
    title: "Jobs",
    description: "Explore verified job openings across top companies.",
    icon: Briefcase,
    link: "/jobs",
  },
  {
    title: "Internships",
    description: "Find meaningful internships with real work experience.",
    icon: GraduationCap,
    link: "/internships",
  },
  {
    title: "Resume ATS Checker",
    description: "Check if your resume can pass ATS filters.",
    icon: FileSearch,
    link: "/resume-checker",
  },
];

export default async function Home() {
  let jobs = [];
  let error = null;

  try {
    const res = await fetch(
      "https://freshersjobs-shop.onrender.com/api/jobs",
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch jobs");

    const data = await res.json();

    const raw = Array.isArray(data)
      ? data
      : data.jobs
      ? data.jobs
      : data.data
      ? data.data
      : [];

    jobs = raw.sort(
      (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
    );
  } catch (err) {
    error = err.message;
  }

  return (
    <main className=" mx-auto  bg-white text-black">
      
      {/* HEADER */}
      <HeaderHero />

      {/* TITLE */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-extrabold">FreshersJobs</h1>
        <p className="text-lg mt-3 leading-relaxed max-w-2xl mx-auto">
          Your trusted platform for freshers jobs, internships, and resume tools —
          designed with a clean, readable, and AdSense-friendly layout.
        </p>
      </section>

      {/* FEATURE CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-18">
        {cardData.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
              <item.icon size={30} stroke="#000" />
            </div>

            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700 text-sm mt-1">{item.description}</p>

            <p className="mt-4 font-medium text-blue-600">Learn more</p>
          </Link>
        ))}
      </section>

      {/* ABOUT SECTION */}
      <section className="mt-16 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-center">About FreshersJobs</h2>

        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mt-3">
          FreshersJobs helps recent graduates find employment opportunities and
          internships across India. Our platform is optimized for readability,
          clean UI, and follows Google AdSense guidelines for content quality.
        </p>
      </section>

      {/* EXPLORE SECTION */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center">Explore More</h2>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {[ 
            { name: "Jobs", path: "/jobs", icon: Briefcase },
            { name: "Internships", path: "/internships", icon: GraduationCap },
            { name: "Resume ATS", path: "/resume-checker", icon: FileSearch },
            { name: "About", path: "/about", icon: Info },
            { name: "Contact", path: "/contact", icon: Mail },
            { name: "Privacy", path: "/privacy", icon: ShieldCheck },
            { name: "Terms", path: "/terms", icon: FileText },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="flex items-center gap-2 px-4 py-2 border rounded-full bg-white hover:bg-gray-100 border-gray-300 transition"
            >
              <item.icon size={18} stroke="#000" /> {item.name}
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST JOBS */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Latest Job Openings
        </h2>

        {error && <p className="text-center text-red-600">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.slice(0, 6).map((job) => (
            <Link
              key={job._id}
              href={`/job/${job._id}`}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-600 text-sm mt-1">
                {job.location || "Location not specified"}
              </p>

              <p className="mt-4 text-blue-600 font-medium">Learn more</p>
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST INTERNSHIPS */}
      <section className="mt-20">
        <h2 className="text-2xl font-bold text-center mb-6">
          Latest Internships
        </h2>

        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
          Explore curated internships for students and freshers across India.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs
            .filter(
              (job) =>
                job.type?.toLowerCase() === "internship" ||
                job.category?.toLowerCase() === "internship" ||
                job.jobType?.toLowerCase() === "internship"
            )
            .slice(0, 6)
            .map((intern) => (
              <Link
                key={intern._id}
                href={`/job/${intern._id}`}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">{intern.title}</h3>
                <p className="text-gray-700">{intern.company}</p>
                <p className="text-gray-600 text-sm mt-1">
                  {intern.location || "Location not specified"}
                </p>

                {intern.stipend && (
                  <p className="text-sm text-green-600 mt-2 font-semibold">
                    💰 Stipend: {intern.stipend}
                  </p>
                )}

                <p className="mt-4 text-blue-600 font-medium">View Details</p>
              </Link>
            ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/internships"
            className="px-6 py-2 text-blue-600 font-semibold border border-blue-600 rounded-full hover:bg-blue-50 transition"
          >
            View All Internships
          </Link>
        </div>
      </section>

    </main>
  );
}
