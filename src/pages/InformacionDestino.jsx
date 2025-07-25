import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'

function InformacionDestino() {
  const location = useLocation()
  
  const subPages = [
    { path: '/informacion-destino/tips-frontera', title: 'Tips de Frontera', icon: '🛂' },
    { path: '/informacion-destino/moverse-ciudad', title: 'Moverse por la Ciudad', icon: '🚶' },
    { path: '/informacion-destino/sem', title: 'SEM', icon: '📱' }
  ]

  const TipsDeFrontera = () => (
    <DescriptionBlock
      title="Tips de Frontera"
      description="Información esencial para cruzar la frontera entre Argentina y Paraguay"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentación Requerida</h3>
            <p className="text-gray-600">
              Para ciudadanos argentinos: DNI vigente. Para extranjeros: Pasaporte válido. 
              Menores de edad deben viajar con autorización de viaje si no van con ambos padres.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Horarios de Aduana</h3>
            <p className="text-gray-600">
              El puente internacional está abierto las 24 horas. Sin embargo, 
              los trámites aduaneros tienen horarios específicos de 6:00 a 22:00 hs.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Restricciones de Compra</h3>
            <p className="text-gray-600">
              Límite de compras: $300 USD por persona. Productos restringidos: 
              cigarrillos, alcohol y productos electrónicos tienen límites específicos.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Consejos Importantes</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">⏰</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Mejor Horario</h4>
                  <p className="text-sm text-gray-600">Evitar fines de semana y feriados</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">📋</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Declaración</h4>
                  <p className="text-sm text-gray-600">Declarar todo lo que compres</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">🚗</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Transporte</h4>
                  <p className="text-sm text-gray-600">Colectivos regulares disponibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DescriptionBlock>
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
    <DescriptionBlock
      title="SEM - Sistema de Emergencias Misionero"
      description="Información sobre el sistema de emergencias y seguridad en Posadas"
    >
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicios de Emergencia</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Policía</h4>
                <p className="text-gray-600">101 - Emergencias policiales y seguridad ciudadana</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Bomberos</h4>
                <p className="text-gray-600">100 - Emergencias por incendios y rescates</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Ambulancia</h4>
                <p className="text-gray-600">107 - Emergencias médicas y traslados sanitarios</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Defensa Civil</h4>
                <p className="text-gray-600">103 - Emergencias climáticas y desastres naturales</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Información de Seguridad</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Centros de Salud</h4>
                <p className="text-gray-600">Hospitales y clínicas disponibles en la ciudad</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Farmacias de Turno</h4>
                <p className="text-gray-600">Farmacias abiertas 24 horas y de guardia</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h4 className="font-semibold text-gray-900">Comisarías</h4>
                <p className="text-gray-600">Ubicaciones de comisarías en diferentes barrios</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aplicaciones Útiles</h3>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">SEM App</h4>
                <p className="text-sm text-gray-600">Aplicación oficial del Sistema de Emergencias</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Mi Argentina</h4>
                <p className="text-sm text-gray-600">Información oficial del gobierno</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900">Covid-19</h4>
                <p className="text-sm text-gray-600">Información sobre protocolos sanitarios</p>
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
        <Route path="/" element={<TipsDeFrontera />} />
        <Route path="/tips-frontera" element={<TipsDeFrontera />} />
        <Route path="/moverse-ciudad" element={<MoversePorLaCiudad />} />
        <Route path="/sem" element={<SEM />} />
      </Routes>
    </div>
  )
}

export default InformacionDestino 