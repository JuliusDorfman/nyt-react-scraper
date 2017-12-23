import React from "react";
import "./Navbar.css"

const Navbar = ({children}) =>

	<div className="Navbar">
		<nav className="navbar navbar-inverse bg-primary">
		<h1>NYTScraper</h1>
		<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="../../Pages/Search.js">Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="../../Pages/Saved.js">Saved Articles</a>
      </li>
    </ul>
  </div>
		</nav>
	</div>

export default Navbar;