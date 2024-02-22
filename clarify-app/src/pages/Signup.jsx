import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css";
import Footer from '../components/Footer';

const Signup = () => {
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
    <>
    <div className="signUpContainer">
      <div className="subContainer">
        <div className="signUpContent">
          <h3>WELCOME TO CLARIFY</h3>
          <p>Create an Account</p>
          <form action="" method="get">
            <input id="email" type="email" placeholder="Email" />
            <input id="userName" type="text" placeholder="Username" />
            <input id="password" type="password" placeholder="Password" />
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
            <div className="validation">
              <p className="password">Passwords do not match</p>
              <p className="email">Invalid email</p>
              <p className="username">Invalid username</p>
            </div>
            <Link
              // to={this.state.dynamicPath}
              className="submitForm"
              // onClick={this.validateForm}
            >
              <input type="submit" />
            </Link>
          </form>
          <p className="option">or</p>
          {/* <button>
            <img className="googleIcon" src={GoogleIcon} alt="Google Icon" />
            Sign Up with Google
          </button> */}
          <GoogleButton className="GoogleSignin" onClick={handleGoogleSignIn} />
          <a href="#">Already have an account?</a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Signup;