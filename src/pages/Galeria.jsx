import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import GaleriaTuristica from '../components/GaleriaTuristica'

function Galeria() {
  const location = useLocation()
  
  const subPages = [
    { path: '/galeria/galeria', title: 'Galería', icon: '🖼️' }
  ]

  const GaleriaPrincipal = () => (
    <GaleriaTuristica />
  )

  return (
    <div>
      {/* Content */}
      <Routes>
        <Route path="/" element={<GaleriaPrincipal />} />
        <Route path="/galeria" element={<GaleriaPrincipal />} />
      </Routes>
    </div>
  )
}

export default Galeria 