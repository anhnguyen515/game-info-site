import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function Layout({ children }) {
  const colProps = {
    sidebar: {
      xs: 2,
    },
    mainContent: {
      xs: 10,
    },
  };
  return (
    <>
      <MyNavbar />
      <Container fluid>
        <Row>
          <Col {...colProps.sidebar}>
            <Sidebar />
          </Col>
          <Col {...colProps.mainContent}>
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
    </>
  );
}
