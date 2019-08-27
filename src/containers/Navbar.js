import React, { Component } from 'react';
import './styles/NavBar.css';
// import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navBar-container">

            <ul className="navBar-ul">
              <li>
                <a href="/home" className="navRef">Home</a>
              </li>
              <li>
                <a href="/gallery" className="navRef" >Gallery </a>
              </li>
              <li>
                <a href="/contactUs" className="navRef">ContactUs</a>
              </li>
              <li>
                <a href="/enviroment3d" className="navRef">3dEnv</a>
              </li>
              <li>
                <a href="/ancientmask" className="navRef">Mask</a>
              </li>
              <li>
                <a href="/SignIn" className="navRef">Sign-In</a>
              </li>
            </ul>
        
      </div>
    );
  };
};
export default Navbar;