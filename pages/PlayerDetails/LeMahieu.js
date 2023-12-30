import React from 'react';
import { useRouter } from 'next/router';

const LeMahieu = () => {
  const router = useRouter();
  const { playerId } = router.query;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
  };

  const imageStyle = {
    width: '100%', // Make the image responsive
    maxWidth: '400px', // Set a maximum width
    height: 'auto',
    borderRadius: '8px', // Add rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle box-shadow
    margin: '16px', // Add some margin for spacing
  };

  return (
    <div style={containerStyle}>
      <img src="https://www.nj.com/resizer/C9B3hyz_VjU4Cc6g7WMHCfhLmic=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/WUO3XS7ARZHUZBAJ7L4BNSDYGU.jpg" style={imageStyle}></img>
      <h2>Player Details: LeMahieu</h2>
      
      <p>Player ID: {playerId}</p>
      {/* Fetch and display more details based on playerId */}
    </div>
  );
};

export default LeMahieu;
