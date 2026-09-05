import { useState } from "react"

function TripPlanner() {
  const [formData, setFormData] = useState({
    travelers: "1",
    startLocation: "",
    destination: "",
    travelDate: "",
    duration: "",
    budget: "",
    travelStyle: "",
    accommodation: "",
    transportation: "",
    interests: [],
    activities: "",
    requirements: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleInterestChange = (interest) => {
    setFormData((previous) => ({
      ...previous,
      interests: previous.interests.includes(interest)
        ? previous.interests.filter((item) => item !== interest)
        : [...previous.interests, interest],
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log("Trip planning information:", formData)

    alert(
      "Your trip preferences have been saved for the frontend demo. AI generation will be connected later."
    )
  }

  const interests = [
    "Nature",
    "Adventure",
    "Beaches",
    "History",
    "Culture",
    "Food",
    "Shopping",
    "Nightlife",
  ]

  const inputClass =
    "w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-4 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-slate-600 hover:border-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"

  const selectClass =
    "w-full cursor-pointer rounded-xl border border-slate-700/80 bg-slate-950/70 px-4 py-3.5 text-white outline-none transition-all duration-300 hover:border-slate-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Animated Travel Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-20 h-96 w-96 animate-pulse rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute right-[-120px] top-40 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-500/10 blur-3xl [animation-delay:1s]" />

        <div className="absolute bottom-[-150px] left-1/3 h-[450px] w-[450px] animate-pulse rounded-full bg-indigo-600/10 blur-3xl [animation-delay:2s]" />

        {/* Floating Travel Icons */}
        <div className="absolute left-[8%] top-[18%] animate-[travelFloat_5s_ease-in-out_infinite] text-3xl opacity-20">
          ✈️
        </div>

        <div className="absolute right-[10%] top-[25%] animate-[travelFloat_6s_ease-in-out_infinite] text-3xl opacity-20 [animation-delay:1s]">
          🧭
        </div>

        <div className="absolute left-[15%] bottom-[25%] animate-[travelFloat_7s_ease-in-out_infinite] text-3xl opacity-20 [animation-delay:2s]">
          🧳
        </div>

        <div className="absolute right-[20%] bottom-[15%] animate-[travelFloat_5s_ease-in-out_infinite] text-3xl opacity-20 [animation-delay:3s]">
          🌍
        </div>

        {/* Flight Path */}
        <div className="absolute left-0 top-[30%] h-px w-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

        <div className="absolute left-[15%] top-[30%] animate-[planeMove_12s_linear_infinite] text-xl opacity-30">
          ✈
        </div>

      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">

        {/* Header */}
        <section className="animate-[fadeInUp_0.8s_ease-out]">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
            <span className="animate-pulse">✦</span>
            AI Travel Planner
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Plan your
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              perfect journey.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            Tell VoyageAI about your travel preferences and let your
            intelligent travel companion prepare a journey that fits
            your interests, budget and travel style.
          </p>

          {/* Progress Indicator */}
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">

            <div className="flex items-center gap-2 text-blue-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 font-bold">
                01
              </span>
              Trip
            </div>

            <div className="h-px w-8 bg-slate-800" />

            <div className="flex items-center gap-2 text-slate-500">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700">
                02
              </span>
              Budget
            </div>

            <div className="h-px w-8 bg-slate-800" />

            <div className="flex items-center gap-2 text-slate-500">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700">
                03
              </span>
              Preferences
            </div>

            <div className="h-px w-8 bg-slate-800" />

            <div className="flex items-center gap-2 text-slate-500">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700">
                04
              </span>
              Finish
            </div>

          </div>

        </section>

        {/* Main Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 space-y-7"
        >

          {/* SECTION 01 */}
          <section className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/20 md:p-8">

            <div className="absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-blue-500/5 blur-3xl transition-all duration-500 group-hover:bg-blue-500/10" />

            <div className="relative">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
                  01
                </div>

                <div>
                  <p className="text-sm font-medium text-blue-400">
                    Your Journey
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Trip Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Where are you going and when?
                  </p>
                </div>

              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="travelers"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    👥 Number of Travelers
                  </label>

                  <input
                    id="travelers"
                    name="travelers"
                    type="number"
                    min="1"
                    value={formData.travelers}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="startLocation"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    📍 Starting Location
                  </label>

                  <input
                    id="startLocation"
                    name="startLocation"
                    type="text"
                    value={formData.startLocation}
                    onChange={handleChange}
                    placeholder="Mumbai, India"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="destination"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    🌍 Destination
                  </label>

                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="Paris, France"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="travelDate"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    📅 Travel Date
                  </label>

                  <input
                    id="travelDate"
                    name="travelDate"
                    type="date"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="md:col-span-2">

                  <label
                    htmlFor="duration"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    ⏱️ Trip Duration
                  </label>

                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Select duration</option>
                    <option value="1-3 days">1–3 days</option>
                    <option value="4-7 days">4–7 days</option>
                    <option value="1-2 weeks">1–2 weeks</option>
                    <option value="2+ weeks">2+ weeks</option>
                  </select>

                </div>

              </div>

            </div>

          </section>

          {/* SECTION 02 */}
          <section className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/20 md:p-8">

            <div className="absolute bottom-[-100px] right-[-60px] h-56 w-56 rounded-full bg-cyan-500/5 blur-3xl" />

            <div className="relative">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
                  02
                </div>

                <div>
                  <p className="text-sm font-medium text-blue-400">
                    Plan Your Stay
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Budget & Stay
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Choose your comfort level.
                  </p>
                </div>

              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    💰 Estimated Budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Select budget</option>
                    <option value="budget">Budget Friendly</option>
                    <option value="moderate">Moderate</option>
                    <option value="premium">Premium</option>
                    <option value="luxury">Luxury</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="accommodation"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    🏨 Accommodation
                  </label>

                  <select
                    id="accommodation"
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Select accommodation</option>
                    <option value="hotel">Hotel</option>
                    <option value="hostel">Hostel</option>
                    <option value="resort">Resort</option>
                    <option value="apartment">Apartment</option>
                    <option value="homestay">Homestay</option>
                  </select>
                </div>

              </div>

            </div>

          </section>

          {/* SECTION 03 */}
          <section className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/20 md:p-8">

            <div className="absolute -left-20 bottom-[-100px] h-56 w-56 rounded-full bg-indigo-500/5 blur-3xl" />

            <div className="relative">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
                  03
                </div>

                <div>
                  <p className="text-sm font-medium text-blue-400">
                    Your Travel Style
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Travel Preferences
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Tell us what makes a trip enjoyable for you.
                  </p>
                </div>

              </div>

              <div className="relative mt-8">

                <label
                  htmlFor="travelStyle"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  🧳 Travel Style
                </label>

                <select
                  id="travelStyle"
                  name="travelStyle"
                  value={formData.travelStyle}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select travel style</option>
                  <option value="solo">Solo Travel</option>
                  <option value="couple">Couple</option>
                  <option value="family">Family</option>
                  <option value="friends">Friends</option>
                  <option value="business">Business</option>
                  <option value="backpacking">Backpacking</option>
                </select>

                <div className="mt-8">

                  <label className="mb-4 block text-sm font-medium text-slate-200">
                    ⭐ What are you interested in?
                  </label>

                  <div className="flex flex-wrap gap-3">

                    {interests.map((interest) => {

                      const selected =
                        formData.interests.includes(interest)

                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() =>
                            handleInterestChange(interest)
                          }
                          className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                            selected
                              ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                              : "border-slate-700 bg-slate-950/70 text-slate-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300"
                          }`}
                        >
                          {selected && "✓ "}
                          {interest}
                        </button>
                      )
                    })}

                  </div>

                </div>

                <div className="mt-8">

                  <label
                    htmlFor="transportation"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    🚆 Preferred Transportation
                  </label>

                  <select
                    id="transportation"
                    name="transportation"
                    value={formData.transportation}
                    onChange={handleChange}
                    className={selectClass}
                  >
                    <option value="">Select transportation</option>
                    <option value="flight">Flight</option>
                    <option value="train">Train</option>
                    <option value="bus">Bus</option>
                    <option value="car">Rental Car</option>
                    <option value="public-transport">
                      Public Transportation
                    </option>
                  </select>

                </div>

              </div>

            </div>

          </section>

          {/* SECTION 04 */}
          <section className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/20 md:p-8">

            <div className="absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full bg-blue-500/5 blur-3xl" />

            <div className="relative">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-600/20">
                  04
                </div>

                <div>
                  <p className="text-sm font-medium text-blue-400">
                    Final Details
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Activities & Requirements
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Add anything else you want VoyageAI to know.
                  </p>
                </div>

              </div>

              <div className="relative mt-8 space-y-6">

                <div>

                  <label
                    htmlFor="activities"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    🎯 Activities You Want to Try
                  </label>

                  <textarea
                    id="activities"
                    name="activities"
                    value={formData.activities}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Example: hiking, sightseeing, local food, museums..."
                    className={`${inputClass} resize-none`}
                  />

                </div>

                <div>

                  <label
                    htmlFor="requirements"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    📝 Special Requirements
                  </label>

                  <textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Example: vegetarian food, accessibility requirements, family friendly activities..."
                    className={`${inputClass} resize-none`}
                  />

                </div>

              </div>

            </div>

          </section>

          {/* Final CTA */}
          <section className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-slate-900/80 to-cyan-500/10 p-8 text-center backdrop-blur-xl md:p-12">

            <div className="absolute left-1/2 top-0 h-32 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-16 w-16 animate-[travelFloat_4s_ease-in-out_infinite] items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-3xl">
                ✈️
              </div>

              <h2 className="mt-6 text-2xl font-bold text-white md:text-3xl">
                Ready for your next adventure?
              </h2>

              <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-400">
                Give us your preferences and VoyageAI will turn
                your travel idea into a personalized journey.
              </p>

              <button
                type="submit"
                className="group relative mt-7 overflow-hidden rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-600/30 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Generate My Travel Plan
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ✈️
                  </span>
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>

              <div className="mt-5 flex flex-wrap justify-center gap-4 text-xs text-slate-500">
                <span>🤖 AI Powered</span>
                <span>•</span>
                <span>🗺️ Personalized</span>
                <span>•</span>
                <span>💰 Budget Friendly</span>
              </div>

            </div>

          </section>

        </form>

      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes travelFloat {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }

            50% {
              transform: translateY(-14px) rotate(3deg);
            }
          }

          @keyframes planeMove {
            0% {
              transform: translateX(-20px) translateY(0);
            }

            50% {
              transform: translateX(40vw) translateY(-30px);
            }

            100% {
              transform: translateX(90vw) translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
            }
          }
        `}
      </style>

    </div>
  )
}

export default TripPlanner