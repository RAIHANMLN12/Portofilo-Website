import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import AboutPage from "./views/About"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
