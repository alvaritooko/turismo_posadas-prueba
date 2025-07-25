import React from 'react'

const BlogNoticias = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Posadas inaugura nueva costanera con vista al río Paraná",
      summary: "La ciudad estrena un espacio público de 2 kilómetros con ciclovías, áreas de descanso y miradores panorámicos que conectan el centro con el Complejo Costa Sur.",
      date: "15 de Diciembre, 2024",
      category: "Infraestructura",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
      readTime: "3 min"
    },
    {
      id: 2,
      title: "Festival gastronómico reúne a los mejores chefs de la región",
      summary: "Durante tres días, más de 20 restaurantes locales presentarán platos típicos y fusiones culinarias que destacan la riqueza gastronómica de Misiones.",
      date: "12 de Diciembre, 2024",
      category: "Gastronomía",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "4 min"
    },
    {
      id: 3,
      title: "Nuevo circuito turístico conecta Posadas con las Cataratas",
      summary: "Se lanza una ruta turística integral que incluye transporte, guías especializados y experiencias únicas para descubrir los tesoros naturales de la provincia.",
      date: "10 de Diciembre, 2024",
      category: "Turismo",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "5 min"
    },
    {
      id: 4,
      title: "Posadas se consolida como destino MICE en el Mercosur",
      summary: "La ciudad recibe reconocimiento internacional por su infraestructura para eventos corporativos y congresos, atrayendo inversiones del sector turístico.",
      date: "8 de Diciembre, 2024",
      category: "Eventos",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      readTime: "3 min"
    },
    {
      id: 5,
      title: "Jardín Botánico amplía su colección de especies autóctonas",
      summary: "Se incorporan más de 50 nuevas especies de plantas nativas, creando senderos temáticos y espacios educativos para visitantes de todas las edades.",
      date: "5 de Diciembre, 2024",
      category: "Naturaleza",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      readTime: "4 min"
    },
    {
      id: 6,
      title: "Nuevo hotel boutique abre sus puertas en el centro histórico",
      summary: "Un establecimiento de lujo con 25 habitaciones temáticas que rinden homenaje a la historia y cultura de Posadas, ofreciendo experiencias únicas.",
      date: "3 de Diciembre, 2024",
      category: "Alojamiento",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "3 min"
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      'Infraestructura': 'bg-blue-100 text-blue-800',
      'Gastronomía': 'bg-orange-100 text-orange-800',
      'Turismo': 'bg-green-100 text-green-800',
      'Eventos': 'bg-purple-100 text-purple-800',
      'Naturaleza': 'bg-emerald-100 text-emerald-800',
      'Alojamiento': 'bg-indigo-100 text-indigo-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Blog de Noticias{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Turísticas
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Enterate de las últimas novedades, eventos y tendencias del turismo en Posadas.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(newsArticles[0].category)}`}>
                    {newsArticles[0].category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {newsArticles[0].readTime}
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-500">{newsArticles[0].date}</span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-sm text-gray-500">Destacado</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {newsArticles[0].title}
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {newsArticles[0].summary}
                </p>
                
                <button className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg">
                  <span>Leer artículo completo</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsArticles.slice(1).map((article, index) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden border border-gray-100"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {article.summary}
                </p>
                
                <button className="group/btn inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  <span>Leer más</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              ¿Querés recibir las noticias en tu email?
            </h2>
            
            <p className="text-gray-600 mb-6">
              Suscribite a nuestro newsletter y recibí las últimas novedades turísticas de Posadas directamente en tu bandeja de entrada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <a 
            href="https://turismoposadas.tur.ar/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Ver todas las noticias
          </a>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

export default BlogNoticias 