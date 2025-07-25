import { Routes, Route } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'
import AgendaExterna from '../components/AgendaExterna'
import CityTourLanding from '../components/CityTourLanding'

function QueHacer() {

  const AgendaCiudad = () => (
    <AgendaExterna />
  )

  const PaseosTuristicosGuiados = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          DESARROLLADOR ALVARO CONGOST
        </h1>
      </div>
    </div>
  )

  const Playas = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          DESARROLLADOR ALVARO CONGOST
        </h1>
      </div>
    </div>
  )

  const CityTour = () => (
    <CityTourLanding />
  )



  return (
    <div>
      {/* Content */}
      <Routes>
        <Route path="/" element={<AgendaCiudad />} />
        <Route path="/agenda-ciudad" element={<AgendaCiudad />} />
        <Route path="/paseos-guiados" element={<PaseosTuristicosGuiados />} />
        <Route path="/playas" element={<Playas />} />
        <Route path="/city-tour" element={<CityTour />} />
      </Routes>
    </div>
  )
}

export default QueHacer 