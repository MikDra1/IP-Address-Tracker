import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.get('/proxy/:domain', async (req, res) => {
  const domain = req.params.domain;
  const apiUrl = `https://ip-api.com/json/${domain}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,isp,query`;

  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch data from the external API',
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on https://localhost:${PORT}`);
});
