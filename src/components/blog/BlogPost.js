import React from "react";
import "../../Main.scss";
import { Link } from "react-router-dom";

function BlogPost(props) {
  function playVid() {}

  return (
    <div className="project_block">
      <div className="project_container">
        <Link to={"/Blogs/" + props.keyId}>
          <div className="project_image_box">
            <video className="blog_image_inner" loop autoPlay muted>
              <source src={props.video} type="video/mp4" />
            </video>
          </div>
          <div className="project_information">
            <h2 className="blog_title">{props.title}</h2>
            <p className="blog_date small_blog_date">{props.date}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;
