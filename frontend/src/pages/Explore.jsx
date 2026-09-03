function Explore() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        Explore Destinations
      </h1>

      <div className="mt-8 grid gap-4 md:grid-cols-4">

        <input
          placeholder="Search destinations"
          className="rounded-lg border border-slate-700 bg-slate-900 p-3 md:col-span-2"
        />

        <select className="rounded-lg border border-slate-700 bg-slate-900 p-3">
          <option>Budget</option>
          <option>Low</option>
          <option>Medium</option>
          <option>Luxury</option>
        </select>

        <select className="rounded-lg border border-slate-700 bg-slate-900 p-3">
          <option>Travel Style</option>
          <option>Adventure</option>
          <option>Relaxation</option>
          <option>Family</option>
          <option>Solo</option>
        </select>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">
            Paris
          </h2>
          <p className="mt-2 text-slate-400">
            France
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">
            Tokyo
          </h2>
          <p className="mt-2 text-slate-400">
            Japan
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">
            Bali
          </h2>
          <p className="mt-2 text-slate-400">
            Indonesia
          </p>
        </div>

      </div>

    </div>
  )
}

export default Explore