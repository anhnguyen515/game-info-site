import React from "react";
import { Card, Button } from "react-bootstrap";
import { ImPlus } from "react-icons/im";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import { SiNintendo, SiAtari } from "react-icons/si";
import { GoBrowser } from "react-icons/go";
import { MdComputer } from "react-icons/md";
import { Link } from "react-router-dom";

export default function GameCard({
  id,
  img,
  platforms,
  name,
  added,
  metacritic,
}) {
  const metaStyle =
    metacritic < 50
      ? {
          borderColor: "#FF0000",
          color: "#FF0000",
        }
      : metacritic >= 50 && metacritic < 75
      ? {
          borderColor: "#FFCC33",
          color: "#FFCC33",
        }
      : {
          borderColor: "#66CC33",
          color: "#66CC33",
        };

  function getPlatform(platform) {
    switch (platform) {
      case "PC":
        return <FaWindows />;

      case "PlayStation":
        return <FaPlaystation />;

      case "Xbox":
        return <FaXbox />;

      case "iOS":
        return <FaApple />;

      case "Apple Macintosh":
        return <MdComputer />;

      case "Android":
        return <FaAndroid />;

      case "Linux":
        return <FaLinux />;

      case "Nintendo":
        return <SiNintendo />;

      case "Atari":
        return <SiAtari />;

      case "Web":
        return <GoBrowser />;

      default:
        break;
    }
  }

  return (
    <Link to={`/games/${id}`}>
      <Card>
        <Card.Img
          variant="top"
          src={img}
          style={{
            borderRadius: "10px 10px 0 0",
            height: "50vw",
            maxHeight: "200px",
            objectFit: "cover",
          }}
        />
        <Card.Body>
          <Card.Text>
            <span className="card--platforms">
              {platforms.map((item, index) => (
                <span key={index}>{getPlatform(item.platform.name)}</span>
              ))}
            </span>
            <span className="card--metacritic" style={metaStyle}>
              {metacritic}
            </span>
          </Card.Text>
          <Card.Title>{name}</Card.Title>
          <Button className="card--btn">
            <ImPlus style={{ marginRight: "5px" }} /> {added}
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
}
