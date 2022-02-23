import GameList from "./components/GameList";
import Layout from "./components/Layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
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
    <div className="App">
      <Layout>
        <h2>New and trending</h2>
        <p>Based on player count and release date</p>
        {games && <GameList games={games} />}
      </Layout>
    </div>
  );
}

export default App;
