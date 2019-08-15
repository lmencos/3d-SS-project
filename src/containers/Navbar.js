import React, {Component} from 'react';
import './styles/NavBar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render (){
    return (
      <div className="navBar-container">
        <nav className="navBar">
          <ul className="navBar-ul">
            <li>
              <Link to="/home" className="navRef">Home</Link>
            </li>
            <li>
              <Link to="/gallery" className="navRef" >Gallery</Link>
            </li>
            <li>
              <Link to="/contactUs" className="navRef">Contact us</Link>
            </li>
            <li>
              <Link to="/enviroment3d" className="navRef">3D Enviroment</Link>
            </li>
            <li>
              <Link to="/ancientmask" className="navRef">Mask</Link>
            </li>
            <li>
              <Link to="/SignIn" className="navRef">Sign in</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
};
export default Navbar;