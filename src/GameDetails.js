import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function GameDetails() {
  const { id } = useParams();
  const [game, setGame] = useState();

  function getGameDetails() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/games/${id}?key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        setGame(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => getGameDetails(), []);
  return <>{game && <h2>Detail - {game.name}</h2>}</>;
}
