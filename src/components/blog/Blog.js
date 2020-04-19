import React from "react";
import BlogPost from "./BlogPost";
import blogPosts from "./blogPosts";

function Blog(props) {
  return (
    <div>
      {blogPosts.map(elements => (
        <BlogPost
          title={elements.title}
          image={elements.image}
          date={elements.date}
          p1={elements.subheader}
          keyId={elements.keyId}
        />
      ))}
    </div>
  );
}

export default Blog;
