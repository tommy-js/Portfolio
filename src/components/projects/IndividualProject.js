import React from "react";
import "../../Main.scss";

function IndividualProject(props) {
  return (
    <div className="project_block">
      <div className="project_image_box"></div>
      <div className="project_information">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
}

export default IndividualProject;
