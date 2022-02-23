import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../Navbar";
import OffcanvasSidebar from "../Sidebar/OffcanvasSidebar";
import Sidebar from "../Sidebar/Sidebar";

export default function Layout({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 992;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MyNavbar />
      <Container fluid style={{ padding: "10px 40px" }}>
        <Row>
          <Col xs={12} md="auto">
            {width >= breakpoint ? <Sidebar /> : <OffcanvasSidebar />}
          </Col>
          <Col
            style={{
              marginTop: "20px",
            }}
          >
            <main>{children}</main>
          </Col>
        </Row>
      </Container>
    </>
  );
}
