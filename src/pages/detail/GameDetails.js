import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import DetailHeader from "./DetailHeader";
import MainInfo from "./MainInfo";
import Rating from "./Rating";

export default function GameDetails() {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [gameSeries, setGameSeries] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function fetchGameDetail() {
    const game = `${process.env.REACT_APP_API_URL}/games/${slug}?key=${process.env.REACT_APP_API_KEY}`;
    const series = `${process.env.REACT_APP_API_URL}/games/${slug}/game-series?key=${process.env.REACT_APP_API_KEY}`;

    const getGame = axios.get(game);
    const getSeries = axios.get(series);
    axios
      .all([getGame, getSeries])
      .then(
        axios.spread((...allData) => {
          const gameData = allData[0].data;
          const seriesData = allData[1].data;
          setIsLoading(true);
          setGame(gameData);
          setGameSeries(seriesData);
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
          <Container fluid="xs">
            <Row>
              <Col>
                <DetailHeader game={game} />
                <Rating game={game} />
                <MainInfo game={game} gameSeries={gameSeries} />
              </Col>
              <Col xs={12} lg={5}>
                <h4>Where to buy</h4>
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
