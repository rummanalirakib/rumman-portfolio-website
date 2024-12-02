import React from "react";
import "./About.css";
import Myself from "../../assets/rumman_profile.jpg";

const workexperience_data = [
  {
    id: 1,
    position: "Graduate Research Assistant",
    company: "University of Windsor",
    location: "Windsor, Canada",
    timeframe: "May 2023 - Present",
  },
  {
    id: 2,
    position: "Graduate Teaching Assistant",
    company: "University of Windsor",
    location: "Windsor, Canada",
    timeframe: "May 2023 - Present",
  },
  {
    id: 3,
    position: "Software Engineer",
    company: "Enosis Solutions",
    location: "Dhaka, Bangladesh",
    timeframe: "Dec 2021 - April 2023",
  },
  {
    id: 4,
    position: "Adjunct Lecturer",
    company: "Ahsanullah University of Science and Technology",
    location: "Dhaka, Bangladesh",
    timeframe: "Jan 2020 - Nov 2021",
  },
];

const education_data = [
  {
    id: 1,
    degree: "Masters in Computer Science",
    instituition: "University of Windsor",
    location: "Windsor, Canada",
    timeframe: "May 2023 - Jan 2025",
  },
  {
    id: 2,
    degree: "Bachelor in Computer Science",
    instituition: "Ahsanullah University of Science and Technology",
    location: "Dhaka, Bangladesh",
    timeframe: "Nov 2015 - Jan 2020",
  },
];

const About = () => {
  return (
    <section id="about" className="margin_top_res">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Myself} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h1 className="text__align_left margin_bottom_1">
                Work Experience
              </h1>
              {workexperience_data.map(
                ({ id, position, company, location, timeframe }) => {
                  return (
                    <div key={id}>
                      <div className="grid-wise">
                        <h5 className="text__align_left">{position}</h5>
                        <h5>{timeframe}</h5>
                      </div>
                      <small className="location__styling">
                        {company}, {location}
                      </small>
                    </div>
                  );
                }
              )}
            </article>
            <article className="about__card">
              <h1 className="text__align_left margin_bottom_1">Education</h1>
              {education_data.map(
                ({ id, degree, instituition, location, timeframe }) => {
                  return (
                    <div key={id}>
                      <div className="grid-wise">
                        <h5 className="text__align_left">{degree}</h5>
                        <h5>{timeframe}</h5>
                      </div>
                      <small className="location__styling">
                        {instituition}, {location}
                      </small>
                    </div>
                  );
                }
              )}
            </article>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
