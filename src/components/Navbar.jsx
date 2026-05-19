export function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-200 px-6 md:px-10 py-4 flex items-center justify-between sticky top-0 z-50">
      <div>
        <h1 className="text-2xl font-bold text-red-600 tracking-wide">
          Naksha Nepal
        </h1>
        <p className="text-xs text-slate-500">
          Interactive Geography Learning
        </p>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <button className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all duration-300 text-sm font-medium">
          Home
        </button>

        <button className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-all duration-300 text-sm font-medium">
          Explore
        </button>
      </div>

      <div className="relative group">
        <button className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-100 hover:bg-slate-200 transition-all duration-300">
          <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-semibold">
            U
          </div>

          <div className="hidden md:block text-left">
            <p className="font-semibold text-sm">Student</p>
            <p className="text-xs text-slate-500">View Profile</p>
          </div>
        </button>

        <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
          <button className="w-full text-left px-5 py-3 hover:bg-slate-100 transition-all duration-300 text-sm">
            Profile
          </button>

          <button className="w-full text-left px-5 py-3 hover:bg-slate-100 transition-all duration-300 text-sm text-red-500">
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
