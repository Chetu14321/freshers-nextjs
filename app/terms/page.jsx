export const metadata = {
  title: "Terms & Conditions | FreshersJobs.shop",
  description:
    "Read the Terms & Conditions of FreshersJobs.shop to understand the rules, responsibilities, and limitations of using our website.",
  alternates: {
    canonical: "https://freshersjobs-shop.onrender.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="w-full min-h-screen bg-gray-50 text-black">
      <div className="max-w-4xl mx-auto px-4 py-12">

        <article className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8">

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Terms &amp; Conditions
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Welcome to <strong>FreshersJobs.shop</strong>. By accessing or using
            our website, you agree to comply with and be bound by these Terms &amp;
            Conditions. Please read them carefully before using our services.
          </p>

          {/* SECTION 1 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            1. Use of Our Website
          </h2>
          <p className="text-gray-700 mt-2">
            You agree to use FreshersJobs.shop only for lawful purposes such as
            browsing job listings, internships, and career-related information.
            Any misuse, including fraudulent activity or abuse of the platform,
            is strictly prohibited.
          </p>

          {/* SECTION 2 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            2. Job & Internship Listings
          </h2>
          <p className="text-gray-700 mt-2">
            FreshersJobs.shop displays job and internship opportunities sourced
            from company websites and third-party platforms. While we strive to
            verify listings, we do not guarantee the accuracy, completeness, or
            authenticity of third-party job postings.
          </p>
          <p className="text-gray-700 mt-2">
            Users are advised to exercise due diligence before applying. We do
            not charge any fees for job or internship applications.
          </p>

          {/* SECTION 3 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            3. No Fees & No Guarantees
          </h2>
          <p className="text-gray-700 mt-2">
            FreshersJobs.shop is an informational platform. We do not guarantee
            job placement, interview calls, or employment outcomes. We never ask
            users to pay money for jobs, internships, or hiring processes.
          </p>

          {/* SECTION 4 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            4. Third-Party Links
          </h2>
          <p className="text-gray-700 mt-2">
            Our website may contain links to external websites, including company
            career pages and recruitment portals. We are not responsible for the
            content, privacy policies, or practices of any third-party websites.
          </p>

          {/* SECTION 5 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            5. Intellectual Property
          </h2>
          <p className="text-gray-700 mt-2">
            All content published on FreshersJobs.shop, including text, design,
            logos, graphics, and layout, is the intellectual property of
            FreshersJobs.shop unless otherwise stated. Unauthorized reproduction
            or redistribution is prohibited.
          </p>

          {/* SECTION 6 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-700 mt-2">
            FreshersJobs.shop shall not be held liable for any loss, damage, or
            inconvenience arising from the use of our website or reliance on job
            listings, including but not limited to financial loss or missed
            opportunities.
          </p>

          {/* SECTION 7 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            7. Changes to These Terms
          </h2>
          <p className="text-gray-700 mt-2">
            We reserve the right to update or modify these Terms &amp; Conditions
            at any time. Continued use of the website after changes are posted
            constitutes acceptance of the revised terms.
          </p>

          {/* SECTION 8 */}
          <h2 className="mt-8 text-xl font-semibold text-gray-900">
            8. Contact Us
          </h2>
          <p className="text-gray-700 mt-2">
            If you have any questions regarding these Terms &amp; Conditions,
            please contact us at:
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
