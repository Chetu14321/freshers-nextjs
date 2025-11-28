"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const BACKEND_URL = "https://freshersjobs-shop.onrender.com";

export default function JobDetails() {
  const params = useParams();
  const id = params?.id;

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadJob = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (err) {
        console.log("Error loading job:", err);
      }
      setLoading(false);
    };

    loadJob();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!job?._id) return <p className="p-6">Job Not Found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>

      {job.img && (
        <img src={job.img} className="w-full h-64 object-cover rounded-lg mt-4" />
      )}

      <div className="mt-6 space-y-2">
        <p><b>Location:</b> {job.location}</p>
        <p><b>Experience:</b> {job.experience}</p>
        <p><b>Salary:</b> {job.salary}</p>
        <p><b>Role:</b> {job.role}</p>
      </div>

      <p className="mt-4 text-gray-800 whitespace-pre-line">
        {job.description}
      </p>

      <a
        href={job.applyUrl}
        target="_blank"
        className="block mt-6 bg-blue-600 text-white py-3 text-center rounded-md"
      >
        Apply Now
      </a>
    </div>
  );
}
