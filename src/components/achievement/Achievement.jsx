import React from "react";
import "./Achievement.css";
import { FaHackerrank } from "react-icons/fa";
import { SiUdemy } from "react-icons/si";
import uwindsor from "../../assets/uwindsor.jpg";
import aust from "../../assets/AUST.png";

const certifications = [
  {
    logo: FaHackerrank,
    title: "SQL (Advanced) Certificate",
    name: "Hackerrank",
    issued: "Aug 2024",
    id: "B62720941D70",
    credentialLink: "https://www.hackerrank.com/certificates/b62720941d70",
  },
  {
    logo: FaHackerrank,
    title: "Software Engineer Certificate",
    name: "Hackerrank",
    issued: "April 2024",
    id: "7668d640eed6",
    credentialLink: "https://www.hackerrank.com/certificates/7668d640eed6",
  },
  {
    logo: FaHackerrank,
    title: "Problem Solving (Intermediate) Certificate",
    name: "Hackerrank",
    issued: "Dec 2023",
    id: "6E61378275BF",
    credentialLink: "https://www.hackerrank.com/certificates/6E61378275BF",
  },
  {
    logo: FaHackerrank,
    title: "Rest API (Intermediate) Certificate",
    name: "Hackerrank",
    issued: "Dec 2023",
    id: "C3E7E7951F54",
    credentialLink: "https://www.hackerrank.com/certificates/c3e7e7951f54",
  },
  {
    logo: SiUdemy,
    title: "Python for Computer Vision with OpenCV",
    name: "Udemy",
    issued: "Sep 2021",
    id: "UC-188d0d0c-5782-445d-a212-4d3b7d142193",
    credentialLink:
      "https://www.udemy.com/certificate/UC-188d0d0c-5782-445d-a212-4d3b7d142193",
  },
  // Add more certifications here...
];

const achievements = [
  {
    logo: uwindsor,
    title: "Computer Science Graduate Scholarship",
    issued: "Nov 2023",
    instituition: "University of Windsor",
  },
  {
    logo: uwindsor,
    title: "Computer Science Graduate Scholarship",
    issued: "May 2023",
    instituition: "University of Windsor",
  },
  {
    logo: aust,
    title: "Dean's List Honour",
    issued: "Feb 2020",
    instituition: "Ahsanullah University of Science and Technology",
  },
  {
    logo: aust,
    title: "Champion, Intra AUST Programming Contest",
    issued: "Nov 2017",
    instituition: "Ahsanullah University of Science and Technology",
  },
];

const Achievement = () => {
  return (
    <section id="achievement">
      <h5>My Certificates and Achievements</h5>
      <h2>Certifications and Achievements</h2>
      <div className="certifications-container">
        <div className="certifications">
          <h2>Certifications</h2>
          {certifications.map((cert, index) => (
            <div className="cert-item" key={index}>
              <cert.logo className="cert-logo" title={cert.name} />
              <div>
                <h3>{cert.title}</h3>
                <p>Issued: {cert.issued}</p>
                <p>Credential ID: {cert.id}</p>
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements">
          <h2>Achievements</h2>
          {achievements.map((cert, index) => (
            <div className="cert-item" key={index}>
              <img
                src={cert.logo}
                alt={cert.instituition}
                title={cert.instituition}
                className="achv_img_size"
              />
              <div>
                <h3>{cert.title}</h3>
                <p>Issued: {cert.issued}</p>
                <p>Associated With: {cert.instituition}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
