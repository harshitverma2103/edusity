import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 600 ? setSticky(true) : setSticky(false);
    })
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-navbar" : ""}`}>
      <img className="logo" src={logo} alt="Image not found" />
      <ul>
        <li><Link to='hero' smooth = {true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth = {true} offset={-260} duration={1000}>Program</Link></li>
        <li><Link to='about' smooth = {true} offset={-160} duration={1000}>About us</Link></li>
        <li><Link to='campus' smooth = {true} offset={-260} duration={1000}>Campus</Link></li>
        <li><Link to='testimonial' smooth = {true} offset={-260} duration={1000}>Testimonials</Link></li>
        <li>
          <button className="btn"><Link to='contact' smooth = {true} offset={-210} duration={1000}>Contact us</Link></button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
