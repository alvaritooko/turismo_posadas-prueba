import { Routes, Route } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'
import ListaServiciosTurismo from '../components/ListaServiciosTurismo'
import AgenciaDeViajes from '../components/AgenciaDeViajes'

function OrganizaTuViaje() {

  const Alojamiento = () => (
    <ListaServiciosTurismo />
  )

  const AgenciasDeViajes = () => (
    <AgenciaDeViajes />
  )



  return (
    <div>
      {/* Content */}
      <Routes>
        <Route path="/" element={<Alojamiento />} />
        <Route path="/alojamiento" element={<Alojamiento />} />
        <Route path="/agencias-viajes" element={<AgenciasDeViajes />} />
      </Routes>
    </div>
  )
}

export default OrganizaTuViaje 