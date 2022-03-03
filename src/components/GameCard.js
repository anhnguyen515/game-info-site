import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  DateFormatter,
  GetPlatformIcon,
  MetacriticStyle,
} from "../common/utils";

export default function GameCard({
  slug,
  img,
  name,
  platforms,
  metacritic,
  released,
  genres,
  esrb_rating,
}) {
  return (
    <Link to={`/games/${slug}`} className="card--link">
      <Card>
        <Card.Img variant="top" src={img} alt="game thumbnail" />
        <Card.Body>
          <Card.Text>
            <span className="card--platforms">
              {platforms.map((item, index) => (
                <span key={index}>{GetPlatformIcon(item.platform.name)}</span>
              ))}
            </span>
            <span
              className="card--metacritic"
              style={MetacriticStyle(metacritic)}
            >
              {metacritic}
            </span>
          </Card.Text>

          <Card.Title>{name}</Card.Title>
          <div className="card--side-info">
            <p>
              <span className="card--info-name">Release date:</span>
              {DateFormatter(released)}
            </p>
            <p>
              <span className="card--info-name">Genres:</span>
              {genres.map((genre) => genre.name).join(", ")}
            </p>
            {esrb_rating && (
              <p>
                <span className="card--info-name">ESRB:</span>
                {esrb_rating.name}
              </p>
            )}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
