import React from "react";
import { FaPercent, FaShieldAlt, FaTachometerAlt } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-center">
      {" "}
      {/* Add id here */}
      <h1 className="text-2xl font-bold text-orange-600">About Us</h1>
      <p className="text-gray-600 max-w-xl mx-auto mt-2">
        HealthyHive is a personalized nutrition platform that makes healthy
        eating easy. We offer personalized meal plans, recipes, and wellness
        programs to help you achieve your health goals.
      </p>
      {/* Cards */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 px-4">
        {/* Card 1 */}
        <div className="group bg-orange-100 rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl">
          <div className="text-5xl text-orange-500 mb-4 transition-transform transform group-hover:text-white hover:scale-110">
            <FaPercent />
          </div>
          <h3 className="text-xl font-semibold text-orange-600 group-hover:text-white">
            Lower Rates
          </h3>
          <p className="text-gray-600 mt-2 group-hover:text-white">
            We offer some of the lowest rates in the industry,
            <br /> so you don’t have to worry about the expenses. <br />
            Weight Management: Personalized plans for sustainable weight loss.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-orange-200 rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105 hover:bg-orange-600 hover:shadow-xl">
          <div className="text-5xl text-orange-600 mb-4 transition-transform transform group-hover:text-white hover:scale-110">
            <FaShieldAlt />
          </div>
          <h3 className="text-xl font-semibold text-orange-700 group-hover:text-white">
            Trusted Brand
          </h3>
          <p className="text-gray-600 mt-2 group-hover:text-white">
            Our advice is rooted in scientific research and evidence-based
            practices.
            <br /> Our personalized meal plans are tailored to your dietary
            requirements and preferences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-orange-300 rounded-lg shadow-lg p-6 w-full sm:w-1/3 transition-transform transform hover:scale-105 hover:bg-orange-700 hover:shadow-xl">
          <div className="text-5xl text-orange-700 mb-4 transition-transform transform group-hover:text-white hover:scale-110">
            <FaTachometerAlt />
          </div>
          <h3 className="text-xl font-semibold text-orange-800 group-hover:text-white">
            Speed
          </h3>
          <p className="text-gray-600 mt-2 group-hover:text-white">
            Quick Meal Planning: Get personalized meal plans in minutes, not
            hours.
            <br /> Improved Health: Quick access to healthy recipes and expert
            guidance. <br />
            Increased Productivity: Focus on your goals, not meal planning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
