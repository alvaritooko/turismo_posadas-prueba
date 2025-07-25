import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import InfoCard from '../components/InfoCard'
import AgendaMICE from '../components/AgendaMICE'
import LinkExternoMICE from '../components/LinkExternoMICE'
import KitPromocion from '../components/KitPromocion'

function MICE() {
  const location = useLocation()
  
  const subPages = [
    { path: '/mice/agenda-mice', title: 'Agenda MICE', icon: '🗓️' },
    { path: '/mice/meeting', title: 'Meeting', icon: '🤝' },
    { path: '/mice/kit-promocion', title: 'Kit de Promoción', icon: '📦' }
  ]

  const AgendaMICEPage = () => (
    <AgendaMICE />
  )

  const Meeting = () => (
    <LinkExternoMICE />
  )

  const KitPromocionPage = () => (
    <KitPromocion />
  )

  return (
    <div>
      {/* Content */}
      <Routes>
        <Route path="/" element={<AgendaMICEPage />} />
        <Route path="/agenda-mice" element={<AgendaMICEPage />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/kit-promocion" element={<KitPromocionPage />} />
      </Routes>
    </div>
  )
}

export default MICE 