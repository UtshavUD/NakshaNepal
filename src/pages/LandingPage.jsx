import { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from './Signup'
import Nepalmap from '../assets/NepalMap.png'
import NNLogo from '../assets/NakshaNepal.png'

console.log(import.meta.env.VITE_SUPABASE_URL)
console.log(import.meta.env.VITE_SUPABASE_ANON_KEY)


export default function LandingPage() {
const [darkMode, setDarkMode] = useState(false)
const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <div
  className={`min-h-screen transition-all duration-500 ${
    darkMode
      ? 'bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white'
      : 'bg-linear-to-b from-red-50 via-white to-slate-100 text-slate-800'
  }`}
>
      {/* Navbar */}
 <nav
      className={`w-full flex items-center justify-between px-6 md:px-16 py-2 backdrop-blur-md sticky top-0 z-50 transition-all duration-500 ${
        darkMode
          ? 'bg-slate-950/80 border-b border-slate-800 text-white'
          : 'bg-white/80 border-b border-slate-200 text-slate-800'
      }`}
    >
      {/* Logo */}
      <div>
   <a href='#Hero'>     
<h1 className="flex items-center gap-1">
  <img src={NNLogo} alt="NN Logo" className="w-24 h-12" />
  <span className="text-2xl md:text-3xl font-bold tracking-wide text-red-600">
    NakshaNepal
  </span>
</h1>
</a>
        

        <p
          className={`text-sm text-start ${
            darkMode ? 'text-slate-400' : 'text-blue-900'
          }`}
        >
          Explore Nepal Interactively
        </p>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        
        <a
          href="#features"
          className="hover:text-red-500 transition-all duration-300"
        >
          Features
        </a>

        <a
          href="#about"
          className="hover:text-red-500 transition-all duration-300"
        >
          About
        </a>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            darkMode
              ? 'bg-slate-800 text-yellow-300 hover:bg-slate-700'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* Login */}
        <Link to="/login">
          <button className="px-5 py-2 rounded-full border hover:cursor-pointer border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
            Login
          </button>
        </Link>

        {/* Signup */}
        <Link to="/signup">
          <button className="px-5 hover:cursor-pointer py-2 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
            Signup
          </button>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMobileMenu(!mobileMenu)}
        className={`md:hidden w-11 h-11 rounded-xl flex items-center hover:cursor-pointer justify-center text-xl transition-all duration-300 ${
          darkMode
            ? 'bg-slate-800 text-white'
            : 'bg-slate-100 text-slate-800'
        }`}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div
          className={`absolute top-full left-0 w-full md:hidden shadow-xl border-b transition-all duration-300 ${
            darkMode
              ? 'bg-slate-950 border-slate-800'
              : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex flex-col p-5 gap-3">
            
            <a
              href="#features"
              className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'hover:bg-slate-800'
                  : 'hover:bg-slate-100'
              }`}
            >
              Features
            </a>

            <a
              href="#about"
              className={`px-4 py-3 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'hover:bg-slate-800'
                  : 'hover:bg-slate-100'
              }`}
            >
              About
            </a>

            {/* Mobile Dark Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-3 rounded-xl text-left hover:cursor-pointer transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-800 text-yellow-300'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>

            {/* Login */}
            <Link to="/login">
              <button className="w-full px-4 py-3 hover:cursor-pointer rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
                Login
              </button>
            </Link>

            {/* Signup */}
            <Link to="/signup">
              <button className="w-full px-4 py-3 hover:cursor-pointer rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300">
                Signup
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  

      {/* Hero Section */}
      <section id='Hero' className="px-8 md:px-16 pt-10 md:pt-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
              Interactive Geography Learning Platform
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
              Discover Nepal Through
              <span className="text-red-600"> Interactive Maps</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              Naksha Nepal helps students explore rivers, mountains,
              districts, lakes, heritage sites, and important locations of
              Nepal visually through an interactive and educational map
              experience.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
              <button className="px-8 py-4 rounded-2xl bg-red-600 text-white font-semibold shadow-lg hover:cursor-pointer hover:scale-105 hover:bg-red-700 transition-all duration-300">
                Get Started
              </button></Link>

              <a href='#features'><button className="px-8 py-4 rounded-2xl border border-slate-300 bg-white hover:cursor-pointer hover:bg-slate-100 transition-all duration-300 font-semibold">
                Explore Features
              </button> </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              <div>
                <h2 className="text-3xl font-bold text-red-600">100+</h2>
                <p className="text-slate-500 text-sm">Locations</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-red-600">Interactive</h2>
                <p className="text-slate-500 text-sm">Learning Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-red-600">Student</h2>
                <p className="text-slate-500 text-sm">Focused Design</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-red-200 rounded-full blur-3xl opacity-40"></div>

            <div className="relative bg-white/80 backdrop-blur-lg border border-white shadow-2xl rounded-4xl p-8 w-full max-w-xl">
              <div className="bg-slate-100 rounded-3xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Nepal Interactive Map</h3>
                    <p className="text-sm text-slate-500">
                      Search any location in Nepal
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl border-2 border-red-900 bg-red-100 flex items-center justify-center text-white text-xl shadow-lg">
                    📍
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                  <div className="w-full h-80 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center bg-linear-to-br from-white to-slate-100">
                    <div className="text-center">
                      <div className="text-6xl mb-4"><img src={Nepalmap}></img></div>
                      <p className="font-semibold text-lg">
                        Nepal Map Visualization
                      </p>
                      <p className="text-sm text-slate-500 mt-2">
                        Search locations to explore Nepal interactively
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-red-50 rounded-2xl p-4 border border-red-100">
                    <h4 className="font-semibold mb-1">Mountains</h4>
                    <p className="text-sm text-slate-500">
                      Everest, Annapurna, Kanchenjunga
                    </p>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                    <h4 className="font-semibold mb-1">Rivers</h4>
                    <p className="text-sm text-slate-500">
                      Koshi, Gandaki, Karnali
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 md:px-16 py-20">
        <div className="text-center mb-16">
          <p className="text-red-600 font-semibold mb-4 uppercase tracking-wider">
            Features
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designed For Modern Learning
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            Naksha Nepal combines geography, visualization, and interactive
            technology to make learning Nepal more engaging and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '🗺️',
              title: 'Interactive Nepal Map',
              desc: 'Explore Nepal visually through an easy-to-understand interactive map.'
            },
            {
              icon: '🔍',
              title: 'Smart Search',
              desc: 'Search rivers, mountains, lakes, districts, and important places instantly.'
            },
            {
              icon: '📚',
              title: 'Educational Information',
              desc: 'Learn detailed information and facts about every searched location.'
            },
            {
              icon: '📍',
              title: 'Location Visualization',
              desc: 'See the exact position of places directly on the Nepal map.'
            },
            {
              icon: '🎓',
              title: 'Student Friendly',
              desc: 'Simple and clean interface specially designed for students.'
            },
            {
              icon: '⚡',
              title: 'Fast & Responsive',
              desc: 'Built with modern technologies for smooth and responsive performance.'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className={`rounded-4xl p-8 shadow-lg border transition-all duration-500 ${
  darkMode
    ? 'bg-slate-900 border-slate-700'
    : 'bg-white border-slate-100'
}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 md:px-16 py-20">
        <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-red-600 font-semibold uppercase tracking-wider mb-4">
                About Naksha Nepal
              </p>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Making Geography Learning More Visual & Interactive
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Many students find geography difficult because they cannot
                properly visualize locations and understand their positions on
                maps. Naksha Nepal aims to solve this problem through an
                interactive educational platform.
              </p>

              <p className="text-slate-600 text-lg leading-relaxed">
                By combining map visualization, smart search, and educational
                content, students can explore Nepal in a more engaging and
                memorable way.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
                <h3 className="text-4xl font-bold text-red-600 mb-2">7</h3>
                <p className="text-slate-600">Provinces</p>
              </div>

              <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 mt-10">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">77</h3>
                <p className="text-slate-600">Districts</p>
              </div>

              <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 -mt-6">
                <h3 className="text-4xl font-bold text-emerald-600 mb-2">∞</h3>
                <p className="text-slate-600">Learning Possibilities</p>
              </div>

              <div className="bg-yellow-50 rounded-3xl p-8 border border-yellow-100 mt-4">
                <h3 className="text-4xl font-bold text-yellow-600 mb-2">1</h3>
                <p className="text-slate-600">Beautiful Nepal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-16 py-10 border-t border-slate-200 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-red-600">
              Naksha Nepal
            </h2>
            <p className="text-slate-500 mt-2">
              Interactive Nepal Geography Learning Platform
            </p>
          </div>

          <p className="text-slate-500 text-sm text-center md:text-right">
            Built using ReactJS & TailwindCSS
            <br />
            Designed for students and interactive learning.
          </p>
        </div>
      </footer>
    </div>
  )
}
