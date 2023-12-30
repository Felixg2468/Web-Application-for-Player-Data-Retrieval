import React from 'react';
import { useRouter } from 'next/router';
import { Select } from 'antd';


const { Option } = Select;

export default function Header() {
  const router = useRouter();

  const handleSelectChange = (value) => {
    // Redirect to the selected page
    router.push(value);
  };

  return (
    <header>
      <h1>New York Yankees</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/players">Players</a>
        <a href="/search">Search</a>
        <Select
          defaultValue="/PlayerDetails"
          style={{ width: 120 }}
          onChange={handleSelectChange}
        >
          <Option value="/PlayerDetails">Player Details</Option>
          <option value="/PlayerDetails/LeMahieu">DJ LeMahieu</option>
          <option value="/PlayerDetails/Rizzo">Anthony Rizzo</option>
        </Select>
      </nav>
      <img src="https://render.fineartamerica.com/images/rendered/default/poster/8/5/break/images/artworkimages/medium/3/n-y-yankees-logo-bat-in-the-hat-allen-beatty.jpg" class="logo" alt="Yankees Logo" />
    </header>
  );
}
