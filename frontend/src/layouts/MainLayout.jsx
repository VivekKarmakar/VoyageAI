import { Link, NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

function MainLayout() {
  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-blue-400"
        : "text-slate-300 hover:text-white"
    }`

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">

        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <span className="text-2xl">
              ✈️
            </span>

            <span className="text-2xl font-bold tracking-tight">
              Voyage<span className="text-blue-400">AI</span>
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            <NavLink
              to="/"
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/explore"
              className={navLinkClass}
            >
              Explore
            </NavLink>

            <NavLink
              to="/trip-planner"
              className={navLinkClass}
            >
              Trip Planner
            </NavLink>

            <NavLink
              to="/community"
              className={navLinkClass}
            >
              Community
            </NavLink>

            <NavLink
              to="/login"
              className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium transition hover:bg-blue-700"
            >
              Login
            </NavLink>

          </div>

        </nav>

      </header>

      <main>
        <Outlet />
      </main>

    </div>
  )
}

export default MainLayout