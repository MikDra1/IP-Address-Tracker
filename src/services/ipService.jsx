// src/services/ipService.js

export async function getIpInfo(ipInput) {
  const response = await fetch(`/.netlify/functions/ipInfo?ip=${ipInput}`, {
    method: "GET",
  });

  // Log the entire response for debugging
  console.log('Raw Response:', response);

  // Fetch the response as text first
  const responseText = await response.text();
  console.log('Response Text:', responseText);  // Log the raw text response

  // Try to parse the response as JSON
  try {
    const json = JSON.parse(responseText);
    return json;
  } catch (error) {
    console.error('Error parsing JSON:', error, 'Response text:', responseText);
    throw new Error('Invalid JSON response');
  }
}
