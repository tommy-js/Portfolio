import React from "react";
import IndividualProject from "./IndividualProject";
import { Link } from "react-router-dom";
import "../../Main.scss";

function Projects(props) {
  return (
    <div>
      <div className="project_selector">
        <label>Technology used</label>
        <br />
        <select>
          <option>React</option>
          <option>Django</option>
        </select>
      </div>
      {props.projectList.map(elements => (
        <IndividualProject title={elements.title} />
      ))}
    </div>
  );
}

export default Projects;
