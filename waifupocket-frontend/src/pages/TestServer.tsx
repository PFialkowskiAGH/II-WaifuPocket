import React, { useEffect, useState } from 'react';
import './TestServer.css';
import axios from 'axios';

function TestServer() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/test/server')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>React and Node.js Integration</h1>
      <p>Message from the server: {data}</p>
    </div>
  );
}

export default TestServer;