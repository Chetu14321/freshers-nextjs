// app/terms/page.jsx

export const metadata = {
  title: "Terms & Conditions | FreshersJobs",
  description:
    "Read the Terms & Conditions of FreshersJobs to understand the rules, responsibilities, and limitations of using our website.",
  alternates: {
    canonical: "https://freshersjobs.shop/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto p-5 mt-10 fade-in">

      <div className="bg-white shadow-lg p-6 rounded-2xl fade-in-up border">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">
          Terms &amp; Conditions
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Welcome to <strong>FreshersJobs</strong>. By accessing or using our
          website, you agree to be bound by these Terms &amp; Conditions. Please
          read them carefully before using our services.
        </p>

        <h4 className="mt-6 font-semibold text-xl">Use of Our Website</h4>
        <p className="text-gray-700 leading-relaxed">
          You agree to use FreshersJobs only for legitimate purposes such as
          exploring jobs, internships, and career opportunities. You must not
          use this platform for unlawful or harmful activities.
        </p>

        <h4 className="mt-6 font-semibold text-xl">Job Listings</h4>
        <p className="text-gray-700 leading-relaxed">
          We verify job and internship listings to the best of our ability.
          However, <strong>FreshersJobs</strong> does not guarantee the accuracy
          or authenticity of third-party job postings. Users must exercise due
          diligence before applying.
        </p>

        <h4 className="mt-6 font-semibold text-xl">Third-Party Links</h4>
        <p className="text-gray-700 leading-relaxed">
          Our website may contain links to third-party websites. We are not
          responsible for the content, privacy policies, or practices of any
          external websites.
        </p>

        <h4 className="mt-6 font-semibold text-xl">Intellectual Property</h4>
        <p className="text-gray-700 leading-relaxed">
          All content on FreshersJobs—including text, graphics, and design—is
          the property of FreshersJobs and may not be copied or reproduced
          without prior written consent.
        </p>

        <h4 className="mt-6 font-semibold text-xl">Limitation of Liability</h4>
        <p className="text-gray-700 leading-relaxed">
          FreshersJobs will not be held responsible for any loss, damage, or
          inconvenience caused due to the use of our platform or reliance on
          job listings.
        </p>

        <h4 className="mt-6 font-semibold text-xl">Changes to Terms</h4>
        <p className="text-gray-700 leading-relaxed">
          We may update these Terms &amp; Conditions periodically. Continued use
          of our website indicates acceptance of updated terms.
        </p>

        <h4 className="mt-6 font-semibold text-xl">Contact Us</h4>
        <p className="text-gray-700 leading-relaxed">
          For any questions regarding these Terms &amp; Conditions, reach out at:
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
