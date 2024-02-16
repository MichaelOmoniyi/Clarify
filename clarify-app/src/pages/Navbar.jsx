import React, { Component } from "react";
import profileImage from "../assets/Corey.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import "./NavBar.css";

export class NavBarNew extends Component {
  render() {
    return (
      <div className="NavBar_Container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

            <Link
              to="/"
              className="navbar-brand navbar-header">
              Clarify
            </Link>

            <button
              className="navbar-toggler dropdown-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse nav-dropdown" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/account"
                    className="nav-link active" aria-current="page">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/chat"
                    className="nav-link active" aria-current="page">
                    Chat
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/signin"
                    className="nav-link active" aria-current="page">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const { user, logOut } = UserAuth();

const handleSignOut = async () => {
  try {
    await logOut()
  } catch (error) {
    console.log(error)
  }
};

export class NavBarUser extends Component {

  render() {
    return (
      <div className="NavBar_Container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand navbar-header" href="#">
              Clarify
            </a>
            {/* <button
              className="navbar-toggler dropdown-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <img
              src={profileImage}
              alt="Profile"
              className="navbar-toggler nav-profileImg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
            <div
              className="collapse navbar-collapse nav-dropdown"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/account"
                    className="nav-link active" aria-current="page">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/chat"
                    className="nav-link active" aria-current="page">
                    Chat
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={handleSignOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
            <img className="profileImg" src={profileImage} alt="Profile" />
          </div>
        </nav>
      </div>
    );
  }
}