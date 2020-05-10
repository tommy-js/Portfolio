import React from "react";
import projectList from "./projectList";
import "../../Main.scss";

function ProjectPage(props) {
  return (
    <div className="project_page_block">
      <div className="project_page_inner_block">
        <div className="project_page_image_block">
          <img src="" className="project_page_image" />
        </div>
        <h1 className="project_header">{props.title}</h1>
        <div className="code_location_bar">
          <div className="code_icon_container">
            <img src="" className="code_icon" />
          </div>
          <div className="code_icon_container">
            <img src="" className="code_icon" />
          </div>
        </div>
        <h2 className="project_subheader">{props.description}</h2>
        <p className="project_body_text">{props.p1}</p>
        <div className="project_body_video">
          <video className="project_video_page_source" loop autoPlay muted>
            <source src={props.video} type="video/mp4" />
          </video>
        </div>
        <p className="project_body_text">{props.p2}</p>
      </div>
    </div>
  );
}

export default ProjectPage;
