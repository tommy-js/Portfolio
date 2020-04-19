import React from "react";
import BlogImage from "../BlogImage";
import BlogHeader from "../BlogHeader";
import Date from "../Date";
import BlogText from "../BlogText";
import blogPosts from "../blogPosts.js";
import "../../../Main.scss";

function BlogPage(props) {
  return (
    <div className="main_blog">
      <BlogImage image={props.image} />
      <BlogHeader title={props.title} />
      <Date date={props.date} />
      <BlogText p1={props.p1} />
    </div>
  );
}

export default BlogPage;
