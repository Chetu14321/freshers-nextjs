import React from "react";

export const metadata = {
  title: "Privacy Policy | FreshersJobs.shop",
  description:
    "Privacy Policy of FreshersJobs.shop explaining data collection, Google AdSense cookies, and user rights.",
  alternates: {
    canonical: "https://www.freshersjobs.shop/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="max-w-4xl mx-auto px-5 py-16">
        
        {/* Header */}
        <header className="mb-12">
          <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
            Legal Information
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Effective Date: January 2026
          </p>
        </header>

        {/* Content Card */}
        <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-8 md:p-12 space-y-10 leading-relaxed">

          <p className="text-slate-600">
            FreshersJobs.shop values your privacy. This Privacy Policy explains
            how we collect, use, and safeguard information when you visit our
            website.
          </p>

          {/* Section */}
          <div>
            <h2 className="text-xl font-bold mb-3">Information We Collect</h2>
            <p className="text-slate-600">
              We may collect non-personal information such as IP address,
              browser type, Internet Service Provider (ISP), date and time
              stamps, referring pages, and click activity. This data is used
              solely for analytics and site optimization.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Cookies & Google AdSense</h2>
            <p className="text-slate-600">
              FreshersJobs.shop uses Google AdSense, a third-party advertising
              service. Google may use cookies, including the DoubleClick cookie,
              to display ads based on a user’s visit to this and other websites.
            </p>
            <p className="text-slate-600 mt-3">
              Google’s advertising cookies allow it and its partners to serve
              relevant ads to users. Users can opt out of personalized
              advertising through Google Ads Settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Third-Party Privacy Policies</h2>
            <p className="text-slate-600">
              FreshersJobs.shop’s Privacy Policy does not apply to other
              advertisers or external websites. We advise users to review the
              respective privacy policies of third-party services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">CCPA Privacy Rights</h2>
            <p className="text-slate-600">
              Under the California Consumer Privacy Act (CCPA), users have the
              right to request access to or deletion of personal data. We do not
              sell personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">GDPR Data Protection Rights</h2>
            <ul className="list-disc ml-6 text-slate-600 space-y-2">
              <li>Right to access personal data</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to request data deletion</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Children’s Information</h2>
            <p className="text-slate-600">
              FreshersJobs.shop does not knowingly collect any personal
              information from children under the age of 13.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Consent</h2>
            <p className="text-slate-600">
              By using our website, you consent to this Privacy Policy and agree
              to its terms.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-slate-200">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-slate-600">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <a
              href="mailto:chetuchethan87@gmail.com"
              className="inline-block mt-3 font-semibold text-blue-600 hover:underline"
            >
              chetuchethan87@gmail.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}