import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Hero from '../components/Hero'
import OrganizaTuViaje from '../pages/OrganizaTuViaje'
import InformacionDestino from '../pages/InformacionDestino'
import QueHacer from '../pages/QueHacer'
import Experiencias from '../pages/Experiencias'
import Galeria from '../pages/Galeria'
import MICE from '../pages/MICE'
import Noticias from '../pages/Noticias'
import Contacto from '../pages/Contacto'

function AppRoutes() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<Home />} />
      
      {/* Organiza Tu Viaje */}
      <Route path="/organiza-tu-viaje/*" element={<OrganizaTuViaje />} />
      
      {/* Información del Destino */}
      <Route path="/informacion-destino/*" element={<InformacionDestino />} />
      
      {/* Qué Hacer */}
      <Route path="/que-hacer/*" element={<QueHacer />} />
      
      {/* Experiencias */}
      <Route path="/experiencias/*" element={<Experiencias />} />
      
      {/* Galería */}
      <Route path="/galeria/*" element={<Galeria />} />
      
      {/* MICE */}
      <Route path="/mice/*" element={<MICE />} />
      
      {/* Noticias */}
      <Route path="/noticias/*" element={<Noticias />} />
      
      {/* Contacto */}
      <Route path="/contacto/*" element={<Contacto />} />
    </Routes>
  )
}

export default AppRoutes 