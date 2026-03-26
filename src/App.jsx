import { Routes, Route } from 'react-router'
import Home from './Home'
import Introduction from './Introduction'
import Index from './Index'
import Contract from './Contract'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/itis3135" element={<Index />} />
      <Route path="/itis3135/contract" element={<Contract />} />
    </Routes>
  )
}

export default App
