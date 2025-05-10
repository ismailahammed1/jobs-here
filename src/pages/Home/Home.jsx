import Banner from "../../components/Banner/Banner";
import { IoMdSearch } from "react-icons/io";

import FeatureCard from "../../components/FeatureCard/FeatureCard";
import CategorySection from "../../components/CategoryCard/CategorySection";
import JobsList from "../JobsList/JobsList";
import TopCompanies from "../../components/Companyis/TopCompanies";
import StatsSection from "../../components/TestimonialsSection/StatsSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import ChooseJobHere from "../../components/ChooseJobHere/ChooseJobHere";
import NewsArticlesSection from "../../components/NewsArticlesSection/NewsArticlesSection";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Banner />

        {/* Search Box - Positioned over banner */}
        <div className="absolute w-full  max-w-5xl mx-auto -bottom-12 lg:-bottom-12 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white shadow-2xl rounded-xl p-10 mx-4 ">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
              <input
                type="text"
                className="input  border-red-600 w-full h-14 px-4"
                placeholder="Job Title or keyword"
              />

              <input
                type="text"
                className="input  border-red-600 w-full h-14 px-4"
                placeholder="Location"
              />

              <select
                className="select select-bordered w-full h-14 px-4 border-red-600"
                defaultValue=""
              >
                <option value="" disabled>
                  Category
                </option>
                <option value="IT">IT</option>
                <option value="Health">Health</option>
                <option value="Finance">Finance</option>
                <option value="Education">Education</option>
              </select>

              <button className="btn bg-red-600 hover:bg-red-700 text-white w-full lg:w-56 h-14 rounded-lg">
                Find Jobs <IoMdSearch className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="font-sans bg-white text-center max-w-7xl mx-auto">
        {/* Why Choose Us Section */}
        <div className="mt-16 px-4 pt-10">
          <h2 className="text-4xl font-semibold mb-2 w-xl  mx-auto">
            Why You Choose Us Among Other Job Sites?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">
            We stand out by offering smart tools, personalized matching, and
            powerful features that help job seekers and employers succeed.
          </p>

          <FeatureCard />
        </div>

        {/* Category Section */}
        <CategorySection />

      </div>
      <JobsList/>
      <TopCompanies/>
      <StatsSection/>
      <TestimonialsSection/>
      <ChooseJobHere/>
      <NewsArticlesSection/>
          </>
  );
};

export default Home;
