import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import logo from "../images/logo.png";
import profilePicture from "../images/profilePicture.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isdrop, setdrop] = useState(false);
  const toggledrop = () => {
    setdrop(prevState => !prevState);
  }

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', isDarkMode ? '#333' : '#fff');
  }, [isDarkMode]);

  const [search, setSearch] = useState('');

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
          <div className="nav-link">
            <div className="dropdown">
              <button className="dropdown-button">DASHBOARD <span className="dropdown-icon">&#9662;</span></button>
              <div className="dropdown-menu">
                <a href="/">Option 1</a>
                <a href="/">Option 2</a>
                <a href="/">Option 3</a>
              </div>
            </div>
          </div>
        <div className="nav-link">
          <div className="dropdown">
            <button className="dropdown-button">APPS <span className="dropdown-icon">&#9662;</span></button>
            <div className="dropdown-menu">
              <a href="/">Option 1</a>
              <a href="/">Option 2</a>
              <a href="/">Option 3</a>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <div className="dropdown">
            <button className="dropdown-button">UI KITS <span className="dropdown-icon">&#9662;</span></button>
            <div className="dropdown-menu">
              <a href="/">Option 1</a>
              <a href="/">Option 2</a>
              <a href="/">Option 3</a>
            </div>
          </div>
        </div>
        <div className="nav-link">
          <div className="dropdown">
            <button className="dropdown-button">PAGES <span className="dropdown-icon">&#9662;</span></button>
            <div className="dropdown-menu">
              <a href="/">Option 1</a>
              <a href="/">Option 2</a>
              <a href="/">Option 3</a>
            </div>
          </div>
        </div>
          <div className="nav-link">
            <div className="dropdown">
              <button className="dropdown-button">AUTHENTICATION <span className="dropdown-icon">&#9662;</span></button>
              <div className="dropdown-menu">
                <a href="/">Option 1</a>
                <a href="/">Option 2</a>
                <a href="/">Option 3</a>
              </div>
            </div>
          </div>
      </div>

      <div className="profile-container">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <span className="profile-name">Maria<p className="admin">Admin</p></span>
      </div>
    </nav>
  );
}

export default Navbar;