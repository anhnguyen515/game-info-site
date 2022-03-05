import GameList from "../components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Home() {
  const [popularGames, setPopularGames] = useState(null);
  const [highestMetascore, setHighestMetascore] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
          setIsLoading(false);
        })
      )
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h2 className="page--heading">Fans Favourites</h2>
          <GameList games={popularGames} />

          <h2 className="page--heading">Highest Metascore</h2>
          <GameList games={highestMetascore} />
        </div>
      )}
    </>
  );
}
