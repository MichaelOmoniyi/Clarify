import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext.js';
import Navbar from './components/Navbar.jsx';
import Protected from './components/Protected.js';
import Account from './pages/Account.jsx';
//import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Chat from './pages/Chat.jsx';

import LandingPage from "./pages/LandingPage";
import About from './pages/About.jsx';
//import { NavBarUser } from "./pages/Navbar";
//import { NavBarNew } from "./pages/Navbar";
//import SignUp from "./pages/SignUpPage";

const Title = () => {
  switch (window.location.pathname) {
    case "/":
      document.title = "Home - Clarify";
      break;
    case "/signup":
      document.title = "Sign Up - Clarify";
      break;
    case "/signin":
      document.title = "Sign In - Clarify";
      break;
    case "/chat":
      document.title = "Chat - Clarify";
      break;
    case "/about":
      document.title = "About - Clarify";
      break;
    default:
      document.title = "Clarify";
  }
};

// const NavBarChecker = () => {
//   const currentPath = window.location.pathname;

//   if (currentPath === "/signin") {
//     return null;
//   } else if (currentPath === "/chat") {
//     return <NavBarUser />;
//   }

//   return <NavBarNew />;
// };

function App() {
  return (
    <div>
      <AuthContextProvider>

        <Title />
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route
            path='/chat'
            element={
              <Protected>
                <Chat />
              </Protected>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;