"use client";

import { useState } from "react";

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
      setStatus({ type: "error", msg: "Please fill all required fields." });
      return;
    }

    setStatus({ type: "loading", msg: "Transmitting message..." });

    // Simulation of API call
    setTimeout(() => {
      setStatus({
        type: "success",
        msg: "Message sent! Our career team will contact you within 24-48 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="mb-8">
        <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-3">
          Send a <span className="text-blue-600">Direct Message</span>
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Have a specific query regarding a listing or partnership? Our editorial 
          team reviews every inquiry personally.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Inquiry Details</label>
          <textarea
            name="message"
            rows="4"
            placeholder="How can our career strategists assist you today?"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status?.type === "loading"}
          className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-[0.98] disabled:bg-slate-300 shadow-lg shadow-blue-200"
        >
          {status?.type === "loading" ? "Processing..." : "Submit Inquiry"}
        </button>
      </form>

      {/* STATUS ALERTS */}
      {status && (
        <div
          className={`mt-6 p-4 text-sm font-medium text-center rounded-xl animate-in zoom-in-95 duration-300 ${
            status.type === "success"
              ? "bg-green-50 text-green-700 border border-green-100"
              : status.type === "error"
              ? "bg-red-50 text-red-700 border border-red-100"
              : "bg-blue-50 text-blue-700 border border-blue-100"
          }`}
        >
          {status.msg}
        </div>
      )}

      <div className="mt-10 pt-8 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-black uppercase tracking-tighter text-slate-900 mb-3 underline decoration-blue-500 decoration-2">Corporate HQ</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Email:</strong> <a href="mailto:chetuchethan87@gmail.com" className="text-blue-600 hover:text-slate-900 transition">chetuchethan87@gmail.com</a><br />
              <strong>Location:</strong> Bengaluru, KA, India
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-black uppercase tracking-tighter text-slate-900 mb-3 underline decoration-blue-500 decoration-2">Response Protocol</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Mon - Fri:</strong> 9:00 AM — 6:00 PM IST<br />
              <strong>Urgent:</strong> Connect via verified LinkedIn profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}