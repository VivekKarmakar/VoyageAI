import { Link } from "react-router-dom"

function DestinationCard({
  id,
  name,
  location,
  image,
  description,
  budget,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">

      {image && (
        <img
          src={image}
          alt={name}
          className="h-52 w-full object-cover"
        />
      )}

      <div className="p-5">

        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {location}
        </p>

        <p className="mt-3 text-sm text-slate-300">
          {description}
        </p>

        {budget && (
          <p className="mt-3 text-sm">
            Estimated Budget: {budget}
          </p>
        )}

        <Link
          to={`/destination/${id}`}
          className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2"
        >
          View Details
        </Link>

      </div>

    </div>
  )
}

export default DestinationCard