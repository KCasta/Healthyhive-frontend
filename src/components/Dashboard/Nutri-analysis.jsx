import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Nutri = () => {
  const [query, setQuery] = useState("");
  const [nutritionData, setNutritionData] = useState(null);

  const fetchNutri = async () => {
    const APP_ID = import.meta.env.VITE_APP_ID;
    const APP_KEY = import.meta.env.VITE_API_KEY;

    try {
      const url = `https://api.edamam.com/api/nutrition-data?ingr=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

      const response = await axios.get(url);

      console.log(response.data);
      setNutritionData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 via-orange-100 to-orange-50 flex items-center justify-center relative">
      {/* Navigation Buttons */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <Link to="/meal-plan">
          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 transition-all">
            Meal Planner
          </button>
        </Link>
        <Link to="/recipes">
          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 transition-all">
            Recipes
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="relative w-[18rem] md:w-[22rem] lg:w-[28rem] h-[22rem] md:h-[28rem] lg:h-[32rem] shadow-lg rounded-tl-[120px] rounded-tr-[120px] overflow-hidden border-4 border-black mr-8 animate-float">
        <img
          src="https://via.placeholder.com/400" // Replace with your image URL
          alt="Decorative"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="w-full max-w-3xl h-screen p-10 bg-inherit  flex flex-col justify-center items-start backdrop-blur-md rounded-xl">
        {/* Form Content */}
        <div className="w-full p-12 bg-white bg-opacity-80 rounded-xl shadow-2xl">
          {/* Header */}
          <h1 className="text-4xl font-bold text-orange-600 mb-6">
            {`Let's Get Started!`}
          </h1>
          <p className="text-md text-gray-700 mb-6 leading-relaxed">
            Begin your journey with us by filling out the form below. We’ll get
            back to you shortly!
          </p>

          {/* Card Section */}
          <div className="p-12 mb-10 bg-orange-100 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-3xl font-semibold text-gray-700 mb-6">
              Welcome to NutriApp!
            </h2>
            <p className="text-lg text-gray-600">
              Plan your meals, discover recipes, and achieve your nutrition
              goals with ease. Start by letting us know how we can assist you!
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-6">
            {/* Message Input */}
            <textarea
              //GETTING THE VALUE OF THE TEXTAREA AND SETTING IT TO QUERY
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              placeholder="Message"
              className="w-full p-2 text-sm rounded-lg border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform transform hover:scale-105 hover:border-orange-500 hover:shadow-lg"
              rows="4"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                className="mt-4 px-6 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 hover:scale-105 transition-all"
                onClick={fetchNutri}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutri;
