import { FaHome, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MealPlan from "../../assets/MealPlan.jpg";
import Nutri from "../../assets/Nutri.jpg";
import Recipes from "../../assets/Repcies.jpg";
import { useAuthContext } from "../../context/AuthContext";
import { RiLogoutCircleFill } from "react-icons/ri";
import useLogout from "../../hooks/useLogout";

const UserDashboard = () => {
  const { userInfo } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center py-4 px-4 sm:px-8 bg-white shadow-lg">
        {/* Dashboard Item */}
        <Link to="/dashboard">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-100 hover:text-orange-500 cursor-pointer transition-all transform hover:scale-105">
            <FaHome className="text-xl text-orange-600" />
            <span className="font-medium text-gray-800">Dashboard</span>
          </div>
        </Link>

        {/* User Item */}
        <div className="flex items-center space-x-10 p-3">
          <div className="hover:bg-orange-100 hover:text-orange-500 flex space-x-3 rounded-lg cursor-pointer transition-all transform hover:scale-105">
            <FaUserAlt className="text-xl text-orange-600" />
            <span className="font-medium text-gray-800">
              {userInfo.fullName}
            </span>
          </div>

          <div className="cursor-pointer" onClick={handleLogout}>
            <RiLogoutCircleFill
              size={30}
              className=" text-orange-600 hover:text-orange-800 "
            />
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black animate-slide">
          Welcome to HealthyHive
        </h1>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 py-16">
        {/* Card 1 */}
        <Link to="/recipes">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 hover:border-orange-500 transition-transform duration-300 ease-in-out">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <img
                src={Recipes}
                alt="Recipes"
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-orange-600">
              Click to get Recipes
            </h2>
            <p className="text-sm text-gray-600 text-center mt-2">
              Discover exciting recipes tailored to your taste and preferences.
            </p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/meal-plan">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 hover:border-orange-500 transition-transform duration-300 ease-in-out">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <img
                src={MealPlan}
                alt="MealPlan"
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-orange-600">
              Click to get Meal Plan
            </h2>
            <p className="text-sm text-gray-600 text-center mt-2">
              Plan your meals effortlessly and stay on track with your goals.
            </p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/nutri">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 hover:border-orange-500 transition-transform duration-300 ease-in-out">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <img
                src={Nutri}
                alt="Nutri"
                className="rounded-full object-cover"
              />
            </div>
            <h2 className="text-lg font-semibold text-orange-600">
              Click to get Nutrition Analysis
            </h2>
            <p className="text-sm text-gray-600 text-center mt-2">
              Get detailed insights into your nutritional needs and habits.
            </p>
          </div>
        </Link>
      </div>

      <div className="relative bg-gradient-to-r from-orange-300 via-orange-200 to-orange-100 text-white min-h-96 flex flex-col justify-between">
        {/* Wavy Background */}
        <div className="absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0 w-full"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,160C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 flex flex-col">
          {/* Top Button */}
          <div className="absolute top-4 right-4">
            <button className="bg-green-900 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105">
              Start Using
            </button>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-6">
            {/* Recipes Section */}
            <div className="w-full md:w-1/3 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold text-black">
                Recipes
              </h1>
              <p className="text-xs md:text-sm text-black">
                Our recipes cater to various dietary needs and preferences,
                including vegan, gluten-free, and low-carb options.
              </p>
            </div>

            {/* Meal Planning Section */}
            <div className="w-full md:w-1/3 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold text-black">
                Meal Planning
              </h1>
              <p className="text-xs md:text-sm text-black">
                Our system takes into account your dietary preferences and helps
                create a balanced eating plan tailored to your needs.
              </p>
            </div>

            {/* Nutrition Section */}
            <div className="w-full md:w-1/3 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold text-black">
                Nutrition
              </h1>
              <p className="text-xs md:text-sm text-black">
                Unlock the power of informed eating with our comprehensive
                nutrition analysis. Our database provides detailed information
                on various foods:
              </p>
            </div>
          </div>
        </div>

        {/* Explore Features at Bottom Right */}
        <div className="absolute bottom-4 right-4 hidden md:block">
          <div className="bg-white text-black rounded-lg shadow-md p-6 w-72 md:w-80">
            <h2 className="text-lg font-semibold mb-2">Explore Features</h2>
            <p className="text-xs text-gray-600">
              Get personalized recommendations and start your journey toward a
              healthier lifestyle with tailored meal plans, recipes, and
              nutrition tips.
            </p>
            <div className="mt-4 flex justify-end">
              <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
