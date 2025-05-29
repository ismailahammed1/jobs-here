import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaBriefcase, FaHeart, FaRegClock, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const candidates = [
  {
    name: "Mibraj Alex",
    title: "Construction & Property",
    location: "Georgetown, Canada",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    time: "10 ago",
    featured: false,
  },
  {
    name: "Felica Kareon",
    title: "SEO Expert",
    location: "Georgetown, USA",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    time: "50 ago",
    featured: false,
  },
  {
    name: "Malisa Petel",
    title: "Project Management",
    location: "Houston, USA",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    time: "10 ago",
    featured: true,
  },
  {
    name: "Quence Joes",
    title: "Web Developer",
    location: "Augusta, Maine",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    time: "80 ago",
    featured: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 80 }
  }),
  hover: { scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }
};

const socialVariants = {
  initial: { opacity: 0, y: 10 },
  hover: { opacity: 1, y: 0, transition: { delay: 0.1 } }
};

export default function FeaturedCandidates() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Featured Candidates</h2>
        <p className="text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {candidates.map((c, i) => (
            <motion.div
              key={c.name}
              className={`relative bg-white rounded-lg shadow-md w-56 overflow-hidden border group border-gray-100`}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="relative">
                <img src={c.image} alt={c.name} className="w-full h-36 object-cover" />
              
                {/* Social icons on hover */}
                <motion.div
                  className="absolute inset-0 flex mt-24 justify-center  space-x-4 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  initial="initial"
                  whileHover="hover"
                  variants={socialVariants}
                >
                  <a href="#" className="text-red-500 text-xl hover:text-white transition"><FaLinkedin /></a>
                  <a href="#" className="text-red-500 text-xl hover:text-white transition"><FaTwitter /></a>
                  <a href="#" className="text-red-500 text-xl hover:text-white transition"><FaFacebook /></a>
                </motion.div>
              </div>
              <div className="p-4">
                <h3 className={`font-semibold text-base mb-1 text-gray-900`}>{c.name}</h3>
                <div className="flex items-center text-gray-500 text-xs mb-1">
                  <FaBriefcase className="mr-1" /> {c.title}
                </div>
                <div className="flex items-center text-gray-400 text-xs mb-2">
                  <FaMapMarkerAlt className="mr-1" /> {c.location}
                </div>
                <div className="flex items-center text-gray-400 text-xs">
                  <FaRegClock className="mr-1" /> {c.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Dots for carousel (static for now) */}
        <div className="flex justify-center mt-4 gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
}