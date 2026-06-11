import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { NepalMap } from "../components/NepalMap";
import { InfoPanel } from "../components/InfoPanel";
import { supabase } from "../supabaseClient";
import Maplogo from "../assets/NepalMap.png"

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (isMounted) {
        setUser(data?.user || null);
        setLoading(false);
      }
    };

    getUser();

    const { data: authListener } =
      supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });

    return () => {
      isMounted = false;
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-red-50">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading Nepal Explorer...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Get user's display name
  const displayName = user.user_metadata?.full_name || user.email?.split('@')[0] || "Explorer";
  
  // Index card data
  const indexItems = [
    { emoji: "🏔️", name: "Mountains", count: "100+", color: "from-blue-500 to-cyan-500" },
    { emoji: "🌊", name: "Rivers", count: "200+", color: "from-cyan-500 to-teal-500" },
    { emoji: "🏛️", name: "Heritage Sites", count: "12", color: "from-amber-500 to-orange-500" },
    { emoji: "💧", name: "Lakes", count: "50+", color: "from-emerald-500 to-green-500" },
    { emoji: "🌳", name: "National Parks", count: "12", color: "from-green-500 to-lime-500" },
    { emoji: "🏙️", name: "Cities", count: "300+", color: "from-purple-500 to-pink-500" },
    { emoji: "🟣", name: "Provinces", count: "7", color: "from-indigo-500 to-purple-500" },
    { emoji: "🛣️", name: "Highways", count: "80+", color: "from-slate-500 to-gray-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">

      {/* Background Glow - Lower z-index */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* NAVBAR - Ensure it has high z-index */}
      <div className="relative z-50">
        <Navbar user={user} />
      </div>

      {/* MAIN CONTENT - Add padding top to account for navbar height */}
      <div className="relative z-10 pt-10 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">

{/* WELCOME SECTION - New attractive welcome banner */}
<div className="mb-10 relative">
  <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-red-100 to-orange-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
  
  <div 
    className="relative rounded-3xl shadow-2xl overflow-hidden"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Darker gradient overlay for better text readability */}
    <div className="absolute inset-0"></div>
    
    {/* Decorative pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
    </div>
    
    <div className="relative px-8 py-8 md:px-12 md:py-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {/* Avatar with gradient */}
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-0">
              <span className="text-3xl md:text-4xl transform -rotate-6">
                <img src={Maplogo} alt="Logo" className="w-15 h-15 md:w-12 md:h-12 object-contain" />
              </span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
          </div>
          
          <div className=" p-5 rounded-3xl shadow-2xl shadow-blue-950 bg-linear-to-b from-red-950 to-red-500 backdrop-blur-3xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-yellow-200 text-xl font-bold font-sans tracking-wide">Welcome,</span>
              <span className="text-yellow-200">✨</span>
            </div>
            <h2 className="text-4xl font-serif md:text-4xl font-black text-white">
              {displayName}
            </h2>
            <p className="text-white mt-1 text-sm md:text-base">
              Ready to explore the beauty of Nepal?
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

        {/* HERO SECTION - Simplified since welcome is separate */}
        <div className="mb-12 relative">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">
              Discover Nepal Through{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
                Interactive Maps
              </span>
            </h1>
            <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl">
              Explore provinces, cities, rivers, mountains, national parks,
              and heritage sites in a modern learning experience.
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="mb-8 relative ">
          <SearchBar setSelectedLocation={setSelectedLocation} />
        </div>

        {/* MAIN LAYOUT - Map takes full width */}
        <div className="relative z-10">

          {/* MAP SECTION - Full width */}
          <div className="space-y-6">
            
            {/* MAP HEADER */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl font-bold">
                    🇳🇵 Interactive Nepal Map
                  </h2>
                  <p className="text-slate-500 mt-1">
                    Click or search any location to explore details.
                  </p>
                </div>
                
                {/* Quick Stats Badges */}
                <div className="flex gap-3">
                  <div className="px-4 py-2 bg-red-50 rounded-xl text-sm">
                    <span className="font-bold text-red-600">77</span> Districts
                  </div>
                  <div className="px-4 py-2 bg-blue-50 rounded-xl text-sm">
                    <span className="font-bold text-blue-600">7</span> Provinces
                  </div>
                </div>
              </div>
            </div>

            {/* MAP CONTAINER - Full width */}
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              <NepalMap selectedLocation={selectedLocation} />
            </div>

            {/* LEGEND - Full width */}
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-3">Map Legend</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏙️</span> City
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🟣</span> Province
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌊</span> River
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏔️</span> Peak
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🌳</span> National Park
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🛣️</span> Highway
                </div>
              </div>
            </div>

            {/* INFO PANEL - Below legend */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <InfoPanel selectedLocation={selectedLocation} />
            </div>

          </div>

          {/* INDEX CARD - Footer section below InfoPanel */}
          <div className="mt-8">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              
              {/* Header */}
              <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">Geographic Index</h2>
                    <p className="text-red-100 text-sm mt-1">Complete catalog of Nepal's geographic features</p>
                  </div>
                  <div className="text-4xl">📚</div>
                </div>
              </div>
              
              {/* Index Items Grid - Now in a responsive grid layout */}
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  {indexItems.map((item, idx) => (
                    <button
                      key={idx}
                      className="group relative overflow-hidden bg-white rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-slate-200"
                    >
                      {/* Gradient hover effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                            {item.emoji}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-slate-800 group-hover:text-slate-900">
                              {item.name}
                            </div>
                            <div className="text-sm text-slate-500">
                              {item.count} entries
                            </div>
                          </div>
                        </div>
                        <div className="text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300">
                          →
                        </div>
                      </div>
                    </button>
                  ))}
                  
                </div>
                
                {/* Index Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between text-sm flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-slate-500">Total Geographic Entries</span>
                      <span className="font-bold text-slate-800 text-lg">750+</span>
                    </div>
                    <div className="flex-1 max-w-md">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400">
                      Click any category to start exploring
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}