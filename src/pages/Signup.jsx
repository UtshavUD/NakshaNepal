import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

export default function Signup() {

  const navigate = useNavigate()

  // STATES
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // GOOGLE SIGNUP
  const handleGoogleSignup = async () => {

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:5173/dashboard',
      },
    })

    if (error) {
      alert(error.message)
    }
  }

  // EMAIL SIGNUP
  const handleSignup = async (e) => {
  e.preventDefault()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
      emailRedirectTo: undefined, // optional cleanup
    },
  })

  if (error) {
    alert(error.message)
    return
  }

  alert("Signup successful! Please login.")

  navigate("/login")
}

  return (
    <div className="min-h-screen bg-linear-to-br from-red-50 via-white to-slate-100 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">

        {/* LEFT SIDE */}
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

            {/* FORM */}
            <form
              onSubmit={handleSignup}
              className="space-y-6"
            >

              {/* FULL NAME */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300"
                />
              </div>

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
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl hover:cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold shadow-lg hover:scale-[1.01] transition-all duration-300 disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              {/* DIVIDER */}
              <div className="flex items-center gap-4">
                <div className="h-px bg-slate-200 flex-1"></div>

                <div className="h-px bg-slate-200 flex-1"></div>
              </div>

            </form>

            {/* LOGIN LINK */}
            <p className="text-center text-slate-500 mt-8">

              Already have an account?{' '}

              <Link
                to="/login"
                className="text-red-600 font-semibold hover:underline"
              >
                Login
              </Link>

            </p>


          </div>
        </div>

        {/* RIGHT SIDE */}
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

            <Link
  to="/"
  className="text-lg text-white hover:text-red-600 transition"
>
  ← Back to Home
</Link>

          </div>

        </div>

      </div>

    </div>
  )
}