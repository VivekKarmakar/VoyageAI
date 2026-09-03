import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">

      <div className="w-full max-w-md">

        <h1 className="text-4xl font-bold">
          Create Account
        </h1>

        <p className="mt-2 text-slate-400">
          Start your journey with VoyageAI.
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-lg border border-slate-700 bg-slate-900 p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Register