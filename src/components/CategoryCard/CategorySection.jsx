import React from "react";
import { IoCalculatorSharp } from "react-icons/io5";
import { MdCastForEducation, MdEngineering, MdOutlineTapas } from "react-icons/md";
import { BiSolidCarMechanic } from "react-icons/bi";
import { PiBankThin } from "react-icons/pi";
import { GiHealthPotion } from "react-icons/gi";
import CategoryCard from "./CategoryCard";
import { GoLaw } from "react-icons/go";

const categories = [
  {
    name: "Accountancy",
    icon: <IoCalculatorSharp />,
    description: "Work in finance, auditing, or bookkeeping. Help companies stay on top of budgets and compliance.",
  },
  {
    name: "Education",
    icon: <MdCastForEducation />,
    description: "Inspire and shape minds as a teacher, tutor, or educational administrator across various institutions.",
  },
  {
    name: "Automotive Jobs",
    icon: <BiSolidCarMechanic />,
    description: "Join the automotive world in roles like mechanic, engineer, or sales executive.",
  },
  {
    name: "Banking",
    icon: <PiBankThin />,
    description: "Build your career in banking, finance, or investment with top financial institutions.",
  },
  {
    name: "Health Care",
    icon: <GiHealthPotion />,
    description: "Make a difference in roles such as nurse, doctor, therapist, or health administrator.",
  },
  {
    name: "IT & Agency",
    icon: <MdOutlineTapas />, 
    description: "Be part of the tech revolution. Find jobs in software, web development, and digital agencies.",
  },
  {
    name: "Engineering",
    icon: <MdEngineering />, 
    description: "Tackle real-world problems in civil, mechanical, or electrical engineering fields.",
  },
  {
    name: "Legal",
    icon: <GoLaw />, 
    description: "Work in law firms or corporate legal departments as a lawyer, paralegal, or legal assistant.",
  },
];

const CategorySection = () => (
  <div className="mt-16 px-4 pb-16">
    <h2 className="text-4xl font-semibold mb-2 w-xl mx-auto text-center">Choose Your Category</h2>
    <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-center">
      Explore jobs across multiple industries and discover where your passion and talent can thrive.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {categories.map((cat, index) => (
        <CategoryCard
          key={index}
          icon={cat.icon}
          name={cat.name}
          description={cat.description}
        />
      ))}
    </div>
  </div>
);

export default CategorySection;