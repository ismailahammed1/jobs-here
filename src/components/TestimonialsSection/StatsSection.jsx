// components/StatsSection.jsx
import { FaRegFileAlt, FaUserTie, FaBriefcase, FaUserFriends } from "react-icons/fa";

const stats = [
  {
    icon: <FaRegFileAlt className="text-4xl text-red-600 mb-2" />,
    value: 1225,
    label: "Job Posted",
  },
  {
    icon: <FaUserTie className="text-4xl text-red-600 mb-2" />,
    value: 145,
    label: "Job Filled",
  },
  {
    icon: <FaBriefcase className="text-4xl text-red-600 mb-2" />,
    value: 170,
    label: "Company",
  },
  {
    icon: <FaUserFriends className="text-4xl text-red-600 mb-2" />,
    value: 125,
    label: "Members",
  },
];

const StatsSection = () => (
  <section className="bg-[#010d28] py-12">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0">
      {stats.map((stat, idx) => (
        <div key={idx} className="flex-1 flex flex-col items-center text-center">
          {stat.icon}
          <div className="text-2xl font-bold text-white">{stat.value}</div>
          <div className="text-xs text-gray-200 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;