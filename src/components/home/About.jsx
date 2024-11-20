import React from "react";
import nutirent from "../../assets/nutirent.avif";
import { FaPercent, FaShieldAlt, FaTachometerAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h1 className="text-2xl font-bold text-orange-600">About Us</h1>

      <p className="text-gray-600 max-w-xl mx-auto mt-2">
        HealthyHive is an innovative nutrition platform designed to empower
        individuals with personalized meal planning, expert guidance, and
        supportive community. Our mission is to make healthy eating accessible,
        manageable, and sustainable for individuals with dietary restrictions
        and health conditions.
      </p>

      {/* Cards */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Card 1 */}
        <div className="group bg-orange-100 rounded-lg shadow-lg p-6 w-full md:w-1/3 transition-transform transform hover:scale-105 hover:bg-orange-500 hover:shadow-xl">
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
        <div className="group bg-orange-200 rounded-lg shadow-lg p-6 w-full md:w-1/3 transition-transform transform hover:scale-105 hover:bg-orange-600 hover:shadow-xl">
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
        <div className="group bg-orange-300 rounded-lg shadow-lg p-6 w-full md:w-1/3 transition-transform transform hover:scale-105 hover:bg-orange-700 hover:shadow-xl">
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
      {/* <div
        className="relative h-52 bg-cover bg-center mt-16 rounded-lg shadow-lg "
        style={{ backgroundImage: `url(${nutirent}` }}
      >
        <div className="absolute inset-0 bg-orange-500  bg-opacity-85"></div>
      </div> */}
    </section>
  );
};

export default About;
