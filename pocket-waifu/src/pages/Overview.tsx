import { Component, SetStateAction } from "react";
import {anime} from ".././anime";
import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const Overview: React.FC = () => {
    const params = useParams<{ id: string }>();
    const [currentAnime, setCurrentAnime] = useState<{ id: string; title: string } | null>(null);
  
    useEffect(() => {
      const selectedAnime = anime.find((a) => a.id.toString() === params.id);
      if (selectedAnime) {
        setCurrentAnime(selectedAnime);
      } else {
        axios
          .get(`http://localhost:3000/overview/${params.id}`)
          .then((res) => {
            const animeData: { id: string; title: string } = res.data[0]; // Assuming API response is an array
            setCurrentAnime(animeData);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }, [params.id]);
  
    return (
      <div style={{ color: "white", height: "100vh" }}>
        <h1>{currentAnime ? currentAnime.title : "Loading..."}</h1>
      </div>
    );
  };
  
export default Overview;