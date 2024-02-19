import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Footer from "../components/Footer";

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="basecontainer">
                    <div className="content-box">
                        <div className="about-image">
                            <img alt="Get to know us" src="../assets/success.jpg" />
                        </div>
                        <div className="about-content">
                            <h1>ABOUT US</h1>
                            linedivider
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ut libero laudantium nesciunt voluptas totam facere cumque molestiae saepe et amet laborum, officiis consequatur expedita similique sequi aliquam error beatae.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}