import { Navbar } from "../components/Navbar";
import {SearchBar} from "../components/SearchBar"
import {NepalMap} from "../components/NepalMap"
import {Marker} from "../components/Marker"
import { InfoPanel } from "../components/InfoPanel";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-red-50">
      {/* Navbar */}
      <Navbar/>

      {/* Main Container */}
      <div className="px-6 md:px-10 py-8">
        {/* Welcome Section */}
        <div className="mb-10">
          <div className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-5">
            Welcome to Naksha Nepal
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-5">
            Explore Nepal Through
            <span className="text-red-600"> Interactive Learning</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Search mountains, rivers, districts, lakes, and important
            geographical locations of Nepal. Visualize locations directly on the
            map and learn interactively.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10">
          <SearchBar/>
        </div>

        {/* Main Dashboard Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="xl:col-span-2">
            <NepalMap/>
          </div>

          {/* Quick Stats & Categories */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="bg-white rounded-4xl shadow-xl border border-slate-100 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-800">
                  Quick Overview
                </h2>

                <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center text-2xl">
                  📊
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Districts</p>
                    <h3 className="text-3xl font-bold text-slate-800">77</h3>
                  </div>

                  <div className="text-4xl">📍</div>
                </div>

                <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Provinces</p>
                    <h3 className="text-3xl font-bold text-slate-800">7</h3>
                  </div>

                  <div className="text-4xl">🗺️</div>
                </div>

                <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <p className="text-slate-500 text-sm mb-1">Famous Peaks</p>
                    <h3 className="text-3xl font-bold text-slate-800">100+</h3>
                  </div>

                  <div className="text-4xl">🏔️</div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-4xl shadow-xl border border-slate-100 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-800">
                  Explore Categories
                </h2>

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                  🔎
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: '🏔️',
                    name: 'Mountains'
                  },
                  {
                    icon: '🌊',
                    name: 'Rivers'
                  },
                  {
                    icon: '🏛️',
                    name: 'Heritage'
                  },
                  {
                    icon: '💧',
                    name: 'Lakes'
                  },
                  {
                    icon: '📍',
                    name: 'Districts'
                  },
                  {
                    icon: '🌳',
                    name: 'National Parks'
                  }
                ].map((category, index) => (
                  <button
                    key={index}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-red-50 hover:border-red-200 hover:-translate-y-1 transition-all duration-300 text-left"
                  >
                    <div className="text-3xl mb-3">{category.icon}</div>
                    <p className="font-semibold text-slate-700">
                      {category.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Information Panel */}
        <div className="mt-10">
          <InfoPanel/>
        </div>
      </div>
    </div>
  )
}