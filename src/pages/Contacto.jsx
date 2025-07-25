import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'

function Contacto() {
  const location = useLocation()
  
  const subPages = [
    { path: '/contacto', title: 'Contacto', icon: '📞' }
  ]

  const ContactoPrincipal = () => (
    <DescriptionBlock
      title="Contacto"
      description="Ponte en contacto con nosotros para cualquier consulta turística."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-md text-center">
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Teléfono</h3>
          <p className="text-gray-600 mb-2">+54 376 412-3456</p>
          <p className="text-sm text-gray-500">Lun-Vie 8:00-18:00</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md text-center">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-600 mb-2">info@turismoposadas.com</p>
          <p className="text-sm text-gray-500">Respuesta en 24h</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md text-center">
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Dirección</h3>
          <p className="text-gray-600 mb-2">Av. Costanera 1234</p>
          <p className="text-sm text-gray-500">Posadas, Misiones</p>
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
        <Route path="/" element={<ContactoPrincipal />} />
        <Route path="" element={<ContactoPrincipal />} />
      </Routes>
    </div>
  )
}

export default Contacto 