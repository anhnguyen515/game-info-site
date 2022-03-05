import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function MyNavbar() {
  return (
    <>
      <Container fluid="lg">
        <Navbar variant="dark" expand="lg">
          <Navbar.Brand>
            <Link to="/">RAWGR</Link>
          </Navbar.Brand>
          <Searchbar />
        </Navbar>
      </Container>
    </>
  );
}
