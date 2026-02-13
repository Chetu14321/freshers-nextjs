"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

/* 🔒 HIDE AUTH DURING ADSENSE REVIEW */
const HIDE_AUTH_FOR_ADSENSE = true;

/* ----------- LINK GROUPS ----------- */
const mainLinks = [
  { href: "/jobs", label: "Jobs" },
  { href: "/blog", label: "Blog" },
  { href: "/internships", label: "Internships" },
  { href: "/resume-checker", label: "ATS Checker" },
];

const aboutLinks = [
  { href: "/about", label: "About" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/disclaimer", label: "Disclaimer"}
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState(null);

  /* 🔕 DISABLE AUTH FETCH WHEN HIDDEN */
  useEffect(() => {
    if (HIDE_AUTH_FOR_ADSENSE) return;

    (async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/auth/me`, {
          credentials: "include",
        });
        if (!res.ok) return setUser(null);
        const data = await res.json();
        setUser(data?.user || null);
      } catch {
        setUser(null);
      }
    })();
  }, [pathname]);

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  const handleLogin = () => {
    window.location.href = `${BACKEND_URL}/auth/google`;
  };

  const handleLogout = async () => {
    try {
      await fetch(`${BACKEND_URL}/auth/logout`, {
        credentials: "include",
      });
    } catch {}
    setUser(null);
    setDropdown(false);
    window.location.href = "/";
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-white/90 backdrop-blur-lg border-b shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-extrabold text-blue-600">
            FreshersJobs<span className="text-gray-900">.shop</span>
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-5 text-sm font-medium items-center">

              {/* MAIN LINKS */}
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-1.5 rounded-md transition ${
                      isActive(link.href)
                        ? "bg-blue-600 text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* ABOUT DROPDOWN */}
              <li className="relative group">
                <span
                  className={`px-3 py-1.5 rounded-md cursor-pointer transition ${
                    aboutLinks.some((l) => isActive(l.href))
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  About
                </span>

                <div className="absolute left-0 top-full mt-2 w-44 bg-white border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                        isActive(link.href)
                          ? "font-semibold text-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>

            {/* 🔕 AUTH HIDDEN FOR ADSENSE */}
            {!HIDE_AUTH_FOR_ADSENSE && (
              user ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdown(!dropdown)}
                    className="flex items-center gap-2 px-3 py-1.5 border rounded-md bg-gray-50 hover:bg-gray-100"
                  >
                    <User size={18} />
                    <span className="text-sm font-semibold">
                      {user.name?.split(" ")[0]}
                    </span>
                  </button>

                  {dropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-md p-2">
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
                  className="px-4 py-1.5 bg-blue-600 text-white rounded-md font-semibold text-sm hover:bg-blue-700"
                >
                  Sign In
                </button>
              )
            )}
          </div>

          {/* ================= MOBILE MENU ICON ================= */}
        <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded hover:bg-gray-100 border border-black" // Added border as per your style
              aria-label="Open Navigation Menu" // <--- This fixes the Accessibility error
            >
              <Menu size={26} />
            </button>
        </div>
      </nav>

      {/* ================= MOBILE OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h3 className="text-lg font-semibold">Menu</h3>
          <button 
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
          >
            <X size={26} />
          </button>
        </div>

        <ul className="flex flex-col gap-1 mt-4 px-4 font-medium">
          {[...mainLinks, ...aboutLinks].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md ${
                  isActive(link.href)
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* 🔕 MOBILE AUTH HIDDEN */}
          {!HIDE_AUTH_FOR_ADSENSE && (
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
                    className="w-full px-3 py-2 mt-2 bg-red-500 text-white rounded-md"
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
          )}
        </ul>
      </div>

      {/* SPACER */}
      <div className="h-16" />
    </>
  );
}
