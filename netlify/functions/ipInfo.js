// netlify/functions/ipInfo.js

exports.handler = async function (event) {
  const ip = event.queryStringParameters.ip;

  if (!ip) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "IP address is required" }),
    };
  }

  try {
    const response = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,isp,query`
    );
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error fetching IP info:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch IP information" }),
    };
  }
};
