"use client";

import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

const teamMembers = [
  {
    name: "Chethan M P",
    role: "Founder",
    bio: "Founder of FreshersJobs.shop, focused on helping fresh graduates find genuine career opportunities through transparent and simplified job information.",
    img: "https://via.placeholder.com/120",
    linkedin: "https://www.linkedin.com/in/chethan-m-p-15691236a",
  },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      <Head>
        <title>About Us | FreshersJobs.shop</title>
        <meta
          name="description"
          content="Learn about FreshersJobs.shop – an independent platform helping fresh graduates find verified jobs, internships, and career guidance."
        />
        <link rel="canonical" href="https://freshersjobs.shop/about" />
      </Head>

      <div className="max-w-5xl mx-auto p-4 mt-6">

        <div className="bg-white shadow-lg border p-6 rounded-2xl">

          <h1 className="font-bold text-3xl text-blue-600 mb-4">
            About FreshersJobs.shop
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>FreshersJobs.shop</strong> is an independent job information
            platform created to help fresh graduates and early-career
            professionals discover genuine job openings, internships, and
            career opportunities.
          </p>

          <p className="text-gray-700 mt-3">
            We are <strong>not a recruitment agency</strong> and do not hire on
            behalf of any company. Our goal is to simplify job discovery and
            guide candidates toward official and verified application sources.
          </p>

          {/* Mission */}
          <h2 className="font-semibold text-xl mt-6">🎯 Our Mission</h2>
          <p className="text-gray-600 mt-2">
            To bridge the gap between aspiring professionals and trusted
            employers by sharing clear, accurate, and fresher-focused job
            information.
          </p>

          {/* What We Offer */}
          <h2 className="font-semibold text-xl mt-6">✅ What We Offer</h2>
          <ul className="mt-2 space-y-2 text-gray-700 list-disc ml-5">
            <li>Daily updates on fresher jobs & internships</li>
            <li>Job details sourced from official company websites and platforms</li>
            <li>Career guidance, resume tips, and interview insights</li>
            <li>Simple and easy-to-understand job explanations</li>
          </ul>

          {/* Transparency */}
          <h2 className="font-semibold text-xl mt-6">🔍 Transparency & Trust</h2>
          <p className="text-gray-700 mt-2">
            FreshersJobs.shop <strong>does not charge any fees</strong> for job
            listings or applications. Candidates are always encouraged to apply
            directly through official company career pages or verified hiring
            platforms.
          </p>

          {/* Why Choose Us */}
          <h2 className="font-semibold text-xl mt-6">🤝 Why Choose FreshersJobs.shop?</h2>
          <p className="text-gray-600 mt-2">
            We focus exclusively on freshers and entry-level roles. Each post is
            reviewed for clarity, relevance, and authenticity to reduce
            confusion and job scams.
          </p>

          {/* Team */}
          <h2 className="font-semibold text-xl mt-6">👤 About the Founder</h2>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                className="p-4 rounded-xl text-center border shadow hover:shadow-md transition cursor-pointer"
                onClick={() =>
                  setSelectedMember(selectedMember === idx ? null : idx)
                }
              >
                <img
                  src={member.img}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-3 border-4 border-blue-600"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-blue-500">{member.role}</p>

                {selectedMember === idx && (
                  <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                )}

                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-blue-600 underline"
                >
                  View LinkedIn
                </a>
              </div>
            ))}
          </div>

          {/* Contact */}
          <h2 className="font-semibold text-xl mt-6">📩 Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Have feedback, suggestions, or partnership ideas?  
            <Link href="/contact" className="text-blue-600 underline ml-1">
              Get in touch
            </Link>
          </p>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200 text-sm">
            <strong>Disclaimer:</strong> FreshersJobs.shop is an informational
            platform only. We do not guarantee jobs or influence hiring
            decisions. Always verify details on official company websites.
          </div>

        </div>
      </div>
    </>
  );
}
