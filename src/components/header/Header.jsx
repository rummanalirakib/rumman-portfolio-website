import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocials";
import Myself from "../../assets/rumman_profile.jpg";

const Header = () => {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rumman Ali</h1>
        <h5 className="text-light">Full Stack Software Developer</h5>
        <CTA />
        <div className="photo_social">
          <HeaderSocial />
          <div className="me">
            <img src={Myself} alt="myself"></img>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
