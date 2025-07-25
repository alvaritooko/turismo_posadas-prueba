import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'

function MICE() {
  const location = useLocation()
  
  const subPages = [
    { path: '/mice/agenda-mice', title: 'Agenda MICE', icon: '🗓️' },
    { path: '/mice/meeting', title: 'Meeting', icon: '🤝' },
    { path: '/mice/kit-promocion', title: 'Kit de Promoción', icon: '📦' }
  ]

  const AgendaMICE = () => (
    <DescriptionBlock
      title="Agenda MICE"
      description="Consulta los próximos eventos, congresos y ferias del sector MICE en Posadas."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-primary-700 mb-2">Congreso Nacional de Turismo</h3>
          <p className="text-gray-600">15-17 de Agosto 2024</p>
          <p className="text-sm text-gray-500">Centro de Convenciones</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-primary-700 mb-2">Expo MICE Litoral</h3>
          <p className="text-gray-600">10-12 de Octubre 2024</p>
          <p className="text-sm text-gray-500">Salón de Eventos Costa Sur</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-primary-700 mb-2">Feria Internacional de Negocios</h3>
          <p className="text-gray-600">5-7 de Noviembre 2024</p>
          <p className="text-sm text-gray-500">Hotel Urbano</p>
        </div>
      </div>
    </DescriptionBlock>
  )

  const Meeting = () => (
    <DescriptionBlock
      title="Meeting"
      description="Organiza tu reunión, congreso o evento corporativo en los mejores espacios de Posadas."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard
          title="Salones Equipados"
          description="Espacios modernos con tecnología audiovisual y conectividad."
          icon="🏢"
        />
        <InfoCard
          title="Asistencia Integral"
          description="Personal especializado para la organización y logística."
          icon="👥"
        />
        <InfoCard
          title="Catering Premium"
          description="Opciones gastronómicas para todo tipo de eventos."
          icon="🍽️"
        />
        <InfoCard
          title="Alojamiento Cercano"
          description="Hoteles y hospedajes a minutos de los centros de eventos."
          icon="🏨"
        />
        <InfoCard
          title="Transporte"
          description="Traslados y movilidad para asistentes y expositores."
          icon="🚌"
        />
        <InfoCard
          title="Networking"
          description="Espacios y actividades para generar contactos de valor."
          icon="🤝"
        />
      </div>
    </DescriptionBlock>
  )

  const KitPromocion = () => (
    <DescriptionBlock
      title="Kit de Promoción"
      description="Descarga materiales, presentaciones y recursos para promocionar Posadas como destino MICE."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="text-5xl mb-4">📄</span>
          <h3 className="font-semibold text-gray-900 mb-2">Presentación Institucional</h3>
          <a href="#" className="text-primary-600 hover:underline text-sm">Descargar PDF</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="text-5xl mb-4">🖼️</span>
          <h3 className="font-semibold text-gray-900 mb-2">Banco de Imágenes</h3>
          <a href="#" className="text-primary-600 hover:underline text-sm">Ver Galería</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <span className="text-5xl mb-4">🎥</span>
          <h3 className="font-semibold text-gray-900 mb-2">Video Promocional</h3>
          <a href="#" className="text-primary-600 hover:underline text-sm">Ver Video</a>
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
        <Route path="/" element={<AgendaMICE />} />
        <Route path="/agenda-mice" element={<AgendaMICE />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/kit-promocion" element={<KitPromocion />} />
      </Routes>
    </div>
  )
}

export default MICE 