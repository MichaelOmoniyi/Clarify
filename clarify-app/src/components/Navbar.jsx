import React from 'react';
import profileImage from "../assets/Corey.png";
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import "./NavBar.css";

const Navbar = () => {
   const { user, logOut } = UserAuth();

   const handleSignOut = async () => {
      try {
         await logOut()
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className="NavBar_Container">
         <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
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
                        {user?.displayName ? (
                           <button className="nav-link active" onClick={handleSignOut}>Logout</button>
                        ) : (
                           <Link to='/signin'>Sign in</Link>
                        )}
                     </li>
                  </ul>
               </div>
               {user?.displayName ? (
                           <img className="profileImg" src={profileImage} alt="Profile" />
                        ) : (
                           ""
                        )}
            </div>
         </nav>
      </div>
   );
};

export default Navbar;