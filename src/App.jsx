import React from "react";
// import NavBarLayOut from "./layouts/NavBarLayOut";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import EmailVerifyPage from "./pages/EmailVerifyPage";
import AuthLayout from "./layouts/AuthLayout";

// import ProtectedPages from "./layouts/ProtectedPages"

// in App.jsx or index.js
// import "./layouts/NavBarLayOut.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />}></Route>
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signup" element={<SignupPage />}></Route>
        <Route path="LoginPage" element={<LoginPage />}></Route>
        <Route path="verify-email" element={<EmailVerifyPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
