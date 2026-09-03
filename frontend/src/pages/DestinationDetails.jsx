import { useParams } from "react-router-dom"

function DestinationDetails() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold">
        Destination Details
      </h1>

      <p className="mt-4">
        Destination ID: {id}
      </p>
    </div>
  )
}

export default DestinationDetails