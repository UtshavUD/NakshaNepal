import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";

function FlyToLocation({ selectedLocation }) {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      map.flyTo(
        [selectedLocation.latitude, selectedLocation.longitude],
        selectedLocation.type === "province" ? 8 : 10,
        { duration: 1.5 }
      );
    }
  }, [selectedLocation]);

  return null;
}

export function NepalMap({ selectedLocation }) {
  const position = [28.3949, 84.1240];

  return (
    <MapContainer center={position} zoom={7} style={{ height: "100vh", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <FlyToLocation selectedLocation={selectedLocation} />

      {/* 📍 Point Marker */}
      {selectedLocation && selectedLocation.areaType !== "circle" && (
        <Marker position={[selectedLocation.latitude, selectedLocation.longitude]}>
          <Popup>{selectedLocation.name}</Popup>
        </Marker>
      )}

      {/* 🟦 Area Highlight */}
      {selectedLocation && selectedLocation.areaType === "circle" && (
        <Circle
          center={[selectedLocation.latitude, selectedLocation.longitude]}
          radius={selectedLocation.radius}
          pathOptions={{
            color: "red",
            fillColor: "red",
            fillOpacity: 0.2,
          }}
        />
      )}
    </MapContainer>
  );
}