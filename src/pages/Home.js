import GameList from "../components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [popularGames, setPopularGames] = useState();
  const [highestMetascore, setHighestMetascore] = useState();

  function getPopularGames() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&ordering=-added&page_size=8`
      )
      .then((res) => {
        const data = res.data;
        setPopularGames(data);
      })
      .catch((err) => console.log(err));
  }

  function getHighestMetascoreGames() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&ordering=-metacritic&page_size=8`
      )
      .then((res) => {
        const data = res.data;
        setHighestMetascore(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPopularGames();
    getHighestMetascoreGames();
  }, []);

  return (
    <>
      <h2 style={{ fontSize: "72px" }}>Fans Favourites</h2>
      {popularGames && <GameList games={popularGames} />}

      <h2 style={{ fontSize: "72px" }}>Highest Metascore</h2>
      {highestMetascore && <GameList games={highestMetascore} />}
    </>
  );
}
