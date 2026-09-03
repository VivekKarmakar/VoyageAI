const aiService = {
  generateTripPlan: async (tripData) => {
    console.log("AI Trip Request:", tripData)
  },

  chat: async (message) => {
    console.log("AI Chat Message:", message)
  },
}

export default aiService