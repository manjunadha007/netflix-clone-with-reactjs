import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function trucate(str, n) {
    return str?.length > n ? str?.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center top",
      }}
    >
      <div className="banner__contents">
        <h1 class="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button class="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{trucate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeout"></div>
    </header>
  );
}

export default Banner;
