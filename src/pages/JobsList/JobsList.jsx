import React, { useState } from "react";
import { SiVuedotjs, SiAppwrite, SiUpwork, SiOpenai, SiBitwarden } from "react-icons/si";
import JobCard from "./JobCard";

const jobs = [
  {
    icon: <SiVuedotjs className="text-green-500" />,
    title: "Web Designer, Graphic Designer, UI/UX Designer",
    company: "Graphic Designer",
    salary: "$25000-$30000",
    location: "Walsall Rd, London",
    time: "6 days ago",
    type: "Fulltime",
  },
  {
    icon: <SiAppwrite className="text-pink-500" />,
    title: "Website Developer & Software Developer",
    company: "Web Developer",
    salary: "$25000-$30000",
    location: "Curtis St, USA",
    time: "6 days ago",
    type: "Fulltime",
  },
  {
    icon: <SiUpwork className="text-blue-400" />,
    title: "Application Developer & Web Designer",
    company: "App Developer",
    salary: "$25000-$30000",
    location: "Walsall Rd, London",
    time: "6 days ago",
    type: "Fulltime",
  },
  {
    icon: <SiOpenai className="text-purple-500" />,
    title: "Frontend & Backend Developer",
    company: "Dev Fusion Pvt.",
    salary: "$25000-$30000",
    location: "San Francisco, US",
    time: "6 days ago",
    type: "Fulltime",
  },
  {
    icon: <SiBitwarden className="text-pink-600" />,
    title: "IT Department & Manager",
    company: "IT Manager",
    salary: "$25000-$30000",
    location: "Walsall Rd, London",
    time: "7 days ago",
    type: "Fulltime",
  },
  // Add more jobs as needed
];

const JOBS_PER_PAGE = 3;

const JobsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);

  const jobsToShow = jobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
<section className="py-16 bg-[url('/src/assets/bg-pattern.svg')] bg-repeat min-h-screen">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Jobs You May Be Interested In</h2>
    <p className="text-gray-400 text-center mb-8 text-sm max-w-xl mx-auto">
      Discover job opportunities tailored to your skills and interests. Explore roles that match your career goals and take the next step in your professional journey.
    </p>
    <div className="space-y-6">
      {jobsToShow.map((job, idx) => (
        <JobCard key={idx} {...job} onBrowse={() => alert("Browse Job Clicked!")} />
      ))}
    </div>
    {/* Pagination */}
    <div className="flex justify-center mt-8 space-x-2">
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          className={`px-3 py-1 rounded ${
            currentPage === idx + 1
              ? "bg-red-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => handlePageChange(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  </div>
</section>
  );
};

export default JobsList;