import GameList from "../components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

export default function PopularGames() {
  const [games, setGames] = useState();
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page_size=12`
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

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
      .get(`${currentPageUrl}&ordering=-popular`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        const data = res.data;
        setGames(data);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
      })
      .catch((err) => console.log(err));

    return () => cancel();
  }, [currentPageUrl]);

  return (
    <>
      <h2 style={{ fontSize: "72px" }}>Popular Games</h2>
      {games && (
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
