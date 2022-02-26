import GameList from "./components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState();

  function getGames() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        setGames(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => getGames(), []);

  return (
    <div>
      <h2 style={{ fontSize: "72px" }}>All games</h2>
      {games && <GameList games={games} />}
    </div>
  );
}
