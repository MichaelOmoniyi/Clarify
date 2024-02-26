import React, { Component } from "react";
import { Link } from "react-router-dom";
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
              <Link to="/signup" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
          <div className="feature-section">
            <div className="feature-cards">
              <div className="card">
                <div className="card-content">
                  <div className="header-icon">
                    <img width="100" height="100" src="https://img.icons8.com/ios/100/personal-growth.png" alt="personal-growth" />
                  </div>
                  <div className="card-text">
                    <h2>Personalized Career Insights</h2>
                    <p>Discover the perfect career path for you with Clarify's Personalized Career Insights. Our AI analyzes your skills, preferences, and industry trends to providetailored recommendations, empowering yo to make informed career decisions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="header-icon">
                    <img width="64" height="64" src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/external-guidance-school-counseling-inipagistudio-lineal-color-inipagistudio.png" alt="external-guidance-school-counseling-inipagistudio-lineal-color-inipagistudio" />
                  </div>
                  <div className="card-text">
                    <h2>Real-Time Guidance Chat</h2>
                    <p>Get instant advice and support with our Real-Time Guidance Chat feature. Connect with our AI chatbot for personalized assistance, whether it's resume tips, interview strategies, or industry-specific advice. Clarify is your 24/7 career companion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content">
                  <div className="header-icon">
                    <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-trends-social-media-agency-flaticons-lineal-color-flat-icons-2.png" alt="external-trends-social-media-agency-flaticons-lineal-color-flat-icons-2" />
                  </div>
                  <div className="card-text">
                    <h2>Latest Career Trends Feed</h2>
                    <p>Stay ahead in your career journey with our Latest Career Trends Feed. Access the freshest insights, industry updates, and expert tips to keep you informed and prepared. Clarify ensures you're always in sync with the latest in your chosen field.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />

        </div>
      </React.Fragment>
    );
  }
}
