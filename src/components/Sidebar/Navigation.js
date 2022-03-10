import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetPlatformIcon, gotoTop } from "../../common/utils";
import { IoMdArrowDropdownCircle } from "react-icons/io";

export default function Navigation({ ...props }) {
  const [togglePlatforms, setTogglePlatforms] = useState(false);
  const [toggleGenres, setToggleGenres] = useState(false);

  function handleTogglePlatforms() {
    setTogglePlatforms((prevState) => !prevState);
  }

  function handleToggleGenres() {
    setToggleGenres((prevState) => !prevState);
  }

  return (
    <Navbar
      variant="dark"
      className={!props.offcanvas && "sidebar"}
      fixed={props.fixedBottom && "bottom"}
    >
      <Nav className="flex-column sidebar--nav">
        <Nav.Item>
          <Link to="/" onClick={gotoTop}>
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/new" onClick={gotoTop}>
            New Games
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/games" onClick={gotoTop}>
            All Games
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/popular" onClick={gotoTop}>
            Popular Games
          </Link>
        </Nav.Item>
        <Nav.Item>
          <span onClick={handleTogglePlatforms} style={{ cursor: "pointer" }}>
            Platforms <IoMdArrowDropdownCircle />
          </span>
          <div>
            {togglePlatforms && (
              <div>
                {props.platforms.slice(0, 8).map((platform) => (
                  <Link
                    to={`/games/platform/${platform.id}`}
                    key={platform.id}
                    className="dropdown--links"
                    onClick={gotoTop}
                  >
                    <span className="dropdown--logo">
                      {GetPlatformIcon(platform.name)}
                    </span>
                    {platform.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Nav.Item>
        <Nav.Item>
          <span onClick={handleToggleGenres} style={{ cursor: "pointer" }}>
            Genres <IoMdArrowDropdownCircle />
          </span>
          <div>
            {toggleGenres && (
              <div>
                {props.genres.slice(0, 8).map((genre) => (
                  <Link
                    to={`/games/genre/${genre.slug}`}
                    key={genre.id}
                    className="dropdown--links"
                    onClick={gotoTop}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        backgroundImage: `url(${genre.image_background})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderRadius: "5px",
                        width: 35,
                        height: 35,
                      }}
                    ></span>
                    {genre.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
