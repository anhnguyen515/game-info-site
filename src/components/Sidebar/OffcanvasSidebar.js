import React from "react";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OffcanvasSidebar() {
  return (
    <Navbar fixed="bottom" variant="dark" expand={false}>
      <Navbar.Toggle aria-controls="toggle-sidebar" />
      <Navbar.Offcanvas id="toggle-sidebar" className="offcanvas">
        <Offcanvas.Body>
          <Nav className="flex-column sidebar--nav offcanvas-nav">
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
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}
