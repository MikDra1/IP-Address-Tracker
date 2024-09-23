export default async (req: Request) => {
    const url = new URL(req.url);
    const ip = url.searchParams.get("ip");
  
    if (!ip) {
      return new Response(
        JSON.stringify({ error: "IP address is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  
    try {
      const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,isp,query`);
      
      // Check if the response is in JSON format
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        return new Response(
          JSON.stringify({ error: "Invalid response format from IP API" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
  
      const data = await response.json();
      return new Response(JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch IP information" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  };
  