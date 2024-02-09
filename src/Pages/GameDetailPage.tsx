import React from "react";
import { useParams } from "react-router-dom";
import APIClient, { axiosInstance } from "../services/api-client";
import axios from "axios";

const GameDetailPage = () => {
  const { gameId } = useParams();
  const apiGamesDetail = axiosInstance.get(
    `https://api.rawg.io/api/games/${gameId}`
  );
  console.log(apiGamesDetail);
  return (
    <div>
      <h1>Game Detail Page</h1>
      <p>Game ID: {gameId}</p>
      <p>{}</p>
    </div>
  );
};

export default GameDetailPage;
