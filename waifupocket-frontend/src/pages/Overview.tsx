import { Component, SetStateAction } from "react";
import {anime} from ".././anime";
import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import './Overview.css';

const Overview: React.FC = () => {
    const params = useParams<{ id: string }>();
    const [currentAnime, setCurrentAnime] = useState<{ id: string; title: string; description: string; image:string; genre:string; date:number; episodes:number } | null>(null);
  
    useEffect(() => {
      const selectedAnime = anime.find((a) => a.id.toString() === params.id);
      if (selectedAnime) {
        setCurrentAnime(selectedAnime);
      } else {
        axios
          .get(`http://localhost:3000/overview/${params.id}`)
          .then((res) => {
            const animeData: { id: string; title: string; description: string; image:string; genre:string; date:number; episodes:number } = res.data[0]; // Assuming API response is an array
            setCurrentAnime(animeData);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [params.id]);

    const imageAddress = currentAnime ? currentAnime.image : "Loading...";
  
    return (
      <div className="container" style={{ color: "white", height: "81.8vh" }}>
        <h1 className="div1">{currentAnime ? currentAnime.title : "Loading..."}</h1>
        <div  className="div2">
          <h2>Description:</h2>
          <p> {currentAnime ? currentAnime.description : "Loading..."}</p>
        </div>
        <div className="div3">
          <img src={imageAddress}></img>
        </div>
        <div className="div4">
          <p>Genres: {currentAnime ? currentAnime.genre : "Loading..."}</p>
          <p>Release Date: {currentAnime ? currentAnime.date : "Loading..."}</p>
          <p>Number of episodes: {currentAnime ? currentAnime.episodes : "Loading..."}</p>
        </div>    
      </div>
    );
  };
  
export default Overview;