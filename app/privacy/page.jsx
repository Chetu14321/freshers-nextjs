// app/privacy/page.jsx

export const metadata = {
  title: "Privacy Policy | FreshersJobs",
  description:
    "Read the Privacy Policy of FreshersJobs to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://freshersjobs-shop.onrender.com/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="w-full min-h-screen bg-gray-50 text-black">
      <div className="max-w-4xl mx-auto px-4 py-12">

        <article className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-700 leading-relaxed">
            At <strong>FreshersJobs</strong>, we respect your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, store, and safeguard your data
            when you visit or interact with our website.
          </p>

          {/* SECTION 1 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mt-2">
            We may collect the following types of information:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Name and contact details (only if voluntarily submitted)</li>
            <li>Email address</li>
            <li>Resume or application information (if uploaded)</li>
            <li>Usage data such as pages visited and clicks</li>
            <li>Device, browser, and IP address information</li>
          </ul>

          {/* SECTION 2 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Provide job and internship listings</li>
            <li>Improve website performance and user experience</li>
            <li>Respond to user queries or feedback</li>
            <li>Send career-related updates (only with user consent)</li>
          </ul>

          {/* SECTION 3 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            3. Sharing of Information
          </h2>
          <p className="text-gray-700 mt-2">
            We do <strong>not</strong> sell, trade, or rent your personal data.
            Information may be shared only:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>With trusted service providers for website operations</li>
            <li>To comply with legal obligations</li>
            <li>To prevent fraud or misuse of our platform</li>
          </ul>

          {/* SECTION 4 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            4. Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-700 mt-2">
            FreshersJobs uses cookies and similar technologies to:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-700">
            <li>Analyze website traffic</li>
            <li>Understand user behavior and preferences</li>
            <li>Improve site speed and content relevance</li>
          </ul>
          <p className="text-gray-700 mt-2">
            You can disable cookies through your browser settings if you prefer.
          </p>

          {/* SECTION 5 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            5. Google AdSense & Advertising
          </h2>
          <p className="text-gray-700 mt-2">
            We may display advertisements served by Google AdSense or other
            advertising partners. These services may use cookies (such as the
            DART cookie) to display ads relevant to users based on their visits
            to this and other websites.
          </p>
          <p className="text-gray-700 mt-2">
            Users may opt out of personalized advertising by visiting{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Google Ads Settings
            </a>.
          </p>

          {/* SECTION 6 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            6. Data Security
          </h2>
          <p className="text-gray-700 mt-2">
            We implement standard security practices to protect your
            information. However, no method of online transmission is 100%
            secure.
          </p>

          {/* SECTION 7 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            7. Children’s Information
          </h2>
          <p className="text-gray-700 mt-2">
            FreshersJobs does not knowingly collect personal information from
            children under the age of 13. If you believe that your child has
            provided personal data on our website, please contact us and we will
            promptly remove it.
          </p>

          {/* SECTION 8 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            8. Third-Party Links
          </h2>
          <p className="text-gray-700 mt-2">
            Our website may contain links to external websites. We are not
            responsible for the privacy practices or content of those sites.
          </p>

          {/* SECTION 9 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            9. Updates to This Policy
          </h2>
          <p className="text-gray-700 mt-2">
            We may update this Privacy Policy periodically. Continued use of the
            website indicates acceptance of the updated policy.
          </p>

          {/* SECTION 10 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            10. Contact Us
          </h2>
          <p className="text-gray-700 mt-2">
            If you have any questions about this Privacy Policy, contact us at:
          </p>
          <p className="mt-2">
            📧{" "}
            <a
              href="mailto:chetuchethan87@gmail.com"
              className="text-blue-600 underline"
            >
              chetuchethan87@gmail.com
            </a>
          </p>

          <p className="text-gray-500 mt-10 text-sm">
            Last updated: <strong>January 2026</strong>
          </p>

        </article>
      </div>
    </main>
  );
}
