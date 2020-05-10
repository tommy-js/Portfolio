import React from "react";
import { Link } from "react-router-dom";
import "../../Main.scss";

function IndividualProject(props) {
  return (
    <div className="project_block">
      <div className="project_container">
        <Link to={"/Projects/" + props.id}>
          <div className="project_image_box">
            <video className="blog_image_inner" loop autoPlay muted>
              <source src={props.video} type="video/mp4" />
            </video>
          </div>
          <div className="project_information">
            <h2 className="project_title">{props.title}</h2>
            <h3 className="project_subtitle">{props.subtitle}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default IndividualProject;
