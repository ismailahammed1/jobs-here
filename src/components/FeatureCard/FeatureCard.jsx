import React from 'react';
import { SiGooglesearchconsole, SiLibreofficewriter } from 'react-icons/si';
import Recruiter from '../../assets/Icon/Recruiter.png'
import { TbWorldSearch } from 'react-icons/tb';

const FeatureCard = () => {
  const features = [
    {
      icon: <SiLibreofficewriter className="rounded-full text-5xl" />,
      title: "Advertise Job",
      description: "Post your job openings in minutes and get them in front of thousands of qualified candidates with our smart targeting system.",
    },
    {
      icon:<SiGooglesearchconsole className="rounded-full text-5xl"/>,
      title: "Recruiter Profiles",
      description: "Build your employer brand by creating a recruiter profile to showcase your culture, values, and active job listings.",
    },
    {
      icon:<TbWorldSearch className="rounded-full text-5xl"/>,
      title: "Find Your Dream Job",
      description: "Discover personalized job recommendations that match your skills, experience, and goals — all in one place.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className= " w-96 h-64 group border border-dashed border-red-500 p-6 rounded shadow transition-all duration-300 hover:bg-red-600 hover:text-white"
        >
          <div className=" mb-4 text-red-500 group-hover:text-white flex justify-center items-center">{feature.icon}</div>
          <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-white">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-500 group-hover:text-white">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
