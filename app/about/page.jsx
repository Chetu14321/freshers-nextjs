"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const teamMembers = [
  {
    name: "Chethan M P",
    role: "Founder",
    bio: "Passionate about helping fresh graduates find their dream jobs.",
    img: "https://via.placeholder.com/120",
    linkedin: "https://www.linkedin.com/in/chethan-m-p-15691236a",
  },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <>
      {/* SEO HEAD */}
      <Head>
        <title>About Us | FreshersJobs</title>
        <meta
          name="description"
          content="FreshersJobs is your trusted platform for fresher jobs, internships, and career resources. Learn about our mission, values, and team."
        />
        <link rel="canonical" href="https://freshersjobs.shop/about" />
      </Head>

      <div className="max-w-5xl mx-auto p-4 mt-5 fade-in">

        {/* MAIN CARD */}
        <div className="bg-white shadow-lg border-0 p-6 rounded-2xl fade-in-up">

          <h2 className="font-bold text-3xl text-blue-600 mb-4">
            About FreshersJobs
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <strong>FreshersJobs</strong>, your trusted platform for
            the latest job openings, internships, and career opportunities for
            students and recent graduates.
          </p>

          {/* Mission */}
          <h4 className="font-semibold text-xl mt-6">🎯 Our Mission</h4>
          <p className="text-gray-600">
            To bridge the gap between aspiring <strong>professionals</strong> and employers.
          </p>

          {/* What We Offer */}
          <h4 className="font-semibold text-xl mt-6">✅ What We Offer</h4>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>🔹 Daily updates on <strong>fresher jobs & internships</strong></li>
            <li>🔹 Verified listings from trusted companies</li>
            <li>🔹 Career resources, interview tips, resume help</li>
            <li>🔹 Easy navigation by categories, skills & locations</li>
          </ul>

          {/* Why Choose Us */}
          <h4 className="font-semibold text-xl mt-6">🤝 Why Choose Us?</h4>
          <p className="text-gray-600">
            We focus solely on <strong>fresh graduates</strong>. Every listing is reviewed for authenticity.
          </p>

          {/* Team Section */}
          <h4 className="font-semibold text-xl mt-6">👥 Meet the Team</h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {teamMembers.map((member, idx) => (
              <div
                key={member.name}
                className={`team-card p-4 rounded-xl cursor-pointer text-center ${
                  selectedMember === idx ? "active" : ""
                }`}
                onClick={() =>
                  setSelectedMember(selectedMember === idx ? null : idx)
                }
              >
                <img
                  src={member.img}
                  width={120}
                  height={120}
                  alt={member.name}
                  className="rounded-full mx-auto mb-3 border-4 border-blue-600 shadow-lg"
                />

                <h5 className="font-bold text-lg">{member.name}</h5>
                <p className="text-blue-500 mb-1">{member.role}</p>

                {selectedMember === idx && (
                  <p className="text-gray-600 text-sm mt-2">
                    {member.bio}
                  </p>
                )}

                <a
                  href={member.linkedin}
                  target="_blank"
                  className="mt-3 inline-block border border-blue-600 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition"
                >
                  LinkedIn
                </a>
              </div>
            ))}
          </div>

          {/* Values */}
          <h4 className="font-semibold text-xl mt-6">🌱 Our Values</h4>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>• Integrity – honesty & transparency</li>
            <li>• Empowerment – helping freshers succeed</li>
            <li>• Innovation – improving user experience</li>
            <li>• Community – connecting talent with employers</li>
          </ul>

          {/* Closing */}
          <h4 className="font-semibold text-xl mt-6">📢 Get Involved</h4>
          <p className="text-gray-600">
            Have suggestions or want to partner?  
            <Link href="/contact" className="text-blue-600 underline"> Contact us</Link>
          </p>

          <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <strong>FreshersJobs</strong> – Your career journey starts here 🚀
          </div>
        </div>

        {/* STYLES */}
        <style>{`
          .team-card {
            transition: 0.3s ease;
            background: rgba(255,255,255,0.9);
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          }
          .team-card:hover,
          .team-card.active {
            transform: translateY(-6px);
            background: #eef7ff;
            box-shadow: 0 15px 28px rgba(0,0,0,0.2);
          }
          .fade-in {
            opacity: 0;
            animation: fadeIn 0.6s forwards;
          }
          .fade-in-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.7s forwards;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </>
  );
}
