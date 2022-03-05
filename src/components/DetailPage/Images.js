import React from "react";
import { Col, Image, Row } from "react-bootstrap";

export default function Images({ gameImages }) {
  const layout = {
    xs: 1,
    sm: 2,
    lg: 1,
    xl: 2,
  };
  return (
    <>
      <br />
      <br />
      <Row {...layout}>
        {gameImages.map((image) => (
          <Col key={image.id} className="detail--screenshot-container">
            <div
              className="detail--screenshot"
              style={{
                backgroundImage: `url(${image.image})`,
              }}
            ></div>
          </Col>
        ))}
      </Row>
    </>
  );
}
