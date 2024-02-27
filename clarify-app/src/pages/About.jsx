import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";
import Footer from "../components/Footer";
import AboutImage from "../assets/tutoring.jpg";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="basecontainer">
          <div className="content-box">
            <div className="about-image">
              <img alt="Get to know us" src={AboutImage} />
            </div>
            <div className="about-content">
              <h1>ABOUT US</h1>
              <p>
                "In a quest to proffer a solution to challenges many beginners
                or even professionals face, we thought to solve the problem of
                mentorship which many of us can relate to. We decided to create
                an application that helps people navigate their respective
                career paths and gain an understanding of their strengths, and
                weaknesses and what career paths suit them better."
              </p>
            </div>
            <div className="team">
              <h3>Meet the team...</h3>
              <div className="members">
                <div className="member">
                  <h5>Michael T. Omoniyi</h5>
                  <FontAwesomeIcon className="diamond" icon={faDiamond} />
                  <p>Frontend Developer</p>
                  <div className="socials">
                    <a
                      href="https://github.com/MichaelOmoniyi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="social" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/michael-omoniyi-1b2307232/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="social" icon={faLinkedinIn} />
                    </a>
                    <a
                      href="https://twitter.com/Omons_Mikel"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="social" icon={faTwitter} />
                    </a>
                  </div>
                </div>
                <div className="member">
                  <h5>Odinaka</h5>
                  <FontAwesomeIcon className="diamond" icon={faDiamond} />
                  <p>Backend Developer</p>
                  <div className="socials">
                    <a
                      href="https://github.com/astronolt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="social" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/odinakadev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="social" icon={faLinkedinIn} />
                    </a>
                  </div>
                </div>
                <div className="member">
                  <h5>Toheeb Majaro</h5>
                  <FontAwesomeIcon className="diamond" icon={faDiamond} />
                  <p>Frontend Developer</p>
                  <div className="socials">
                    <a
                      href="https://github.com/Torh-21"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="social" icon={faGithub} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/toheeb-majaro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="social" icon={faLinkedinIn} />
                    </a>
                    <a
                      href="https://twitter.com/torh_gg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon className="social" icon={faTwitter} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
