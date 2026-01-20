"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const teamMembers = [
  {
    name: "Chethan M P",
    role: "Founder & Career Strategist",
    bio: "Founder of FreshersJobs.shop. With a passion for career development, Chethan curates verified opportunities to ensure fresh graduates start their professional journey on the right path.",
    // Ensure this image exists in your public/images folder
    img: "/images/chethan.jpg", 
    linkedin: "https://www.linkedin.com/in/chethan-m-p-15691236a",
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | FreshersJobs.shop - Your Career Hub</title>
        <meta
          name="description"
          content="FreshersJobs.shop is a trusted platform for Indian graduates to find verified jobs, internships, and career guidance. Led by Chethan M P."
        />
        <link rel="canonical" href="https://freshersjobs.shop/about" />
      </Head>

      <div className="max-w-5xl mx-auto p-4 mt-6">
        <div className="bg-white shadow-lg border p-8 rounded-2xl">
          
          <h1 className="font-bold text-4xl text-blue-600 mb-6 border-b pb-4">
            About FreshersJobs.shop
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>FreshersJobs.shop</strong> is an independent digital career hub created to empower 
                fresh graduates and early-career professionals in India. We simplify the job hunt 
                by providing a curated &quot;one-stop shop&quot; for verified job openings, internships, and 
                essential career tools.
              </p>
              
              <p className="text-gray-700 mt-4 italic border-l-4 border-blue-600 pl-4">
                &quot;We chose the <strong>.shop</strong> domain to symbolize our goal of being a comprehensive 
                marketplace for career growth—where every student can &apos;shop&apos; for the best opportunities 
                to kickstart their future.&quot;
              </p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm">
              <h4 className="font-bold text-blue-800 mb-2">Quick Facts</h4>
              <ul className="space-y-1 text-gray-600">
                <li>📍 Focus: Entry-level Roles</li>
                <li>✅ Verification: 100% Manual</li>
                <li>💰 Cost: Always Free</li>
                <li>🌐 Region: Pan India</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="font-semibold text-2xl text-gray-800 mt-2 flex items-center">
                <span className="mr-2">🎯</span> Our Mission
              </h2>
              <p className="text-gray-600 mt-2">
                To bridge the gap between aspiring professionals and trusted
                employers by sharing clear, accurate, and fresher-focused job
                information without the noise of typical job portals.
              </p>
            </section>

            <section>
              <h2 className="font-semibold text-2xl text-gray-800 mt-2 flex items-center">
                <span className="mr-2">✅</span> What We Offer
              </h2>
              <ul className="mt-2 space-y-2 text-gray-700 list-disc ml-5">
                <li>Daily updates on fresher jobs & internships</li>
                <li>Direct links to official company career portals</li>
                <li>Step-by-step application guidance</li>
                <li>Zero-spam environment</li>
              </ul>
            </section>
          </div>

          <hr className="my-10" />

          <h2 className="font-semibold text-2xl text-center text-gray-800 mb-8">Meet the Visionary</h2>

          <div className="flex justify-center">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="max-w-sm w-full p-6 rounded-2xl text-center border bg-gray-50 shadow-sm hover:shadow-md transition"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="rounded-full border-4 border-white shadow-lg object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Connect on LinkedIn
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-t pt-8">
            <div>
              <h2 className="font-semibold text-xl">📩 Get in Touch</h2>
              <p className="text-gray-600 mt-2">
                Have questions or need help? Our team is here to support your career journey.  
                <Link href="/contact" className="text-blue-600 font-bold hover:underline ml-1">
                  Contact Us Today
                </Link>
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-sm text-gray-700">
              <strong>Transparency Note:</strong> FreshersJobs.shop <strong>never charges</strong> 
              candidates for job placements. We provide information for free and encourage 
              applying through official channels only.
            </div>
          </div>

          <div className="mt-8 bg-gray-100 p-4 rounded-lg text-xs text-gray-500 text-center">
            <strong>Disclaimer:</strong> FreshersJobs.shop is an informational platform. We are not 
            affiliated with any government body or recruitment firm. All logos are property of 
            their respective owners.
          </div>

        </div>
      </div>
    </>
  );
}