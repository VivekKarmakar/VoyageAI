import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">

      <div className="w-full max-w-md">

        <h1 className="text-4xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-2 text-slate-400">
          Login to your VoyageAI account.
        </p>

        <form className="mt-8 space-y-5">

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

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400"
          >
            Create Account
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Login