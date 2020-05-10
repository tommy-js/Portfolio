import React from "react";
import IndividualProject from "./IndividualProject";
import { Link } from "react-router-dom";
import "../../Main.scss";

function Projects(props) {
  return (
    <div>
      {props.projectList.map(elements => (
        <IndividualProject
          title={elements.title}
          subtitle={elements.description}
          video={elements.video}
          id={elements.id}
        />
      ))}
    </div>
  );
}

export default Projects;
