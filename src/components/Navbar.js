import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import logo from "../images/RAWGR-logo-white.png";

export default function MyNavbar() {
  return (
    <>
      <Container fluid="lg">
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="rawgr logo" width="150px" />
            </Link>
          </Navbar.Brand>
          <Searchbar />
        </Navbar>
      </Container>
    </>
  );
}
