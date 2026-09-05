import { Link } from "react-router-dom"

function Register() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6">

      {/* Smaller registration container */}
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl lg:grid-cols-2">

        {/* =========================================
            LEFT TRAVEL ANIMATION PANEL
           ========================================= */}
        <div className="relative hidden overflow-hidden bg-blue-600 p-7 lg:flex lg:min-h-[680px] lg:flex-col lg:justify-between lg:p-9">

          {/* Glowing circles */}
          <div className="travel-glow absolute -right-20 top-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />

          <div
            className="travel-glow absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl"
            style={{ animationDelay: "1s" }}
          />

          {/* Floating world */}
          <div className="register-float absolute right-14 top-28 text-6xl">
            🌍
          </div>

          {/* Floating suitcase */}
          <div
            className="register-float-reverse absolute bottom-40 right-28 text-5xl"
            style={{ animationDelay: "1s" }}
          >
            🧳
          </div>

          {/* Floating map */}
          <div
            className="register-float absolute bottom-28 left-14 text-4xl"
            style={{ animationDelay: "2s" }}
          >
            🗺️
          </div>

          {/* Small location pins */}
          <div
            className="register-float-reverse absolute left-24 top-40 text-3xl"
            style={{ animationDelay: "0.5s" }}
          >
            📍
          </div>

          <div
            className="register-float absolute right-24 bottom-60 text-2xl"
            style={{ animationDelay: "1.5s" }}
          >
            📍
          </div>

          {/* Decorative travel path */}
          <div className="absolute left-16 right-16 top-[310px] h-24">

            <div className="absolute left-0 right-0 top-10 border-t-2 border-dashed border-blue-200/40" />

            <div className="absolute left-1/4 top-6 h-3 w-3 rounded-full bg-white/80" />

            <div className="absolute left-1/2 top-10 h-3 w-3 rounded-full bg-white/80" />

            <div className="absolute right-1/4 top-3 h-3 w-3 rounded-full bg-white/80" />

          </div>

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

          {/* Content */}
          <div className="relative z-10 max-w-md">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
              Start Your Journey
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white xl:text-4xl">
              Create memories.
              <br />
              Discover the world.
            </h2>

            <p className="mt-5 leading-7 text-blue-100">
              Create your VoyageAI account and discover
              personalized travel planning powered by AI.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-3">

              <div className="flex items-center gap-3 text-sm text-blue-50">
                <span>🧭</span>
                <span>Discover amazing destinations</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-blue-50">
                <span>🤖</span>
                <span>Create AI-powered travel plans</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-blue-50">
                <span>🌎</span>
                <span>Connect with fellow travelers</span>
              </div>

            </div>

          </div>

          {/* Footer */}
          <p className="relative z-10 text-xs text-blue-100">
            VoyageAI — Plan Smarter. Travel Better.
          </p>

        </div>


        {/* =========================================
            REGISTRATION FORM
           ========================================= */}
        <div className="flex items-center justify-center p-6 sm:p-8 lg:p-9">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-6 lg:hidden">

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

              <h1 className="text-3xl font-bold text-white">
                Create Account
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Start your journey with VoyageAI.
              </p>

            </div>

            {/* Form */}
            <form className="mt-6 space-y-4">

              {/* Full Name */}
              <div>

                <label
                  htmlFor="fullName"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

                <p className="mt-1.5 text-xs text-slate-500">
                  Use at least 8 characters.
                </p>

              </div>

              {/* Confirm Password */}
              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-1.5 block text-sm font-medium text-slate-200"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

              </div>

              {/* Terms */}
              <div className="flex items-start gap-3 pt-1">

                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded border-slate-600 bg-slate-950 text-blue-600 focus:ring-blue-500"
                />

                <label
                  htmlFor="terms"
                  className="text-xs leading-5 text-slate-400"
                >
                  I agree to the VoyageAI terms and
                  privacy policy.
                </label>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Create Account ✈️
              </button>

            </form>

            {/* Login */}
            <p className="mt-5 text-center text-sm text-slate-400">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-medium text-blue-400 transition hover:text-blue-300"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Register