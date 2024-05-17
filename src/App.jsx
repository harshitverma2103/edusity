import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Programs/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" Title="What We Offer" />
        <Program />
        <About />
        <Title subTitle="GALLERY" Title="Campus Photos" />
        <Campus />
      </div>
    </div>
  );
};

export default App;
