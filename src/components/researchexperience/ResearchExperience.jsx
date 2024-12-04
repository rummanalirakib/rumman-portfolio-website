import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal"; // Your reusable Modal component
import "./ResearchExperience.css";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import remotesensingpaper from "../../assets/remotesensingsatelliteimage.pdf";
import { GrView } from "react-icons/gr";

const researchExperiences = [
  {
    title:
      "Use of Remote Sensing Satellite Images in Rice Area Monitoring System of Bangladesh",
    status: "Published",
    publishedLink: "https://ieeexplore.ieee.org/document/9324433", // Replace with actual link
    readmelink:
      "https://raw.githubusercontent.com/rummanalirakib/bororicemonitoringsystem/main/README.md",
    githublink: "https://github.com/rummanalirakib/bororicemonitoringsystem",
    viewpaper: remotesensingpaper,
  },
  {
    title:
      "Is it possible to characterise won’t fix issue reports, A study on GitHub issue reports?",
    status: "In Progress",
    publishedLink: "",
    readmelink:
      "https://raw.githubusercontent.com/rummanalirakib/mininghelpwantedissues/main/README.md",
    githublink: "https://github.com/rummanalirakib/wontfixdetection",
    viewpaper: "",
  },
  {
    title: "An Exploratory Study on Help Wanted Issues in GitHub",
    status: "In Progress",
    publishedLink: "",
    readmelink:
      "https://raw.githubusercontent.com/rummanalirakib/wontfixdetection/main/README.md",
    githublink: "https://github.com/rummanalirakib/mininghelpwantedissues",
    viewpaper: "",
  },
  // Add more papers as needed
];

const ResearchExperience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
      document.querySelector("nav").classList.add("disabled-button");
    } else {
      document.body.classList.remove("no-scroll");
      document.querySelector("nav").classList.remove("disabled-button");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.querySelector("nav").classList.remove("disabled-button");
    };
  }, [isModalOpen]);

  const fetchReadme = async (readmeLink) => {
    try {
      const response = await fetch(readmeLink);
      if (!response.ok) {
        throw new Error("Failed to fetch README.md");
      }
      const markdownContent = await response.text();

      setModalData({
        description: markdownContent,
      });
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error fetching README:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="researchexperience">
      <h5>My Research Portfolio</h5>
      <h2>Research Experience</h2>
      <div className="container research__container">
        {researchExperiences.map((item, index) => (
          <div key={index} className="research__item">
            <h3>{item.title}</h3>
            <p
              className={`add_margin ${
                item.status === "published" ? "accepted_color" : "pending_color"
              }`}
            >
              <strong>Status:</strong> {item.status}
            </p>
            <div className="research__actions">
              <a
                href={item.githublink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn margin_related"
              >
                <FaGithub /> GitHub
              </a>
              <button
                className="btn details_button"
                onClick={() => fetchReadme(item.readmelink)}
              >
                Details
              </button>
              {item.publishedLink && (
                <a
                  href={item.publishedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn margin_related"
                >
                  <MdOutlinePublishedWithChanges /> Published Link
                </a>
              )}
              {item.viewpaper && (
                <a
                  href={item.viewpaper}
                  className="btn margin_related"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrView /> View My Paper
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Integration */}
      <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
    </section>
  );
};

export default ResearchExperience;
