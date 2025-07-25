import React, { useState, useEffect } from 'react'

const AgenciaDeViajes = () => {
  const [agencias, setAgencias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAgencias = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.sheetbest.com/sheets/aaa33158-2791-46b4-8d1a-fced9f293d65')
        
        if (!response.ok) {
          throw new Error('Error al cargar las agencias')
        }
        
        const data = await response.json()
        // Filtrar agencias que tengan nombre (eliminar filas vacías)
        const agenciasFiltradas = data.filter(agencia => agencia.Nombre && agencia.Nombre.trim() !== '')
        setAgencias(agenciasFiltradas)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAgencias()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#34bc74]"></div>
        <span className="ml-3 text-gray-600">Cargando agencias de viajes...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-2">⚠️</div>
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Agencias de Viajes en Posadas</h2>
        <p className="text-gray-600">Descubre las mejores agencias para planificar tu viaje</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agencias.map((agencia, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Logo de la agencia */}
            {agencia.Logo && (
              <div className="h-32 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={agencia.Logo} 
                  alt={agencia.Nombre}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Logo+No+Disponible'
                  }}
                />
              </div>
            )}
            
            {/* Contenido de la tarjeta */}
            <div className="p-4">
              {/* Nombre de la agencia */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{agencia.Nombre}</h3>
                <span className="text-[#34bc74] text-sm font-medium">
                  Agencia de Viajes
                </span>
              </div>
              
              {/* Dirección */}
              {agencia.Direccion && (
                <div className="mb-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-700 text-xs">{agencia.Direccion}</p>
                  </div>
                </div>
              )}
              
              {/* WhatsApp */}
              {agencia.WhatsApp && (
                <div className="mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <p className="text-gray-700 text-xs">{agencia.WhatsApp}</p>
                  </div>
                </div>
              )}
              
              {/* Enlaces */}
              <div className="flex gap-2 mt-3">
                {agencia.Web && (
                  <a 
                    href={agencia.Web.startsWith('http') ? agencia.Web : `https://${agencia.Web}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-2 py-1.5 rounded text-xs font-medium hover:bg-blue-600 transition-colors duration-200 flex-1 text-center"
                  >
                    Visitar Web
                  </a>
                )}
                {agencia.Ubicación && (
                  <a 
                    href={agencia.Ubicación} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-2 py-1.5 rounded text-xs font-medium hover:bg-green-600 transition-colors duration-200 flex-1 text-center"
                  >
                    Ver en Maps
                  </a>
                )}
              </div>
              
              {/* Instagram */}
              {agencia.Instagram && (
                <div className="flex gap-2 mt-2">
                  <a 
                    href={agencia.Instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-1.5 rounded hover:opacity-90 transition-opacity duration-200"
                    title="Instagram"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {agencias.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron agencias de viajes</p>
        </div>
      )}
      </div>
    </div>
  )
}

export default AgenciaDeViajes 