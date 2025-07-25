import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'
import InfoTuristica from '../components/InfoTuristica'
import SemPosadas from '../components/SemPosadas'

function InformacionDestino() {
  const location = useLocation()
  
  const subPages = [
    { path: '/informacion-destino/tips-frontera', title: 'Tips de Frontera', icon: '🛂' },
    { path: '/informacion-destino/moverse-ciudad', title: 'Moverse por la Ciudad', icon: '🚶' },
    { path: '/informacion-destino/sem', title: 'SEM', icon: '📱' }
  ]

  const TipsDeFrontera = () => (
    <InfoTuristica />
  )

  const MoversePorLaCiudad = () => (
    <DescriptionBlock
      title="Moverse por la Ciudad"
      description="Conoce las diferentes formas de transportarte por Posadas"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard
          title="Transporte Público"
          description="Sistema de colectivos urbanos que cubre toda la ciudad. Tarjetas prepagas disponibles."
          icon="🚌"
        />
        <InfoCard
          title="Taxis y Remises"
          description="Servicio de taxi disponible 24/7. Aplicaciones móviles para solicitar viajes."
          icon="🚕"
        />
        <InfoCard
          title="Bicicletas"
          description="Sistema de bicicletas públicas y ciclovías para recorrer la ciudad de forma saludable."
          icon="🚲"
        />
        <InfoCard
          title="Caminando"
          description="Centro histórico compacto ideal para recorrer a pie. Calles peatonales y paseos."
          icon="🚶"
        />
        <InfoCard
          title="Alquiler de Autos"
          description="Empresas de alquiler de vehículos con oficinas en el aeropuerto y centro."
          icon="🚗"
        />
        <InfoCard
          title="Tours Guiados"
          description="Excursiones organizadas con transporte incluido a los principales atractivos."
          icon="🎫"
        />
      </div>
    </DescriptionBlock>
  )

  const SEM = () => (
    <SemPosadas />
  )



  return (
    <div>
      {/* Content */}
      <Routes>
        <Route path="/" element={<TipsDeFrontera />} />
        <Route path="/tips-frontera" element={<TipsDeFrontera />} />
        <Route path="/moverse-ciudad" element={<MoversePorLaCiudad />} />
        <Route path="/sem" element={<SEM />} />
      </Routes>
    </div>
  )
}

export default InformacionDestino 