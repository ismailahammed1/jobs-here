// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { SiVuedotjs } from "react-icons/si";
import { FaCheckCircle, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const job = {
  icon: <SiVuedotjs className="text-green-500 text-4xl" />,
  title: "Web Designer, Graphic Designer, UI/UX Designer",
  location: "Walsallby Rd, London",
  category: "Accountancy",
  type: "Freelance",
  applyBefore: "June 01, 2024",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...`,
  requirements: [
    "Work experience",
    "Skills (both soft and/or technical skills)",
    "Why you want this job and qualifications",
    "Subject and relevant role to graduates.",
    "Could add another requirement here as well if appropriate."
  ],
  company: "Your UI Design LTD",
  experience: "2 Years",
  language: "English",
  salary: "$15,000",
  jobType: "Full Time",
  email: "hello@company.com",
  website: "www.company.com",
  poster: {
    name: "John Doe",
    title: "CEO of Your UI Design LTD",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  keywords: [
    "Web Design", "Css Selectors", "SEO", "Content Writer", "Figma", "Business", "React.js", "Graphic", "Video"
  ],
  mapSrc: "https://www.openstreetmap.org/export/embed.html?bbox=-74.25909%2C40.477399%2C-73.700272%2C40.917577&layer=mapnik"
};

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const JobDetailsPage = () => {
  
  return (
    <motion.div
      className="bg-gray-50 min-h-screen py-8 px-2"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 bg-white rounded-xl shadow p-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div>{job.icon}</div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">{job.title}</h1>
              <div className="flex flex-wrap gap-2 text-gray-500 text-sm mt-1">
                <span className="flex items-center gap-1"><FaMapMarkerAlt /> {job.location}</span>
                <span> | {job.category}</span>
                <span> | {job.type}</span>
              </div>
              <div className="text-red-500 text-xs mt-1">Apply Before: {job.applyBefore}</div>
            </div>
          </div>
          {/* Description */}
          <div className="mb-4">
            <h2 className="font-semibold text-lg mb-1">Description</h2>
            <p className="text-gray-600 text-sm">{job.description}</p>
          </div>
          {/* Requirements */}
          <div className="mb-4">
            <h2 className="font-semibold text-lg mb-1">Requirements</h2>
            <ul className="list-none space-y-1 text-gray-600 text-sm">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" /> {req}
                </li>
              ))}
            </ul>
          </div>
          {/* Job Details */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">Job Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div><span className="font-semibold ">Company:</span> {job.company}</div>
              <div><span className="font-semibold">Experience:</span> {job.experience}</div>
              <div><span className="font-semibold">Location:</span> {job.location}</div>
              <div><span className="font-semibold">Language:</span> {job.language}</div>
              <div><span className="font-semibold">Job Type:</span> {job.jobType}</div>
              <div><span className="font-semibold">Salary:</span> {job.salary}</div>
              <div className="flex items-center gap-1">
                <FaEnvelope className="text-gray-400" />
                <span className="font-semibold">Email:</span>
                <a href={`mailto:${job.email}`} className="text-blue-600 hover:underline">{job.email}</a>
              </div>
              <div className="flex items-center gap-1">
                <FaGlobe className="text-gray-400" />
                <span className="font-semibold">Website:</span>
                <a href={`https://${job.website}`} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">{job.website}</a>
              </div>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition font-semibold">
            Apply Now
          </button>
        </div>
        {/* Sidebar */}
        <div className="w-full lg:w-80 flex flex-col gap-6">
          {/* Poster */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Posted By</span>
            <img src={job.poster.avatar} alt={job.poster.name} className="w-16 h-16 rounded-full mb-2" />
            <div className="font-semibold">{job.poster.name}</div>
            <div className="text-xs text-gray-500">{job.poster.title}</div>
          </div>
          {/* Location Map */}
          <div className="bg-white rounded-xl shadow p-4">
            <span className="text-gray-400 text-sm mb-2 block">Location</span>
            <iframe
              title="map"
              src={job.mapSrc}
              className="w-full h-36 rounded"
              loading="lazy"
            ></iframe>
          </div>
          {/* Keywords */}
          <div className="bg-white rounded-xl shadow p-4">
            <span className="text-gray-400 text-sm mb-2 block">Keywords</span>
            <div className="flex flex-wrap gap-2">
              {job.keywords.map((kw, i) => (
                <span key={i} className="bg-gray-100 hover:bg-red-600 text-xs px-2 py-1 rounded">{kw}</span>
              ))}
            </div>
          </div>
          {/* Social Share */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Share In</span>
            <div className="flex gap-3">
              <a href="#" className="text-red-500 hover:text-red-700 text-xl"><FaLinkedin /></a>
              <a href="#" className="text-red-500 hover:text-red-700 text-xl"><FaTwitter /></a>
              <a href="#" className="text-red-500 hover:text-red-700 text-xl"><FaFacebook /></a>
              <a href="#" className="text-red-500 hover:text-red-700 text-xl"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default JobDetailsPage
