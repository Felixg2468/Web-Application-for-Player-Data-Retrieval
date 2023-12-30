import React from 'react';
import { useRouter } from 'next/router';


const Rizzo = () => {
  const router = useRouter();
  const { playerId } = router.query;

  return (
    <div>
      <h2>Player Details: rizzo</h2>
      <p>Player ID: {playerId}</p>
      {/* Fetch and display more details based on playerId */}
    </div>
  );
};

export default Rizzo;