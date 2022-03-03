import GameList from "../components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Pagination from "../components/Pagination";
import { Outlet } from "react-router-dom";

export default function AllGames() {
  const [games, setGames] = useState(null);
  const [order, setOrder] = useState({
    option: "added",
    reversed: true,
  });
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}`
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setOrder((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }

  useEffect(() => {
    let cancel;
    axios
      .get(
        `${currentPageUrl}&ordering=${
          order.reversed ? `-${order.option}` : order.option
        }`,
        {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        }
      )
      .then((res) => {
        const data = res.data;
        setGames(data);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
      })
      .catch((err) => console.log(err));

    return () => cancel();
  }, [order, currentPageUrl]);

  return (
    <>
      <h2 style={{ fontSize: "72px" }}>All Games</h2>
      <div className="form--section">
        <Form.Group className="form--group">
          <Form.Label htmlFor="ordering">Order by: </Form.Label>
          <Form.Select
            bsPrefix="form--select"
            id="ordering"
            value={order.option}
            name="option"
            onChange={handleChange}
          >
            <option value="name">Name</option>
            <option value="released">Released date</option>
            <option value="added">Popularity</option>
            <option value="rating">Rating</option>
            <option value="metacritic">Metacritic</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="form--group">
          <Form.Label htmlFor="reversed">Reversed</Form.Label>
          <Form.Check
            type="switch"
            id="reversed"
            name="reversed"
            checked={order.reversed}
            onChange={handleChange}
          />
        </Form.Group>
      </div>
      {games && (
        <div>
          <GameList games={games} />
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </div>
      )}
      <Outlet />
    </>
  );
}
