"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`${BACKEND_URL}/auth/me`, {
          credentials: "include",
        });

        const data = await res.json();
        console.log("PROFILE PAGE USER:", data);

        if (res.ok && data.authenticated) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.log("Profile fetch error:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [pathname]);

  if (loading)
    return <p className="mt-5 text-gray-600 text-sm">Loading your profile...</p>;

  if (!user) {
    return (
      <section className="mt-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">My Profile</h1>
        <div className="border rounded-lg bg-white px-5 py-5 shadow-sm">
          <p className="text-sm text-gray-600">
            You are currently not logged in.  
            Please sign in to access your personalized dashboard and profile
            details.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-6 max-w-md">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="border rounded-lg bg-white px-5 py-5 shadow-sm flex gap-4 items-center">
        <img
          src={user.picture}
          alt="Profile"
          className="w-16 h-16 rounded-full border object-cover"
        />

        <div>
          <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
          <p className="text-gray-700 text-sm">{user.email}</p>

          <p className="text-gray-500 text-xs mt-1">
            Google Account Connected
          </p>
        </div>
      </div>

      <div className="mt-5 border rounded-lg bg-white px-5 py-5 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-800">Profile Overview</h3>
        <p className="text-sm text-gray-600 mt-1 leading-relaxed">
          Your account is successfully authenticated. Soon, you will be able to
          view your saved jobs, applied roles, job recommendations, resume
          insights, and more personalized career tools.
        </p>
      </div>
    </section>
  );
}
