import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import { GoogleButton } from 'react-google-button';
// import { GoogleButton } from 'react-google-button';
// import { UserAuth } from '../context/AuthContext';
import "./Signin.css";
import Footer from "../components/Footer";


const Signin = () => {

  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);


    return (
        <div className="basecontainer">
          <div className="signcard">
            <div className="formcontent">
              <h3 className="header">Sign In</h3>
              <form action="" method="get">
                <input id="email" type="email" placeholder="Email" />
                <input id="password" type="password" placeholder="Password" />
                <Link className="submitForm">
                  <input type="submit" placeholder="Sign In" />
                </Link>
              </form>
              
              <GoogleButton className="GoogleSignin" onClick={handleGoogleSignIn} />
            </div>
          </div>
          <Footer />
        </div>
    );
}

export default Signin;