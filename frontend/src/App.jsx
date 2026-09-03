import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layouts/MainLayout"

import Home from "./pages/Home"
import Explore from "./pages/Explore"
import DestinationDetails from "./pages/DestinationDetails"
import TripPlanner from "./pages/TripPlanner"
import Itinerary from "./pages/Itinerary"
import Community from "./pages/Community"
import PostDetails from "./pages/PostDetails"
import Profile from "./pages/Profile"
import Chatbot from "./pages/Chatbot"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/explore" element={<Explore />} />

          <Route
            path="/destination/:id"
            element={<DestinationDetails />}
          />

          <Route
            path="/trip-planner"
            element={<TripPlanner />}
          />

          <Route
            path="/itinerary/:id"
            element={<Itinerary />}
          />

          <Route
            path="/community"
            element={<Community />}
          />

          <Route
            path="/post/:id"
            element={<PostDetails />}
          />

          <Route
            path="/profile/:id"
            element={<Profile />}
          />

          <Route
            path="/chatbot"
            element={<Chatbot />}
          />

        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App