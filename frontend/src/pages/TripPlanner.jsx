import { useState } from "react"

function TripPlanner() {
  const [form, setForm] = useState({
    travelers: "",
    date: "",
    startingLocation: "",
    destination: "",
    budget: "",
    duration: "",
    interests: "",
    accommodation: "",
    transportation: "",
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log("Trip planning data:", form)
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">

      <h1 className="text-4xl font-bold">
        AI Trip Planner
      </h1>

      <p className="mt-3 text-slate-400">
        Tell VoyageAI about your trip and we'll help you plan it.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >

        <input
          name="travelers"
          placeholder="Number of travelers"
          value={form.travelers}
          onChange={handleChange}
          className="rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          name="startingLocation"
          placeholder="Starting location"
          value={form.startingLocation}
          onChange={handleChange}
          className="rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          name="destination"
          placeholder="Destination / Region"
          value={form.destination}
          onChange={handleChange}
          className="rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          name="budget"
          placeholder="Budget"
          value={form.budget}
          onChange={handleChange}
          className="rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          name="duration"
          placeholder="Trip duration"
          value={form.duration}
          onChange={handleChange}
          className="rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          name="interests"
          placeholder="Interests"
          value={form.interests}
          onChange={handleChange}
          className="rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          name="accommodation"
          placeholder="Accommodation preference"
          value={form.accommodation}
          onChange={handleChange}
          className="rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <input
          name="transportation"
          placeholder="Transportation preference"
          value={form.transportation}
          onChange={handleChange}
          className="rounded-lg border border-slate-700 bg-slate-900 p-3"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 md:col-span-2"
        >
          Generate My Travel Plan
        </button>

      </form>

    </div>
  )
}

export default TripPlanner