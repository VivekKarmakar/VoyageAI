import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="relative overflow-hidden">

      {/* =========================================================
          ANIMATION STYLES
      ========================================================= */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-18px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(25px, -15px);
          }
        }

        @keyframes fly {
          0% {
            transform: translateX(-80px) translateY(20px) rotate(-5deg);
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          50% {
            transform: translateX(45vw) translateY(-30px) rotate(3deg);
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            transform: translateX(105vw) translateY(-70px) rotate(-4deg);
            opacity: 0;
          }
        }

        @keyframes cloudMove {
          0% {
            transform: translateX(-10%);
          }

          50% {
            transform: translateX(8%);
          }

          100% {
            transform: translateX(-10%);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.25);
          }

          50% {
            box-shadow: 0 0 35px 8px rgba(37, 99, 235, 0.08);
          }
        }

        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }

          100% {
            background-position: 200% 0;
          }
        }

        .voyage-float {
          animation: float 5s ease-in-out infinite;
        }

        .voyage-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .voyage-plane {
          animation: fly 18s linear infinite;
        }

        .voyage-cloud {
          animation: cloudMove 18s ease-in-out infinite;
        }

        .voyage-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .voyage-rotate {
          animation: rotateSlow 25s linear infinite;
        }

        .voyage-fade-up {
          animation: fadeUp 0.9s ease-out both;
        }

        .voyage-shimmer {
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* =========================================================
          BACKGROUND TRAVEL DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Large blue glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute -right-40 top-96 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Animated globe */}
        <div className="voyage-rotate absolute right-[-120px] top-32 hidden h-[500px] w-[500px] rounded-full border border-blue-500/10 lg:block">
          <div className="absolute inset-8 rounded-full border border-blue-400/10" />
          <div className="absolute inset-20 rounded-full border border-blue-400/10" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-blue-400/10" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-blue-400/10" />
        </div>

        {/* Airplane */}
        <div className="voyage-plane absolute left-0 top-28 text-4xl opacity-70">
          ✈️
        </div>

        {/* Clouds */}
        <div className="voyage-cloud absolute left-[-80px] top-40 text-6xl opacity-[0.08]">
          ☁️
        </div>

        <div
          className="voyage-cloud absolute left-[35%] top-24 text-5xl opacity-[0.06]"
          style={{ animationDelay: "5s" }}
        >
          ☁️
        </div>

        <div
          className="voyage-cloud absolute right-[5%] top-[500px] text-7xl opacity-[0.05]"
          style={{ animationDelay: "8s" }}
        >
          ☁️
        </div>

        {/* Decorative dots */}
        <div className="voyage-float absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-blue-400/50" />

        <div
          className="voyage-float absolute left-[55%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan-400/50"
          style={{ animationDelay: "1s" }}
        />

        <div
          className="voyage-float absolute right-[20%] top-[42%] h-2 w-2 rounded-full bg-blue-300/40"
          style={{ animationDelay: "2s" }}
        />

      </div>


      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="relative overflow-hidden">

        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">

          <div className="max-w-4xl voyage-fade-up">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 backdrop-blur-sm transition duration-300 hover:border-blue-400/60 hover:bg-blue-500/20">
              <span className="voyage-float inline-block">
                ✨
              </span>

              AI-Powered Travel Planning
            </div>


            {/* Heading */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">

              Plan Smarter.

              <br />

              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Travel Better.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              Discover destinations, build personalized itineraries,
              optimize your travel budget and explore the world with
              your intelligent AI travel companion.
            </p>


            {/* Search */}
            <div className="mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">

              <div className="voyage-glow group flex flex-1 items-center rounded-xl border border-slate-700 bg-slate-900/80 px-4 backdrop-blur-md transition duration-300 hover:border-blue-500/50">

                <span className="mr-3 text-xl transition duration-300 group-focus-within:scale-110">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full bg-transparent py-4 text-white outline-none placeholder:text-slate-500"
                />

              </div>


              <Link
                to="/explore"
                className="group rounded-xl bg-blue-600 px-7 py-4 text-center font-semibold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                Explore
                <span className="ml-2 inline-block transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>


            {/* Travel categories */}
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-500">

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5 transition hover:border-blue-500/40 hover:text-blue-300">
                🌎 Destinations
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5 transition hover:border-blue-500/40 hover:text-blue-300">
                ✈️ Flights
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5 transition hover:border-blue-500/40 hover:text-blue-300">
                🏨 Hotels
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5 transition hover:border-blue-500/40 hover:text-blue-300">
                🍽️ Restaurants
              </span>

              <span className="rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5 transition hover:border-blue-500/40 hover:text-blue-300">
                🗺️ Maps
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FEATURES
      ========================================================= */}

      <section className="relative border-y border-slate-800 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="text-center voyage-fade-up">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Why VoyageAI
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Your intelligent travel companion
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Everything you need to discover, plan and experience
              your next adventure.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">


            {/* Card 1 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                🤖
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                AI Trip Planning
              </h3>

              <p className="mt-3 text-slate-400">
                Generate personalized travel plans based on
                your budget, interests, dates and travel style.
              </p>

              <div className="mt-6 text-sm font-medium text-blue-400 opacity-0 transition duration-300 group-hover:opacity-100">
                Plan smarter →
              </div>

            </div>


            {/* Card 2 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:-rotate-6">
                🧭
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Smart Recommendations
              </h3>

              <p className="mt-3 text-slate-400">
                Discover destinations, attractions, activities,
                restaurants and stays that match your preferences.
              </p>

              <div className="mt-6 text-sm font-medium text-cyan-400 opacity-0 transition duration-300 group-hover:opacity-100">
                Discover places →
              </div>

            </div>


            {/* Card 3 */}
            <div className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-3xl transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                🌍
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Travel Community
              </h3>

              <p className="mt-3 text-slate-400">
                Share your journeys, discover experiences and
                connect with fellow travelers.
              </p>

              <div className="mt-6 text-sm font-medium text-blue-400 opacity-0 transition duration-300 group-hover:opacity-100">
                Meet travelers →
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}

      <section className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="text-center voyage-fade-up">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Simple Planning
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Plan your journey in three steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            From an idea to a complete travel plan, VoyageAI
            makes the process simple.
          </p>

        </div>


        <div className="mt-12 grid gap-6 md:grid-cols-3">


          {/* Step 1 */}
          <div className="voyage-float group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-7 transition duration-500 hover:border-blue-500/40">

            <div className="absolute right-5 top-5 text-5xl opacity-5 transition duration-500 group-hover:scale-125 group-hover:opacity-10">
              🧳
            </div>

            <span className="text-4xl font-bold text-blue-400">
              01
            </span>

            <h3 className="mt-5 text-xl font-semibold">
              Tell us your preferences
            </h3>

            <p className="mt-3 text-slate-400">
              Share your destination, dates, budget,
              interests and travel style.
            </p>

          </div>


          {/* Step 2 */}
          <div
            className="voyage-float group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-7 transition duration-500 hover:border-cyan-500/40"
            style={{ animationDelay: "1s" }}
          >

            <div className="absolute right-5 top-5 text-5xl opacity-5 transition duration-500 group-hover:scale-125 group-hover:opacity-10">
              🤖
            </div>

            <span className="text-4xl font-bold text-cyan-400">
              02
            </span>

            <h3 className="mt-5 text-xl font-semibold">
              Let AI plan your trip
            </h3>

            <p className="mt-3 text-slate-400">
              VoyageAI analyzes your preferences and
              creates a personalized travel experience.
            </p>

          </div>


          {/* Step 3 */}
          <div
            className="voyage-float group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60 p-7 transition duration-500 hover:border-blue-500/40"
            style={{ animationDelay: "2s" }}
          >

            <div className="absolute right-5 top-5 text-5xl opacity-5 transition duration-500 group-hover:scale-125 group-hover:opacity-10">
              ✈️
            </div>

            <span className="text-4xl font-bold text-blue-400">
              03
            </span>

            <h3 className="mt-5 text-xl font-semibold">
              Explore and travel
            </h3>

            <p className="mt-3 text-slate-400">
              Follow your itinerary, discover places and
              enjoy your journey.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section className="relative overflow-hidden border-t border-slate-800">

        {/* CTA decorative animation */}
        <div className="voyage-float-slow pointer-events-none absolute left-[10%] top-10 text-6xl opacity-5">
          🌎
        </div>

        <div className="voyage-float pointer-events-none absolute right-[10%] top-20 text-5xl opacity-5">
          ✈️
        </div>


        <div className="mx-auto max-w-4xl px-6 py-24 text-center">

          <div className="voyage-fade-up">

            <div className="mb-5 text-4xl">
              ✈️
            </div>

            <h2 className="text-4xl font-bold md:text-5xl">
              Ready to plan your next adventure?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Let VoyageAI turn your travel ideas into
              a personalized journey.
            </p>


            <Link
              to="/trip-planner"
              className="voyage-glow mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500"
            >
              Start Planning

              <span className="text-lg transition duration-300 hover:translate-x-1">
                ✈️
              </span>

            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Home