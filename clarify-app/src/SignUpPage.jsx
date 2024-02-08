import React, { Component } from "react";
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
          <p>or</p>
          <button>
            <img src="./assets/icons8-google-48.png" alt="Google Icon" />
            Sign Up with Google
          </button>
          <a href="#">Already have an account?</a>
        </div>
      </div>
    );
  }
}
