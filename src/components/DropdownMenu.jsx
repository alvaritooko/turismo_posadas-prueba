import { Link } from 'react-router-dom'

function DropdownMenu({ items }) {
  return (
    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
      {items.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}

export default DropdownMenu 