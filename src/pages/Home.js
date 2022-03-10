import GameList from "../components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { convertToTwoDigits } from "../common/utils";

export default function Home() {
  const [newGames, setNewGames] = useState(null);
  const [highestMetascore, setHighestMetascore] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const date = new Date();
  const year = date.getFullYear();
  const month = convertToTwoDigits(
    date.getMonth() !== 0 ? date.getMonth() : date.getMonth() + 1
  );
  const day = convertToTwoDigits(date.getDate());
  const today = year + "-" + month + "-" + day;
  const nextYear = year + 1 + "-" + month + "-" + day;

  useEffect(() => {
    const newGames = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&dates=${today},${nextYear}&page_size=8`;
    const metascore = `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&ordering=-metacritic&page_size=8`;

    const getNewGames = axios.get(newGames);
    const getMetascore = axios.get(metascore);
    axios
      .all([getNewGames, getMetascore])
      .then(
        axios.spread((...allData) => {
          const newGamesData = allData[0].data;
          const metascoreGamesData = allData[1].data;
          setIsLoading(true);
          setNewGames(newGamesData);
          setHighestMetascore(metascoreGamesData);
          setIsLoading(false);
        })
      )
      .catch((err) => console.log(err));
  }, [today, nextYear]);

  useEffect(() => {
    document.title = "RAWGR";
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h2 className="page--heading">
            <Link to="/new">New & Upcoming Games</Link>
          </h2>
          <GameList games={newGames} />

          <h2 className="page--heading">
            <Link to="/metascore">High Metascore Games</Link>
          </h2>
          <GameList games={highestMetascore} />
        </div>
      )}
    </>
  );
}
