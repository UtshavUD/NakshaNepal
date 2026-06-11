import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Custom marker icons for different location types
const getMarkerIcon = (type) => {
  const iconSize = 25;
  const iconAnchor = [12, 41];
  
  const iconConfigs = {
    mountain: {
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
      popupAnchor: [1, -34],
    },
    river: {
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-cyan.png",
      popupAnchor: [1, -34],
    },
    heritage: {
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
      popupAnchor: [1, -34],
    },
    lake: {
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
      popupAnchor: [1, -34],
    },
    city: {
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
      popupAnchor: [1, -34],
    },
    default: {
      iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
      popupAnchor: [1, -34],
    },
  };

  const config = iconConfigs[type] || iconConfigs.default;
  
  return new L.Icon({
    iconUrl: config.iconUrl,
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [iconSize, 41],
    iconAnchor: iconAnchor,
    popupAnchor: config.popupAnchor,
    shadowSize: [41, 41],
  });
};

function FlyToLocation({ selectedLocation }) {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation && selectedLocation.latitude && selectedLocation.longitude) {
      const zoomLevel = 
        selectedLocation.type === "province" ? 7.5 :
        selectedLocation.type === "district" ? 9 :
        selectedLocation.type === "city" ? 11 :
        selectedLocation.type === "mountain" ? 10 :
        8;
      
      map.flyTo(
        [selectedLocation.latitude, selectedLocation.longitude],
        zoomLevel,
        { duration: 1.5, easeLinearity: 0.25 }
      );
    }
  }, [selectedLocation, map]);

  return null;
}

function MapController({ selectedLocation }) {
  const map = useMap();
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset view button handler
  const resetView = () => {
    setIsAnimating(true);
    map.flyTo([28.3949, 84.1240], 7.5, {
      duration: 1.2,
      easeLinearity: 0.25,
    });
    setTimeout(() => setIsAnimating(false), 1200);
  };

  return (
    <div className="absolute top-4 right-4 z-1000">
      <button
        onClick={resetView}
        disabled={isAnimating}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:cursor-pointer shadow-lg transition-all duration-200 border-3 border-red-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 text-sm"
      >
        <svg 
          className="w-4 h-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
          />
        </svg>
        Reset View
      </button>
    </div>
  );
}

function LocationInfo({ location }) {
  if (!location) return null;

  const getTypeColor = (type) => {
    const colors = {
      mountain: "bg-blue-100 text-blue-800 border-blue-200",
      river: "bg-cyan-100 text-cyan-800 border-cyan-200",
      heritage: "bg-amber-100 text-amber-800 border-amber-200",
      lake: "bg-emerald-100 text-emerald-800 border-emerald-200",
      city: "bg-purple-100 text-purple-800 border-purple-200",
      province: "bg-indigo-100 text-indigo-800 border-indigo-200",
      district: "bg-slate-100 text-slate-800 border-slate-200",
      default: "bg-gray-100 text-gray-800 border-gray-200",
    };
    return colors[type] || colors.default;
  };

  return (
    <div className="absolute top-4 left-4 z-1000 max-w-xs bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl border border-gray-200 p-4 pointer-events-auto">
      <div className="flex items-start gap-3">
        <div className="text-3xl">
          {location.type === "mountain" && "🏔️"}
          {location.type === "river" && "🌊"}
          {location.type === "heritage" && "🏛️"}
          {location.type === "lake" && "💧"}
          {location.type === "city" && "🏙️"}
          {location.type === "province" && "🟣"}
          {location.type === "district" && "📍"}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 text-lg">{location.name}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className={`text-xs px-2 py-1 rounded-full border ${getTypeColor(location.type)}`}>
              {location.type?.charAt(0).toUpperCase() + location.type?.slice(1)}
            </span>
            {location.elevation && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
                📍 {location.elevation}m
              </span>
            )}
          </div>
          {location.description && (
            <p className="text-sm text-gray-600 mt-2">{location.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function NepalMap({ selectedLocation }) {
  const position = [28.3949, 84.1240];
  const [mapReady, setMapReady] = useState(false);

  // Determine circle color based on location type
  const getCircleColor = (type) => {
    const colors = {
      province: "#6366F1", // Indigo
      district: "#64748B", // Slate
      national_park: "#10B981", // Emerald
      default: "#EF4444", // Red
    };
    return colors[type] || colors.default;
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
      {!mapReady && (
        <div className="absolute inset-0 bg-white z-[1000] flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-slate-600">Loading map...</p>
          </div>
        </div>
      )}
      
      <MapContainer
        center={position}
        zoom={7}
        className="h-full w-full"
        zoomControl={false}
        scrollWheelZoom={true}
        doubleClickZoom={true}
        dragging={true}
        touchZoom={true}
        whenReady={() => setMapReady(true)}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          eventHandlers={{
            load: () => setMapReady(true),
          }}
        />
        
        {/* Custom Zoom Control */}
        <ZoomControl position="bottomright" />
        
        {/* Fly to selected location */}
        <FlyToLocation selectedLocation={selectedLocation} />
        
        {/* Reset view controller */}
        <MapController selectedLocation={selectedLocation} />
        
        {/* Location info panel */}
        {selectedLocation && <LocationInfo location={selectedLocation} />}

        {/* 📍 Point Marker */}
        {selectedLocation && 
         selectedLocation.areaType !== "circle" && 
         selectedLocation.latitude && 
         selectedLocation.longitude && (
          <Marker 
            position={[selectedLocation.latitude, selectedLocation.longitude]}
            icon={getMarkerIcon(selectedLocation.type)}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[150px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">
                    {selectedLocation.type === "mountain" && "🏔️"}
                    {selectedLocation.type === "river" && "🌊"}
                    {selectedLocation.type === "heritage" && "🏛️"}
                    {selectedLocation.type === "lake" && "💧"}
                    {selectedLocation.type === "city" && "🏙️"}
                  </span>
                  <h3 className="font-bold text-gray-800">{selectedLocation.name}</h3>
                </div>
                {selectedLocation.type && (
                  <p className="text-xs text-gray-500 capitalize">{selectedLocation.type}</p>
                )}
                {selectedLocation.elevation && (
                  <p className="text-xs text-gray-500 mt-1">Elevation: {selectedLocation.elevation}m</p>
                )}
              </div>
            </Popup>
          </Marker>
        )}

        {/* 🟦 Area Highlight Circle */}
        {selectedLocation && 
         selectedLocation.areaType === "circle" && 
         selectedLocation.latitude && 
         selectedLocation.longitude && (
          <Circle
            center={[selectedLocation.latitude, selectedLocation.longitude]}
            radius={selectedLocation.radius || 50000}
            pathOptions={{
              color: getCircleColor(selectedLocation.type),
              fillColor: getCircleColor(selectedLocation.type),
              fillOpacity: 0.15,
              weight: 2,
              opacity: 0.8,
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-gray-800">{selectedLocation.name}</h3>
                <p className="text-sm text-gray-600 capitalize">{selectedLocation.type} Area</p>
                <p className="text-xs text-gray-500 mt-1">Radius: {(selectedLocation.radius / 1000).toFixed(1)} km</p>
              </div>
            </Popup>
          </Circle>
        )}
      </MapContainer>
    </div>
  );
}