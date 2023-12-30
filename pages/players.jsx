import React from 'react';
import Link from 'next/link';
import Header from '../components/Header.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';

//Id,FirstName,LastName,City,Country,Phone
export default function Customers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {  // Fetch data when the component mounts
    axios.get("/api/get-player")
      .then(function(response) {
        setPlayers(response.data);
      }).catch(function(error) {  
        console.log(error);     });  
     }, []); // run only once on mount  
  
  return (
    <div>
    <Header/>
    <h1 style={{ textAlign: 'center'}}>Players</h1>
      <table style={{ width: '70%', borderCollapse: 'collapse', marginTop: '20px', }}>
      <thead><tr><th>ID</th><th>Name</th><th>Team</th><th>Height</th><th>DOB</th><th>HR</th></tr></thead>
        <tbody>
          {players.map(player => (
          
            <tr key={player.playerid}>
              <td style={tableHeaderStyle}>{player.ID}</td>  
              <td style={tableHeaderStyle} >  <a href={`/PlayerDetails/${encodeURIComponent(player.Name.replace(/\s/g, ''))}`}>
                  {player.Name}
                </a></td>
              <td style={tableHeaderStyle}>{player.Team}</td> 
             <td style={tableHeaderStyle}>{player.Height}</td>  
            <td style={tableHeaderStyle}>{player.DOB}</td> 
              <td style={tableHeaderStyle}>{player.HR}</td> 
            </tr>
           ))
          }
        
        </tbody>
      </table>
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