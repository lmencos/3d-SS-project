import React, {Component} from 'react';
import './styles/NavBar.css';
// import {Link} from 'react-router-dom';

class Navbar extends Component {
  render (){
    return (
      <div className="navBar-container">
        <nav className="navBar">
          <a href="/home">
            <ul className="navBar-ul">
              <li>
                <a href="/home" className="navRef">Home</a>
              </li>
              <li>
                <a href="/gallery" className="navRef" >Gallery</a>
              </li>
              <li>
                <a href="/contactUs" className="navRef">Contact us</a>
              </li>
              <li>
                <a href="/enviroment3d" className="navRef">3D Enviroment</a>
              </li>
              <li>
                <a href="/ancientmask" className="navRef">Mask</a>
              </li>
              <li>
                <a href="/SignIn" className="navRef">Sign in</a>
              </li>
            </ul>
          </a>
        </nav>
      </div>
    );
  };
};
export default Navbar;