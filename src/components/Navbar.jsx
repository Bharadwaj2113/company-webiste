import React, { useState } from 'react';
import '../App.css';
import logo from '../assets/logo.svg'


export const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  return (
    <header className={`header ${navActive ? 'nav-active' : ''}`}>
      <div className="container">
      <a href="#" className="logo">
        <img src={logo} alt="Solutry logo" /> {/* Use the imported logo */}
      </a>

        <button
          className="nav-toggle-btn"
          data-nav-toggle-btn
          onClick={toggleNav}
        >
          <ion-icon name="menu-outline" className="open"></ion-icon>
          <ion-icon name="close-outline" className="close"></ion-icon>
        </button>

        <nav className="navbar">
          <div className="container">
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link" data-navbar-link>
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="navbar-link" data-navbar-link>
                  Features
                </a>
              </li>
              <li>
                <a href="#service" className="navbar-link" data-navbar-link>
                  Service
                </a>
              </li>
              <li>
                <a href="#blog" className="navbar-link" data-navbar-link>
                  Blog
                </a>
              </li>
              <li>
                <a href="#newsletter" className="navbar-link" data-navbar-link>
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <button className="btn btn-secondary">
          <span>Get Started</span>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
