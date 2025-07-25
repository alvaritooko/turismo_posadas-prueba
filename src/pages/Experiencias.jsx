import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'
import ComplejoCostaSur from '../components/ComplejoCostaSur'

function Experiencias() {
  const location = useLocation()
  
  const subPages = [
    { path: '/experiencias/complejo-costa-sur', title: 'Complejo Costa Sur', icon: '🏝️' }
  ]

  const ComplejoCostaSurPage = () => (
    <ComplejoCostaSur />
  )

  return (
    <div>
      {/* Content */}
      <Routes>
        <Route path="/" element={<ComplejoCostaSurPage />} />
        <Route path="/complejo-costa-sur" element={<ComplejoCostaSurPage />} />
      </Routes>
    </div>
  )
}

export default Experiencias 