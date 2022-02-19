import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function MyNavbar() {
  return (
    <>
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <Link to="/">RAWG</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Searchbar />
          <Nav className="me-auto nav--auth">
            <Nav.Link>Log in</Nav.Link>
            <Nav.Link>Sign up</Nav.Link>
            <Nav.Link>
              <BsThreeDots />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
