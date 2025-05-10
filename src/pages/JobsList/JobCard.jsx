// components/JobCard.jsx
import { motion } from "framer-motion";

const JobCard = ({
  icon,
  title,
  company,
  salary,
  location,
  time,
  type,
  onBrowse,
}) => (
  <motion.div
    className="bg-white rounded-lg shadow p-6 flex items-center justify-between mb-4"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, type: "spring" }}
    whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
  >
    <div className="flex items-center gap-4">
      <span className="text-4xl">{icon}</span>
      <div>
        <h3 className="font-semibold text-base mb-1">{title}</h3>
        <div className="flex flex-wrap gap-2 text-xs text-gray-500">
          <span>{company}</span>
          <span>• {salary}</span>
          <span>• {location}</span>
          <span>• {time}</span>
        </div>
        <div className="mt-2">
          <span className="inline-block bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded font-semibold">
            {type}
          </span>
        </div>
      </div>
    </div>
    <button
      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-semibold transition"
      onClick={onBrowse}
    >
      Browse Job
    </button>
  </motion.div>
);

export default JobCard;