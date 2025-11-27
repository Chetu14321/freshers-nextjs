"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

const links = [
  { href: "/jobs", label: "Jobs" },
  { href: "/internships", label: "Internships" },
  { href: "/resume-checker", label: "ATS Checker" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  /* ------------------------------------------------
        LOAD USER (no console warnings for 401)
  ---------------------------------------------------*/
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/auth/me`, {
          credentials: "include",
        });

        if (res.status === 401) {
          setUser(null); // Not logged in — silent fail (Lighthouse fix)
          return;
        }

        const data = await res.json();

        if (res.ok && data.authenticated) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch {
        setUser(null);
      }
    })();
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/jobs" && pathname.startsWith("/job")) return true;
    if (href === "/internships" && pathname.startsWith("/internships"))
      return true;
    return pathname === href;
  };

  const handleLogin = () => {
    window.location.href = `${BACKEND_URL}/auth/google`;
  };

  const handleLogout = async () => {
    await fetch(`${BACKEND_URL}/auth/logout`, {
      method: "GET",
      credentials: "include",
    });

    setUser(null);
    setDropdown(false);
    window.location.href = "/";
  };

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <nav className="w-full bg-white/90 backdrop-blur-lg border-b shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
            FreshersJobs<span className="text-gray-900">.shop</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">

            {/* LINKS */}
            <ul className="flex gap-5 text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md transition-all
                      ${
                        isActive(link.href)
                          ? "bg-blue-600 text-white font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* AUTH */}
            {user ? (
              <div className="relative">
                <button
                  aria-label="User menu"
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-2 px-3 py-1.5 border rounded-md bg-gray-50 hover:bg-gray-100 transition"
                >
                  <User size={20} className="text-gray-700" />
                  <span className="text-sm font-semibold">
                    {user.name?.split(" ")[0]}
                  </span>
                </button>

                {dropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-md p-2 animate-fadeIn">
                    <Link
                      href="/profile"
                      onClick={() => setDropdown(false)}
                      className="block px-3 py-2 rounded-md hover:bg-gray-100 text-sm"
                    >
                      View Profile
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 rounded-md text-red-600 hover:bg-red-50 text-sm"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="px-4 py-1.5 bg-blue-600 text-white rounded-md font-semibold text-sm hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            )}
          </div>

          {/* MOBILE MENU ICON */}
          <button
            aria-label="Open mobile menu"
            onClick={() => setOpen(true)}
            className="md:hidden p-2 rounded hover:bg-gray-100"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h3 className="text-lg font-semibold">Navigation</h3>
          <button aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-1 mt-4 text-base font-medium px-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md
                  ${
                    isActive(link.href)
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-gray-900 hover:bg-gray-100"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* MOBILE AUTH */}
          <li className="mt-4 border-t pt-4">
            {user ? (
              <>
                <Link
                  href="/profile"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
                >
                  <User size={22} /> My Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-3 py-2 mt-2 bg-red-500 text-white rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="w-full px-3 py-2 mt-2 bg-blue-600 text-white rounded-md"
              >
                Sign In
              </button>
            )}
          </li>
        </ul>
      </div>

      {/* SPACER */}
      <div className="h-16"></div>

      {/* DROPDOWN ANIMATION */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
