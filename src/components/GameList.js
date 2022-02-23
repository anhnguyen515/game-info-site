import React from "react";
import { Col, Row } from "react-bootstrap";
import GameCard from "./GameCard";

export default function GameList({ games }) {
  return (
    <div>
      <Row xs={1} sm={2} lg={3} xl={4}>
        {games.results.map((game, index) => (
          <Col key={index} style={{ padding: "10px" }}>
            <GameCard
              img={game.background_image}
              platforms={game.parent_platforms}
              name={game.name}
              added={game.added}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}
