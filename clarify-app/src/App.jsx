import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { NavBarUser } from "./Navbar";
import { NavBarNew } from "./Navbar";
import LandingPage from "./LandingPage";
import SignUp from "./SignUpPage";
import Chat from "./chatpage";

const Title = () => {
  switch (window.location.pathname) {
    case "/":
      document.title = "Home - Clarify";
      break;
    case "/signup":
      document.title = "Sign Up - Clarify";
      break;
    case "/chat":
      document.title = "Chat - Clarify";
      break;
    default:
      document.title = "Clarify";
  }
};

const NavBarChecker = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  if (currentPath === "/signup") {
    return null;
  } else if (currentPath === "/chat") {
    return <NavBarUser />;
  }

  return <NavBarNew />;
};

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Title />
          <NavBarChecker />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </React.Fragment>
      </Router>
    );
  }
}