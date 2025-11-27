"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10 fade-up">

      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div className="fade-delay" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-2xl font-bold">
            <span className="text-blue-500">Freshers</span>Jobs
          </h3>

          <p className="text-gray-300 mt-3 leading-relaxed">
            Discover verified jobs, internships & opportunities that help you
            build a successful career.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/chethan-m-p-15691236a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white text-2xl hover-icon transition"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="fade-delay" style={{ animationDelay: "0.2s" }}>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>

          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/jobs" className="hover-link">Jobs</Link>
            </li>
            <li>
              <Link href="/internships" className="hover-link">
                Internships
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover-link">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover-link">Contact Us</Link>
            </li>
            <li>
              <Link href="/terms" className="hover-link">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover-link">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="fade-delay" style={{ animationDelay: "0.3s" }}>
          <h4 className="text-xl font-semibold mb-3">Contact</h4>

          <p className="text-gray-300">
            📧{" "}
            <a
              href="mailto:chetuchethan87@gmail.com"
              className="hover-link"
            >
              chetuchethan87@gmail.com
            </a>
          </p>

          <p className="text-gray-300 mt-2">📍 Bangalore, India</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gray-800 text-center py-3 fade-delay" style={{ animationDelay: "0.4s" }}>
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} <strong>FreshersJobs</strong>.  
          All rights reserved.
        </p>
      </div>

      {/* ANIMATIONS + HOVER STYLES */}
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.7s ease forwards;
        }
        .fade-delay {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.7s ease forwards;
        }
        .hover-link {
          color: #e5e7eb;
          transition: 0.3s;
        }
        .hover-link:hover {
          color: #3b82f6;
          text-decoration: underline;
        }
        .hover-icon:hover {
          color: #3b82f6;
          transform: scale(1.15);
          transition: 0.3s;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
}
