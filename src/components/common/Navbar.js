import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar1">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#">Home</a>
        </li>

        <li className="navbar-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="#">Dropdown</a>

          {isOpen && (
            <ul className="navbar-dropdown">
              <li>
                <a href="#">Option 1</a>
              </li>
              <li>
                <a href="#">Option 2</a>
              </li>
              <li>
                <a href="#">Option 3</a>
              </li>
            </ul>
          )}
        </li>

        <li className="navbar-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
