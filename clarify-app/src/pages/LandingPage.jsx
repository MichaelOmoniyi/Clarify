import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="content">
          <h1>Welcome to Clarify</h1>
          <p>Guiding your career journey...</p>
          <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    );
  }
}
