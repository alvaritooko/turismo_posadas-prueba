import { useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'

function Navbar({ isMobile = false, onClose }) {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const menuItems = [
    {
      title: 'Organiza Tu Viaje',
      path: '/organiza-tu-viaje',
      submenu: [
        { title: 'Alojamiento', path: '/organiza-tu-viaje/alojamiento' },
        { title: 'Agencias de Viajes', path: '/organiza-tu-viaje/agencias-viajes' }
      ]
    },
    {
      title: 'Información del Destino',
      path: '/informacion-destino',
      submenu: [
        { title: 'Tips de Frontera', path: '/informacion-destino/tips-frontera' },
        { title: 'Moverse por la Ciudad', path: '/informacion-destino/moverse-ciudad' },
        { title: 'SEM', path: '/informacion-destino/sem' }
      ]
    },
    {
      title: 'Qué Hacer',
      path: '/que-hacer',
      submenu: [
        { title: 'Agenda Ciudad', path: '/que-hacer/agenda-ciudad' },
        { title: 'Paseos Turísticos Guiados', path: '/que-hacer/paseos-guiados' },
        { title: 'Playas', path: '/que-hacer/playas' },
        { title: 'City Tour', path: '/que-hacer/city-tour' }
      ]
    },
    {
      title: 'Experiencias',
      path: '/experiencias',
      submenu: [
        { title: 'Complejo Costa Sur', path: '/experiencias/complejo-costa-sur' }
      ]
    },
    {
      title: 'Galería',
      path: '/galeria',
      submenu: [
        { title: 'Galería', path: '/galeria/galeria' }
      ]
    },
    {
      title: 'MICE',
      path: '/mice',
      submenu: [
        { title: 'Agenda MICE', path: '/mice/agenda-mice' },
        { title: 'Meeting', path: '/mice/meeting' },
        { title: 'Kit de Promoción', path: '/mice/kit-promocion' }
      ]
    },
    {
      title: 'Noticias',
      path: '/noticias',
      submenu: [
        { title: 'Blog de Noticias', path: '/noticias/blog' }
      ]
    },
    {
      title: 'Contacto',
      path: '/contacto',
      submenu: [
        { title: 'Contacto', path: '/contacto' }
      ]
    }
  ]

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setActiveDropdown(index)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null)
    }
  }

  const handleClick = (index) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === index ? null : index)
    }
  }

  if (isMobile) {
    return (
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 pb-2">
            <button
              onClick={() => handleClick(index)}
              className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-primary-600"
            >
              <span className="font-medium">{item.title}</span>
              <svg
                className={`w-4 h-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === index && (
              <div className="ml-4 mt-2 space-y-1">
                {item.submenu.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    onClick={onClose}
                    className="block py-1 text-sm text-gray-600 hover:text-primary-600"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <ul className="flex space-x-8">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="relative"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            to={item.path}
            className="flex items-center space-x-1 py-2 text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            <span>{item.title}</span>
            {item.submenu && item.submenu.length > 0 && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Link>
          {activeDropdown === index && (
            <DropdownMenu items={item.submenu} />
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navbar 