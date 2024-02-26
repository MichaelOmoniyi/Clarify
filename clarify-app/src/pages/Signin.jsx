import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
// import { GoogleButton } from 'react-google-button';
// import { UserAuth } from '../context/AuthContext';
// import { Link, useNavigate } from 'react-router-dom';
import "./Signin.css";
import Footer from "../components/Footer";

export default class Signin extends Component {
  render() {
    return (
      <>
        <div className="basecontainer">
          <div className="signcard">
            <div className="formcontent">
              <h3 className="header">Sign In</h3>
              <form action="" method="get">
                <input id="email" type="email" placeholder="Email" />
                <input id="password" type="password" placeholder="Password" />
                <Link className="submitForm">
                  <input type="submit" placeholder="Sign In" />
                </Link>
              </form>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
