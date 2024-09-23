// src/components/IpLookup.js

import { useState } from 'react';
import { getIpInfo } from '../services/ipService';

const IpLookup = () => {
  const [ipInput, setIpInput] = useState('');
  const [ipData, setIpData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Clear previous error
    setIpData(null); // Clear previous result

    try {
      const data = await getIpInfo(ipInput);
      setIpData(data); // Set the fetched IP data to the state
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h1>IP Lookup</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={ipInput} 
          onChange={(e) => setIpInput(e.target.value)} 
          placeholder="Enter IP address"
        />
        <button type="submit">Lookup</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {ipData && (
        <div>
          <h2>IP Information</h2>
          <p>Country: {ipData.country}</p>
          <p>Region: {ipData.regionName}</p>
          <p>City: {ipData.city}</p>
          <p>ISP: {ipData.isp}</p>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
};

export default IpLookup;
