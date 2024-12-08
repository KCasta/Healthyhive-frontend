import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import happy from "../../assets/happy.jpg";
import { FaHome, FaBars } from "react-icons/fa";

const MealPlanner = () => {
  const [timeFrame, setTimeFrame] = useState("");
  const [targetCalories, setTargetCalories] = useState("");
  const [diet, setDiet] = useState("");
  const [exclude, setExclude] = useState("");
  const [mealPlan, setMealPlan] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for burger menu

  const fetchMealPlan = async () => {
    const apiKey = import.meta.env.VITE_RECIPES_API_KEY;

    try {
      const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}`;
      const response = await axios.get(url);

      if (response.data && response.data.meals) {
        setMealPlan(response.data);
        setErrorMessage("");
        // Clear input fields after meal plan generation
        setTimeFrame("");
        setTargetCalories("");
        setDiet("");
        setExclude("");
      } else {
        throw new Error("No meal plan generated. Please adjust your inputs.");
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage(
        error.message ||
          "An error occurred. Please check your input and try again."
      );
      setMealPlan(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 via-orange-100 to-orange-50 flex flex-col items-center justify-center relative">
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
          to="/recipes"
          className="block px-4 py-2 text-orange-600 hover:bg-orange-200 rounded-lg transition-all"
        >
          Recipes
        </Link>
      </div>

      {/* Navigation Buttons (Visible on Larger Screens) */}
      <div className="hidden md:flex absolute top-4 right-4 space-x-4">
        <Link to="/nutri">
          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 transition-all">
            Nutrition
          </button>
        </Link>
        <Link to="/recipes">
          <button className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 transition-all">
            Recipes
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
        <div className="w-[90%] max-w-3xl p-4 md:p-10 bg-white bg-opacity-80 backdrop-blur-md rounded-xl shadow-2xl">
          <div className="w-full">
            {/* Header */}
            <h1 className="text-2xl md:text-4xl font-bold text-orange-600 mb-4 md:mb-6 text-center">
              {`Let's Plan Your Meals!`}
            </h1>
            <p className="text-sm md:text-md text-gray-700 mb-4 md:mb-6 leading-relaxed text-center">
              Enter the details below to generate a personalized meal plan.
            </p>

            {/* Input Fields */}
            <div className="space-y-4">
              {/* Time Frame Input */}
              <input
                type="text"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
                placeholder="Enter time frame (e.g., 'day' or 'week')"
                className="w-full p-2 text-sm rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform transform hover:scale-105 hover:border-orange-500 hover:shadow-lg"
              />

              {/* Target Calories Input */}
              <input
                type="number"
                value={targetCalories}
                onChange={(e) => setTargetCalories(e.target.value)}
                placeholder="Enter target calories (e.g., 2000)"
                className="w-full p-2 text-sm rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform transform hover:scale-105 hover:border-orange-500 hover:shadow-lg"
              />

              {/* Diet Input */}
              <input
                type="text"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                placeholder="Enter diet type (e.g., 'vegetarian')"
                className="w-full p-2 text-sm rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform transform hover:scale-105 hover:border-orange-500 hover:shadow-lg"
              />

              {/* Exclude Input */}
              <input
                type="text"
                value={exclude}
                onChange={(e) => setExclude(e.target.value)}
                placeholder="Enter ingredients to exclude (comma-separated)"
                className="w-full p-2 text-sm rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-transform transform hover:scale-105 hover:border-orange-500 hover:shadow-lg"
              />

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  onClick={fetchMealPlan}
                  className="mt-4 px-6 py-2 rounded-lg bg-orange-500 text-white font-bold hover:bg-black hover:text-orange-500 hover:scale-105 transition-all"
                >
                  Generate Meal Plan
                </button>
              </div>
            </div>

            {/* Error Message Section */}
            {errorMessage && (
              <div className="w-full mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow-lg">
                {errorMessage}
              </div>
            )}

            {/* Meal Plan Section */}
            {mealPlan && (
              <div className="w-full mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg shadow-lg">
                <h2 className="text-lg md:text-xl font-bold mb-4">
                  Generated Meal Plan:
                </h2>
                <ul>
                  {mealPlan.meals.map((meal) => (
                    <li key={meal.id} className="mb-2">
                      <strong>{meal.title}</strong> - Ready in{" "}
                      {meal.readyInMinutes} minutes
                    </li>
                  ))}
                </ul>
                <p className="text-sm md:text-md">
                  Nutritional Information: {mealPlan.nutrients.calories}{" "}
                  Calories, {mealPlan.nutrients.protein}g Protein,{" "}
                  {mealPlan.nutrients.fat}g Fat,{" "}
                  {mealPlan.nutrients.carbohydrates}g Carbs
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlanner;
