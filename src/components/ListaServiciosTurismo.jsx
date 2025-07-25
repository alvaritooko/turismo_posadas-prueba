import React, { useState, useEffect } from 'react'

const ListaServiciosTurismo = () => {
  const [servicios, setServicios] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.sheetbest.com/sheets/dd986093-5fbd-4da7-a947-c0e428414914')
        
        if (!response.ok) {
          throw new Error('Error al cargar los servicios')
        }
        
        const data = await response.json()
        setServicios(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchServicios()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#34bc74]"></div>
        <span className="ml-3 text-gray-600">Cargando servicios turísticos...</span>
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
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Alojamientos en Posadas</h2>
        <p className="text-gray-600">Descubre las mejores opciones de hospedaje en la ciudad</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Imagen del servicio */}
            {servicio.Imágenes && (
              <div className="h-32 overflow-hidden">
                <img 
                  src={servicio.Imágenes.split(' / ')[0]} 
                  alt={servicio.Nombre}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Imagen+No+Disponible'
                  }}
                />
              </div>
            )}
            
            {/* Contenido de la tarjeta */}
            <div className="p-4">
              {/* Nombre y categoría */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{servicio.Nombre}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[#34bc74] text-sm font-medium">
                    {servicio.Modalidad}
                  </span>
                  {servicio.Categoria && servicio.Categoria !== 'S/C' && (
                    <span className="text-yellow-600 text-xs font-medium">
                      {servicio.Categoria} ★
                    </span>
                  )}
                </div>
              </div>
              
              {/* Descripción */}
              {servicio.Descripción && (
                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                  {servicio.Descripción}
                </p>
              )}
              
              {/* Dirección */}
              {servicio.Dirección && (
                <div className="mb-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-700 text-xs">{servicio.Dirección}</p>
                  </div>
                </div>
              )}
              
              {/* Teléfono */}
              {servicio.Teléfonos && (
                <div className="mb-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-3 h-3 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-gray-700 text-xs">{servicio.Teléfonos}</p>
                  </div>
                </div>
              )}
              
              {/* Enlaces */}
              <div className="flex gap-2 mt-3">
                {servicio.Webs && (
                  <a 
                    href={servicio.Webs} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-2 py-1.5 rounded text-xs font-medium hover:bg-blue-600 transition-colors duration-200 flex-1 text-center"
                  >
                    Visitar Web
                  </a>
                )}
                {servicio['Ubicacion maps'] && (
                  <a 
                    href={servicio['Ubicacion maps']} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-2 py-1.5 rounded text-xs font-medium hover:bg-green-600 transition-colors duration-200 flex-1 text-center"
                  >
                    Ver en Maps
                  </a>
                )}
              </div>
              
              {/* Redes sociales */}
              {(servicio.Facebook || servicio.Instagram) && (
                <div className="flex gap-2 mt-2">
                  {servicio.Facebook && (
                    <a 
                      href={servicio.Facebook} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#1877F2] text-white p-1.5 rounded hover:bg-[#166FE5] transition-colors duration-200"
                      title="Facebook"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                  )}
                  {servicio.Instagram && (
                    <a 
                      href={servicio.Instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-1.5 rounded hover:opacity-90 transition-opacity duration-200"
                      title="Instagram"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {servicios.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron servicios turísticos</p>
        </div>
      )}
    </div>
  )
}

export default ListaServiciosTurismo 