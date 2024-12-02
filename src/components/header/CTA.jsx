import React from "react";
import RESUME from "../../assets/resume.pdf";
import Myself from "../../assets/rumman_profile.jpg";

const CTA = () => {
  return (
    <div className="cta">
      {/* <a className='btn' download href={RESUME}>Download CV</a> */}
      <a
        href={RESUME}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View My Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
      <div className="me">
        <img src={Myself} alt="myself"></img>
      </div>

      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  );
};

export default CTA;
