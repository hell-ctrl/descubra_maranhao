import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./index.css";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
    </header>
  );
}

export default Header;
