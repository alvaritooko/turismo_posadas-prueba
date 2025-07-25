import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'

function QueHacer() {
  const location = useLocation()
  
  const subPages = [
    { path: '/que-hacer/agenda-ciudad', title: 'Agenda Ciudad', icon: '📅' },
    { path: '/que-hacer/paseos-guiados', title: 'Paseos Turísticos Guiados', icon: '👥' },
    { path: '/que-hacer/playas', title: 'Playas', icon: '🏖️' },
    { path: '/que-hacer/city-tour', title: 'City Tour', icon: '🚌' }
  ]

  const AgendaCiudad = () => (
    <DescriptionBlock
      title="Agenda Ciudad"
      description="Mantente informado sobre los eventos y actividades que suceden en Posadas"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Eventos del Mes</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Festival de la Orquídea</h4>
                <p className="text-gray-600">15-20 de Diciembre - Celebración anual de la flor nacional</p>
                <span className="text-sm text-primary-600">📍 Plaza 9 de Julio</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Fiesta del Chamamé</h4>
                <p className="text-gray-600">22-25 de Diciembre - Festival de música tradicional</p>
                <span className="text-sm text-primary-600">📍 Anfiteatro Municipal</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Expo Posadas</h4>
                <p className="text-gray-600">28-30 de Diciembre - Feria comercial y cultural</p>
                <span className="text-sm text-primary-600">📍 Centro de Convenciones</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Actividades Semanales</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Mercado Artesanal</h4>
                <p className="text-sm text-gray-600">Sábados 9:00-18:00 hs</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Clases de Yoga</h4>
                <p className="text-sm text-gray-600">Martes y Jueves 18:00 hs</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Visitas Guiadas</h4>
                <p className="text-sm text-gray-600">Domingos 10:00 y 16:00 hs</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Próximos Eventos</h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Año Nuevo en la Costanera</h4>
                <p className="text-sm text-gray-600">31 de Diciembre - Fuegos artificiales</p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Carnaval de Posadas</h4>
                <p className="text-sm text-gray-600">Febrero 2025 - Desfiles y comparsas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DescriptionBlock>
  )

  const PaseosTuristicosGuiados = () => (
    <DescriptionBlock
      title="Paseos Turísticos Guiados"
      description="Descubre Posadas con expertos guías locales que te mostrarán los mejores lugares"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard
          title="Tour Histórico"
          description="Recorre los edificios históricos, plazas y monumentos que cuentan la historia de Posadas."
          icon="🏛️"
        />
        <InfoCard
          title="Tour Gastronómico"
          description="Degusta los sabores locales visitando los mejores restaurantes y puestos de comida."
          icon="🍽️"
        />
        <InfoCard
          title="Tour Cultural"
          description="Visita museos, galerías de arte y centros culturales con explicaciones detalladas."
          icon="🎨"
        />
        <InfoCard
          title="Tour Nocturno"
          description="Explora la ciudad iluminada y descubre su vida nocturna con un guía especializado."
          icon="🌙"
        />
        <InfoCard
          title="Tour Fotográfico"
          description="Captura los mejores momentos de Posadas con consejos de fotografía profesional."
          icon="📸"
        />
        <InfoCard
          title="Tour Personalizado"
          description="Diseña tu propio recorrido según tus intereses y preferencias específicas."
          icon="🎯"
        />
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Información de Reservas</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Mañana: 9:00 - 12:00 hs</li>
              <li>• Tarde: 14:00 - 17:00 hs</li>
              <li>• Noche: 19:00 - 22:00 hs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Duración</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Tours cortos: 2-3 horas</li>
              <li>• Tours completos: 4-6 horas</li>
              <li>• Tours personalizados: A medida</li>
            </ul>
          </div>
        </div>
      </div>
    </DescriptionBlock>
  )

  const Playas = () => (
    <DescriptionBlock
      title="Playas de Posadas"
      description="Disfruta de las hermosas playas y balnearios del río Paraná"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard
          title="Playa El Brete"
          description="Playa urbana con arena blanca, restaurantes y actividades acuáticas. Ideal para familias."
          icon="🏖️"
        />
        <InfoCard
          title="Balneario Municipal"
          description="Complejo con piscinas, vestuarios, restaurantes y áreas de recreación."
          icon="🏊"
        />
        <InfoCard
          title="Playa San José"
          description="Playa natural con aguas cristalinas y entorno tranquilo. Perfecta para relajarse."
          icon="🌊"
        />
        <InfoCard
          title="Costanera Sur"
          description="Paseo costero con playas artificiales, miradores y espacios para deportes."
          icon="🏃"
        />
        <InfoCard
          title="Isla del Sol"
          description="Isla accesible en lancha con playas vírgenes y actividades de ecoturismo."
          icon="🏝️"
        />
        <InfoCard
          title="Playa Privada"
          description="Playas exclusivas en hoteles y resorts con servicios premium."
          icon="⭐"
        />
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Información de Playas</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Horarios</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Temporada: Octubre - Abril</li>
              <li>• Horario: 8:00 - 20:00 hs</li>
              <li>• Mejor momento: 10:00 - 16:00 hs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Servicios</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Guardavidas</li>
              <li>• Restaurantes</li>
              <li>• Alquiler de sombrillas</li>
              <li>• Actividades acuáticas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Recomendaciones</h4>
            <ul className="text-gray-600 space-y-1">
              <li>• Protector solar</li>
              <li>• Agua potable</li>
              <li>• Respetar señalizaciones</li>
              <li>• No nadar en zonas prohibidas</li>
            </ul>
          </div>
        </div>
      </div>
    </DescriptionBlock>
  )

  const CityTour = () => (
    <DescriptionBlock
      title="City Tour"
      description="Descubre los principales atractivos de Posadas en un recorrido completo"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Recorrido Clásico</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Plaza 9 de Julio</h4>
                <p className="text-gray-600">Punto de partida - Plaza central histórica</p>
                <span className="text-sm text-primary-600">⏱️ 30 min</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Catedral de San José</h4>
                <p className="text-gray-600">Templo principal con arquitectura imponente</p>
                <span className="text-sm text-primary-600">⏱️ 45 min</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Casa de Gobierno</h4>
                <p className="text-gray-600">Edificio histórico sede del gobierno provincial</p>
                <span className="text-sm text-primary-600">⏱️ 30 min</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Museo Regional</h4>
                <p className="text-gray-600">Historia y cultura de Misiones</p>
                <span className="text-sm text-primary-600">⏱️ 60 min</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Costanera y Río</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Paseo Costero</h4>
                <p className="text-sm text-gray-600">4km de vista al río Paraná</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Puente Internacional</h4>
                <p className="text-sm text-gray-600">Conexión con Paraguay</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Restaurantes</h4>
                <p className="text-sm text-gray-600">Gastronomía local con vista al río</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Información del Tour</h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Duración Total</h4>
                <p className="text-sm text-gray-600">3-4 horas aproximadamente</p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Transporte</h4>
                <p className="text-sm text-gray-600">Bus turístico o caminando</p>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Guía</h4>
                <p className="text-sm text-gray-600">Incluido en el precio</p>
              </div>
            </div>
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
        <Route path="/" element={<AgendaCiudad />} />
        <Route path="/agenda-ciudad" element={<AgendaCiudad />} />
        <Route path="/paseos-guiados" element={<PaseosTuristicosGuiados />} />
        <Route path="/playas" element={<Playas />} />
        <Route path="/city-tour" element={<CityTour />} />
      </Routes>
    </div>
  )
}

export default QueHacer 