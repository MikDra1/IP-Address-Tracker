/* eslint-disable react/prop-types */
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.css";

function Map({position}) {
  return (
    <MapContainer center={[position[0] ? position[0] : 40.7453445, position[1] ? position[1] : -73.994292]} zoom={4} scrollWheelZoom={true} className={styles.map}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        />
      <Marker position={[position[0] ? position[0] : 40.7453445, position[1] ? position[1] : -73.994292]}>
      
      </Marker>

      <ChangeCenter position={[position[0] ? position[0] : 40.7453445, position[1] ? position[1] : -73.994292]} />
    </MapContainer>
  );
}

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
  }

export default Map;
