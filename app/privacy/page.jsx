import React from "react";

export const metadata = {
  title: "Privacy Policy | FreshersJobs.shop — Data Protection",
  description:
    "Official Privacy Policy for FreshersJobs.shop. Learn how we safeguard your data, our use of Google AdSense cookies, and our commitment to user security.",
  alternates: {
    canonical: "https://freshersjobs.shop/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="w-full min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* DOCUMENT HEADER */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
            Legal Documentation
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm italic">
            Effective Date: January 2026 | Version 2.1 (Expanded)
          </p>
        </div>

        <article className="prose prose-slate max-w-none bg-white border border-slate-200 rounded-[2rem] shadow-sm p-8 md:p-12">
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-10">
            <p className="text-blue-900 m-0 leading-relaxed font-medium">
              At <strong>FreshersJobs.shop</strong>, your trust is our primary asset. 
              This policy outlines our transparent data handling protocols, designed to 
              protect Indian graduates as they navigate the job market.
            </p>
          </div>

          <section className="space-y-12">
            {/* SECTION 1 - 04 remain the same as previous, adding new ones below */}
            
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="bg-slate-100 w-8 h-8 rounded-lg flex items-center justify-center text-sm">05</span>
                Log Files & Infrastructure
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                FreshersJobs.shop follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services&apos; analytics. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
              </p>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="bg-slate-100 w-8 h-8 rounded-lg flex items-center justify-center text-sm">06</span>
                CCPA Privacy Rights (Do Not Sell My Info)
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Under the CCPA, among other rights, California consumers have the right to request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. <strong>We do not sell personal information.</strong> If you make a request, we have one month to respond to you.
              </p>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="bg-slate-100 w-8 h-8 rounded-lg flex items-center justify-center text-sm">07</span>
                GDPR Data Protection Rights
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2 text-slate-700">
                <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
                <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
                <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
              </ul>
            </div>

            <hr className="border-slate-100" />

            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <span className="bg-slate-100 w-8 h-8 rounded-lg flex items-center justify-center text-sm">08</span>
                Children&apos;s Information
              </h2>
              <p className="text-slate-600 mt-4 leading-relaxed">
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. FreshersJobs.shop does not knowingly collect any Personal Identifiable Information from children under the age of 13.
              </p>
            </div>

          </section>

          {/* RIGHT TO INFORMATION BLOCK */}
          <div className="mt-16 p-8 bg-slate-900 rounded-[2rem] text-white">
            <h3 className="text-xl font-bold mb-4">Consent</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions. This document was generated to ensure maximum transparency for our user base in India and globally.
            </p>
          </div>

          {/* CONTACT FOOTER */}
          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
            <h3 className="text-lg font-bold text-slate-900">Privacy Inquiries</h3>
            <p className="text-slate-500 mt-2">
              For data removal requests or policy questions:
            </p>
            <a 
              href="mailto:chetuchethan87@gmail.com" 
              className="inline-block mt-4 text-blue-600 font-black text-lg hover:underline"
            >
              chetuchethan87@gmail.com
            </a>
          </div>
        </article>
      </div>
    </main>
  );
}