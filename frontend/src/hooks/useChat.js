import { useContext } from "react"
import ChatContext from "../context/ChatContext"

function useChat() {
  return useContext(ChatContext)
}

export default useChat