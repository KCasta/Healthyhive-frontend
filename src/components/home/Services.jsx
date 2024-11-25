import React from "react";
import { FaHeadset } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BiBarChartAlt2 } from "react-icons/bi";
import CustomerCare from "../../assets/CustomerCare.jpg";

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-orange-600">Our Services</h1>
          <p className="text-gray-700 mt-2">
            At HealthyHive, we offer personalized nutrition solutions to help
            you achieve optimal wellness.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="text-orange-600 text-2xl mr-4">
                <FaAppleAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Personalized Meal Planning
                </h3>
                <p className="text-gray-600 mt-1">
                  Customized meal plans tailored to your dietary needs and
                  preferences <br /> Expert guidance from registered dietitians
                  and nutritionists
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="text-orange-600 text-2xl mr-4">
                <GiForkKnifeSpoon />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Meal Planning for Specific Diets
                </h3>
                <p className="text-gray-600 mt-1">
                  Gluten-free, vegan, vegetarian, and other dietary needs
                  <br /> Expert guidance for managing chronic conditions
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
              <div className="text-orange-600 text-2xl mr-4">
                <FaHeadset />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  24/7 Support
                </h3>
                <p className="text-gray-600 mt-1">
                  At HealthyPlate, we're committed to providing exceptional
                  support whenever you need it.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start">
              <div className="text-orange-600 text-2xl mr-4">
                <BiBarChartAlt2 />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">
                  Wellness Programs
                </h3>
                <p className="text-gray-600 mt-1">
                  Customized meal plans and guidance for diabetes, heart health,
                  and more - Ongoing support and monitoring
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <div className="relative">
            <img
              src={CustomerCare}
              alt="CustomerCare"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute top-4 right-4">
              {/* Optional dots or decoration */}
              <div className="text-orange-200">
                {/* Adjust your decoration here */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <circle cx="4" cy="4" r="2" />
                  <circle cx="12" cy="4" r="2" />
                  <circle cx="4" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
