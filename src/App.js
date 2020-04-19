import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Master from "./components/Master";
import Resume from "./components/Resume";
import BlogPost1 from "./components/blog/blog_posts/BlogPost1";
import ProjectPage from "./components/projects/ProjectPage";
import projectList from "./components/projects/projectList";

function App() {
  const [mappingProjects, setMappingProjects] = useState(projectList);
  const [mappingBlogs, setMappingBlogs] = useState([]);
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
          <Master mappingProjects={mappingProjects} />
        </Route>
        <Route exact path="/Post1">
          <BlogPost1 />
        </Route>
        {mappingProjects.map(el => (
          <Route exact path={"/" + el.title}>
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
