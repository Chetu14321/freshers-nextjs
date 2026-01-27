import React from "react";

export const metadata = {
  title: "Official Terms & Conditions | FreshersJobs.shop",
  description: "Legal agreement and terms of service for FreshersJobs.shop.",
};

export default function TermsPage() {
  const sections = [
    {
      title: "Nature of Service",
      body: "FreshersJobs.shop operates as a digital information aggregator. We do not act as a recruitment agency, employer, or hiring partner. Our primary function is to curate and redirect users to public-domain career opportunities."
    },
    {
      title: "User Obligations",
      body: "Users are granted a limited, non-exclusive license to access job information for personal career advancement. Any use of automated systems (bots, crawlers) to extract data from this site is a violation of these terms."
    },
    {
      title: "Verification Disclaimer",
      body: "While we manually audit every MNC link, FreshersJobs.shop cannot be held liable for the content of external company websites. The 'Apply Now' functionality transfers the user to third-party domains governed by their own legal frameworks."
    },
    {
      title: "Zero-Cost Policy",
      body: "Our platform is 100% free of charge. We strictly prohibit any person or entity from charging fees in the name of FreshersJobs.shop. Users are advised to never share financial credentials on any platform linked from here."
    },
    {
      title: "Liability & Indemnity",
      body: "The service is provided 'As-Is.' FreshersJobs.shop disclaims all warranties. We are not liable for employment outcomes, server downtimes, or any direct/indirect losses resulting from the use of our data."
    }
  ];

  return (
    <main className="w-full min-h-screen bg-[#FDFDFD] text-slate-900 font-sans antialiased pb-24">
      
      {/* DOCUMENT HEADER */}
      <header className="max-w-4xl mx-auto pt-20 px-6">
        <div className="border-l-4 border-blue-600 pl-6">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 mb-2">
            Document Ref: FJS-TERMS-2026
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
            Terms of Service
          </h1>
          <div className="mt-6 flex flex-wrap gap-6 text-[11px] font-mono text-slate-500 uppercase font-bold">
            <span className="flex items-center gap-2">● Last Revision: Jan 2026</span>
            <span className="flex items-center gap-2">● Status: Active</span>
          </div>
        </div>
      </header>

      {/* DOCUMENT BODY */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-white border border-slate-200 rounded-lg p-8 md:p-12 shadow-sm">
          <p className="text-sm font-medium text-slate-500 mb-12 italic border-b border-slate-100 pb-6">
            This agreement governs the relationship between FreshersJobs.shop and its users. By continuing to use this platform, you acknowledge that you have read and understood these provisions.
          </p>

          <div className="space-y-12">
            {sections.map((section, idx) => (
              <div key={idx} className="relative">
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-slate-300 font-bold mt-1">
                    [0{idx + 1}]
                  </span>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                      {section.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {section.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SIGNATURE / CONTACT AREA */}
          <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase text-slate-400 mb-4 tracking-widest">
                Contact Administration
              </h3>
              <a 
                href="mailto:chetuchethan87@gmail.com"
                className="text-blue-600 font-bold text-sm hover:underline"
              >
                chetuchethan87@gmail.com
              </a>
            </div>
            <div className="text-right">
              <div className="h-10 w-32 border-b border-slate-300 mb-2 ml-auto"></div>
              <p className="text-[10px] font-mono text-slate-400 uppercase font-bold">
                Authorized by FJS-Admin
              </p>
            </div>
          </div>
        </div>

        {/* PRINT ACTION */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            FreshersJobs.shop • Verified Employment Portal • 2026
          </p>
        </div>
      </section>
    </main>
  );
}