export function Marker({ type = 'location' }) {
  const markerIcons = {
    mountain: '🏔️',
    river: '🌊',
    lake: '💧',
    district: '📍',
    heritage: '🏛️',
    location: '📌'
  }

  return (
    <div className="relative group cursor-pointer">
      <div className="w-14 h-14 rounded-full bg-transparent text-white flex items-center justify-center text-2xl shadow-2xl animate-bounce">
        {markerIcons[type] || markerIcons.location}
      </div>

      <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30"></div>
    </div>
  )
}