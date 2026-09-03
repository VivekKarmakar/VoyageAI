import { Link } from "react-router-dom"

function Home() {
  return (
    <div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="max-w-3xl">

          <p className="mb-4 text-blue-400">
            AI-Powered Travel Planning
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Plan Smarter.
            <br />
            Travel Better.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            VoyageAI helps you discover destinations,
            create personalized itineraries and plan
            unforgettable journeys with AI.
          </p>

          <div className="mt-8 flex gap-4">

            <Link
              to="/trip-planner"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-700"
            >
              Start Planning
            </Link>

            <Link
              to="/explore"
              className="rounded-lg border border-slate-700 px-6 py-3 font-medium hover:bg-slate-900"
            >
              Explore Destinations
            </Link>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="border-y border-slate-800">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              AI Trip Planning
            </h2>

            <p className="mt-3 text-slate-400">
              Generate personalized travel plans based on your preferences.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              Discover Destinations
            </h2>

            <p className="mt-3 text-slate-400">
              Find destinations, attractions, hotels and activities.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">
              Travel Community
            </h2>

            <p className="mt-3 text-slate-400">
              Share experiences and discover trips from other travelers.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Home