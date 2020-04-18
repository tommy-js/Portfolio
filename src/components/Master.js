import React, { Component } from "react";
import Projects from "./projects/Projects";
import Blog from "./blog/Blog";
import "../Main.scss";

export default class Master extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main_body">
        <div className="projects_body">
          <h1 className="header">Projects</h1>
          <Projects />
        </div>
        <div className="blogs_body">
          <h1 className="header">Blog</h1>
          <Blog />
        </div>
      </div>
    );
  }
}
