"use client";

import { useState } from "react";
import axios from "axios";
import {
  CheckCircle,
  AlertCircle,
  Lightbulb,
  Gauge,
  Loader2,
} from "lucide-react";

export default function ResumeChecker() {
  const [jobDesc, setJobDesc] = useState("");
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => setResume(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume || !jobDesc)
      return setError("⚠️ Upload resume and enter job description first.");

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("jobDesc", jobDesc);

      const response = await axios.post(
        "https://freshersjobs-shop.onrender.com/api/resume-checker",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const data = response.data || {};

      setResult({
        atsScore: data.ats_score || 0,
        atsFriendliness: data.ats_friendliness || "Unknown",
        strengths: data.strengths || [],
        weaknesses: data.weaknesses || [],
        recommendations: data.recommendations || [],
      });
    } catch (err) {
      console.error(err);
      setError("❌ Error analyzing resume. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black px-4 py-10 max-w-4xl mx-auto">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">📄 ATS Resume Checker</h1>
        <p className="text-gray-600 mt-2">Analyze your resume for ATS compatibility</p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
      >
        {/* Resume Upload */}
        <div className="mb-5">
          <label className="font-semibold">Upload Resume (PDF)</label>
          <input
            type="file"
            accept="application/pdf"
            className="w-full border border-gray-300 rounded-lg mt-2 p-2"
            onChange={handleFileChange}
          />
        </div>

        {/* JD Input */}
        <div className="mb-5">
          <label className="font-semibold">Job Description</label>
          <textarea
            rows={5}
            className="w-full border border-gray-300 rounded-lg mt-2 p-3"
            placeholder="Paste job description here..."
            value={jobDesc}
            onChange={(e) => setJobDesc(e.target.value)}
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin" size={20} /> Analyzing...
            </span>
          ) : (
            "Check Resume"
          )}
        </button>
      </form>

      {/* ERROR */}
      {error && (
        <div className="mt-5 bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg">
          {error}
        </div>
      )}

      {/* RESULTS */}
      {!loading && result && (
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6 shadow-sm fade-in">

          {/* Score */}
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <Gauge className="text-blue-600" size={22} /> ATS Score
          </h3>
          <p className="text-xl font-semibold mt-1">
            {result.atsScore} / 100
          </p>

          {/* ATS Friendliness */}
          <h3 className="mt-5 text-lg font-bold">ATS Friendliness</h3>
          <p className="text-gray-700 font-medium">
            {result.atsFriendliness}
          </p>

          {/* Strengths */}
          {result.strengths.length > 0 && (
            <div className="mt-6">
              <h4 className="font-bold flex gap-2 items-center">
                <CheckCircle size={20} className="text-green-600" /> Strengths
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-green-700">
                {result.strengths.map((s, i) => (
                  <li key={i}>✔ {s}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Weaknesses */}
          {result.weaknesses.length > 0 && (
            <div className="mt-6">
              <h4 className="font-bold flex gap-2 items-center">
                <AlertCircle size={20} className="text-red-600" /> Weaknesses
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-red-700">
                {result.weaknesses.map((w, i) => (
                  <li key={i}>✘ {w}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommendations */}
          {result.recommendations.length > 0 && (
            <div className="mt-6">
              <h4 className="font-bold flex gap-2 items-center">
                <Lightbulb size={20} className="text-yellow-500" /> Recommendations
              </h4>
              <ul className="mt-2 space-y-1 text-sm text-yellow-700">
                {result.recommendations.map((r, i) => (
                  <li key={i}>💡 {r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* LOADING OVERLAY */}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Loader2 className="animate-spin mx-auto mb-3" size={40} />
            <p className="font-semibold">Analyzing your resume...</p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
