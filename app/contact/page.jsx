"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", msg: "Please fill all fields." });
      return;
    }

    setStatus({ type: "loading", msg: "Sending message..." });

    // Note: In production, you would use a service like EmailJS or a Next.js API route here
    setTimeout(() => {
      setStatus({
        type: "success",
        msg: "Thank you! We will get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 fade-in-up border">

      <h2 className="text-3xl font-bold text-blue-600 mb-3">Contact Us</h2>

      <p className="text-gray-700 mb-4">
        Have questions, suggestions, or want to collaborate? &nbsp;
        Fill out the form and we&apos;ll respond soon.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold block">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold block">Email</label>
          <input
            type="email"
            name="email"
            placeholder="yourname@email.com"
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold block">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="How can we help you?"
            className="w-full border rounded-lg p-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status?.type === "loading"}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-blue-300"
        >
          {status?.type === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && (
        <div
          className={`mt-4 p-3 text-center rounded-lg ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : status.type === "error"
              ? "bg-red-100 text-red-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {status.msg}
        </div>
      )}

      <hr className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-lg mb-2">Direct Contact</h4>
          <p className="text-sm"><strong>Email:</strong> <a href="mailto:chetuchethan87@gmail.com" className="text-blue-600 underline">chetuchethan87@gmail.com</a></p>
          <p className="text-sm"><strong>Location:</strong> Bengaluru, Karnataka, India</p>
        </div>
        
        <div>
          <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
          <p className="text-sm text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-sm text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t">
        <h4 className="font-semibold text-lg mb-2">Social Professional Profile</h4>
        <a
          href="https://www.linkedin.com/in/chethan-m-p-15691236a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:underline"
        >
          Connect with Chethan on LinkedIn
        </a>
      </div>

      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp .7s forwards;
        }
        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}