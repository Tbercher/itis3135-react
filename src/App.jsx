import { Routes, Route } from 'react-router'
import Home from './Home'
import Introduction from './Introduction'
import Index from './Index'
import Contract from './Contract'
import WebsiteEvaluations from './WebsiteEvaluations'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/itis3135" element={<Index />} />
      <Route path="/itis3135/contract" element={<Contract />} />
      <Route path="/itis3135/website-evaluations" element={<WebsiteEvaluations />} />
    </Routes>
  )
}

export default App
