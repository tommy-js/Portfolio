import React from "react";
import { Link } from "react-router-dom";
import "../../Main.scss";

function IndividualProject(props) {
  return (
    <div className="project_block">
      <div className="project_container">
        <Link to={"/Projects/" + props.id}>
          <div className="project_image_box"></div>
          <div className="project_information">
            <h2 className="project_title">{props.title}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IndividualProject;
