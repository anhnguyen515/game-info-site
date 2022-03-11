import React from "react";
import { Col, Row } from "react-bootstrap";
import GameCard from "./GameCard";

export default function GameList({ games }) {
  return (
    <Row xs={1} sm={2} xl={4} style={{ marginBottom: "100px" }}>
      {games.results.map((game) => (
        <Col key={game.id} className="card--col">
          <GameCard
            slug={game.slug}
            img={game.background_image}
            platforms={game.parent_platforms}
            name={game.name}
            metacritic={game.metacritic}
            released={game.released}
            genres={game.genres}
            esrb_rating={game.esrb_rating}
          />
        </Col>
      ))}
    </Row>
  );
}
