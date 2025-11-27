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
        Have questions, suggestions, or want to collaborate?  
        Fill out the form and we’ll respond soon.
      </p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-lg p-2 mt-1"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-lg p-2 mt-1"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="font-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full border rounded-lg p-2 mt-1"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status?.type === "loading"}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
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

      <hr className="my-5" />

      <h4 className="font-semibold text-lg mb-2">Contact Information</h4>
      <p><strong>Email:</strong> <a href="mailto:chetuchethan87@gmail.com" className="text-blue-600 underline">chetuchethan87@gmail.com</a></p>
      <p><strong>Location:</strong> Bengaluru, Karnataka, India</p>

      <h4 className="font-semibold text-lg mt-4">Follow Me</h4>
      <a
        href="https://www.linkedin.com/in/chethan-m-p-15691236a"
        target="_blank"
        className="text-blue-600 underline"
      >
        LinkedIn
      </a>

      {/* Animations */}
      <style>{`
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
