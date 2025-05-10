// components/TopCompanies.jsx
import { SiAngular, SiReact, SiLandrover, SiGreensock } from "react-icons/si";
import CompanyCard from "./CompanyCard";

const companies = [
  {
    logo: <SiAngular className="text-red-600" />,
    name: "Trophy & Sans",
    location: "Cross Lane, London",
    positions: 25,
    color: "#ef4444", // Tailwind red-500
  },
  {
    logo: <SiReact className="text-red-600" />,
    name: "Trout Design",
    location: "Park Avenue, Mumbai",
    positions: 35,
    color: "#ef4444", 
  },
  {
    logo: <SiLandrover className="text-orange-600" />,
    name: "Restland LTD",
    location: "Buna Quasco, Leeds",
    positions: 30,
    color: "#ef4444", // Tailwind red-500
  },
  {
    logo: <SiGreensock className="text-orange-600"/>,
    name: "Lawn Hopper",
    location: "Wesley Rd, London",
    positions: 45,
    color: "#ef4444", // Tailwind red-500
  },
];

const TopCompanies = () => (
  <section className="py-16">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Top Companies</h2>
      <p className="text-gray-400 text-center mb-8 text-sm max-w-xl mx-auto">
       Discover leading employers who are actively hiring and shaping the future of their industries. Explore opportunities with top-rated companies known for their innovation, workplace culture, and commitment to employee growth.

      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {companies.map((company, idx) => (
          <CompanyCard key={idx} {...company} />
        ))}
      </div>
    </div>
  </section>
);

export default TopCompanies;