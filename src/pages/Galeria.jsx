import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'

function Galeria() {
  const location = useLocation()
  
  const subPages = [
    { path: '/galeria/galeria', title: 'Galería', icon: '🖼️' }
  ]

  const GaleriaPrincipal = () => (
    <DescriptionBlock
      title="Galería"
      description="Descubre Posadas a través de una selección de imágenes destacadas."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
              <span className="text-4xl">🖼️</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">Imagen {i + 1}</h3>
              <p className="text-sm text-gray-600">Descripción de la imagen</p>
            </div>
          </div>
        ))}
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
        <Route path="/" element={<GaleriaPrincipal />} />
        <Route path="/galeria" element={<GaleriaPrincipal />} />
      </Routes>
    </div>
  )
}

export default Galeria 