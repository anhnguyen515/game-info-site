import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./components/Navbar";
import OffcanvasSidebar from "./components/Sidebar/OffcanvasSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDetails from "./GameDetails";
import AllGames from "./AllGames";

export default function App() {
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
      <Router>
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
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<AllGames />} />
                <Route path="/games/:id" element={<GameDetails />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}
