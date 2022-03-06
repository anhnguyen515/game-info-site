import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import GameList from "../components/GameList";

export default function SearchResults() {
  const { query } = useParams();
  const [games, setGames] = useState();
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}`
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
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
        `${currentPageUrl}&search=${query}&search_exact=true&ordering=-added`,
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

  console.log(games);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : games?.count === 0 ? (
        <h2>No result for: {query.split("-").join(" ")}</h2>
      ) : (
        <div>
          <h2 className="page--heading">
            Search results for: {query.split("-").join(" ")}
          </h2>
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
        </div>
      )}
    </>
  );
}
