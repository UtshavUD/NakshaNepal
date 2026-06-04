import { Marker } from "./Marker";
import NepalSVG from "../assets/NepalProvince.svg";

export function NepalMap({selectedLocation}) {
  return (
    <div className="w-full bg-white rounded-4xl shadow-2xl border border-slate-100 p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Nepal Interactive Map
          </h2>

          <p className="text-slate-500 mt-2">
            Search and explore locations visually.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-3 px-5 py-3 rounded-2xl bg-red-50 border border-red-100 text-red-600 font-medium">
          🗺️ Map View
        </div>
      </div>

      <div className="relative w-full rounded-4xl border-2 border-slate-200 bg-slate-50 overflow-hidden flex justify-center p-6">

        {/* Nepal SVG */}
        <img
          src={NepalSVG}
          alt="Nepal Map"
          className="w-full max-w-5xl object-contain"
        />

        {/* Example Marker */}
{
  selectedLocation && (
    <div
      className="absolute"
      style={{
        left: selectedLocation.x,
        top: selectedLocation.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Marker type={selectedLocation.type} />
    </div>
  )
}

      </div>
    </div>
  );
}