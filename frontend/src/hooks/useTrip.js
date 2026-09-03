import { useContext } from "react"
import TripContext from "../context/TripContext"

function useTrip() {
  return useContext(TripContext)
}

export default useTrip