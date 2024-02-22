import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Footer from "../components/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="basecontain">
          <div className="pageContainer">
            <div className="content">
              <h1>Welcome to Clarify</h1>
              <p>Guiding your career journey...</p>
              <Link to="/signin" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
          <div className="subcontent">

          </div>
          <Footer/>

        </div>
      </React.Fragment>
    );
  }
}
