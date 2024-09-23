// src/services/ipService.js

export async function getIpInfo(ipInput) {
  try {
    const response = await fetch(`/.netlify/functions/ipInfo?ip=${ipInput}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.error('Error fetching IP info:', error);
    throw new Error('Failed to fetch IP information');
  }
}
