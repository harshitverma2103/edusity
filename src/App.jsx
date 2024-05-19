import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Program from "./Components/Programs/Program";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

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
        <Title subTitle="TESTIMONIALS" Title="What Student Says" />
        <Testimonial/>
        <Title subTitle="CONTACT US" Title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
