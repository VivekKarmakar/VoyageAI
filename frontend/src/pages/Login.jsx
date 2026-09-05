import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto grid min-h-[620px] max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl lg:grid-cols-2">

        {/* =========================================
            LEFT TRAVEL ANIMATION PANEL
           ========================================= */}
        <div className="relative hidden overflow-hidden bg-blue-600 p-8 lg:flex lg:flex-col lg:justify-between lg:p-12">

          {/* Background glow */}
          <div className="travel-glow absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />

          <div className="travel-glow absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

          {/* Clouds */}
          <div className="login-cloud absolute left-12 top-32 text-5xl opacity-30">
            ☁️
          </div>

          <div
            className="login-cloud absolute right-16 top-52 text-4xl opacity-25"
            style={{ animationDelay: "1.5s" }}
          >
            ☁️
          </div>

          <div
            className="login-cloud absolute bottom-40 left-28 text-3xl opacity-20"
            style={{ animationDelay: "3s" }}
          >
            ☁️
          </div>

          {/* Flying airplane */}
          <div className="pointer-events-none absolute left-0 top-36 text-5xl login-airplane">
            ✈️
          </div>

          {/* Decorative route line */}
          <div className="absolute left-10 right-10 top-[250px] border-t border-dashed border-blue-300/40" />

          {/* Logo */}
          <div className="relative z-10">

            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <span className="text-3xl">
                ✈️
              </span>

              <span>
                Voyage<span className="text-blue-200">AI</span>
              </span>
            </Link>

          </div>

          {/* Main message */}
          <div className="relative z-10">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
              Welcome Back, Traveler
            </p>

            <h2 className="mt-5 max-w-lg text-4xl font-bold leading-tight text-white xl:text-5xl">
              Your next adventure
              <br />
              starts here.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-blue-100">
              Sign in to access your personalized trips,
              saved destinations and travel community.
            </p>

            {/* Travel route */}
            <div className="mt-10 flex items-center gap-4 text-sm text-blue-100">

              <span>📍 You</span>

              <div className="h-px flex-1 border-t border-dashed border-blue-200/60" />

              <span>🌍 Destination</span>

            </div>

          </div>

          {/* Footer */}
          <p className="relative z-10 text-sm text-blue-100">
            VoyageAI — Plan Smarter. Travel Better.
          </p>

        </div>


        {/* =========================================
            LOGIN FORM
           ========================================= */}
        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">

          <div className="w-full max-w-md">

            {/* Mobile logo */}
            <div className="mb-8 lg:hidden">

              <Link
                to="/"
                className="flex items-center justify-center gap-2 text-2xl font-bold text-white"
              >
                <span className="text-3xl">
                  ✈️
                </span>

                <span>
                  Voyage<span className="text-blue-400">AI</span>
                </span>

              </Link>

            </div>

            {/* Heading */}
            <div>

              <h1 className="text-3xl font-bold text-white sm:text-4xl">
                Welcome Back
              </h1>

              <p className="mt-2 text-slate-400">
                Sign in to continue your journey.
              </p>

            </div>

            {/* Form */}
            <form className="mt-8 space-y-6">

              {/* Email */}
              <div>

                <div className="flex items-center justify-between">

                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-200"
                  >
                    Email
                  </label>

                </div>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Password */}
              <div>

                <div className="flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-200"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm text-blue-400 transition hover:text-blue-300"
                  >
                    Forgot password?
                  </button>

                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Sign In */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Sign In
              </button>

            </form>

            {/* Register */}
            <p className="mt-8 text-center text-sm text-slate-400">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-medium text-blue-400 transition hover:text-blue-300"
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login