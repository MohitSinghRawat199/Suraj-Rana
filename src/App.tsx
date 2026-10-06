import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import PortfolioPage from './pages/Portfolio'
import ServicesPage from './pages/Services'
import AlbumsPage from './pages/Albums'
import ContactPage from './pages/Contact'

const pageMeta = {
  '/': {
    title: 'Photographer | Photography & Creative Media',
    description:
      'Professional photography, photo editing, graphic design and premium wedding storytelling.',
  },
  '/about': {
    title: 'About | Photographer',
    description: 'Creative photographer, editor and designer focused on emotion, artistry and visual storytelling.',
  },
  '/portfolio': {
    title: 'Portfolio | Photographer',
    description: 'Curated portfolio of wedding, maternity, newborn, portrait, and creative work.',
  },
  '/services': {
    title: 'Services | Photographer',
    description: 'Wedding photography, retouching, album design, product photography and creative media services.',
  },
  '/albums': {
    title: 'Albums | Photographer',
    description: 'Luxury wedding album designs and storytelling presentation.',
  },
  '/contact': {
    title: 'Contact | Photographer',
    description: 'Book your photography session, inquiry, or custom media project.',
  },
}

function PageMeta() {
  const location = useLocation()

  useEffect(() => {
    const current = pageMeta[location.pathname] || pageMeta['/']
    document.title = current.title

    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', current.description)

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-stone-100 selection:bg-[#d8b98a]/30 selection:text-white">
      <PageMeta />
      <Navbar />

      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
