/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

const customIcon = L.icon({
  iconUrl: "./assets/Star.svg", // Replace with the path to your custom marker icon
  iconSize: [58, 41], // Adjust the size as per your marker icon
  iconAnchor: [12, 41], // Adjust the anchor point if needed
});

const customIcon2 = L.icon({
  iconUrl: "./assets/299087_marker_map_icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map({ coord, coordUndefined, savedCulture }) {
  return (
    <div>
      {coord ? (
        <div className="map-container">
          <MapContainer
            key={(coord.fields.coordonnees_gps_lat_lon
              ? coord.fields.coordonnees_gps_lat_lon
              : coord.fields.geocodage_xy
            ).toString()}
            center={
              coord.fields.coordonnees_gps_lat_lon
                ? coord.fields.coordonnees_gps_lat_lon
                : coord.fields.geocodage_xy
            }
            zoom={15}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={
                coord.fields.coordonnees_gps_lat_lon
                  ? coord.fields.coordonnees_gps_lat_lon
                  : coord.fields.geocodage_xy
              }
              icon={customIcon2}
            />
            {savedCulture.length > 0
              ? savedCulture.map((el) => {
                  return (
                    <div key={el.recordid}>
                      <Marker
                        position={
                          el.fields.geocodage_xy
                            ? el.fields.geocodage_xy
                            : el.fields.coordonnees_gps_lat_lon
                        }
                        icon={customIcon}
                      >
                        <Popup>
                          <p>
                            {el.fields.coordonnees_gps_lat_lon
                              ? el.fields.nom
                              : el.fields.nom_du_festival}
                          </p>
                        </Popup>
                      </Marker>
                    </div>
                  );
                })
              : null}
          </MapContainer>
        </div>
      ) : (
        <div className="map-container">
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
