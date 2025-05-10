import { motion } from "framer-motion";
import { FaUserTie, FaSearch, FaComments, FaGlobe } from "react-icons/fa";


const features = [
  {
    icon: <FaUserTie className="text-red-500 text-2xl mb-2" />,
    title: "Best Talented People",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaSearch className="text-red-500 text-2xl mb-2" />,
    title: "Easy To Find Candidate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaComments className="text-red-500 text-2xl mb-2" />,
    title: "Easy To Communicate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaGlobe className="text-red-500 text-2xl mb-2" />,
    title: "Global Recruitment Option",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const stats = [
  { value: 127, label: "Job Posted" },
  { value: 137, label: "Job Filled" },
  { value: 180, label: "Company" },
  { value: 144, label: "Members" },
];

const ChooseJobHere = () => (
  <section className="w-full bg-white">
    <div className="flex flex-col lg:flex-row min-h-[400px]">
      {/* Left Panel */}
      <div className="bg-[#010d28] flex-1 flex flex-col justify-center px-6 py-12 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
            Why You Choose Jovie?
          </h2>
          <p className="text-gray-300 text-center mb-8 text-sm max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#1a223a] rounded-full mb-2">
                  {f.icon}
                </div>
                <div className="font-semibold text-white">{f.title}</div>
                <div className="text-xs text-gray-400">{f.desc}</div>
              </motion.div>
            ))}
          </div>
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-4">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (idx + 4), duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
              >
                <div className="text-2xl font-bold text-red-500">{s.value}</div>
                <div className="text-xs text-gray-200 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Right Panel */}
      <div className="flex-1 min-h-[300px]">
        <img
          src="https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740719738/career%20counselling/img-002-770x500_tnqv3a.jpg"
          alt="Woman working"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </section>
);

export default ChooseJobHere