import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./LandingPage.css";
import Footer from "../components/Footer";

export default class LandingPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="basecontain">
          <div className="landing-card">
            <div className="content">
              <h1>Welcome to Clarify</h1>
              <p>Guiding your career journey...</p>
              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
          <div className="feature-section">
            <h3>Features</h3>
            <div className="feature-cards">
              <div className="card">
                <div className="card-content">
                  <div className="header-icon">
                    <img
                      width="100"
                      height="100"
                      src="https://img.icons8.com/ios/100/personal-growth.png"
                      alt="personal-growth"
                    />
                  </div>
                  <div className="card-text">
                    <h2>Personalized Career Insights</h2>
                    <p>
                      Discover the perfect career path for you with Clarify's
                      Personalized Career Insights. Our AI analyzes your skills,
                      preferences, and industry trends to providetailored
                      recommendations, empowering yo to make informed career
                      decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="header-icon">
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/external-guidance-school-counseling-inipagistudio-lineal-color-inipagistudio.png"
                      alt="external-guidance-school-counseling-inipagistudio-lineal-color-inipagistudio"
                    />
                  </div>
                  <div className="card-text">
                    <h2>Real-Time Guidance Chat</h2>
                    <p>
                      Get instant advice and support with our Real-Time Guidance
                      Chat feature. Connect with our AI chatbot for personalized
                      assistance, whether it's resume tips, interview
                      strategies, or industry-specific advice. Clarify is your
                      24/7 career companion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="header-icon">
                    <img
                      width="64"
                      height="64"
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-trends-social-media-agency-flaticons-lineal-color-flat-icons-2.png"
                      alt="external-trends-social-media-agency-flaticons-lineal-color-flat-icons-2"
                    />
                  </div>
                  <div className="card-text">
                    <h2>Latest Career Trends Feed</h2>
                    <p>
                      Stay ahead in your career journey with our Latest Career
                      Trends Feed. Access the freshest insights, industry
                      updates, and expert tips to keep you informed and
                      prepared. Clarify ensures you're always in sync with the
                      latest in your chosen field.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="aboutTeam">
            <div className="about">
              <h3>About Us</h3>
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
            <a
              href="https://github.com/MichaelOmoniyi/Clarify"
              target="_blank"
              className="repoLink"
            >
              <button>
                Check out Repo
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </a>
          </section>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
