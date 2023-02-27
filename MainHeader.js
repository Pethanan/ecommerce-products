import React from "react";
import { NavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/Welcome">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="/Products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
