import { Routes, Route } from 'react-router';
import Home from './Home'
import Introduction from './Introduction'
import Index from './Index'
import Contract from './Contract'
import WebsiteEvaluations from './WebsiteEvaluations'
import MyStuff from './MyStuff'
import Documentation from './Documentation'
import Survey from './Survey'
import Cards from './Cards'
import Product from './Product'
import Inventory from './Inventory'
import Hobby from './Hobby'
import IntroForm from './IntroForm.jsx'
import BercherEnterprises from './BercherEnterprises.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/itis3135" element={<Index />} />
      <Route path="/itis3135/contract" element={<Contract />} />
      <Route path="/itis3135/website-evaluations" element={<WebsiteEvaluations />} />
      <Route path="/itis3135/mystuff" element={<MyStuff />} />
      <Route path="/itis3135/documentation" element={<Documentation />} />
      <Route path="/itis3135/survey" element={<Survey />} />
      <Route path="/itis3135/cards" element={<Cards />} />
      <Route path="/itis3135/product" element={<Product />} />
      <Route path="/itis3135/inventory" element={<Inventory />} />
      <Route path="/itis3135/hobby" element={<Hobby />} />
      <Route path="/itis3135/intro_form" element={<IntroForm />} />
      <Route path="/itis3135/BercherEnterprises" element={<BercherEnterprises />} />
    </Routes>
  )
}

export default App
