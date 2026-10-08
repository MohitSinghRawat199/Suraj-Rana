import { Suspense, lazy, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import socialPreview from './assets/hero-optimized.jpg'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const PortfolioPage = lazy(() => import('./pages/Portfolio'))
const ServicesPage = lazy(() => import('./pages/Services'))
const AlbumsPage = lazy(() => import('./pages/Albums'))
const ContactPage = lazy(() => import('./pages/Contact'))

const pageMeta = {
  '/': {
    title: 'Suraj Rana | Photographer & Creative Media',
    description:
      'Professional photography, photo editing, graphic design and premium wedding storytelling.',
  },
  '/about': {
    title: 'About | Suraj Rana',
    description: 'Creative photographer, editor and designer focused on emotion, artistry and visual storytelling.',
  },
  '/portfolio': {
    title: 'Portfolio | Suraj Rana',
    description: 'Curated portfolio of wedding, maternity, newborn, portrait, and creative work.',
  },
  '/services': {
    title: 'Services | Suraj Rana',
    description: 'Wedding photography, retouching, album design, product photography and creative media services.',
  },
  '/albums': {
    title: 'Albums | Suraj Rana',
    description: 'Luxury wedding album designs and storytelling presentation.',
  },
  '/contact': {
    title: 'Contact | Suraj Rana',
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

    document.querySelector('meta[property="og:title"]')?.setAttribute('content', current.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', current.description)
    let ogImage = document.querySelector('meta[property="og:image"]')
    if (!ogImage) {
      ogImage = document.createElement('meta')
      ogImage.setAttribute('property', 'og:image')
      document.head.appendChild(ogImage)
    }
    ogImage.setAttribute('content', socialPreview)

    if (location.hash) {
      requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' }))
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('site-theme') || 'dark')

  function toggleTheme() {
    setTheme((current) => {
      const next = current === 'light' ? 'dark' : 'light'
      window.localStorage.setItem('site-theme', next)
      return next
    })
  }

  return (
    <div className={`min-h-screen bg-[#faf9f6] text-stone-800 selection:bg-[#9b7445]/30 selection:text-stone-900 ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <PageMeta />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="overflow-x-hidden">
        <Suspense
          fallback={
            <div className="flex min-h-[50vh] items-center justify-center text-sm uppercase tracking-[0.32em] text-[#9b7445]">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/albums" element={<AlbumsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
