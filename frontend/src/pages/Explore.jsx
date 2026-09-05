import { useState } from "react"

function Explore() {
  const [search, setSearch] = useState("")
  const [searched, setSearched] = useState(false)

  const handleSearch = (event) => {
    event.preventDefault()

    if (search.trim()) {
      setSearched(true)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-32 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute right-0 top-40 h-96 w-96 animate-pulse rounded-full bg-cyan-500/10 blur-3xl [animation-delay:1s]" />

        <div className="absolute bottom-20 left-1/3 h-72 w-72 animate-pulse rounded-full bg-indigo-600/10 blur-3xl [animation-delay:2s]" />

        {/* Floating travel icons */}
        <div className="absolute left-[8%] top-[18%] animate-bounce text-2xl opacity-20 [animation-duration:4s]">
          ✈️
        </div>

        <div className="absolute right-[12%] top-[28%] animate-bounce text-2xl opacity-20 [animation-duration:5s]">
          🧭
        </div>

        <div className="absolute left-[15%] bottom-[20%] animate-bounce text-2xl opacity-20 [animation-duration:6s]">
          🌍
        </div>

        <div className="absolute right-[20%] bottom-[15%] animate-bounce text-2xl opacity-20 [animation-duration:4.5s]">
          🗺️
        </div>

      </div>


      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-12">

        {/* Header */}
        <div className="max-w-3xl animate-[fadeInUp_0.7s_ease-out]">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-sm">
            <span className="animate-pulse">
              ✨
            </span>

            DISCOVER THE WORLD
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">

            Explore
            <span className="ml-3 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              the world
            </span>

          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Find your next adventure. Search for a destination
            and discover unforgettable places, experiences,
            attractions and travel inspiration.
          </p>

        </div>


        {/* Search Section */}
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-blue-950/20 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/30">

          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-3 sm:flex-row"
          >

            {/* Search Input */}
            <div className="group flex flex-1 items-center rounded-2xl border border-slate-700 bg-slate-950/80 px-5 transition-all duration-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">

              <span className="mr-3 text-xl transition-transform duration-300 group-focus-within:scale-125">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Where do you want to explore?"
                className="w-full bg-transparent py-4 text-white outline-none placeholder:text-slate-500"
              />

            </div>


            {/* Search Button */}
            <button
              type="submit"
              className="group rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-10 py-4 font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:from-blue-500 hover:to-cyan-500 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0"
            >

              <span className="flex items-center justify-center gap-2">

                Search

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </span>

            </button>

          </form>


          {/* Quick Search Suggestions */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">

            <span className="text-slate-500">
              Popular:
            </span>

            {["Paris", "Tokyo", "Bali", "Dubai"].map((destination) => (

              <button
                key={destination}
                type="button"
                onClick={() => {
                  setSearch(destination)
                  setSearched(true)
                }}
                className="rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300"
              >
                {destination}
              </button>

            ))}

          </div>

        </div>


        {/* Filters */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">

          {/* Budget */}
          <div className="group">

            <label className="mb-2 block text-sm text-slate-500">
              Budget
            </label>

            <select className="w-full cursor-pointer rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none transition-all duration-300 hover:border-blue-500/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">

              <option>Budget</option>
              <option>Budget Friendly</option>
              <option>Mid Range</option>
              <option>Luxury</option>

            </select>

          </div>


          {/* Travel Style */}
          <div>

            <label className="mb-2 block text-sm text-slate-500">
              Travel Style
            </label>

            <select className="w-full cursor-pointer rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none transition-all duration-300 hover:border-blue-500/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">

              <option>Travel Style</option>
              <option>Adventure</option>
              <option>Relaxation</option>
              <option>Family</option>
              <option>Solo</option>

            </select>

          </div>


          {/* Season */}
          <div>

            <label className="mb-2 block text-sm text-slate-500">
              Season
            </label>

            <select className="w-full cursor-pointer rounded-2xl border border-slate-700 bg-slate-900 p-4 text-white outline-none transition-all duration-300 hover:border-blue-500/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20">

              <option>Season</option>
              <option>Spring</option>
              <option>Summer</option>
              <option>Autumn</option>
              <option>Winter</option>

            </select>

          </div>

        </div>


        {/* Initial Empty State */}
        {!searched && (

          <div className="relative mt-16 overflow-hidden rounded-3xl border border-dashed border-slate-700 bg-slate-900/30 p-16 text-center backdrop-blur-sm">

            {/* Animated glow */}
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-24 w-24 animate-bounce items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-5xl [animation-duration:3s]">
                🌍
              </div>

              <h2 className="mt-7 text-2xl font-semibold">
                Where will your journey take you?
              </h2>

              <p className="mx-auto mt-3 max-w-lg leading-7 text-slate-400">
                Search for a destination above and start
                discovering amazing places around the world.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm text-slate-500">

                <span>✈️ Flights</span>

                <span>🏨 Hotels</span>

                <span>🍽️ Restaurants</span>

                <span>🗺️ Maps</span>

                <span>📍 Attractions</span>

              </div>

            </div>

          </div>

        )}


        {/* Search Results */}
        {searched && (

          <div className="mt-12 animate-[fadeInUp_0.5s_ease-out]">

            <div className="mb-7">

              <p className="text-sm uppercase tracking-widest text-blue-400">
                Your search
              </p>

              <h2 className="mt-2 text-3xl font-semibold">
                Results for
                <span className="ml-2 text-blue-400">
                  "{search}"
                </span>
              </h2>

            </div>


            {/* Destination Result */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-blue-950/30">

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20" />

              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                <div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    🧭
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold">
                    Destination search ready
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    Real destination recommendations will be
                    connected here when we integrate the backend
                    and travel APIs.
                  </p>

                </div>


                <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-5 py-4 text-sm text-slate-400">

                  <span className="animate-pulse text-blue-400">
                    ●
                  </span>

                  Ready for AI

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default Explore