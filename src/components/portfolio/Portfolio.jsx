import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/DLD Simulator.jpg";
import IMG2 from "../../assets/mazegame.jpg";
import IMG3 from "../../assets/onlineexam.jpg";
import IMG4 from "../../assets/foodfinder.jpg";
import IMG5 from "../../assets/magnificientcoxbazar.jpg";
import IMG6 from "../../assets/bookstore.jpg";
import Modal from "../modal/Modal";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Digital Logic Design Simulator",
    github: "https://github.com/rummanalirakib/Digital-Logic-Design-Simulator",
  },
  {
    id: 2,
    image: IMG2,
    title: "Maze Game",
    github: "https://github.com/rummanalirakib/Maze-Runner",
  },
  {
    id: 3,
    image: IMG3,
    title: "Online Practice Exam",
    github: "https://github.com/rummanalirakib/OnlineExam",
  },
  {
    id: 4,
    image: IMG4,
    title: "Restaurant Finder",
    github: "https://github.com/rummanalirakib/FoodFinder",
  },
  {
    id: 5,
    image: IMG5,
    title: "Magnificient Coxsbazar",
    github: "https://github.com/rummanalirakib/MagnificientCoxsBazar",
  },
  {
    id: 6,
    image: IMG6,
    title: "Book Store Management System",
    github: "https://github.com/rummanalirakib/BookStore",
  },
];

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const openModalWithData = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Add the "no-scroll" class to the body when the modal is open
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
      document.querySelector("nav").classList.add("disabled-button");
    } else {
      document.body.classList.remove("no-scroll");
      document.querySelector("nav").classList.remove("disabled-button");
    }

    // Clean up by removing the class when the component unmounts or modal is closed
    return () => {
      document.body.classList.remove("no-scroll");
      document.querySelector("nav").classList.remove("disabled-button");
    };
  }, [isModalOpen]);

  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => (
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
                onClick={() =>
                  openModalWithData({
                    title: "Page 1 Data",
                    description: "This is some data from Page 1.",
                  })
                }
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
