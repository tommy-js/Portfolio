import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Master from "./components/Master";
import Resume from "./components/Resume";
import BlogPost1 from "./components/blog/blog_posts/BlogPost1";

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
          <Master />
        </Route>
        <Route exact path="/Post1">
          <BlogPost1 />
        </Route>
      </div>
    </Router>
  );
}

export default App;
