import React from "react";
import { Card, Button } from "react-bootstrap";
import { BsPlus } from "react-icons/bs";

export default function GameCard({ img, platforms, name, added }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} height="150px" />
      <Card.Body>
        <Card.Text>
          {platforms.map((item) => item.platform.name).join(" | ")}
        </Card.Text>
        <Card.Title>{name}</Card.Title>
        <Button className="card--btn">
          <BsPlus /> {added}
        </Button>
      </Card.Body>
    </Card>
  );
}
