import { FaHome, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
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
      <div className="flex justify-between items-center py-4 px-8 bg-white shadow-lg">
        {/* Dashboard Item */}
        <Link to="/dashboard">
          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-100 hover:text-orange-500 cursor-pointer transition-all transform hover:scale-105">
            <FaHome className="text-xl text-orange-600" />
            <span className="font-medium text-gray-800">Dashboard</span>
          </div>
        </Link>

        {/* User Item */}
        <div className="flex items-center space-x-10 p-3">
          <div className=" hover:bg-orange-100 hover:text-orange-500 flex space-x-3 rounded-lg cursor-pointer transition-all transform hover:scale-105">
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
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-16">
        {/* Card 1 */}
        <Link to="/recipes">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 hover:border-orange-500 transition-transform duration-300 ease-in-out">
            <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Placeholder"
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
                src="https://via.placeholder.com/100"
                alt="Placeholder"
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
                src="https://via.placeholder.com/100"
                alt="Placeholder"
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
    </div>
  );
};

export default UserDashboard;
