import React, { Component } from "react";
import GoogleIcon from "./assets/google.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css"

export default class SignUp extends Component {
  render() {
    return (
      <div className="signUpContainer">
        <div className="signUpContent">
          <h3>WELCOME TO CLARIFY</h3>
          <p>Create an Account</p>
          <form action="" method="post">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="submit" />
          </form>
          <p className="option">or</p>
          <button>
            <img className="googleIcon" src={GoogleIcon} alt="Google Icon" />
            Sign Up with Google
          </button>
          <a href="#">Already have an account?</a>
        </div>
      </div>
    );
  }
}
