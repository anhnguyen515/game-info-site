import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import GameList from "../components/GameList";

export default function SearchResults() {
  const { query } = useParams();
  const [games, setGames] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}`
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
      .get(
        `${currentPageUrl}&ordering=-added&search_exact=true&search=${query}`,
        {
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        }
      )
      .then((res) => {
        const data = res.data;
        setGames(data);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));

    return () => cancel();
  }, [query, currentPageUrl]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : games?.count === 0 ? (
        <h2>No result for: {query.split("-").join(" ")}</h2>
      ) : (
        <div>
          <h2>
            {games.count} {games.count > 1 ? "results" : "result"} found
          </h2>

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
