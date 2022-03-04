import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getStoreIcon } from "../../common/utils";
import Loading from "../../components/Loading";
import StoreButton from "../../components/StoreButton";
import DetailHeader from "./DetailHeader";
import MainInfo from "./MainInfo";
import Rating from "./Rating";

export default function GameDetails() {
  const { slug } = useParams();
  const [game, setGame] = useState(null);
  const [gameSeries, setGameSeries] = useState(null);
  const [gameStores, setGameStores] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function fetchGameDetail() {
    const game = `${process.env.REACT_APP_API_URL}/games/${slug}?key=${process.env.REACT_APP_API_KEY}`;
    const series = `${process.env.REACT_APP_API_URL}/games/${slug}/game-series?key=${process.env.REACT_APP_API_KEY}`;
    const stores = `${process.env.REACT_APP_API_URL}/games/${slug}/stores?key=${process.env.REACT_APP_API_KEY}`;

    const getGame = axios.get(game);
    const getSeries = axios.get(series);
    const getStores = axios.get(stores);
    axios
      .all([getGame, getSeries, getStores])
      .then(
        axios.spread((...allData) => {
          const gameData = allData[0].data;
          const seriesData = allData[1].data.results;
          const storesData = allData[2].data.results;
          setIsLoading(true);
          setGame(gameData);
          setGameSeries(seriesData);
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
              <Col xs={12} lg={5}>
                <div>
                  <h4>Where to buy</h4>
                  <Row xs={2}>
                    {gameStores.map((store) => (
                      <Col key={store.store_id}>
                        <a
                          href={`${store.url}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <StoreButton>
                            {getStoreIcon(store.store_id)}
                          </StoreButton>
                        </a>
                      </Col>
                    ))}
                  </Row>
                </div>
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
