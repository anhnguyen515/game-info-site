import GameList from "../components/GameList";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { convertToTwoDigits, gotoTop } from "../common/utils";

export default function NewGames() {
  const [games, setGames] = useState(null);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    `${process.env.REACT_APP_API_URL}/games?key=${process.env.REACT_APP_API_KEY}&page_size=12`
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const date = new Date();
  const year = date.getFullYear();
  const month = convertToTwoDigits(date.getMonth() + 1);
  const day = convertToTwoDigits(date.getDate());
  const today = year + "-" + month + "-" + day;
  const nextYear = year + 1 + "-" + month + "-" + day;

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
      .get(`${currentPageUrl}&dates=${today},${nextYear}`, {
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
  }, [currentPageUrl, today, nextYear]);

  useEffect(() => {
    document.title = "New & Upcoming Games";
  }, []);

  return (
    <>
      <h2 className="page--heading">New & Upcoming Games</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
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
