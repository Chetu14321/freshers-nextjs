import React from "react";
import Link from "next/link";
import { ShieldCheck, Target, Cpu } from "lucide-react";

export const metadata = {
  title: "About Us | FreshersJobs.shop",
  description:
    "FreshersJobs.shop is an independent career information platform providing verified job updates for freshers in India.",
  alternates: {
    canonical: "https://www.freshersjobs.shop/about-us",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#FDFDFD] text-slate-900 font-sans antialiased pb-24">
      
      {/* DOCUMENT HEADER */}
      <header className="max-w-4xl mx-auto pt-20 px-6">
        <div className="border-l-4 border-blue-600 pl-6">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 mb-2">
            Corporate Profile • REV-2026
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="mt-4 text-slate-500 font-medium max-w-2xl leading-relaxed">
            FreshersJobs.shop is an independent digital platform dedicated to
            helping students and fresh graduates discover reliable career
            opportunities across India.
          </p>
        </div>
      </header>

      {/* DOCUMENT BODY */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          
          {/* EXECUTIVE SUMMARY */}
          <div className="p-8 md:p-12 border-b border-slate-100">
            <h2 className="text-xs font-mono font-bold uppercase text-slate-400 mb-6 tracking-widest">
              01. Executive Summary
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              FreshersJobs.shop operates as a career information and awareness
              platform. We aggregate publicly available job notifications and
              recruitment updates from official company websites, government
              portals, and trusted sources to help freshers make informed career
              decisions.
            </p>
          </div>

          {/* WHAT WE DO & MISSION */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
              <h2 className="text-xs font-mono font-bold uppercase text-blue-600 mb-6 tracking-widest">
                02. What We Do
              </h2>
              <ul className="space-y-4">
                {[
                  "IT & Software Job Updates",
                  "MNC Off-Campus Recruitment Information",
                  "State & Central Government Notifications",
                  "Internships and Entry-Level Opportunities",
                  "Exam Alerts & Basic Preparation Guidance",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-600"
                  >
                    <Cpu size={14} className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12">
              <h2 className="text-xs font-mono font-bold uppercase text-blue-600 mb-6 tracking-widest">
                03. Our Mission
              </h2>
              <div className="flex items-start gap-4">
                <Target size={22} className="text-slate-300 mt-1" />
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Our mission is to reduce misinformation and simplify career
                  discovery for freshers by publishing verified, clear, and
                  easy-to-understand job-related content.
                </p>
              </div>
            </div>
          </div>

          {/* TRANSPARENCY & DISCLAIMER */}
          <div className="p-8 md:p-12 bg-slate-50 border-t border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                  Transparency & Disclaimer
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  FreshersJobs.shop is <strong>not a recruitment agency</strong>,
                  <strong> not an employer</strong>, and
                  <strong> not affiliated</strong> with any company or
                  government organization. We do not charge users any fees. All
                  information is provided strictly for educational and
                  informational purposes.
                </p>
              </div>

              <div className="px-6 py-4 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-sm">
                <ShieldCheck className="text-green-600" size={28} />
                <div>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                    Verification
                  </p>
                  <p className="text-xs font-bold text-slate-900">
                    Manually Reviewed Content
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST INDICATORS */}
          <div className="p-8 md:p-12 border-t border-slate-100">
            <h2 className="text-xs font-mono font-bold uppercase text-slate-400 mb-8 tracking-widest text-center">
              Trust Indicators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Reliable Sources",
                  desc: "Information sourced from official and public portals.",
                },
                {
                  title: "Policy Compliant",
                  desc: "Content published in line with Google AdSense policies.",
                },
                {
                  title: "No Misleading Claims",
                  desc: "Fact-based reporting without false promises.",
                },
              ].map((box, i) => (
                <div key={i} className="text-center">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    {box.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {box.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-sm font-medium text-slate-500">
            Thank you for choosing FreshersJobs.shop as your career guide.
          </p>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-slate-950 text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-lg hover:bg-blue-600 transition-all shadow-sm"
            >
              Contact Admin
            </Link>
          </div>

          <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">
            Established 2026 • FJS Media Group • India
          </p>
        </div>
      </section>
    </main>
  );
}