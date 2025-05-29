// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const PostJobForm = () => {
 
  const [form, setForm] = useState({
    title: "",
    category: "",
    company: "",
    email: "",
    website: "",
    location: "",
    type: "",
    tags: "",
    salary: "",
    requirements: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job Posted!");
    // Add your submit logic here
  };
  const breadcrumb = [
  { label: 'Home', link: '/' },
  { label: 'Post A Job' }
];

  return (
    <>
    <PageHeader title="Find A Job" breadcrumb={breadcrumb} />
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <motion.form
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-full max-w-3xl"
      >
        <h2 className="text-center text-xl md:text-2xl font-bold text-blue-900 mb-6">
          Fill Up Your Job Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Job Title or Keyword"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Job Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Category</option>
              <option value="IT">IT</option>
              <option value="Health">Health</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company Name</label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Company Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g. info@company.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Company Website (Optional)</label>
            <input
              type="url"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g. www.company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Location"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Remote">Remote</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Job Tags</label>
            <input
              type="text"
              name="tags"
              value={form.tags}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g. web design, graphic design, video editing"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Salary (Optional)</label>
            <input
              type="text"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g. $25,000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Requirements</label>
            <input
              type="text"
              name="requirements"
              value={form.requirements}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="e.g. 2+ years"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Job Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={4}
            placeholder="Job Description"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-2 rounded transition"
          >
            Post a Job
          </button>
        </div>
      </motion.form>
    </div>
    </>
    
  );
}
export default PostJobForm