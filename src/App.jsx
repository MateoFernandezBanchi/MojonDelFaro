import './App.css'
import Navbar from './components/navBar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Clases } from './pages/Clases';
import { Inicio } from './pages/Inicio';
import Relax from './pages/Relax';
import PiletaLibre from './pages/PiletaLibre';
import Conocenos from './pages/Conocenos';

function App() {

  return (
    <>
    <Router>
      <div>
      <Navbar />
        
        <Routes>
          <Route path="/" exact element={<Inicio/>} />
          <Route path="/clases" element={<Clases/>} />
          <Route path="/relax" element={<Relax/>} />
          <Route path="/piletalibre" element={<PiletaLibre/>} />
          <Route path="/conocenos" element={<Conocenos/>} />
        </Routes>
      </div>
    </Router>
    

    </>
  )
}

export default App
