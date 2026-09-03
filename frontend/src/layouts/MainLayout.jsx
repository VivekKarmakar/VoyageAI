import { Link, Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <header className="border-b border-slate-800">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link
            to="/"
            className="text-2xl font-bold"
          >
            VoyageAI
          </Link>

          <div className="hidden gap-6 md:flex">

            <Link to="/" className="hover:text-blue-400">
              Home
            </Link>

            <Link to="/explore" className="hover:text-blue-400">
              Explore
            </Link>

            <Link to="/trip-planner" className="hover:text-blue-400">
              Trip Planner
            </Link>

            <Link to="/community" className="hover:text-blue-400">
              Community
            </Link>

            <Link to="/login" className="hover:text-blue-400">
              Login
            </Link>

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