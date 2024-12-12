import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import happy from "../../assets/happy.jpg";
import { FaHome, FaBars } from "react-icons/fa";

const Recipes = () => {
  const [ingredients, setIngredients] = useState(""); // State for ingredients input
  const [recipesData, setRecipesData] = useState(null); // State for recipes data
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for burger menu

  const fetchRecipesByIngredients = async () => {
    const appId = import.meta.env.VITE_EDAMAM_APP_ID; // Your Edamam App ID
    const appKey = import.meta.env.VITE_EDAMAM_APP_KEY; // Your Edamam App Key

    try {
      // Build the API request URL
      const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${appId}&app_key=${appKey}`;

      // Fetch data from the API
      const response = await axios.get(url);

      if (response.data.hits && response.data.hits.length > 0) {
        const recipes = response.data.hits.slice(0, 3); // Limit to 3 recipes
        setRecipesData(recipes); // Save recipes to state
        setErrorMessage(""); // Clear any previous errors
        setIngredients(""); // Clear the textarea input
      } else {
        throw new Error(
          "No recipes found for the given ingredients. Please try again with different ingredients."
        );
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage(
        error.message ||
          "An error occurred. Please check your input and try again."
      );
      setRecipesData(null); // Clear previous recipes data
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 via-orange-100 to-orange-50 flex items-center justify-center px-4 md:px-6 lg:px-12 relative">
      {/* Dashboard Home Icon */}
      <div className="absolute top-4 left-4">
        <Link to="/dashboard">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-inherit hover:text-orange-500 cursor-pointer transition-all transform hover:scale-105">
            <FaHome className="text-xl text-orange-600" />
            <span className="font-medium text-gray-800">Dashboard</span>
          </div>
        </Link>
      </div>

      {/* Burger Button */}
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
          to="/nutri"
          className="block px-4 py-2 text-orange-600 hover:bg-orange-200 rounded-lg transition-all"
        >
          Nutrition
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
        <Link to="/nutri">
          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 transition-all">
            Nutrition
          </button>
        </Link>
        <Link to="/meal-plan">
          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 transition-all">
            Meal Planner
          </button>
        </Link>
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 space-y-6 md:space-y-0">
        {/* Floating Image Section (Hidden on Small Screens) */}
        <div className="hidden md:block relative w-[90%] sm:w-[20rem] md:w-[22rem] lg:w-[28rem] h-[18rem] sm:h-[22rem] md:h-[28rem] lg:h-[32rem] shadow-lg rounded-tl-[120px] rounded-tr-[120px] overflow-hidden border-4 border-black animate-float">
          <img src={happy} alt="happy" className="w-full h-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="w-full max-w-lg md:max-w-3xl h-auto p-6 md:p-10 bg-inherit flex flex-col justify-center items-start backdrop-blur-md rounded-xl">
          <div className="w-full p-6 md:p-12 bg-white bg-opacity-80 rounded-xl shadow-2xl">
            {/* Header */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-4 md:mb-6">
              {`Let's Get Started!`}
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              Find Food Recipes Based on Ingredients
            </h1>
            <p className="text-sm md:text-md text-gray-700 mb-6 leading-relaxed">
              Enter the food you desire below to get personalized recipe
              suggestions.
            </p>

            {/* Input Fields */}
            <div className="space-y-4">
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="e.g., Pasta, Chicken, Tomatoes"
                className="w-full p-2 text-sm md:text-md rounded-lg border border-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform transform hover:scale-105 hover:border-orange-500 hover:shadow-lg"
                rows="4"
              ></textarea>

              <div className="flex justify-end">
                <button
                  onClick={fetchRecipesByIngredients}
                  className="mt-4 px-6 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 hover:scale-105 transition-all"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Error Message Section */}
            {errorMessage && (
              <div className="w-full mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-lg">
                {errorMessage}
              </div>
            )}

            {/* Display Recipes */}
            {recipesData && (
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipesData.map((recipeObj, index) => {
                  const recipe = recipeObj.recipe;
                  return (
                    <div
                      key={index}
                      className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
                    >
                      <img
                        src={recipe.image}
                        alt={recipe.label}
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <h2 className="text-lg md:text-xl font-bold text-orange-600 mt-2">
                        {recipe.label}
                      </h2>
                      <p className="text-gray-700 text-sm mt-2">
                        <strong>Ingredients:</strong>{" "}
                        {recipe.ingredientLines.join(", ")}
                      </p>
                      <p className="text-gray-700 text-sm mt-2">
                        <strong>Calories:</strong> {recipe.calories.toFixed(2)}
                      </p>
                      <p className="text-gray-700 text-sm mt-2">
                        <strong>Total Weight:</strong>{" "}
                        {recipe.totalWeight.toFixed(2)} g
                      </p>
                      <p className="text-gray-700 text-sm mt-2">
                        <strong>Fat:</strong>{" "}
                        {recipe.totalNutrients.FAT?.quantity.toFixed(2) ||
                          "N/A"}{" "}
                        {recipe.totalNutrients.FAT?.unit || ""}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
