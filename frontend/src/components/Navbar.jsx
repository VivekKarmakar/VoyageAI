import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link to="/" className="text-xl font-bold">
        VoyageAI
      </Link>

      <div className="flex gap-4">
        <Link to="/explore">Explore</Link>
        <Link to="/trip-planner">Planner</Link>
        <Link to="/community">Community</Link>
      </div>
    </nav>
  )
}

export default Navbar