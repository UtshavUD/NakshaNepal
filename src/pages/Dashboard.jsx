import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Navbar } from "../components/Navbar"
import { SearchBar } from "../components/SearchBar"
import { NepalMap } from "../components/NepalMap"
import { InfoPanel } from "../components/InfoPanel"
import { supabase } from '../supabaseClient'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const profileImage =
  user?.user_metadata?.avatar_url ||
  user?.user_metadata?.picture ||
  null

  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    let isMounted = true

    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser()

      if (!error && isMounted) {
        setUser(data.user)
      }

      if (isMounted) setLoading(false)
    }

    getUser()

    // Listen for login/logout changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => {
      isMounted = false
      authListener.subscription.unsubscribe()
    }
  }, [])

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    )
  }

  // If not logged in → redirect
  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-red-50">
      
      {/* Navbar */}
      <Navbar user={user} />

      <div className="px-6 md:px-10 py-8">
        
        {/* Welcome */}
        <div className="mb-10">
          <div className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-5">
            Welcome, {user.user_metadata?.full_name || user.email}
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-5">
            Explore Nepal Through{" "}
            <span className="text-red-600">Interactive Learning</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Search mountains, rivers, districts, lakes, and important locations of Nepal.
          </p>
        </div>

        {/* Search */}
        <div className="mb-10">
          <SearchBar setSelectedLocation={setSelectedLocation} />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          <div className="xl:col-span-2">
            <NepalMap selectedLocation={selectedLocation} />
          </div>

          <div className="space-y-8">
            
            {/* Stats */}
            <div className="bg-white rounded-4xl shadow-xl border border-slate-100 p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Overview</h2>

              <div className="space-y-5">
                <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                  <span>Districts</span>
                  <b>77</b>
                </div>

                <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                  <span>Provinces</span>
                  <b>7</b>
                </div>

                <div className="flex justify-between p-4 bg-slate-50 rounded-2xl">
                  <span>Mountains</span>
                  <b>100+</b>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-4xl shadow-xl border border-slate-100 p-8">
              <h2 className="text-2xl font-bold mb-6">Explore</h2>

              <div className="grid grid-cols-2 gap-4">
                {["🏔️ Mountains", "🌊 Rivers", "🏛️ Heritage", "💧 Lakes"].map(
                  (item, i) => (
                    <button
                      key={i}
                      className="p-4 bg-slate-50 rounded-2xl hover:bg-red-50 transition"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <InfoPanel />
        </div>
      </div>
    </div>
  )
}