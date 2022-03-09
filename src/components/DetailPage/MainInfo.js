import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MetacriticStyle, DateFormatter, gotoTop } from "../../common/utils";
import ReadMore from "../../components/ReadMore";

export default function MainInfo({ game, gameSeries }) {
  return (
    <>
      <div className="detail--description-container">
        <h3>About</h3>
        <ReadMore>{game.description_raw}</ReadMore>
      </div>
      <Row xs={2} className="detail--specs-container">
        <Col>
          <h6>Platforms</h6>
          <p>
            {game.platforms
              .map((platform) => platform.platform.name)
              .join(", ")}
          </p>
        </Col>
        <Col>
          <h6>Metascore</h6>
          <span
            className="detail--metascore"
            style={MetacriticStyle(game.metacritic)}
          >
            {game.metacritic}
          </span>
        </Col>
        <Col>
          <h6>Genres</h6>
          <p>{game.genres.map((genre) => genre.name).join(", ")}</p>
        </Col>
        <Col>
          <h6>Release date</h6>
          {game.released && <p>{DateFormatter(game.released)}</p>}
        </Col>
        <Col>
          <h6>Developer</h6>
          <p>{game.developers.map((developer) => developer.name).join(", ")}</p>
        </Col>
        <Col>
          <h6>Publisher</h6>
          <p>{game.publishers.map((publisher) => publisher.name).join(", ")}</p>
        </Col>
        <Col xs={12}>
          <h6>ESRB rating</h6>
          <p>{game.esrb_rating?.name}</p>
        </Col>
        {gameSeries && (
          <Col xs={12}>
            <h6>Other games in the series</h6>
            <div className="detail--game-series">
              {gameSeries.map((game) => (
                <div key={game.id}>
                  <Link to={`/games/${game.slug}`} onClick={gotoTop}>
                    {game.name}
                  </Link>
                </div>
              ))}
            </div>
          </Col>
        )}
        <Col xs={12}>
          <h6>Tags</h6>
          <p>{game.tags.map((tag) => tag.name).join(", ")}</p>
        </Col>
      </Row>
    </>
  );
}
