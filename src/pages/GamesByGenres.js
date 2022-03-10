import GameList from "../components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { gotoTop, slugToName } from "../common/utils";

export default function GamesByGenres() {
  const { slug } = useParams();
  const [games, setGames] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}`
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
    setCurrentPage((prev) => prev + 1);
    gotoTop();
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
    setCurrentPage((prev) => prev - 1);
    gotoTop();
  }

  useEffect(() => {
    let cancel;
    axios
      .get(`${currentPageUrl}&genres=${slug}&ordering=-metacritic`, {
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
  }, [slug, currentPageUrl]);

  useEffect(() => {
    document.title = `${slugToName(slug)}`;
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <h2 className="page--heading">{slugToName(slug)}</h2>
          <GameList games={games} />
          <Pagination
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
}
