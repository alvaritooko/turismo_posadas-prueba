import React from 'react'

const SemPosadas = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-6">
        
        {/* 🟢 SECCIÓN 1: Introducción */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Sistema de Estacionamiento Medido (SEM Posadas)
            </h1>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La ciudad de Posadas cuenta con un Sistema de Estacionamiento Medido en el casco céntrico. 
              Las áreas están señalizadas con cordones pintados de blanco y negro. Para utilizar el servicio, 
              descargá la App SEM Posadas, disponible para Android e iOS.
            </p>
          </div>

          {/* Imagen ilustrativa */}
          <div className="text-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Estacionamiento medido Posadas"
              className="w-full max-w-xl mx-auto rounded-lg shadow-md"
            />
          </div>

          {/* Botón de descarga */}
          <div className="text-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Descargar App SEM Posadas
            </a>
          </div>
        </section>

        {/* 🕒 SECCIÓN 2: Horarios y Tarifas */}
        <section className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Horarios */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Horarios de funcionamiento</h2>
              </div>
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-base font-semibold text-gray-800 mb-1">Lunes a sábados</p>
                <p className="text-lg font-bold text-blue-600">07:00 a 13:00 y 16:00 a 21:00</p>
              </div>
            </div>

            {/* Tarifas */}
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Tarifas por uso del servicio</h2>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-green-50 rounded-lg p-2">
                  <span className="font-medium text-gray-700 text-sm">1ª y 2ª media hora</span>
                  <span className="font-bold text-green-600">$50</span>
                </div>
                <div className="flex justify-between items-center bg-yellow-50 rounded-lg p-2">
                  <span className="font-medium text-gray-700 text-sm">3ª y 4ª media hora</span>
                  <span className="font-bold text-yellow-600">$100</span>
                </div>
                <div className="flex justify-between items-center bg-red-50 rounded-lg p-2">
                  <span className="font-medium text-gray-700 text-sm">Resto del tiempo</span>
                  <span className="font-bold text-red-600">$200</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🔍 SECCIÓN 3: Consultas e infracciones */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Consulta de infracciones</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Consulta online */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Consulta Online</h3>
              <p className="text-gray-700 mb-3 leading-relaxed text-sm">
                Consultá si tu vehículo tiene actas de infracción ingresando en el enlace oficial o desde la App SEM Posadas.
              </p>
              <a 
                href="https://sistema.posadas.gov.ar/mp_sistemas/autogestion/consultatasaestacionamientomedido" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Consultar Infracciones
              </a>
            </div>

            {/* Pago presencial */}
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Pago Presencial</h3>
              <p className="text-gray-700 mb-3 leading-relaxed text-sm">
                También podés realizar el pago de forma presencial en nuestras oficinas.
              </p>
              <div className="flex items-start gap-3 bg-white rounded-lg p-3">
                <svg className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Oficinas SEM</p>
                  <p className="text-gray-600 text-sm">Buenos Aires 1521</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instrucciones App */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Instrucciones para la App</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</span>
                <p className="text-gray-700 text-sm">Usá la opción <strong>BUSCAR INFRACCIÓN</strong> en la App</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</span>
                <p className="text-gray-700 text-sm">Ingresá la patente <strong>sin espacios</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</span>
                <p className="text-gray-700 text-sm">Si figura un monto, podés hacer el pago voluntario con <strong>Macro Click</strong></p>
              </div>
            </div>
          </div>
        </section>

        {/* 💰 SECCIÓN 4: Montos por pago voluntario */}
        <section className="bg-gray-100 rounded-lg shadow-md p-6 mb-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Montos vigentes por infracción</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">72 hs hábiles</h3>
              <p className="text-xl font-bold text-green-600">$3.500</p>
            </div>

            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">10 días hábiles</h3>
              <p className="text-xl font-bold text-yellow-600">$7.500</p>
            </div>

            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">30 días hábiles</h3>
              <p className="text-xl font-bold text-orange-600">$10.500</p>
            </div>

            <div className="bg-white rounded-lg p-4 text-center shadow-md">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">Pasado el plazo</h3>
              <p className="text-base font-bold text-red-600">50 unidades fijas de combustible</p>
            </div>
          </div>
        </section>

        {/* 📬 SECCIÓN 5: Contacto */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Contacto</h2>
            <p className="text-base text-gray-600">¿Tenés consultas? Contactanos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">WhatsApp</h3>
              <p className="text-green-600 font-semibold text-sm">3765-226185</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-1">Email</h3>
              <p className="text-blue-600 font-semibold text-sm">consultas.sem.posadas@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SemPosadas 