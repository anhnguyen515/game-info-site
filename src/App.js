import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./components/Navbar";
import OffcanvasSidebar from "./components/Sidebar/OffcanvasSidebar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDetails from "./pages/GameDetails";
import AllGames from "./pages/AllGames";
import PopularGames from "./pages/PopularGames";
import SearchResults from "./pages/SearchResults";

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
            <Col lg={2}>
              {width >= breakpoint ? <Sidebar /> : <OffcanvasSidebar />}
            </Col>
            <Col
              lg={10}
              style={{
                marginTop: "20px",
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<AllGames />} />
                <Route path="/games/:slug" element={<GameDetails />} />
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path="/popular" element={<PopularGames />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}
