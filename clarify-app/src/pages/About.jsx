import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Footer from "../components/Footer";
import AboutImage from "../assets/tutoring.jpg";

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="basecontainer">
                    <div className="content-box">
                        <div className="about-image">
                            <img alt="Get to know us" src={AboutImage} />
                        </div>
                        <div className="about-content">
                            <h1>ABOUT US</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque ut libero laudantium nesciunt voluptas totam facere cumque molestiae saepe et amet laborum, officiis consequatur expedita similique sequi aliquam error beatae.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae corporis possimus quo expedita ut architecto officiis quae nobis vitae corrupti a eveniet quibusdam omnis quis, cumque magnam numquam voluptate doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis ab commodi accusamus nisi, doloribus mollitia laborum vel. Ea recusandae nostrum libero corporis vitae nihil cumque tenetur ipsum deleniti! Sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellendus cupiditate eaque, saepe incidunt pariatur exercitationem nisi iure nesciunt voluptates nulla quibusdam debitis laudantium deleniti molestiae distinctio! Nam, beatae doloribus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, facere adipisci quisquam at enim voluptatem cum consectetur, voluptate neque nemo fugit mollitia doloribus. Necessitatibus, enim. Itaque ipsam repellendus similique dignissimos.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}