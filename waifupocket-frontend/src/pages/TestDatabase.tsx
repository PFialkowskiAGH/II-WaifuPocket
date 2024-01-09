import React, { useEffect, useState } from 'react';
import './TestServer.css';
import axios from 'axios';
import {Anime} from '../AnimeInterface'

function TestDatabase() {
  const [data, setData] = useState<Anime[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3001/test/database')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Mongoose Database</h1>
      <p>Database records:</p>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
            <p>Date: {item.date}</p>
            <p>Genres: {item.genres.join(', ')}</p>
            <p>Episodes: {item.episodes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestDatabase;