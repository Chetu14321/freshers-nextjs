import React from "react";
import Link from "next/link"; // Added Link import
import { ShieldCheck, Target, Globe, Cpu } from "lucide-react";

export const metadata = {
  title: "About Us | FreshersJobs.shop",
  description: "Learn about the mission, values, and verification standards of FreshersJobs.shop, India's independent career update platform.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#FDFDFD] text-slate-900 font-sans antialiased pb-24">
      
      {/* DOCUMENT HEADER */}
      <header className="max-w-4xl mx-auto pt-20 px-6">
        <div className="border-l-4 border-blue-600 pl-6">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 mb-2">
            Corporate Profile: REV-2026
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="mt-4 text-slate-500 font-medium max-w-2xl leading-relaxed">
            FreshersJobs.shop is an independent digital platform dedicated to bridging the gap between India's top talent and premier career opportunities.
          </p>
        </div>
      </header>

      {/* DOCUMENT BODY */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
          
          {/* INTRODUCTION */}
          <div className="p-8 md:p-12 border-b border-slate-100">
            <h2 className="text-xs font-mono font-bold uppercase text-slate-400 mb-6 tracking-widest">
              01. Executive Summary
            </h2>
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
              Formerly operating under the principles of Swatantra Samachaar, our platform has evolved into <span className="font-bold text-slate-950">FreshersJobs.shop</span>. We serve as a centralized hub for reliable IT, private, and government sector job updates. Our mandate is to provide aspirants with structured, easy-to-digest career data sourced directly from official corporate and state portals.
            </p>
          </div>

          {/* OPERATIONAL SCOPE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
              <h2 className="text-xs font-mono font-bold uppercase text-slate-400 mb-6 tracking-widest text-blue-600">
                02. What We Do
              </h2>
              <ul className="space-y-4">
                {[
                  "Software & IT Sector Openings",
                  "MNC Off-Campus Recruitment",
                  "State & Central Govt Notifications",
                  "Internship & Entry-Level Roles",
                  "Technical Exam Guidance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <Cpu size={14} className="text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 md:p-12">
              <h2 className="text-xs font-mono font-bold uppercase text-slate-400 mb-6 tracking-widest text-blue-600">
                03. Our Mission
              </h2>
              <div className="flex items-start gap-4">
                <Target size={24} className="text-slate-300 mt-1" />
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  To simplify the professional landscape for freshers. We aim to reduce informational friction by delivering verified, timely, and transparent job notifications across all educational backgrounds.
                </p>
              </div>
            </div>
          </div>

          {/* COMPLIANCE & ACCURACY */}
          <div className="p-8 md:p-12 bg-slate-50 border-t border-slate-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                  Accuracy & Transparency Statement
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  All job details are aggregated from official company websites, government employment news, and trusted public records. <strong>FreshersJobs.shop does not conduct recruitment, charge application fees, or claim affiliation with any government department.</strong>
                </p>
              </div>
              <div className="px-6 py-4 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-sm">
                <ShieldCheck className="text-green-600" size={28} />
                <div>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase">Verification</p>
                  <p className="text-xs font-bold text-slate-900">100% Manual Audit</p>
                </div>
              </div>
            </div>
          </div>

          {/* WHY TRUST US SECTION */}
          <div className="p-8 md:p-12 border-t border-slate-100">
            <h2 className="text-xs font-mono font-bold uppercase text-slate-400 mb-8 tracking-widest text-center">
              Trust Indicators
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Reliable Sourcing", desc: "Data from official portals only." },
                { title: "Policy Compliant", desc: "Strict adherence to AdSense guidelines." },
                { title: "No Misleading Claims", desc: "Honest, fact-based reporting." }
              ].map((box, i) => (
                <div key={i} className="text-center">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{box.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER AREA - Updated with internal Link */}
        <div className="mt-16 text-center space-y-6">
          <p className="text-sm font-medium text-slate-500">
            Thank you for choosing FreshersJobs.shop as your career guide.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-slate-950 text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-lg hover:bg-blue-600 transition-all shadow-sm active:scale-95"
            >
              Contact Admin
            </Link>
          </div>
          <p className="text-[10px] font-mono text-slate-300 uppercase tracking-widest">
            Established 2026 • FJS Media Group
          </p>
        </div>
      </section>
    </main>
  );
}