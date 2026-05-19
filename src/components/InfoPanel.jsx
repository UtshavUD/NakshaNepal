export function InfoPanel() {
  return (
    <div className="w-full bg-white rounded-4xl shadow-2xl border border-slate-100 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-semibold mb-4">
            Location Information
          </div>

          <h2 className="text-4xl font-bold text-slate-800 mb-3">
            Mount Everest
          </h2>

          <p className="text-slate-500 text-lg">
            Solukhumbu District • Mountain
          </p>
        </div>

        <div className="w-24 h-24 rounded-4xl bg-red-50 border border-red-100 flex items-center justify-center text-5xl">
          🏔️
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <h4 className="text-sm text-slate-500 mb-2">Height</h4>
          <p className="text-2xl font-bold text-slate-800">8,848m</p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <h4 className="text-sm text-slate-500 mb-2">Province</h4>
          <p className="text-2xl font-bold text-slate-800">Koshi</p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
          <h4 className="text-sm text-slate-500 mb-2">Category</h4>
          <p className="text-2xl font-bold text-slate-800">Mountain</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-5">
          About This Location
        </h3>

        <p className="text-slate-600 leading-relaxed text-lg">
          Mount Everest is the highest mountain in the world above sea level.
          Located in the Himalayas on the border of Nepal and Tibet, it is one
          of the most famous geographical landmarks of Nepal and attracts
          climbers and tourists from around the globe.
        </p>
      </div>
    </div>
  )
}