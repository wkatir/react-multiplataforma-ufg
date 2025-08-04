import { ThemeProvider } from "@/components/theme-provider"
import { Routes, Route } from "react-router"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Recipe from "./pages/Recipe"
import Gallery from "./pages/Gallery"
// import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App