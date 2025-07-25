import { Routes, Route, Link, useLocation } from 'react-router-dom'
import DescriptionBlock from '../components/DescriptionBlock'
import BlogNoticias from '../components/BlogNoticias'

function Noticias() {
  const location = useLocation()
  
  const subPages = [
    { path: '/noticias/blog', title: 'Blog de Noticias', icon: '✍️' }
  ]

  const BlogNoticiasPage = () => (
    <BlogNoticias />
  )

  return (
    <div>
      {/* Content */}
      <Routes>
        <Route path="/" element={<BlogNoticiasPage />} />
        <Route path="/blog" element={<BlogNoticiasPage />} />
      </Routes>
    </div>
  )
}

export default Noticias 