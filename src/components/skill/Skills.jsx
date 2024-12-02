import React from "react";
import "./Skills.css";
import csharp from "../../assets/CSharp.jpg";
import docker from "../../assets/docker.png";
import git from "../../assets/git.png";
import html5 from "../../assets/html5.png";
import aws from "../../assets/aws.png";
import azure from "../../assets/azure.png";
import cplus from "../../assets/cplus.jpg";
import css from "../../assets/css.png";
import javaScript from "../../assets/javascript.png";
import jira from "../../assets/jira.png";
import mysql from "../../assets/mysql.svg";
import mssql from "../../assets/mssql.png";
import python from "../../assets/python.png";
import react from "../../assets/react.png";
import sourcetree from "../../assets/sourcetree.png";
import java from "../../assets/java.png";
import php from "../../assets/php.png";
import django from "../../assets/django.png";

const skillLogo = [
  {
    logo: csharp,
    title: "C#",
    experience: "Experienced",
  },
  {
    logo: docker,
    title: "Docker",
    experience: "Intermediate",
  },
  {
    logo: git,
    title: "Git",
    experience: "Experienced",
  },
  {
    logo: html5,
    title: "HTML5",
    experience: "Experienced",
  },
  {
    logo: css,
    title: "CSS3",
    experience: "Experienced",
  },
  {
    logo: aws,
    title: "AWS",
    experience: "Intermediate",
  },
  {
    logo: azure,
    title: "AZURE",
    experience: "Intermediate",
  },
  {
    logo: cplus,
    title: "C++",
    experience: "Experienced",
  },
  {
    logo: javaScript,
    title: "JavaScript",
    experience: "Experienced",
  },
  {
    logo: jira,
    title: "Jira",
    experience: "Experienced",
  },
  {
    logo: mysql,
    title: "MySQL",
    experience: "Experienced",
  },
  {
    logo: mssql,
    title: "MSSQL",
    experience: "Experienced",
  },
  {
    logo: python,
    title: "Python",
    experience: "Experienced",
  },
  {
    logo: react,
    title: "React",
    experience: "Intermediate",
  },
  {
    logo: sourcetree,
    title: "SourceTree",
    experience: "Experienced",
  },
  {
    logo: java,
    title: "Java",
    experience: "Experienced",
  },
  {
    logo: django,
    title: "django",
    experience: "Intermediate",
  },
  {
    logo: php,
    title: "php",
    experience: "Intermediate",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>Skills</h2>

      <div className="container">
        <div className="experience__content">
          {skillLogo.map((cert, index) => (
            <article className="experience__details">
              <img
                src={cert.logo}
                alt={cert.title}
                title={cert.title}
                className="achv_img_size"
              />
              <h4>{cert.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
