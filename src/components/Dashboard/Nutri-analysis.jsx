import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import happy from "../../assets/happy.jpg";
import { FaHome, FaBars } from "react-icons/fa";

const Nutri = () => {
  const [query, setQuery] = useState("");
  const [nutritionData, setNutritionData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for burger menu

  const fetchNutri = async () => {
    if (!query.trim()) {
      setErrorMessage("Please enter valid ingredients before submitting.");
      setNutritionData(null);
      return;
    }

    const APP_ID = import.meta.env.VITE_APP_ID;
    const APP_KEY = import.meta.env.VITE_API_KEY;

    setLoading(true);
    try {
      const url = `https://api.edamam.com/api/nutrition-data?ingr=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      const response = await axios.get(url);

      if (!response.data.calories || !response.data.totalNutrients) {
        throw new Error(
          "Unable to calculate nutrition. Please check your input or try different ingredients."
        );
      }

      setNutritionData(response.data);
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error.message || "An error occurred. Please try again later."
      );
      setNutritionData(null);
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 via-orange-100 to-orange-50 flex items-center justify-center relative">
      {/* Dashboard Home Button */}
      <div className="absolute top-4 left-4">
        <Link to="/dashboard">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-inherit hover:text-orange-500 cursor-pointer transition-all transform hover:scale-105">
            <FaHome className="text-xl text-orange-600" />
            <span className="font-medium text-gray-800">Dashboard</span>
          </div>
        </Link>
      </div>

      {/* Burger Menu */}
      <div className="absolute top-4 right-4 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-orange-600 text-2xl p-2 rounded-lg hover:bg-orange-300 transition-all"
        >
          <FaBars />
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        className={`absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 space-y-4 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <Link
          to="/recipes"
          className="block px-4 py-2 text-orange-600 hover:bg-orange-200 rounded-lg transition-all"
        >
          Recipes
        </Link>
        <Link
          to="/meal-plan"
          className="block px-4 py-2 text-orange-600 hover:bg-orange-200 rounded-lg transition-all"
        >
          Meal Planner
        </Link>
      </div>

      {/* Navigation Buttons (Visible on Larger Screens) */}
      <div className="hidden md:flex absolute top-4 right-4 space-x-4">
        <Link to="/recipes">
          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 transition-all">
            Recipes
          </button>
        </Link>
        <Link to="/meal-plan">
          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 transition-all">
            Meal Planner
          </button>
        </Link>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 space-y-6 md:space-y-0">
        {/* Image Section */}
        <div className="hidden md:block relative w-[90%] sm:w-[20rem] md:w-[22rem] lg:w-[28rem] h-[18rem] sm:h-[22rem] md:h-[28rem] lg:h-[32rem] shadow-lg rounded-tl-[120px] rounded-tr-[120px] overflow-hidden border-4 border-black animate-float">
          <img
            src={happy}
            alt="Happy illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form and Data Section */}
        <div className="w-full max-w-lg md:max-w-3xl h-auto p-6 md:p-10 bg-inherit flex flex-col justify-center items-start backdrop-blur-md rounded-xl">
          <div className="w-full p-6 md:p-12 bg-white bg-opacity-80 rounded-xl shadow-2xl">
            {/* Header */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-4 md:mb-6">
              {`Let's Get Started!`}
            </h1>
            <p className="text-sm md:text-md text-gray-700 mb-4 md:mb-6 leading-relaxed">
              {`Begin your journey with us by: <br />
              Entering an ingredient list for what you are cooking, like "1 cup
              rice, 10 oz chickpeas", etc. Enter each ingredient on a new line.`}
            </p>

            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., '1 apple'"
              className="w-full p-2 rounded-lg border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform hover:scale-105 hover:shadow-lg"
              rows="4"
              aria-label="Input ingredients"
            ></textarea>

            <div className="flex justify-end">
              <button
                className="mt-4 px-6 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 transition-all"
                onClick={fetchNutri}
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="w-full mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-lg">
              {errorMessage}
            </div>
          )}

          {/* Nutrition Data */}
          {nutritionData && (
            <div className="w-full mt-6 p-4 bg-orange-100 border border-gray-300 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Nutrition Facts
              </h2>
              <p>Calories: {nutritionData.calories}</p>
              <p>
                Total Fat:{" "}
                {nutritionData.totalNutrients?.FAT?.quantity?.toFixed(1)} g
              </p>
              <p>
                Carbohydrates:{" "}
                {nutritionData.totalNutrients?.CHOCDF?.quantity?.toFixed(1)} g
              </p>
              <p>
                Protein:{" "}
                {nutritionData.totalNutrients?.PROCNT?.quantity?.toFixed(1)} g
              </p>
              <p>
                Sodium: {nutritionData.totalNutrients?.NA?.quantity?.toFixed(1)}{" "}
                mg
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nutri;
