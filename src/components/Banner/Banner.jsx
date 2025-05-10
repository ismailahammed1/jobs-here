import React from "react";
import bannerBG from "../../assets/image/bannerBG.jpg";
import ismail from "../../assets/3.jpg";

const Banner = () => {
  return (
    <div className="relative w-full lg:h-[600px] overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${bannerBG})`,
          backgroundBlendMode: "multiply",
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-12">
        {/* Image Section - Centered on mobile, left on desktop */}
        <div className="relative z-10 text-center lg:text-left max-w-2xl">
          <h1 className="text-red-500 text-lg font-bold mb-2">
            Find Jobs, Employment & Career Opportunities
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Find Your Dream Job With Us
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Discover thousands of job opportunities from top employers worldwide.
            Start your career journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-red-600 hover:bg-white  text-white  hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Browse Jobs
            </button>
            <button className="bg-transparent border-2 border-red-600 text-white hover:bg-red-700 hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>


        <div className="relative h-[400px] w-[00px] md:h-[400px] md:w-[400px] shrink-0">
          <div className="absolute inset-0 overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] border-4 border-white/20">
            <img
              src={ismail}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text Content - Centered always */}
       
      </div>
    </div>
  );
};

export default Banner