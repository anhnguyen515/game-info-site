import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Navbar variant="dark" className="sidebar">
      <Nav className="flex-column sidebar--nav">
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/reviews">Reviews</Link>
        </Nav.Item>
        <Nav.Item>
          New Releases
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
