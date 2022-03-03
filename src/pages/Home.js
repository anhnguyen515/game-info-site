import GameList from "../components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [popularGames, setPopularGames] = useState(null);
  const [highestMetascore, setHighestMetascore] = useState(null);

  function fetchGames() {
    const popular = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&ordering=-added&page_size=8`;
    const metascore = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&ordering=-metacritic&page_size=8`;

    const getPopular = axios.get(popular);
    const getMetascore = axios.get(metascore);
    axios
      .all([getPopular, getMetascore])
      .then(
        axios.spread((...allData) => {
          const popularGamesData = allData[0].data;
          const metascoreGamesData = allData[1].data;
          setPopularGames(popularGamesData);
          setHighestMetascore(metascoreGamesData);
        })
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchGames();
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
