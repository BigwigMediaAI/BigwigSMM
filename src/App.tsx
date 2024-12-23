import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './Pages/Landing'
import Team from './Pages/Team';

function App() {

  return (
<Router>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Route for Team Page */}
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  )
}

export default App
