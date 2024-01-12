import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Overview.css';
import {Anime} from "../AnimeInterface";
//import { anime } from "../anime";

const Overview: React.FC = () => {
  const params = useParams<{ id: string }>();
  const [currentAnime, setCurrentAnime] = useState<Anime | null>(null);

  useEffect(() => {
    // Pobieranie danych anime z bazy na podstawie id
    axios
      .get(`http://localhost:3001/api/anime/${params.id}`)
      .then((res) => {
        const animeData: Anime = res.data;
        setCurrentAnime(animeData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  //const imageAddress = currentAnime ? currentAnime.image : "Loading...";

  return (
    <div className="container" style={{ color: "white", height: "81.8vh" }}>
      <h1 className="div1">{currentAnime ? currentAnime.title : "Loading..."}</h1>
      <div className="div2">
        <h2>Description:</h2>
        <p> {currentAnime ? currentAnime.description : "Loading..."}</p>
      </div>
      <div className="div3">
        {currentAnime && (
            <img
              src={`data:image/jpeg;base64,${currentAnime.image}`}
              alt={currentAnime.title}
            />
        )}
      </div>
      <div className="div4">
        <p>Genres: {currentAnime ? currentAnime.genres.join(', ') : "Loading..."}</p>
        <p>Release Date: {currentAnime ? currentAnime.date : "Loading..."}</p>
        <p>Number of episodes: {currentAnime ? currentAnime.episodes : "Loading..."}</p>
      </div>
    </div>
  );
};

export default Overview;