import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footercontain">
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item">
                                <Link
                                    to="/chat"
                                    className="nav-link active" aria-current="page">
                                    Chat
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/features"
                                    className="nav-link active" aria-current="page">
                                    Features
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/pricing"
                                    className="nav-link active" aria-current="page">
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/faqs"
                                    className="nav-link active" aria-current="page">
                                    FAQs
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className="nav-link active" aria-current="page">
                                    About
                                </Link>
                            </li>
                        </ul>
                        <p className="text-center text-body-secondary footer-text" >© 2024 Clarify, Inc</p>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}