import React from "react";
import "./HomePage.css";
import HomeIntro from "../components/home/HomeIntro";
import Services from "../components/home/Services";
import About from "../components/home/About";

const HomePage = () => {
  return (
    <>
      <HomeIntro />
      <Services />

      <About />
    </>
  );
};

export default HomePage;
