/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export default function Map({ coord }) {
  return (
    <div>
      <MapContainer key={coord.toString()} center={coord} zoom={15}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coord} />
      </MapContainer>
    </div>
  );
}
