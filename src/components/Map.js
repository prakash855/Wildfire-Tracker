import GoogleMapReact from "google-map-react";
import { useState } from "react";
import LocationInfoBox from "./LocationInfoBox";
import LocationMarker from "./LocationMarker";
const Map = ({ center, zoom, data }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const marker = data.map((evnt) => {
    if (evnt.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={evnt.geometries[0].coordinates[1]}
          lng={evnt.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: evnt.id, title: evnt.title })}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDSlHAplGt_pc1zhgdWcqbjD-2aoYh6hgA" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {marker}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
};

export default Map;
