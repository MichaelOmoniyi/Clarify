import React, { Component } from "react";
import { NavBarNew } from "./Navbar";
import LandingPage from "./LandingPage";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarNew />
        <LandingPage />
      </React.Fragment>
    );
  }
}
