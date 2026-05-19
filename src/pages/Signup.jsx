import {Login} from './Login'
import {Link} from 'react-router-dom'

export function Signup() {
  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-slate-100 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        {/* Left Side */}
        <div className="flex items-center justify-center p-8 md:p-16 order-2 lg:order-1">
          <div className="w-full max-w-md">
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-4xl font-bold text-slate-800 mb-3">
                Create Account
              </h2>
              <p className="text-slate-500 text-lg">
                Join Naksha Nepal and start exploring interactively.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300"
                />
              </div>

              <button className="w-full py-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:scale-[1.01] transition-all duration-300">
                Create Account
              </button>
            </form>

            <p className="text-center text-slate-500 mt-8">
              Already have an account?{' '}
              <span className="text-red-600 font-semibold cursor-pointer hover:underline">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-slate-900 to-slate-800 text-white p-16 relative overflow-hidden order-1 lg:order-2">
          <div className="absolute w-96 h-96 bg-red-500/20 rounded-full -top-20 right-0 blur-3xl"></div>
          <div className="absolute w-80 h-80 bg-red-500/10 rounded-full bottom-0 left-0 blur-3xl"></div>

          <div className="relative z-10">
            <div className="inline-block px-5 py-2 rounded-full bg-white/10 text-red-200 mb-8 text-sm font-medium backdrop-blur-sm">
              Start Your Learning Journey
            </div>

            <h1 className="text-5xl font-extrabold leading-tight mb-8">
              Explore Nepal Like
              <br />
              Never Before
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-lg mb-10">
              Learn geography interactively through beautiful map visualization,
              smart search, and educational information.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="font-semibold text-lg mb-2">Mountains</h3>
                <p className="text-sm text-slate-300">
                  Explore famous Himalayan peaks.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10 mt-10">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="font-semibold text-lg mb-2">Rivers</h3>
                <p className="text-sm text-slate-300">
                  Learn major rivers of Nepal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}