import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard.jsx"
import Analyzer from "./pages/Analyzer.jsx"
import ATS from "./pages/ATS.jsx"
import Matcher from "./pages/Matcher.jsx"
import Prep from "./pages/Prep.jsx"
import Setting from "./pages/Setting.jsx"


function App() {

  return (
    <>

{/* Routes to Pages */}
     <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analyzer" element={<Analyzer />} />
        <Route path="/ats" element={<ATS />} />
        <Route path="/matcher" element={<Matcher />} />
        <Route path="/prep" element={<Prep />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  )
}

export default App
