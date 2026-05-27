import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // =========================
  // LOGIN WITH EMAIL/PASSWORD
  // =========================
  const handleLogin = async (e) => {
    e.preventDefault()

    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    alert('Login successful!')
    navigate('/dashboard')
  }

  // =========================
  // LOGIN WITH GOOGLE
  // =========================
  const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
      queryParams: {
        prompt: 'select_account consent',
      },
    },
  })

  if (error) {
    alert(error.message)
  }
}

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-slate-100 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-red-600 to-red-700 text-white p-16 relative overflow-hidden">

          <div className="absolute w-96 h-96 bg-white/10 rounded-full -top-20 -left-20 blur-2xl"></div>

          <div className="absolute w-80 h-80 bg-white/10 rounded-full bottom-0 right-0 blur-2xl"></div>

          <div className="relative z-10">

            <Link
  to="/"
  className="text-lg text-white hover:text-yellow-300 transition"
>
  ← Back to Home
</Link>

            <h1 className="text-5xl font-extrabold leading-tight">
              Welcome To,
            </h1>

            <h1 className="text-5xl font-extrabold leading-tight mb-8 text-emerald-200">
              Naksha Nepal
            </h1>

            <p className="text-lg text-red-100 leading-relaxed max-w-lg mb-10">
              Continue exploring Nepal interactively through maps,
              geography, and educational learning experiences.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                  🗺️
                </div>

                <p className="text-lg">
                  Interactive Nepal Map
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                  📚
                </div>

                <p className="text-lg">
                  Educational Geography Learning
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">
                  🔍
                </div>

                <p className="text-lg">
                  Search Locations Easily
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-8 md:p-16">

          <div className="w-full max-w-md">

            <div className="mb-10 text-center lg:text-left">

              <h2 className="text-4xl font-bold text-slate-800 mb-3">
                Login
              </h2>

              <p className="text-slate-500 text-lg">
                Sign in to continue your learning journey.
              </p>

            </div>

            {/* FORM */}
            <form onSubmit={handleLogin} className="space-y-6">

              {/* EMAIL */}
              <div>

                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300"
                />

              </div>

              {/* PASSWORD */}
              <div>

                <div className="flex items-center justify-between mb-3">

                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>

                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300"
                />

                <button
                  type="button"
                  className="mt-3 text-sm text-red-500 hover:text-red-600 hover:cursor-pointer"
                >
                  Forgot Password?
                </button>

              </div>

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-red-600 hover:cursor-pointer hover:bg-red-700 text-white font-semibold shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>

            </form>

            {/* DIVIDER */}
            <div className="my-8 flex items-center gap-4">

              <div className="flex-1 h-px bg-slate-200"></div>

              <p className="text-slate-400 text-sm">
                OR
              </p>

              <div className="flex-1 h-px bg-slate-200"></div>

            </div>

            {/* GOOGLE LOGIN */}
            <button
              onClick={handleGoogleLogin}
              className="w-full mb-4 flex items-center justify-center gap-3 py-4 rounded-2xl border border-slate-300 hover:bg-slate-100 font-semibold transition-all duration-300 hover:cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-6 h-6"
              />

              Continue with Google
            </button>

            {/* SIGNUP LINK */}
            <p className="text-center text-slate-500 mt-8">

              Don’t have an account?{' '}

              <span className="text-red-600 font-semibold hover:underline">

                <Link to="/signup">
                  Sign Up
                </Link>

              </span>

            </p>

          </div>
        </div>
      </div>
    </div>
  )
}