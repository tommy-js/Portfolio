import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Master from "./components/Master";
import Resume from "./components/Resume";
import BlogPage from "./components/blog/blog_posts/BlogPage";
import ProjectPage from "./components/projects/ProjectPage";
import projectList from "./components/projects/projectList";
import blogPosts from "./components/blog/blogPosts";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/Contact">
          <Contact />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
        <Route exact path="/">
          <Master mappingProjects={projectList} mappingBlogs={blogPosts} />
        </Route>
        {blogPosts.map(el => (
          <Route exact path={"/Blogs/" + el.keyId}>
            <BlogPage
              title={el.title}
              image={el.image}
              date={el.date}
              subheader={el.subheader}
              p1={el.p1}
            />
          </Route>
        ))}
        {projectList.map(el => (
          <Route exact path={"/Projects/" + el.id}>
            <ProjectPage
              title={el.title}
              description={el.description}
              p1={el.p1}
            />
          </Route>
        ))}
      </div>
    </Router>
  );
}

export default App;
