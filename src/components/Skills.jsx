import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons"; // Importa el ícono faReact desde los íconos de marcas
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
export default function Skills() {
  return (
    <div className="skills">
      <section className="skills__container">
        <h2 className="skills__Title">My Skills</h2>
        <div className="row1">
          <div className="skill__card">
            <span className="skill__cardIcons react">
              <FontAwesomeIcon icon={faReact} />
            </span>
            <span className="skill__cardTitle">React</span>
          </div>
          <div className="skill__card">
            <span className="skill__cardIcons">
              <FontAwesomeIcon className="css" icon={faCss3Alt} />
              <FontAwesomeIcon className="html" icon={faHtml5} />
            </span>
            <span className="skill__cardTitle">CSS & HTML</span>
          </div>
          <div className="skill__card">
            <span className="skill__cardIcons flutter"></span>
            <span className="skill__cardTitle">Flutter</span>
          </div>
          <div className="skill__card">
            <span className="skill__cardIcons js">
              <FontAwesomeIcon icon={faJs} />
            </span>
            <span className="skill__cardTitle ">JavaScript</span>
          </div>
        </div>
        <div className="row2">
          <div className="skill__card">
            <span className="skill__cardIcons">
              <FontAwesomeIcon className="github" icon={faGithubSquare} />
            </span>
            <span className="skill__cardTitle">Github</span>
          </div>
          <div className="skill__card">
            <span className="skill__cardIcons firebase"></span>
            <span className="skill__cardTitle">Firebase</span>
          </div>
          <div className="skill__card">
            <span className="skill__cardIcons java"></span>
            <span className="skill__cardTitle">Java</span>
          </div>
        </div>
      </section>
    </div>
  );
}
