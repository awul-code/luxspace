import { BrowserRouter, Routes, Route } from "react-router";
import Hompage from "./pages/hompage";
import Errorpage from "./pages/errorpage";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hompage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
