import React from "react";

export const metadata = {
  title: "Disclaimer | FreshersJobs.shop",
  description:
    "Disclaimer for FreshersJobs.shop clarifying informational purpose, non-affiliation, and limitation of liability.",
  alternates: {
    canonical: "https://www.freshersjobs.shop/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main className="w-full min-h-screen bg-[#FDFDFD] text-slate-900 font-sans antialiased pb-24">
      
      {/* HEADER */}
      <header className="max-w-4xl mx-auto pt-20 px-6">
        <div className="border-l-4 border-blue-600 pl-6">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-blue-600 mb-2">
            Legal Disclosure
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
            Disclaimer
          </h1>
          <p className="mt-4 text-slate-500 font-medium max-w-2xl leading-relaxed">
            Important information regarding the use of FreshersJobs.shop.
          </p>
        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 mt-16">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-8 md:p-12 space-y-10">
          
          {/* GENERAL INFO */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              General Information
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              FreshersJobs.shop is an independent informational website created
              for educational and awareness purposes only. All content published
              on this platform is intended to provide general job-related
              information for students and fresh graduates.
            </p>
          </div>

          {/* NO AFFILIATION */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              No Recruitment or Affiliation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              FreshersJobs.shop is <strong>not a recruitment agency</strong>,
              <strong> not an employer</strong>, and
              <strong> not affiliated</strong> with any company, organization,
              or government authority. We do not conduct hiring, interviews, or
              selection processes on behalf of any employer.
            </p>
          </div>

          {/* CONTENT ACCURACY */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Content Accuracy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Job updates and related information are collected from official
              company websites, government portals, press releases, and publicly
              available sources. While we strive to keep information accurate
              and up to date, FreshersJobs.shop does not guarantee completeness,
              reliability, or accuracy at all times.
            </p>
          </div>

          {/* EXTERNAL LINKS */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              External Links Disclaimer
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Our website may contain links to external websites for additional
              information or application purposes. FreshersJobs.shop has no
              control over the content, policies, or practices of third-party
              websites and assumes no responsibility for them.
            </p>
          </div>

          {/* NO FEES */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              No Fees Policy
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              FreshersJobs.shop does not charge users any fees. We strongly
              advise users to never pay money to anyone claiming to represent
              FreshersJobs.shop for job placement or recruitment purposes.
            </p>
          </div>

          {/* LIABILITY */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Limitation of Liability
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              By using this website, you agree that FreshersJobs.shop shall not
              be held liable for any losses, damages, or consequences arising
              from reliance on information published on this platform.
            </p>
          </div>

          {/* CONSENT */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              User Consent
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              By accessing and using FreshersJobs.shop, you acknowledge that you
              have read, understood, and agreed to this Disclaimer.
            </p>
          </div>

          {/* CONTACT */}
          <div className="pt-8 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500 font-medium">
              For questions regarding this Disclaimer, contact:
            </p>
            <a
              href="mailto:chetuchethan87@gmail.com"
              className="inline-block mt-3 font-bold text-blue-600 hover:underline"
            >
              chetuchethan87@gmail.com
            </a>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p className="mt-10 text-center text-[10px] font-mono text-slate-300 uppercase tracking-widest">
          FreshersJobs.shop • Informational Career Platform • 2026
        </p>
      </section>
    </main>
  );
}