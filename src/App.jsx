import { useState } from "react";
import Details from "./components/Details";
import Map from "./components/Map";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

function App() {
  const [ipInput, setIpInput] = useState("");
  const [ipData, setIpData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [oldInput, setOldInput] = useState("");

  async function handleFetch() {
    try {
      if (
        ipInput.length === 0 ||
        oldInput === ipInput ||
        !ipInput.includes(".")
      )
        return;

      setIsLoading(true);
      setOldInput(ipInput);
      const res = await fetch(
        `http://ip-api.com/json/${ipInput}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,isp,query`
      );

      // const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=45017a7c150d4607a8cdf4e0dcf3631c&ip=1.1.1.1`)
      
      const data = await res.json();
      
      if (data.status === "fail") return;
      setIpData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Hero
            setIpInput={setIpInput}
            handleFetch={handleFetch}
            ipInput={ipInput}
          />
          <Details ipData={ipData.status ? ipData : {}} />
          <Map position={[ipData.lat, ipData.lon]} />
        </>
      )}
    </div>
  );
}

export default App;
