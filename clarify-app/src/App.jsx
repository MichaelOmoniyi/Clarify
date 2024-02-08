import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { NavBarNew } from "./Navbar";
import LandingPage from "./LandingPage";
import SignUp from "./SignUpPage";

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <this.NavBarChecker />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </React.Fragment>
      </Router>
    );
  }
  NavBarChecker = () => {
    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    if (currentPath === "/signup") {
      return null;
    }

    return <NavBarNew />;
  };
}

export class SignUpPage extends Component {
  render() {
    return <SignUp />;
  }
}
