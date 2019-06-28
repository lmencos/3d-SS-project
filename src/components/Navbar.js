import React from 'react';
import './styles/NavBar.css';

const navBar = () => {
  return (
    <div className="navBar-container">
      <nav className="navBar">
        <ul className="navBar-ul">
          <li>
            <a className="navRef" href="">Gallery</a>
          </li>
          <li>
            <a className="navRef" href="">Projects</a>
          </li>
          <li>
            <a className="navRef" href="">Contact us</a>
          </li>
          <li>
            <a className="navRef" href="">Sign in</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default navBar;