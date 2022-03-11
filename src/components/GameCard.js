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
        <Card.Body style={{ borderTop: "1px solid #3e3e3e" }}>
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
              {props.released ? DateFormatter(props.released) : "Not Updated"}
            </p>
            <p>
              <span className="card--info-name">Genres:</span>
              {props.genres.length !== 0
                ? props.genres.map((genre) => genre.name).join(", ")
                : "Not Updated"}
            </p>
            <p>
              <span className="card--info-name">ESRB:</span>
              {props.esrb_rating ? props.esrb_rating.name : "Rating Pending"}
            </p>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}
