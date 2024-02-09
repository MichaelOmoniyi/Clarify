import React, { Component } from "react";
import profileImage from "./assets/Corey.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

export class NavBarNew extends Component {
  render() {
    return (
      <div className="NavBar_Container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand navbar-header" href="#">
              Clarify
            </a>
            <button
              class="navbar-toggler dropdown-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav-dropdown" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Mentors
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Chat
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownVisible: !prevState.isDropdownVisible,
    }));
  };
}

export class NavBarUser extends Component {
  state = {
    isDropdownVisible: false,
  };

  render() {
    const { isDropdownVisible } = this.state;

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
          <img src={profileImage} onClick={this.toggleDropdown} alt="Profile" />
        </div>
        {isDropdownVisible && (
          <div className="nav-dropdown">
            <a href="#" className="profile">
              Profile
            </a>
            <a href="#">Home</a>
            <a href="#">Mentors</a>
            <a href="#">Chat</a>
          </div>
        )}
      </div>
    );
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownVisible: !prevState.isDropdownVisible,
    }));
  };
}