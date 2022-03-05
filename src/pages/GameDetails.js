import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import DetailHeader from "../components/DetailPage/DetailHeader";
import Images from "../components/DetailPage/Images";
import MainInfo from "../components/DetailPage/MainInfo";
import Rating from "../components/DetailPage/Rating";
import Stores from "../components/DetailPage/Stores";

export default function GameDetails() {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [gameSeries, setGameSeries] = useState(null);
  const [gameStores, setGameStores] = useState(null);
  const [gameImages, setGameImages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function fetchGameDetail() {
    const game = `${process.env.REACT_APP_API_URL}/games/${slug}?key=${process.env.REACT_APP_API_KEY}`;
    const series = `${process.env.REACT_APP_API_URL}/games/${slug}/game-series?key=${process.env.REACT_APP_API_KEY}`;
    const images = `${process.env.REACT_APP_API_URL}/games/${slug}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
    const stores = `${process.env.REACT_APP_API_URL}/games/${slug}/stores?key=${process.env.REACT_APP_API_KEY}`;

    const getGame = axios.get(game);
    const getSeries = axios.get(series);
    const getImages = axios.get(images);
    const getStores = axios.get(stores);

    axios
      .all([getGame, getSeries, getImages, getStores])
      .then(
        axios.spread((...allData) => {
          const gameData = allData[0].data;
          const seriesData = allData[1].data.results;
          const imagesData = allData[2].data.results;
          const storesData = allData[3].data.results;
          setGame(gameData);
          setGameSeries(seriesData);
          setGameImages(imagesData);
          setGameStores(storesData);
          setIsLoading(false);
        })
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchGameDetail();
  }, [slug]);
  return (
    <>
      {!isLoading ? (
        <div>
          <Container fluid="lg">
            <Row>
              <Col>
                <DetailHeader game={game} />
                <Rating game={game} />
                <MainInfo game={game} gameSeries={gameSeries} />
              </Col>
              <Col xs={12} lg={5} style={{ padding: "0 50px" }}>
                <Images gameImages={gameImages} />
                <br />
                <br />
                <Stores gameStores={gameStores} />
              </Col>
            </Row>
          </Container>
          <div
            className="detail--background-image"
            style={{
              backgroundImage: `
              linear-gradient(to bottom, rgba(21, 21, 21, 0.7), rgba(21, 21, 21, 1)), 
              url(${game.background_image})
              `,
            }}
          ></div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
