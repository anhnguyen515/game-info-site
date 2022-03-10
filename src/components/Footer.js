import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import SmallGameCard from "./SmallGameCard";
import logo from "../images/RAWGR-logo-white.png";
import { Link } from "react-router-dom";
import { gotoTop } from "../common/utils";

export default function Footer({ ...props }) {
  return (
    <Row xs={1} md={2} lg={4} className="footer--container">
      <Col
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src={logo} width="50%" />
        <div style={{ opacity: 0.6 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          exercitationem nobis ad, ex deleniti, tenetur qui suscipit impedit
          culpa harum doloribus illum deserunt, quasi nihil amet veniam nostrum
          eveniet accusantium. Fuga praesentium natus quia eveniet nostrum.
          Provident, unde doloremque fugiat corporis explicabo, esse ex
          blanditiis repudiandae necessitatibus harum quo recusandae.
        </div>
      </Col>
      <Col>
        <h5 className="footer--heading">Recent Updates</h5>
        <div className="border-top">
          {props.games.map((game) => (
            <SmallGameCard
              key={game.id}
              slug={game.slug}
              img={game.background_image}
              name={game.name}
            />
          ))}
        </div>
      </Col>
      <Col>
        <h5 className="footer--heading">Platforms</h5>
        <div className="footer--link-section border-top">
          {props.platforms.map((platform) => (
            <Link
              to={`/games/platform/${platform.id}`}
              key={platform.id}
              onClick={gotoTop}
              className="footer--link"
            >
              {platform.name}
            </Link>
          ))}
        </div>
      </Col>
      <Col>
        <h5 className="footer--heading">Genres</h5>
        <div className="footer--link-section border-top">
          {props.genres.map((genre) => (
            <Link
              to={`/games/genre/${genre.slug}`}
              key={genre.id}
              onClick={gotoTop}
              className="footer--link"
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </Col>
    </Row>
  );
}
