import React, { Component } from "react";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="pageContainer">
        <div className="content">
          <h1>Welcome to Clarify</h1>
          <p>Guiding your career journey...</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    );
  }
}
