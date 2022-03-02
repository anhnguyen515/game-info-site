import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation({ offcanvas, fixedBottom }) {
  return (
    <Navbar
      variant="dark"
      className={!offcanvas && "sidebar"}
      fixed={fixedBottom && "bottom"}
    >
      <Nav className="flex-column sidebar--nav">
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/games">All Games</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/popular">Popular Games</Link>
        </Nav.Item>
        <Nav.Item>
          Platforms
          <Link to="/games/pc"></Link>
          <Link to="/games/playstation"></Link>
          <Link to="/games/xbox"></Link>
          <Link to="/games/"></Link>
        </Nav.Item>
        <Nav.Item>
          Genres
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
          <Link to="/"></Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
