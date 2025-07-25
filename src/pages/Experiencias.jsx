import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'

function Experiencias() {
  const location = useLocation()
  
  const subPages = [
    { path: '/experiencias/complejo-costa-sur', title: 'Complejo Costa Sur', icon: '🏝️' }
  ]

  const ComplejoCostaSur = () => (
    <DescriptionBlock
      title="Complejo Costa Sur"
      description="Disfruta de un espacio único con playas, deportes, gastronomía y naturaleza en Posadas."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard
          title="Playa y Balneario"
          description="Arena blanca, aguas seguras y todos los servicios para disfrutar en familia."
          icon="🏖️"
        />
        <InfoCard
          title="Deportes Acuáticos"
          description="Kayak, paddle surf, y actividades para todas las edades."
          icon="🚣"
        />
        <InfoCard
          title="Gastronomía"
          description="Restaurantes y bares con vista al río y opciones para todos los gustos."
          icon="🍽️"
        />
        <InfoCard
          title="Espacios Verdes"
          description="Áreas de picnic, juegos infantiles y senderos para caminar."
          icon="🌳"
        />
        <InfoCard
          title="Eventos y Shows"
          description="Agenda de espectáculos, música en vivo y actividades culturales."
          icon="🎤"
        />
        <InfoCard
          title="Estacionamiento y Seguridad"
          description="Amplio estacionamiento, vigilancia y servicios sanitarios."
          icon="🅿️"
        />
      </div>
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Información Útil</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Todos los días: 8:00 - 22:00 hs</li>
              <li>• Temporada alta: actividades hasta la medianoche</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Ubicación</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Acceso por Costanera Sur</li>
              <li>• Transporte público y estacionamiento</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Recomendaciones</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Llevar protector solar y repelente</li>
              <li>• Respetar las indicaciones de seguridad</li>
              <li>• Consultar agenda de eventos</li>
            </ul>
          </div>
        </div>
      </div>
    </DescriptionBlock>
  )

  return (
    <div>
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <nav className="flex space-x-8 overflow-x-auto">
            {subPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  location.pathname === page.path
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{page.icon}</span>
                <span>{page.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <Routes>
        <Route path="/" element={<ComplejoCostaSur />} />
        <Route path="/complejo-costa-sur" element={<ComplejoCostaSur />} />
      </Routes>
    </div>
  )
}

export default Experiencias 