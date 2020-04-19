import React from "react";
import "../../Main.scss";

function BlogImage(props) {
  return (
    <div className="blog_image_container">
      <img className="blog_image_inner" src={props.image} />
    </div>
  );
}

export default BlogImage;
