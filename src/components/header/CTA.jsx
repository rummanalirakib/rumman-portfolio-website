import React from "react";
import RESUME from "../../assets/resume.pdf";

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
      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </div>
  );
};

export default CTA;
