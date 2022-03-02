import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  MetacriticStyle,
  DateFormatter,
  GetPlatformIcon,
  ProgressBarVariant,
  UpperCaseFirstLetter,
  OverallRatingColor,
} from "../common/utils";

export default function GameDetails() {
  const { slug } = useParams();
  const [game, setGame] = useState();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/games/${slug}?key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        setGame(data);
      })
      .catch((err) => console.log(err));
  }, [slug]);
  return (
    <>
      {game && (
        <Container>
          <Row>
            <Col>
              {/*===== detail header =====*/}
              <div className="detail--date-platform">
                <span className="detail--date">
                  {DateFormatter(game.released)}
                </span>
                <span className="detail--platform">
                  {game.parent_platforms.map((item, index) => (
                    <span key={index}>
                      {GetPlatformIcon(item.platform.name)}
                    </span>
                  ))}
                </span>
              </div>
              <h2 style={{ fontSize: 72 }}>{game.name}</h2>
              <div className="detail--score-container">
                <p className="detail--score">
                  <h3>Overall:</h3>
                  <h3
                    className="detail--overall-rating"
                    style={{
                      backgroundColor: OverallRatingColor(
                        game.rating,
                        game.rating_top
                      ),
                    }}
                  >
                    {game.rating}
                  </h3>
                  <h4>/{game.rating_top}</h4>
                </p>
                <p>{game.reviews_count} RATINGS</p>
              </div>

              {/*===== show ratings =====*/}
              <ProgressBar style={{ height: 50 }}>
                {game.ratings.map((rating) => (
                  <ProgressBar
                    key={rating.id}
                    variant={ProgressBarVariant(rating.title)}
                    now={rating.count}
                    max={game.reviews_count}
                  />
                ))}
              </ProgressBar>
              <div className="detail--graph-description">
                {game.ratings.map((rating) => (
                  <span key={rating.id} className="detail--badge-container">
                    <Badge
                      className="detail--badge"
                      bg={ProgressBarVariant(rating.title)}
                    >
                      {" "}
                    </Badge>
                    {UpperCaseFirstLetter(rating.title)}
                    <span className="detail--badge-rating">{rating.count}</span>
                  </span>
                ))}
              </div>

              {/* main section */}
              <div className="detail--description-container">
                <h3>About</h3>
                <p className="detail--description">{game.description_raw}</p>
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
                  <p>{DateFormatter(game.released)}</p>
                </Col>
                <Col>
                  <h6>Developer</h6>
                  <p>
                    {game.developers
                      .map((developer) => developer.name)
                      .join(", ")}
                  </p>
                </Col>
                <Col>
                  <h6>Publisher</h6>
                  <p>
                    {game.publishers
                      .map((publisher) => publisher.name)
                      .join(", ")}
                  </p>
                </Col>
                <Col xs={12}>
                  <h6>ESRB rating</h6>
                  <p>{game.esrb_rating?.name}</p>
                </Col>
                <Col xs={12}>
                  <h6>Other games in the series</h6>
                </Col>
                <Col xs={12}>
                  <h6>Tags</h6>
                  <p>{game.tags.map((tag) => tag.name).join(", ")}</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} lg={5}>
              <p>Where to buy</p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
