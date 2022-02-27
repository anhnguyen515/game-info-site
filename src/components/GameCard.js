import React from "react";
import { Card, Button } from "react-bootstrap";
import { ImPlus } from "react-icons/im";
import { BsGift, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  DateFormatter,
  getPlatformIcon,
  metacriticStyle,
} from "../common/utils";

export default function GameCard({
  id,
  img,
  name,
  platforms,
  added,
  metacritic,
  released,
  genres,
  esrb_rating,
}) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Text>
          <span className="card--platforms">
            {platforms.map((item, index) => (
              <span key={index}>{getPlatformIcon(item.platform.name)}</span>
            ))}
          </span>
          <span
            className="card--metacritic"
            style={metacriticStyle(metacritic)}
          >
            {metacritic}
          </span>
        </Card.Text>

        <Card.Title>
          <Link to={`/games/${id}`}>{name}</Link>
        </Card.Title>

        <div className="card--btn-section">
          <Button className="card--btn btn--add">
            <ImPlus style={{ marginRight: "5px" }} /> {added}
          </Button>
          <Button className="card--btn">
            <BsGift />
          </Button>
          <Button className="card--btn">
            <BsThreeDots />
          </Button>
        </div>
        <div className="card--side-info">
          <p>
            <span className="card--info-name">Release date:</span>
            {DateFormatter(released)}
          </p>
          <p>
            <span className="card--info-name">Genres:</span>
            {genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <span className="card--info-name">ESRB:</span>
            {esrb_rating.name}
          </p>
        </div>
      </Card.Body>
    </Card>
  );
}
