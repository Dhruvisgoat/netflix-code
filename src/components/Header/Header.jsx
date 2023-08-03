import React, { useState } from 'react';
import './Header.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix logo" className="logo" />
        <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">TV Shows</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Movies</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">New & Popular</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">My List</a>
          </li>
        </ul>
        <button className="toggle-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Header;
