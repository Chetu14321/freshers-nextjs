// app/privacy/page.jsx

export const metadata = {
  title: "Privacy Policy | FreshersJobs",
  description:
    "Read the Privacy Policy of FreshersJobs to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "http://13.50.111.42:5000/privacy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-5 mt-10 fade-in">

      <div className="bg-white shadow-lg p-6 rounded-2xl fade-in-up border">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-700 leading-relaxed">
          At <strong>FreshersJobs</strong>, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          explains how we collect, use, and protect your data when you visit or
          use our website.
        </p>

        {/* Section 1 */}
        <h3 className="mt-6 text-xl font-semibold">1. Information We Collect</h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          We may collect the following information:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>Name and contact details (if submitted by you)</li>
          <li>Email address</li>
          <li>Resume or job application details (if uploaded)</li>
          <li>Usage data such as pages visited, clicks, and traffic data</li>
          <li>Device and browser information</li>
        </ul>

        {/* Section 2 */}
        <h3 className="mt-6 text-xl font-semibold">
          2. How We Use Your Information
        </h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          We use your data to improve our services, including:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>Providing accurate job and internship listings</li>
          <li>Improving website performance and user experience</li>
          <li>Responding to your messages or feedback</li>
          <li>Sending career-related updates (only with your consent)</li>
        </ul>

        {/* Section 3 */}
        <h3 className="mt-6 text-xl font-semibold">
          3. Sharing of Information
        </h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          We do <strong>not</strong> sell or trade your personal data. We may
          share your information only in the following cases:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>With trusted service providers who assist us in operations</li>
          <li>To comply with legal regulations</li>
          <li>If required to protect FreshersJobs from fraud or misuse</li>
        </ul>

        {/* Section 4 */}
        <h3 className="mt-6 text-xl font-semibold">
          4. Cookies & Tracking Technologies
        </h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          We use cookies to enhance your browsing experience. Cookies help us:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>Analyze website traffic</li>
          <li>Understand user preferences</li>
          <li>Improve loading speed and performance</li>
        </ul>

        {/* Section 5 */}
        <h3 className="mt-6 text-xl font-semibold">
          5. Data Security
        </h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          We use secure technologies and best practices to keep your data safe.
          However, no online platform can guarantee 100% security.
        </p>

        {/* Section 6 */}
        <h3 className="mt-6 text-xl font-semibold">6. Your Rights</h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          You have the right to:
        </p>
        <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-2">
          <li>Access the information we hold about you</li>
          <li>Request corrections to your data</li>
          <li>Request deletion of your data</li>
          <li>Opt out of emails or notifications</li>
        </ul>

        {/* Section 7 */}
        <h3 className="mt-6 text-xl font-semibold">
          7. Third-Party Links
        </h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          FreshersJobs may include links to third-party websites. We are not
          responsible for the privacy practices or content of those sites.
        </p>

        {/* Section 8 */}
        <h3 className="mt-6 text-xl font-semibold">
          8. Updates to This Policy
        </h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          We may update our Privacy Policy from time to time. Continued use of
          the website means you accept the updated policy.
        </p>

        {/* Section 9 */}
        <h3 className="mt-6 text-xl font-semibold">9. Contact Us</h3>
        <p className="text-gray-700 leading-relaxed mt-2">
          For any questions regarding this Privacy Policy, contact us at:
          <br />
          📧{" "}
          <a
            href="mailto:chetuchethan87@gmail.com"
            className="text-blue-600 underline"
          >
            chetuchethan87@gmail.com
          </a>
        </p>

        <p className="text-gray-500 mt-6">
          Last updated: <strong>September 2025</strong>
        </p>
      </div>

      {/* Animations */}
      <style>{`
        .fade-in { 
          opacity: 0; 
          animation: fadeIn 0.8s ease forwards; 
        }
        .fade-in-up { 
          opacity: 0; 
          transform: translateY(20px);
          animation: fadeInUp 0.8s ease forwards; 
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
