import { Fragment } from "react";
import propTypes from "prop-types";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
let DefaultIcon = L.icon({
  ...L.Icon.Default.prototype.options,
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map({ latitude, longitude, city }) {
  return (
    <Fragment>
      {latitude && longitude ? (
        <MapContainer
          center={[latitude, longitude]}
          zoom={10}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "300px" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[latitude, longitude]}>
            <Popup>{`${city}. Are you here?`}</Popup>
          </Marker>
        </MapContainer>
      ) : null}
    </Fragment>
  );
}

Map.propTypes = {
  latitude: propTypes.number.isRequired,
  longitude: propTypes.number.isRequired,
};

export default Map;
