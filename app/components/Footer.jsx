"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";

// Hydration-Safe Helper
const subscribe = () => () => {};
function useIsClient() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

export default function Footer() {
  const isClient = useIsClient();

  // Prevents mismatch during hydration
  if (!isClient) return <footer className="bg-gray-900 h-20" />;

  return (
    <footer className="bg-gray-900 text-white mt-10 fade-up">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand Section */}
        <div className="fade-delay" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-2xl font-black tracking-tighter">
            <span className="text-blue-500">Freshers</span>Jobs<span className="text-sm font-light text-gray-400">.shop</span>
          </h3>
          <p className="text-gray-400 mt-4 leading-relaxed text-sm">
            Empowering Indian graduates with manually verified off-campus drives, 
            internships, and career roadmaps. Your professional journey starts here.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/chethan-m-p-15691236a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-2xl transition-all hover:scale-110"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Quick Links - UPDATED PATHS */}
        <div className="fade-delay" style={{ animationDelay: "0.2s" }}>
          <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-blue-500">Resources</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link href="/jobs" className="hover-link">Latest Job Openings</Link></li>
            <li><Link href="/internships" className="hover-link">Internship Programs</Link></li>
            <li><Link href="/about" className="hover-link">Our Verification Process</Link></li>
            <li><Link href="/contact" className="hover-link">Contact Support</Link></li>
            <li><Link href="/privacy" className="hover-link">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover-link">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="fade-delay" style={{ animationDelay: "0.3s" }}>
          <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-blue-500">Official Channel</h4>
          <div className="space-y-4 text-sm text-gray-300">
            <p className="flex items-center gap-3">
              <span className="text-xl">📩</span>
              <a href="mailto:chetuchethan87@gmail.com" className="hover-link">
                chetuchethan87@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              Bangalore, Karnataka, India
            </p>
            <div className="mt-6 p-4 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Safety Note</p>
              <p className="text-[11px] leading-tight text-gray-300">
                FreshersJobs.shop never charges candidates for placement services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR - Hydration Safe Year */}
      <div className="bg-black/30 border-t border-gray-800 text-center py-6">
        <p className="text-gray-500 text-xs tracking-widest">
          © {new Date().getFullYear()} <span className="text-gray-300 font-bold uppercase">FreshersJobs.shop</span> | A CHETHAN M P INITIATIVE
        </p>
      </div>

      <style>{`
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        .fade-delay { opacity: 0; animation: fadeUp 0.7s ease forwards; }
        .hover-link { transition: 0.2s; }
        .hover-link:hover { color: #3b82f6; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </footer>
  );
}