import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'

function OrganizaTuViaje() {
  const location = useLocation()
  
  const subPages = [
    { path: '/organiza-tu-viaje/alojamiento', title: 'Alojamiento', icon: '🏨' },
    { path: '/organiza-tu-viaje/agencias-viajes', title: 'Agencias de Viajes', icon: '✈️' }
  ]

  const Alojamiento = () => (
    <DescriptionBlock
      title="Alojamiento en Posadas"
      description="Encuentra el alojamiento perfecto para tu estadía en la capital de Misiones"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard
          title="Hoteles 5 Estrellas"
          description="Lujo y confort en el corazón de la ciudad. Servicios premium y vistas espectaculares al río Paraná."
          icon="⭐"
        />
        <InfoCard
          title="Hoteles 4 Estrellas"
          description="Excelente relación calidad-precio. Ubicaciones estratégicas y servicios completos."
          icon="⭐⭐"
        />
        <InfoCard
          title="Hoteles 3 Estrellas"
          description="Confort y economía. Perfectos para viajes de negocios y turismo familiar."
          icon="⭐⭐⭐"
        />
        <InfoCard
          title="Hostels y Albergues"
          description="Opción económica para mochileros y viajeros jóvenes. Ambiente social y amigable."
          icon="🏠"
        />
        <InfoCard
          title="Cabañas y Cottages"
          description="Experiencia única en contacto con la naturaleza. Ideal para familias y grupos."
          icon="🏡"
        />
        <InfoCard
          title="Apartamentos"
          description="Independencia y comodidad. Perfectos para estadías largas y grupos familiares."
          icon="🏢"
        />
      </div>
    </DescriptionBlock>
  )

  const AgenciasDeViajes = () => (
    <DescriptionBlock
      title="Agencias de Viajes"
      description="Descubre las mejores agencias de viajes para planificar tu visita a Posadas"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard
          title="Agencias Oficiales"
          description="Agencias certificadas y recomendadas por el Ministerio de Turismo de Misiones."
          icon="🏛️"
        />
        <InfoCard
          title="Paquetes Turísticos"
          description="Ofertas completas que incluyen alojamiento, transporte y actividades guiadas."
          icon="📦"
        />
        <InfoCard
          title="Viajes Corporativos"
          description="Servicios especializados para empresas y eventos de negocios."
          icon="💼"
        />
        <InfoCard
          title="Turismo Aventura"
          description="Agencias especializadas en experiencias de aventura y ecoturismo."
          icon="🏔️"
        />
        <InfoCard
          title="Viajes Personalizados"
          description="Itinerarios a medida diseñados según tus preferencias y necesidades."
          icon="🎯"
        />
        <InfoCard
          title="Reservas Online"
          description="Plataformas digitales para reservar servicios turísticos de forma segura."
          icon="💻"
        />
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
        <Route path="/" element={<Alojamiento />} />
        <Route path="/alojamiento" element={<Alojamiento />} />
        <Route path="/agencias-viajes" element={<AgenciasDeViajes />} />
      </Routes>
    </div>
  )
}

export default OrganizaTuViaje 