import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link to="/">
        <h1>ZES</h1>
      </Link>
      <Link to="/login" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", textDecoration: "none" }}>Login</Link>
    </header>
  );
}

export default Header;