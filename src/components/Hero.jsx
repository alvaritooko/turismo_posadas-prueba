import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="relative bg-white">
      {/* Spacing after navbar */}
      <div className="h-16"></div>
      
      {/* Section Title */}
      <div className="container-custom py-12">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8">
            <div className="h-px bg-gray-300 flex-1 max-w-32"></div>
            <div className="text-center">
              <h1 className="text-2xl font-normal text-gray-500 mb-2">
                Posadas
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                VERANO 2025
              </h2>
            </div>
            <div className="h-px bg-gray-300 flex-1 max-w-16"></div>
          </div>
        </div>
      </div>
      
      {/* Main Hero Content */}
      <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Descubre
                  <span className="block text-secondary-300">Posadas</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary-100 max-w-2xl">
                  La capital de Misiones te espera con experiencias únicas, 
                  cultura vibrante y la magia de la selva misionera.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-primary-200 max-w-xl">
                  Explora destinos increíbles, saborea la gastronomía local, 
                  vive aventuras inolvidables y descubre la rica historia 
                  de esta hermosa ciudad.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/que-hacer"
                    className="btn-secondary text-lg px-8 py-3 inline-block text-center"
                  >
                    Explorar Destinos
                  </Link>
                  <Link
                    to="/organiza-tu-viaje"
                    className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg inline-block text-center"
                  >
                    Planificar Viaje
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm">Atracciones</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">365</div>
                      <div className="text-sm">Días de Aventura</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">24°C</div>
                      <div className="text-sm">Temperatura Promedio</div>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm">Experiencias Únicas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 