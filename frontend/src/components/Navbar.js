import React from "react";
import logo from "../assets/logo.png"; // Import the logo image
import "./Navbar.css"; // Import CSS file for additional styling

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar border-y-2 border-black-200 mt-10">
        <ul className="flex flex-col sm:flex-row  sm:gap-10 ms-5">
          <li>
            <img src={logo} alt="logo" className="w-20" />{" "}
            {/* Apply width to the logo */}
          </li>
          <li>
            <a href="#">Android</a>
          </li>
          <li>
            <a href="#">Chrome</a>
          </li>
          <li>
            <a href="#">Firebase</a>
          </li>
          <li>
            <a href="#">Google Cloud Platform</a>
          </li>
          <li>
            <a href="#">All products</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
