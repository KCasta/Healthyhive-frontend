// import NavBarLayOut from "./layouts/NavBarLayOut";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import EmailVerifyPage from "./pages/EmailVerifyPage";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedPages from "./layouts/ProtectedPages";
import DashboardPage from "./pages/DashboardPage";
import RecipesPage from "./pages/RecipesPage";
import MealPlanPage from "./pages/MealPlanPage";
import NutriPage from "./pages/NutriPage";
// import "./layouts/NavBarLayOut.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="signin" element={<LoginPage />}></Route>
        <Route path="verify-email" element={<EmailVerifyPage />}></Route>
      </Route>
      <Route element={<ProtectedPages />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/meal-plan" element={<MealPlanPage />} />
        <Route path="/nutri" element={<NutriPage />} />
      </Route>
    </Routes>
  );
};

export default App;
