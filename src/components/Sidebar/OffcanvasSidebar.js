import React from "react";
import { Navbar, Offcanvas } from "react-bootstrap";
import Navigation from "./Navigation";

export default function OffcanvasSidebar(props) {
  return (
    <Navbar fixed="bottom" variant="dark" expand={false}>
      <Navbar.Toggle aria-controls="toggle-sidebar" />
      <Navbar.Offcanvas id="toggle-sidebar" className="offcanvas">
        <Offcanvas.Body>
          <Navigation offcanvas={true} {...props} />
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
}
