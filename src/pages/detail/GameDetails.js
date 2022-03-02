import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import MainInfo from "./MainInfo";
import Rating from "./Rating";

export default function GameDetails() {
  const { slug } = useParams();
  const [game, setGame] = useState();
  const [gameSeries, setGameSeries] = useState();

  console.log(game);
  console.log(gameSeries);

  function getGameDetail() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/games/${slug}?key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        setGame(data);
      })
      .catch((err) => console.log(err));
  }

  function getGameSeries() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/games/${slug}/game-series?key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        setGameSeries(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getGameDetail();
    getGameSeries();
  }, [slug]);
  return (
    <>
      {game && (
        <Container>
          <Row>
            <Col>
              <DetailHeader game={game} />
              <Rating game={game} />
              <MainInfo game={game} gameSeries={gameSeries} />
            </Col>
            <Col xs={12} lg={5}>
              <p>Where to buy</p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
