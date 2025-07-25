import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import FormularioContacto from '../components/FormularioContacto'

function Contacto() {
  const location = useLocation()
  
  const subPages = [
    { path: '/contacto', title: 'Contacto', icon: '📞' }
  ]

  const ContactoPrincipal = () => (
    <FormularioContacto />
  )

  return (
    <div>
      {/* Content */}
      <Routes>
        <Route path="/" element={<ContactoPrincipal />} />
        <Route path="" element={<ContactoPrincipal />} />
      </Routes>
    </div>
  )
}

export default Contacto 