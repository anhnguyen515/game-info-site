import GameList from "../components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

export default function MetascoreGames() {
  const [games, setGames] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page_size=12`
  );
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      .get(`${currentPageUrl}&ordering=-metacritic`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        const data = res.data;
        setIsLoading(true);
        setGames(data);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    return () => cancel();
  }, [currentPageUrl]);

  return (
    <>
      <h2 className="page--heading">Highest Metascore Games</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <GameList games={games} />
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
          />
        </div>
      )}
    </>
  );
}
