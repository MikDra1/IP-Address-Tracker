/* eslint-disable react/prop-types */
import styles from "./Details.module.css";

function Details({ ipData }) {
    const offset = ((Math.abs(Number(ipData.offset)) / 3600)
    .toString()
    .padStart(2, '0'))

  return (
    <div className={styles.details}>
      <div>
        <p>ip address</p>
        <h2>{ipData.query ? ipData.query : "192.212.174.101"}</h2>
      </div>
      <div>
        <p>location</p>
        <h2>
          {ipData.city ? ipData.city : "Brooklyn"},{" "}
          {ipData.region ? ipData.region : "NY"}{" "}
          {ipData.zip ? ipData.zip : "10001"}
        </h2>
      </div>
      <div>
        <p>timezone</p>
        <h2>
          UTC{" "}
          {ipData.offset
            ? `${+ipData.offset < 0 ? `-${offset}` : offset }:00`
            : "-05:00"}
        </h2>
      </div>
      <div>
        <p>isp</p>
        <h2>{ipData.isp ? ipData.isp : "SpaceX Starlink"}</h2>
      </div>
    </div>
  );
}

export default Details;
