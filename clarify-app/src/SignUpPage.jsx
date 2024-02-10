import React, { Component } from "react";
import { useState } from "react";
import GoogleIcon from "./assets/google.png";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dynamicPath: "",
    };
  }

  HrefChanger = () => {
    this.setState({ dynamicPath: "/chat" });
  };

  validateForm = () => {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let userName = document.getElementById("userName").value;
    let email = document.getElementById("email").value;
    const emailRegex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    // let changeHref = document.querySelector(".submitForm");
    let passwordError = document.querySelector(".password");
    let emailError = document.querySelector(".email");
    let unameError = document.querySelector(".username");

    passwordError.style.display = "none";
    emailError.style.display = "none";
    unameError.style.display = "none";

    if (password === confirmPassword) {
      if (emailRegex.test(email)) {
        if (userName === "Omons") {
          this.HrefChanger();
          document.title = "Chat - Clarify";
        } else {
          unameError.style.display = "block";
        }
      } else {
        emailError.style.display = "block";
      }
    } else {
      passwordError.style.display = "block";
    }
  };

  render() {
    return (
      <div className="signUpContainer">
        <div className="subContainer">
          <div className="signUpContent">
            <h3>WELCOME TO CLARIFY</h3>
            <p>Create an Account</p>
            <form action="" method="get">
              <input id="email" type="email" placeholder="Email" />
              <input id="userName" type="text" placeholder="Username" />
              <input id="password" type="password" placeholder="Password" />
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
              <div className="validation">
                <p className="password">Passwords do not match</p>
                <p className="email">Invalid email</p>
                <p className="username">Invalid username</p>
              </div>
              <Link
                to={this.state.dynamicPath}
                className="submitForm"
                onClick={this.validateForm}
              >
                <input type="submit" />
              </Link>
            </form>
            <p className="option">or</p>
            <button>
              <img className="googleIcon" src={GoogleIcon} alt="Google Icon" />
              Sign Up with Google
            </button>
            <a href="#">Already have an account?</a>
          </div>
        </div>
      </div>
    );
  }
}
