const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000; // Change to whatever port you'd like

// Proxy route to handle API requests
app.get('/proxy/:domain', async (req, res) => {
  const domain = req.params.domain;
  const apiUrl = `http://ip-api.com/json/${domain}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,isp,query`;

  try {
    // Make a request to the external API (non-HTTPS)
    const response = await axios.get(apiUrl);

    // Send the API response back to the client
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch data from the external API',
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
