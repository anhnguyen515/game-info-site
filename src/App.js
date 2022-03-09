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
import MetascoreGames from "./pages/MetascoreGames";
import GamesByPlatforms from "./pages/GamesByPlatforms";
import GamesByGenres from "./pages/GamesByGenres";
import NewGames from "./pages/NewGames";
import Footer from "./components/Footer";

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
            <Col xs="auto" lg={3} xl={2}>
              {width >= breakpoint ? <Sidebar /> : <OffcanvasSidebar />}
            </Col>
            <Col lg={9} xl={10}>
              <Routes>
                <Route
                  path="*"
                  element={
                    <main style={{ padding: "1rem" }}>
                      <h2>What are you looking for exactly?</h2>
                    </main>
                  }
                />
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<AllGames />} />
                <Route path="/games/:slug" element={<GameDetails />} />
                <Route
                  path="/games/platform/:id"
                  element={<GamesByPlatforms />}
                />
                <Route path="/games/genre/:slug" element={<GamesByGenres />} />
                <Route path="/search/:query" element={<SearchResults />} />
                <Route path="/popular" element={<PopularGames />} />
                <Route path="/new" element={<NewGames />} />
                <Route path="/metascore" element={<MetascoreGames />} />
              </Routes>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Router>
    </>
  );
}
