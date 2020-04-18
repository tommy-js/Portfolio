import React from "react";
import "../../Main.scss";
import { Link } from "react-router-dom";

function BlogPost(props) {
  return (
    <Link to={props.link}>
      <div className="blog_post">
        <div className="blog_image_box">
          <img className="blog_image" src={props.image} />
        </div>
        <div className="blog_infomation">
          <h2 className="blog_title">{props.title}</h2>
          <p className="blog_date">{props.date}</p>
          <p className="blog_subheader">{props.p1}</p>
        </div>
      </div>
    </Link>
  );
}

export default BlogPost;
