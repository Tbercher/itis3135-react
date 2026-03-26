import { Routes, Route } from 'react-router'
import './App.css'
import Home from './Home'
import Introduction from './Introduction'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
    </Routes>
  )
}

export default App
