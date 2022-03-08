import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetPlatformIcon } from "../../common/utils";
import { IoMdArrowDropdownCircle } from "react-icons/io";

export default function Navigation({ offcanvas, fixedBottom }) {
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);
  const [togglePlatforms, setTogglePlatforms] = useState(false);
  const [toggleGenres, setToggleGenres] = useState(false);

  function handleTogglePlatforms() {
    setTogglePlatforms((prevState) => !prevState);
  }

  function handleToggleGenres() {
    setToggleGenres((prevState) => !prevState);
  }

  function fetchData() {
    const platforms = `${process.env.REACT_APP_API_URL}/platforms/lists/parents?key=${process.env.REACT_APP_API_KEY}&page_size=8`;
    const genres = `${process.env.REACT_APP_API_URL}/genres?key=${process.env.REACT_APP_API_KEY}`;

    const getPlatforms = axios.get(platforms);
    const getGenres = axios.get(genres);
    axios
      .all([getPlatforms, getGenres])
      .then(
        axios.spread((...allData) => {
          const platformsData = allData[0].data.results;
          const genresData = allData[1].data.results;
          setPlatforms(platformsData);
          setGenres(genresData);
        })
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Navbar
      variant="dark"
      className={!offcanvas && "sidebar"}
      fixed={fixedBottom && "bottom"}
    >
      <Nav className="flex-column sidebar--nav">
        <Nav.Item>
          <Link to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/games">All Games</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/popular">Popular Games</Link>
        </Nav.Item>
        <Nav.Item>
          <span onClick={handleTogglePlatforms} style={{ cursor: "pointer" }}>
            Platforms <IoMdArrowDropdownCircle />
          </span>
          <div>
            {togglePlatforms && (
              <div>
                {platforms.map((platform) => (
                  <Link
                    to={`/games/platform/${platform.id}`}
                    key={platform.id}
                    className="dropdown--links"
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
                {genres.map((genre) => (
                  <Link
                    to={`/games/genre/${genre.id}`}
                    key={genre.id}
                    className="dropdown--links"
                  >
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
