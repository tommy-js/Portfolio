import React from "react";
import BlogPost from "./BlogPost";
import blogPosts from "./blogPosts";

function Blog() {
  return (
    <div>
      {blogPosts.map(elements => (
        <BlogPost
          title={elements.title}
          image={elements.image}
          date={elements.date}
          p1={elements.subheader}
          link={elements.link}
        />
      ))}
    </div>
  );
}

export default Blog;
