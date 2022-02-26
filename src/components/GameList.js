import React from "react";
import { Col, Row } from "react-bootstrap";
import GameCard from "./GameCard";

export default function GameList({ games }) {
  return (
    <div>
      <Row xs={1} sm={2} lg={3} xl={4}>
        {games.results.map((game) => (
          <Col key={game.id} style={{ padding: "10px" }}>
            <GameCard
              id={game.id}
              img={game.background_image}
              platforms={game.parent_platforms}
              name={game.name}
              added={game.added}
              metacritic={game.metacritic}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
