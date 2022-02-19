import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/">Reviews</Link>
      <div>
        New Releases
        <Link to="/"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
      </div>
    </div>
  );
}
