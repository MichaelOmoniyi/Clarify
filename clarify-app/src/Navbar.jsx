import React, { Component } from "react";
import profileImage from "./assets/Corey.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

export class NavBarNew extends Component {
  state = {
    user: [{ profileImg: { profileImage } }],
  };

  render() {
    return (
      <div className="NavBar_Container">
        <div className="NavBar">
          <div className="navHeaderLinks">
            <h2>Clarify</h2>
            <div className="navLinks">
              <a href="#" className="profile">
                Profile
              </a>
              <a href="#">Home</a>
              <a href="#">Mentors</a>
              <a href="#">Chat</a>
              <a href="#">Sign In</a>
            </div>
          </div>
          <FontAwesomeIcon className="hamburger" icon={faBars} onClick={this.openCloseNavBar} />
        </div>
        <div className="nav-dropdown">
          <a className="profile">Profile</a>
          <a href="#">Home</a>
          <a href="#">Mentors</a>
          <a href="#">Chat</a>
          <a href="#">Sign In</a>
        </div>
      </div>
    );
  }

  openCloseNavBar = () => {
    let dropDown = document.querySelector(".nav-dropdown");
    if (dropDown.style.display === "none") {
      dropDown.style.display = "flex";
    } else {
      dropDown.style.display = "none";
    }
  };
}

export class NavBarUser extends Component {
  state = {
    user: [{ profileImg: { profileImage } }],
  };

  render() {
    return (
      <div className="NavBar_Container">
        <div className="NavBar">
          <div className="navHeaderLinks">
            <h2>Clarify</h2>
            <div className="navLinks">
              <a href="#" className="profile">
                Profile
              </a>
              <a href="#">Home</a>
              <a href="#">Mentors</a>
              <a href="#">Chat</a>
            </div>
          </div>
          <img
            src={profileImage}
            onClick={this.openCloseNavBar}
            alt="Profile"
          />
        </div>
        <div className="nav-dropdown">
          <a href="#" className="profile">
            Profile
          </a>
          <a href="#">Home</a>
          <a href="#">Mentors</a>
          <a href="#">Chat</a>
        </div>
      </div>
    );
  }

  openCloseNavBar = () => {
    let dropDown = document.querySelector(".nav-dropdown");
    if (dropDown.style.display === "none") {
      dropDown.style.display = "flex";
    } else {
      dropDown.style.display = "none";
    }
  };
}