import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { NavBarUser } from "./pages/Navbar";
import { NavBarNew } from "./pages/Navbar";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUpPage";
import Chat from "./pages/Chat";

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