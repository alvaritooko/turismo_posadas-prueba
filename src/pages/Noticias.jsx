import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'

function Noticias() {
  const location = useLocation()
  
  const subPages = [
    { path: '/noticias/blog', title: 'Blog de Noticias', icon: '✍️' }
  ]

  const BlogNoticias = () => (
    <DescriptionBlock
      title="Blog de Noticias"
      description="Artículos y noticias sobre turismo en Posadas"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }, (_, i) => (
          <article key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
              <span className="text-4xl">✍️</span>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>Hace {i + 1} día{i + 1 !== 1 ? 's' : ''}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Artículo de Blog {i + 1}
              </h3>
              <p className="text-gray-600 mb-4">
                Descripción del artículo que incluye información relevante sobre Posadas...
              </p>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                Leer más →
              </button>
            </div>
          </article>
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
        <Route path="/" element={<BlogNoticias />} />
        <Route path="/blog" element={<BlogNoticias />} />
      </Routes>
    </div>
  )
}

export default Noticias 