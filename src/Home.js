import GameList from "./components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function Home() {
  const [games, setGames] = useState();
  const [order, setOrder] = useState({
    option: "added",
    reversed: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setOrder((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function getGames() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/games?key=${
          process.env.REACT_APP_API_KEY
        }&ordering=${order.reversed ? `-${order.option}` : order.option}`
      )
      .then((res) => {
        const data = res.data;
        setGames(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => getGames(), [order]);

  return (
    <>
      <h2 style={{ fontSize: "72px" }}>All games</h2>
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
            <option value="added">Added</option>
            <option value="created">Created date</option>
            <option value="updated">Updated date</option>
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
      {games && <GameList games={games} />}
    </>
  );
}
