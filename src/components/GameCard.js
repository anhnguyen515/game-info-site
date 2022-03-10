import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  DateFormatter,
  GetPlatformIcon,
  MetacriticStyle,
  gotoTop,
} from "../common/utils";
import placeholderImg from "../images/RAWGR-logo-white.png";

export default function GameCard({ ...props }) {
  return (
    <Link to={`/games/${props.slug}`} className="card--link" onClick={gotoTop}>
      <Card>
        <Card.Img
          variant="top"
          src={props.img ? props.img : placeholderImg}
          alt="game thumbnail"
        />
        <Card.Body>
          <Card.Text>
            <span className="card--platforms">
              {props.platforms?.map((item, index) => (
                <span key={index}>{GetPlatformIcon(item.platform.name)}</span>
              ))}
            </span>
            <span
              className="card--metacritic"
              style={MetacriticStyle(props.metacritic)}
            >
              {props.metacritic}
            </span>
          </Card.Text>

          <Card.Title>{props.name}</Card.Title>
          <div className="card--side-info">
            <p>
              <span className="card--info-name">Release date:</span>
              {DateFormatter(props.released)}
            </p>
            <p>
              <span className="card--info-name">Genres:</span>
              {props.genres.map((genre) => genre.name).join(", ")}
            </p>
            {props.esrb_rating && (
              <p>
                <span className="card--info-name">ESRB:</span>
                {props.esrb_rating.name}
              </p>
            )}
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
