/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

export default function Map({ coord, coordUndefined }) {
  return (
    <div>
      {coord ? (
        <div>
          <MapContainer
            key={coord.fields.coordonnees_gps_lat_lon.toString()}
            center={coord.fields.coordonnees_gps_lat_lon}
            zoom={15}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coord.fields.coordonnees_gps_lat_lon} />
          </MapContainer>
        </div>
      ) : (
        <div>
          <MapContainer
            key={coordUndefined.toString()}
            center={coordUndefined}
            zoom={15}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={coordUndefined} />
          </MapContainer>
        </div>
      )}
    </div>
  );
}
