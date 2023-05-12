/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const customIcon = L.icon({
  iconUrl: "./assets/Star.svg", // Replace with the path to your custom marker icon
  iconSize: [25, 41], // Adjust the size as per your marker icon
  iconAnchor: [12, 41], // Adjust the anchor point if needed
});

export default function Map({ coord, coordUndefined, savedCulture }) {
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
            {savedCulture.length > 0
              ? savedCulture.map((el) => {
                  console.log(el.fields.coordonnees_gps_lat_lon);
                  return (
                    <div key={el.recordid}>
                      <Marker
                        position={el.fields.coordonnees_gps_lat_lon}
                        icon={customIcon}
                      >
                        <Popup>
                          <p>{el.fields.nom}</p>
                        </Popup>
                      </Marker>
                    </div>
                  );
                })
              : null}
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
