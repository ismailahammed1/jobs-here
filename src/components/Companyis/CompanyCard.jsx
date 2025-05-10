// components/CompanyCard.jsx
import { motion } from "framer-motion";

const CompanyCard = ({ logo, name, location, positions, color }) => (
  <motion.div
    className="bg-white rounded-lg border-2 border-dashed p-6 flex flex-col items-center shadow-sm hover:shadow-lg transition min-w-[200px]"
    style={{ borderColor: color }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.04 }}
    transition={{ duration: 0.4, type: "spring" }}
  >
    <div className="text-4xl mb-3">{logo}</div>
    <h3 className="font-semibold text-base text-center">{name}</h3>
    <p className="text-xs text-gray-500 mb-4 text-center">{location}</p>
    <span
      className="px-3 py-1 rounded text-xs font-semibold bg-red-600 text-white hover:bg-gray-800 hover:text-white"
     
    >
      {positions} Open Position
    </span>
  </motion.div>
);

export default CompanyCard;