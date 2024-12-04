import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/DLD Simulator.jpg";
import IMG2 from "../../assets/mazegame.jpg";
import IMG3 from "../../assets/onlineexam.jpg";
import IMG4 from "../../assets/foodfinder.jpg";
import IMG5 from "../../assets/plantandmanureonlineshop.png";
import IMG6 from "../../assets/bookstore.jpg";
import Modal from "../modal/Modal";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Digital Logic Design Simulator",
    github: "https://github.com/rummanalirakib/Digital-Logic-Design-Simulator",
    readmefile:
      "https://raw.githubusercontent.com/rummanalirakib/Digital-Logic-Design-Simulator/main/README.md",
  },
  {
    id: 2,
    image: IMG2,
    title: "Maze Runner",
    github: "https://github.com/rummanalirakib/Maze-Runner",
    readmefile:
      "https://raw.githubusercontent.com/rummanalirakib/Maze-Runner/main/README.md",
  },
  {
    id: 3,
    image: IMG3,
    title: "Online Practice Exam",
    github: "https://github.com/rummanalirakib/OnlineExam",
    readmefile:
      "https://raw.githubusercontent.com/rummanalirakib/OnlineExam/main/README.md",
  },
  {
    id: 4,
    image: IMG4,
    title: "Food Finder",
    github: "https://github.com/rummanalirakib/FoodFinder",
    readmefile:
      "https://raw.githubusercontent.com/rummanalirakib/FoodFinder/main/README.md",
  },
  {
    id: 5,
    image: IMG5,
    title: "Plant and Manure Online Shop",
    github: "https://github.com/rummanalirakib/PlantandManureOnlineShopWebsite",
    readmefile:
      "https://raw.githubusercontent.com/rummanalirakib/PlantandManureOnlineShopWebsite/main/README.md",
  },
  {
    id: 6,
    image: IMG6,
    title: "Book Store Management System",
    github: "https://github.com/rummanalirakib/BookStore",
    readmefile:
      "https://raw.githubusercontent.com/rummanalirakib/BookStore/master/README.md",
  },
];

const Portfolio = () => {
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

  const fetchReadme = async (title, readmeLink) => {
    try {
      const response = await fetch(readmeLink);
      if (!response.ok) {
        throw new Error("Failed to fetch README.md");
      }
      const markdownContent = await response.text();

      setModalData({
        title: title,
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
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, readmefile }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div>
              <a href={github} className="btn">
                GitHub
              </a>
              <button
                onClick={() => fetchReadme(title, readmefile)}
                className="btn details_button"
              >
                Details
              </button>
            </div>
          </article>
        ))}

        <Modal isOpen={isModalOpen} onClose={closeModal} data={modalData} />
      </div>
    </section>
  );
};

export default Portfolio;
