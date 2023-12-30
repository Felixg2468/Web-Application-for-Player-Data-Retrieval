
import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import axios from 'axios';

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('/api/get-player')
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Run only once on mount

  return (
    <div>
      <Header />
      <ul>
      </ul>
    </div>
  );
}