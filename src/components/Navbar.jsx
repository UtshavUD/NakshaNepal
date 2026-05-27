import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export function Navbar({ user }) {
  const [mobileMenu, setMobileMenu] = useState(false)
  const navigate = useNavigate()

  const isGoogleUser =
  user?.app_metadata?.provider === "google"

  const fallbackLetter =
  user?.user_metadata?.full_name?.charAt(0) ||
  user?.email?.charAt(0) ||
  "U"

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  // ✅ FIX: define here (GLOBAL scope)
  const profileImage =
    user?.user_metadata?.avatar_url ||
    user?.user_metadata?.picture ||
    null

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 md:px-10 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">

      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-red-600 tracking-wide">
          Naksha Nepal
        </h1>
        <p className="text-xs text-slate-500">
          Interactive Geography Learning
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-5 py-2 hover:cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200">
          Home
        </button>
        <button className="px-5 py-2 rounded-xl hover:cursor-pointer bg-slate-100 hover:bg-slate-200">
          Explore
        </button>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden w-11 h-11 hover:cursor-pointer rounded-xl bg-slate-100 hover:bg-slate-200"
        >
          ☰
        </button>

        {/* Profile */}
        <div className="relative group">
          <button className="flex items-center hover:cursor-pointer gap-3 px-4 py-2 rounded-2xl bg-slate-100">

           {profileImage ? (
  <img
    src={profileImage}
    alt="profile"
    className="w-10 h-10 rounded-full object-cover"
  />
) : (
  <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
    {fallbackLetter.toUpperCase()}
  </div>
)}

            <div className="hidden md:block text-left">
              <p className="font-semibold text-sm">
                Student
              </p>
              <p className="text-xs text-slate-500">
                View Profile
              </p>
            </div>

          </button>

          {/* Dropdown */}
          <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

            <button className="w-full rounded-2xl hover:cursor-pointer text-left px-5 py-3 hover:bg-slate-100">
              Profile
            </button>

            <button className="w-full rounded-2xl hover:cursor-pointer text-left px-5 py-3 hover:bg-slate-100">
              Settings
            </button>

            <button
              onClick={handleLogout}
              className="w-full text-left px-5 rounded-2xl hover:cursor-pointer py-3 text-red-500 hover:bg-red-500 hover:text-white hover:font-bold"
            >
              Logout
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute top-full left-0 w-full bg-white border-b md:hidden">

          <div className="flex flex-col p-5 gap-3">

            <button
              onClick={() => {
                setMobileMenu(false)
                navigate('/dashboard')
              }}
              className="px-4 py-3 hover:bg-slate-100"
            >
              Home
            </button>

            <button
              onClick={() => {
                setMobileMenu(false)
                navigate('/explore')
              }}
              className="px-4 py-3 hover:bg-slate-100"
            >
              Explore
            </button>

            <button
              onClick={handleLogout}
              className="px-4 py-3 text-red-500 hover:bg-red-50"
            >
              Logout
            </button>

          </div>
        </div>
      )}

    </nav>
  )
}