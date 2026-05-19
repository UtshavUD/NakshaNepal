import { Marker } from "./Marker";

export function NepalMap() {
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

      <div className="relative w-full h-125 rounded-4xl border-2 border-dashed border-slate-300 bg-linear-to-br from-slate-50 to-white overflow-hidden flex items-center justify-center">
        {/* Placeholder Area */}
        <div className="text-center z-10">
          <div className="text-8xl mb-6">🇳🇵</div>

          <h3 className="text-3xl font-bold text-slate-700 mb-4">
            Nepal Map Placeholder
          </h3>

          <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
            The SVG interactive Nepal map will appear here. Students will be
            able to search locations and visualize them directly on the map.
          </p>
        </div>

        {/* Example Marker */}
        <div className="absolute top-32 right-40">
          <Marker type="mountain" />
        </div>
      </div>
    </div>
  )
}