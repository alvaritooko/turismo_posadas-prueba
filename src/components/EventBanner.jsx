import React from 'react'

const EventBanner = () => {
  return (
    <div className="flex justify-center items-center py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-visible">
          {/* Línea verde superior más fina */}
          <div className="relative">
            <div className="h-1 bg-[#34bc74]"></div>
            
            {/* Ícono de cerveza centrado que sobresale */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-14 h-14 bg-[#34bc74] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  {/* Vaso de cerveza con asa curva */}
                  <path 
                    d="M6 8h8c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2z" 
                    fill="white"
                  />
                  {/* Asa curva en el lado derecho */}
                  <path 
                    d="M14 10c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-4z" 
                    fill="white"
                  />
                  {/* Espuma en la parte superior */}
                  <path 
                    d="M6 8h8v1H6v-1z" 
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Contenido centrado con más espacio */}
          <div className="px-12 py-12 text-center">
            {/* Título destacado con tipografía más fina */}
            <h3 className="text-2xl font-light text-[#34bc74] mb-4 leading-tight">
              ¡Vuelve el evento cervecero más importante de la región!
            </h3>
            
            {/* Texto secundario con tipografía más fina */}
            <p className="text-gray-700 text-lg leading-tight mb-4 font-light">
              Agendate el próximo finde largo y vení a disfrutar{' '}
              <span className="bg-[#34bc74] text-white px-3 py-1.5 rounded font-medium text-sm">
                UNA+ Viernes 9 de febrero a partir de las 18:00 horas
              </span>{' '}
              en el Parque La Cascada, Posadas.
            </p>
            
            {/* Ubicación final con tipografía más fina */}
            <p className="text-gray-600 text-base font-medium">
              ¡TE ESPERAMOS!: La Cascada Costanera De Posadas
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventBanner 