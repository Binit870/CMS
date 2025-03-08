import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/students">Students</Link></li>
      <li><Link to="/faculty">Faculty</Link></li>
    </ul>
  </nav>
);

export default Navbar;
