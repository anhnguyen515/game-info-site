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
import axios from "axios";
import { convertToTwoDigits } from "./common/utils";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 992;
  const [newGames, setNewGames] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);

  const date = new Date();
  const year = date.getFullYear();
  const month = convertToTwoDigits(
    date.getMonth() !== 0 ? date.getMonth() : date.getMonth() + 1
  );
  const day = convertToTwoDigits(date.getDate());
  const today = year + "-" + month + "-" + day;
  const nextYear = year + 1 + "-" + month + "-" + day;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newGames = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&dates=${today},${nextYear}&page_size=4`;
    const platforms = `${process.env.REACT_APP_API_URL}/platforms/lists/parents?key=${process.env.REACT_APP_API_KEY}`;
    const genres = `${process.env.REACT_APP_API_URL}/genres?key=${process.env.REACT_APP_API_KEY}`;

    const getNewGames = axios.get(newGames);
    const getPlatforms = axios.get(platforms);
    const getGenres = axios.get(genres);
    axios
      .all([getNewGames, getPlatforms, getGenres])
      .then(
        axios.spread((...allData) => {
          const newGamesData = allData[0].data.results;
          const platformsData = allData[1].data.results;
          const genresData = allData[2].data.results;
          setNewGames(newGamesData);
          setPlatforms(platformsData);
          setGenres(genresData);
        })
      )
      .catch((err) => console.log(err));
  }, [today, nextYear]);

  return (
    <>
      <Router>
        <MyNavbar />
        <Container fluid style={{ padding: "10px 40px" }}>
          <Row>
            <Col xs="auto" lg={3} xl={2}>
              {width >= breakpoint ? (
                <Sidebar platforms={platforms} genres={genres} />
              ) : (
                <OffcanvasSidebar platforms={platforms} genres={genres} />
              )}
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
        <Footer games={newGames} platforms={platforms} genres={genres} />
      </Router>
    </>
  );
}
