import { useParams } from "react-router-dom"

function Profile() {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold">
        User Profile
      </h1>

      <p className="mt-4">
        User ID: {id}
      </p>
    </div>
  )
}

export default Profile