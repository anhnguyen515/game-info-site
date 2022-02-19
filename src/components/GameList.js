import React from "react";
import { Col, Row } from "react-bootstrap";
import GameCard from "./GameCard";

export default function GameList() {
  return (
    <div>
      <Row>
        <Col xs={3}>
          <GameCard />
        </Col>
      </Row>
    </div>
  );
}
