import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar, FiMapPin, FiMail, FiUser, FiCoffee, FiTrendingUp, FiThumbsUp, FiNavigation } from 'react-icons/fi'
import EventBanner from '../components/EventBanner'
import React from 'react'

function Home() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const rotatingWords = ["GASTRONOMÍA", "ALOJAMIENTO", "ACTIVIDADES", "CITY TOUR"]

  // Efecto para rotar las palabras cada 3 segundos con desvanecimiento
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
        setIsTransitioning(false)
      }, 300) // Medio segundo para el fade out
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const eventosPosadas = [
    {
      id: 1,
      titulo: "Festival de Cerveza Artesanal",
      fecha: "Febrero 2024",
      descripcion: "5ta edición del festival con más de 20 variedades de cerveza artesanal, gastronomía local y shows en vivo en el Parque La Cascada.",
      imagen: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      titulo: "Noche de Música en Vivo",
      fecha: "Marzo 2024",
      descripcion: "Bandas locales y DJs reconocidos en la costanera de Posadas, con gastronomía gourmet y ambiente festivo junto al río.",
      imagen: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      titulo: "Feria Gastronómica Costanera",
      fecha: "Abril 2024",
      descripcion: "Sabores del litoral en un evento que combina platos típicos con propuestas gourmet, música y actividades culturales.",
      imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Sección de Bienvenida */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://viajerosocultos.com/wp-content/uploads/2022/09/2560px-Andresguacurari-e1664471932725-2048x1070.jpg" 
            alt="Monumento Andresito - Costanera de Posadas" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow">Turismo Posadas</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Tierra de cataratas, selva exuberante y cultura vibrante. 
            Viví experiencias únicas en el corazón de la Argentina.
          </p>
          {/* Eliminar el botón de 'Explorá ahora' */}
        </div>
      </section>

      {/* 1.5. Información de Posadas */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          {/* Contenido principal */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Columna izquierda */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                POSADAS, UNA CIUDAD JOVEN Y MODERNA
              </h2>
              <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                <p>
                  Posadas es un destino turístico vibrante que combina la modernidad con la calidez del litoral argentino. Su costanera, uno de los paseos más hermosos del país, es el corazón de la ciudad y el punto de partida para descubrir experiencias únicas.
                </p>
                <p>
                  La gastronomía local, las actividades en el río, los city tours y las playas urbanas te esperan para vivir momentos inolvidables. Por las noches, la ciudad se transforma con shows en vivo, bandas musicales, bares temáticos y cervecerías artesanales que crean una atmósfera única.
                </p>
                <p>
                  Como capital provincial emergente y centro de servicios de la región, Posadas ofrece una amplia gama de opciones para todos los visitantes que buscan descubrir la magia del litoral argentino.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-900">IMPERDIBLES</h3>
                <div className="flex flex-nowrap gap-x-3 overflow-x-auto">
                  {[
                    "CINE IMAX",
                    "PLAYAS",
                    "COSTANERA", 
                    "CITY TOUR",
                    "GASTRONOMÍA"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-xs whitespace-nowrap">
                      <span className="text-[#34bc74] text-base mr-1">✓</span>
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Columna derecha */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                INFORMES TURÍSTICOS
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-1 text-sm">
                  <span className="text-[#34bc74]">WhatsApp -</span>
                  <a 
                    href="https://wa.me/5493764578395" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#34bc74] hover:text-[#34bc74] font-medium"
                  >
                    +54 9 376 4 578395
                  </a>
                  <span className="text-[#34bc74]">🔗</span>
                </div>
                {/* Cita destacada */}
                <div className="bg-white border-2 border-gray-200 rounded-lg p-3 relative">
                  <div className="absolute top-2 left-4 text-2xl text-gray-300">"</div>
                  <div className="pt-2 pb-4 px-2">
                    <p className="text-gray-700 text-xs leading-relaxed">
                      ¡Y la oferta gastronómica de la mano de los mejores restós! Disfrutá de la ciudad con las actividades que tenemos para vos.
                    </p>
                  </div>
                  <div className="absolute bottom-2 right-4 text-2xl text-gray-300">"</div>
                </div>
                {/* Atribución */}
                <div className="text-center space-y-0">
                  <p className="font-bold text-gray-900 text-xs">Posadas Turismo</p>
                  <p className="text-xs text-gray-600">Municipalidad de Posadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. Imperdibles de Posadas */}
      <section className="py-10 bg-gradient-to-br from-[#34bc74] to-[#2a9d5f]">
        <div className="container-custom">
          <div className="text-left mb-8">
            <h2 className="text-2xl text-white mb-2">
              <span className="font-light">IMPERDIBLES:</span> <span className="font-bold">Disfrutá de la ciudad</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                id: 1,
                titulo: "CATAMARÁN",
                subtitulo: "MBURUCUYÁ CONNECTION",
                imagen: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                id: 2,
                titulo: "COSTANERA",
                subtitulo: "11km de costanera",
                imagen: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                id: 3,
                titulo: "CINE IMAX",
                subtitulo: "Experiencia IMAX",
                imagen: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                id: 4,
                titulo: "MONUMENTO ANDRESITO",
                subtitulo: "Bajada Vieja",
                imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((imperdible) => (
              <div 
                key={imperdible.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Imagen cuadrada */}
                <div className="aspect-square w-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={imperdible.imagen} 
                    alt={imperdible.titulo}
                    className="w-full h-full object-cover object-center rounded"
                  />
                </div>
                
                {/* Contenido */}
                <div className="p-2 text-center">
                  <h3 className="text-base font-bold text-gray-800 mb-1">{imperdible.titulo}</h3>
                  <p className="text-xs text-gray-600 mb-2">
                    {imperdible.subtitulo}
                  </p>
                  <button className="bg-[#34bc74] text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-[#34bc74] transition-colors">
                    Conocer más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.3. Módulo Promocional - Evento Cervecero */}
      <EventBanner />

      {/* 3. Eventos de Posadas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-3">Eventos de Posadas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Eventos especiales que se renuevan cada mes en la ciudad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventosPosadas.map((evento) => (
              <div key={evento.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48">
                  <img 
                    src={evento.imagen} 
                    alt={evento.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[#34bc74] mb-2">
                    <FiCalendar className="mr-2 text-sm" />
                    <span className="text-sm font-medium">{evento.fecha}</span>
                  </div>
                  <h3 className="text-xl font-light !font-light text-gray-900 mb-3" style={{fontWeight: 300}}>{evento.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {evento.descripcion}
                  </p>
                  <button className="text-[#34bc74] font-semibold hover:text-[#2a9d5f] transition-colors text-sm">
                    Más información →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5. Planificación de Estadía - Próximo Feriado */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <h2 className="text-4xl font-light text-gray-900">
                Planificá tu estadía en Posadas para tu próximo feriado!
              </h2>
              <span className={`bg-[#34bc74] text-white px-4 py-2 rounded-lg font-semibold text-sm transition-opacity duration-300 min-w-[140px] text-center inline-block ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                {rotatingWords[currentWord]}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Argentina */}
            <div className="text-center">
              <div className="w-24 h-16 mx-auto mb-4 rounded shadow-lg overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" 
                  alt="Bandera de Argentina"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[#34bc74] font-semibold mb-2">12 de Febrero</div>
              <div className="text-gray-600">CARNAVAL</div>
            </div>

            {/* Brasil */}
            <div className="text-center">
              <div className="w-24 h-16 mx-auto mb-4 rounded shadow-lg overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" 
                  alt="Bandera de Brasil"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[#34bc74] font-semibold mb-2">12 de Febrero</div>
              <div className="text-gray-600">CARNAVAL</div>
            </div>

            {/* Paraguay */}
            <div className="text-center">
              <div className="w-24 h-16 mx-auto mb-4 rounded shadow-lg overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg" 
                  alt="Bandera de Paraguay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[#34bc74] font-semibold mb-2">12 de Febrero</div>
              <div className="text-gray-600">CARNAVAL</div>
            </div>

            {/* Uruguay */}
            <div className="text-center">
              <div className="w-24 h-16 mx-auto mb-4 rounded shadow-lg overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg" 
                  alt="Bandera de Uruguay"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-[#34bc74] font-semibold mb-2">12 de Febrero</div>
              <div className="text-gray-600">CARNAVAL</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.6. Feriados Regionales */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-visible">
              {/* Línea verde superior con ícono */}
              <div className="relative">
                <div className="h-1 bg-[#34bc74]"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <FiCalendar className="text-gray-500 text-xl" />
                  </div>
                </div>
              </div>
              
              {/* Contenido centrado */}
              <div className="px-8 py-12 text-center">
                {/* Título */}
                <h3 className="text-2xl font-medium text-[#34bc74] mb-4">
                  FERIADOS REGIONALES 2024
                </h3>
                
                {/* Subtítulo con países */}
                <p className="text-gray-600 text-base mb-8">
                  (Argentina - Brasil - Paraguay - Uruguay)
                </p>
                
                {/* Botón de acción */}
                <button className="inline-flex items-center bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  <FiCalendar className="mr-2 text-gray-500" />
                  VER FERIADOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.7. SIT Posadas */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-left">
              {/* Título y botón */}
              <div className="flex items-center space-x-4 mb-8">
                <h2 className="text-3xl font-light text-gray-900">
                  SIT Posadas -
                </h2>
                <a 
                  href="https://www.sitposadas.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#34bc74] text-white px-4 py-2 rounded-lg font-light text-sm hover:bg-[#2a9d5f] transition-colors"
                >
                  www.sitposadas.com
                </a>
              </div>
              
              {/* Texto descriptivo */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Desde la Municipalidad de Posadas, se impulsa un Plan de Desarrollo Turístico Inteligente, proponiendo un nuevo modelo innovador de gestión turística a partir de una visión superadora, participativa e integral, que conlleva una serie de acciones concretas en el territorio, que trae beneficios para mejorar la experiencia tanto del turista como del posadeño.
                </p>
                <p>
                  El éxito de un destino inteligente depende de la gestión de la información integrando sistemas, aportando transversalidad en el análisis de los datos y colocando al turista en el centro de la acción para que no sólo sea el beneficiario, sino que también contribuya a mejorar los servicios turísticos de la ciudad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.8. Módulos de Datos Turísticos */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Datos Temporadas */}
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-[#34bc74] rounded-full flex items-center justify-center shadow-lg">
                  <FiCalendar className="text-white text-xl" />
                </div>
              </div>
              <div className="h-1 bg-[#34bc74] mb-8"></div>
              <div className="text-center">
                <h3 className="text-lg font-light text-[#34bc74] mb-3">Datos Temporadas</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Movimiento turístico que se genera durante los fines de semanas largos y temporadas.
                </p>
              </div>
            </div>

            {/* MICE */}
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <FiTrendingUp className="text-white text-xl" />
                </div>
              </div>
              <div className="h-1 bg-red-500 mb-8"></div>
              <div className="text-center">
                <h3 className="text-lg font-light text-red-500 mb-3">MICE</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Datos sobre Turismo MICE (Turismo de reuniones, incentivos, congresos y exposiciones)
                </p>
              </div>
            </div>

            {/* Data Digital */}
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-[#2aaab1] rounded-full flex items-center justify-center shadow-lg">
                  <FiThumbsUp className="text-white text-xl" />
                </div>
              </div>
              <div className="h-1 bg-[#2aaab1] mb-8"></div>
              <div className="text-center">
                <h3 className="text-lg font-light text-[#2aaab1] mb-3">DATA DIGITAL</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Analitica web y de redes sociales de usuarios y secciones visitadas.
                </p>
              </div>
            </div>

            {/* Conectividad */}
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                  <FiNavigation className="text-white text-xl" />
                </div>
              </div>
              <div className="h-1 bg-gray-700 mb-8"></div>
              <div className="text-center">
                <h3 className="text-lg font-light text-gray-700 mb-3">CONECTIVIDAD</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Datos de la cantidad de vuelos y pasajeros trasportados.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Módulo Botón de Denuncia */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="relative">
            {/* Ícono de advertencia */}
            <div className="flex justify-center mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-white border-2 border-red-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <span className="text-red-500 text-xl font-bold">!</span>
                  </div>
                </div>
                <div className="absolute top-1/2 left-0 w-8 h-px bg-gray-300 transform -translate-x-full"></div>
                <div className="absolute top-1/2 right-0 w-8 h-px bg-gray-300 transform translate-x-full"></div>
              </div>
            </div>

            {/* Banner principal */}
            <div className="bg-[#e36059] rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">¡Botón de denuncia!</h3>
                  <p className="text-white text-sm leading-relaxed max-w-md">
                    Hacé tu reclamo de agencias informales y personas NO autorizadas a operar con viajes de turismo.
                  </p>
                </div>
                <div className="ml-6">
                  <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-light shadow-md hover:bg-gray-50 transition-colors">
                    Denunciar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Módulo Agencias Habilitadas */}
      <section className="pt-2 pb-4 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-left mb-8">
            <h2 className="text-2xl font-light text-gray-800 mb-4">Agencias Habilitadas</h2>
            <p className="text-base text-gray-600 leading-relaxed">
              En el siguiente botón se encuentra disponible el{' '}
              <span className="bg-[#34bc74] text-white px-2 py-1 rounded font-medium">
                listado de AGENCIAS DE VIAJES HABILITADAS
              </span>{' '}
              para operar en el ámbito de la provincia de Misiones, de acuerdo a la normativa vigente
            </p>
          </div>

          <div className="flex justify-start">
            <button className="bg-[#E5F6E5] text-[#34bc74] px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-[#D1F2D1] transition-colors flex items-center space-x-3">
              <FiThumbsUp className="text-[#34bc74] text-xl" />
              <span>Ver Agencias Habilitadas</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. Newsletter */}
      <section className="py-20 bg-gradient-to-br from-[#34bc74] to-[#2a9d5f] relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">TURISMO  POSADAS</h2>
            <p className="text-xl mb-8 text-[#e8f5e8]">
              Dirección General
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 