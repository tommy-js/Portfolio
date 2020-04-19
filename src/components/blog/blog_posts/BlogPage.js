import React from "react";
import BlogImage from "../BlogImage";
import BlogHeader from "../BlogHeader";
import BlogText from "../BlogText";
import post1 from "./postInfo.js";

function BlogPage(props) {
  return (
    <div>
      <BlogImage image={post1.image} />
      <BlogHeader />
      <BlogText />
    </div>
  );
}

export default BlogPage;
