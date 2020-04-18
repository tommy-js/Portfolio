import React from "react";
import IndividualProject from "./IndividualProject";
import projectList from "./projectList";
import "../../Main.scss";

function Projects() {
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
      {projectList.map(elements => (
        <IndividualProject title={elements.title} />
      ))}
    </div>
  );
}

export default Projects;
