import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skill/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Achievement from "./components/achievement/Achievement";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Achievement />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
