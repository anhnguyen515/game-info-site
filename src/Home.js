import GameList from "./components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

export default function Home() {
  const [games, setGames] = useState();
  const [order, setOrder] = useState();
  // const [reversed, setReversed] = useState(null);

  function handleChange(event) {
    setOrder(event.target.value);
    console.log(event.target.value);
  }

  function getGames() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&ordering=${order}`
      )
      .then((res) => {
        const data = res.data;
        setGames(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => getGames(), [order]);

  return (
    <div>
      <h2 style={{ fontSize: "72px" }}>All games</h2>
      <Form.Group>
        <Form.Label htmlFor="ordering">Order by: </Form.Label>
        <Form.Select id="ordering" name="ordering" onChange={handleChange}>
          <option disabled>-- Ordering options --</option>
          <option value="name">Name</option>
          <option value="released">Released date</option>
          <option value="added">Added</option>
          <option value="created">Created date</option>
          <option value="updated">Updated date</option>
          <option value="rating">Rating</option>
          <option value="metacritic">Metacritic</option>
        </Form.Select>
      </Form.Group>
      {games && <GameList games={games} />}
    </div>
  );
}
