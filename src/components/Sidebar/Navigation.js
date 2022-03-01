import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation({ offcanvas }) {
  return (
    <Navbar variant="dark" className={!offcanvas && "sidebar"}>
      <Nav
        className={
          offcanvas
            ? "flex-column sidebar--nav offcanvas-nav"
            : "flex-column sidebar--nav"
        }
      >
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/games">All Games</Link>
        </Nav.Item>
        <Nav.Item>
          Platforms
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
