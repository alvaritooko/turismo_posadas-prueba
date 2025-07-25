import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { FiFacebook, FiInstagram, FiInfo, FiMessageCircle } from 'react-icons/fi'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 mt-6">
      {/* Main Header */}
      <div className="bg-white">
        <div className="container-custom">
          <div className="flex items-center h-20 px-4 sm:px-6 lg:px-8 justify-end w-full">
            {/* Logo + Navbar */}
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-16 h-16 bg-[#34bc74] rounded-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-xs font-bold leading-tight">Turismo</div>
                    <div className="text-xs font-bold leading-tight">Posadas</div>
                  </div>
                </div>
              </Link>
              <nav className="hidden lg:flex items-center justify-end w-full">
                <Navbar />
              </nav>
            </div>

            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-1 ml-8">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow text-black hover:text-[#34bc74] transition-colors">
                <FiMessageCircle size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow text-black hover:text-[#34bc74] transition-colors">
                <FiInfo size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow text-black hover:text-[#34bc74] transition-colors">
                <FiFacebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow text-black hover:text-[#34bc74] transition-colors">
                <FiInstagram size={16} />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 ml-auto"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-2">
            <Navbar isMobile={true} onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header 