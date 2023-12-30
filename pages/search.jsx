import React from 'react';
import Header from '../components/Header.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Search() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");


  useEffect(() => {
    // Trigger the search when the name changes
    if (name.trim() !== "") {
      axios.post("/api/search", { Name: name })
        .then(function (response) {
          setPlayers(response.data);
        })
        .catch(function (error) {
          console.log(error);
          // Handle error, e.g., setError(error.message);
        });
    } else {
      // Clear the results if the search term is empty
      setPlayers([]);
    }
  }, [name]);

  return (
    <div>
        <Header/>
        <h1 style={{textAlign: 'center'}}>Search for a Player</h1>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type to search"
          style={{ width: '300px', padding: '10px' }}
        />
      </div>
    <p/>

      <main>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Team</th>
              <th>Height</th>
              <th>DOB</th>
              <th>HR</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player.playerid}>
                <td style={tableHeaderStyle}>{player.ID}</td>
                <td style={tableHeaderStyle}>{player.Name}</td>
                <td style={tableHeaderStyle}>{player.Team}</td>
                <td style={tableHeaderStyle}>{player.Height}</td>
                <td style={tableHeaderStyle}>{player.DOB}</td>
                <td style={tableHeaderStyle}>{player.HR}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
    
      
    
  );
}
const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'left',
};