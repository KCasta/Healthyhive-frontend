import React from "react";
// Import the image
import healthy from "../../assets/healthy-template.jpg";
import { Link } from "react-router-dom";

const HomeIntro = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-8 bg-gradient-to-r from-white via-pink-50 to-pink-100">
      {/* Text Content */}
      <div className="md:w-1/2 ">
        <h1 className="text-5xl font-bold text-black leading-tight">
          Discover personalized meal plans <br /> for your unique health needs{" "}
          <br />{" "}
          <span className="text-orange-500">Empowering Healthy Choices</span>
        </h1>
        <p className="text-black mt-4">
          Embark on a journey to transform your health and wellness. Every bite
          counts, every choice matters. <br /> Take control of your nutrition
          and unlock a life filled with energy, vitality, and purpose.
        </p>
        <Link to="/SignupPage">
          <button className="mt-6 bg-green-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
            Sign up
          </button>
        </Link>
      </div>

      {/* Image */}
      <div className="flex justify-around md:w-1/2 mt-8 md:mt-0 h-[60vh]">
        <img
          src={healthy}
          alt="healthy"
          className="w-50 h-50 object-cover rounded-full animate-spin-slow border-rounded-full "
        />
      </div>
    </section>
  );
};

export default HomeIntro;
