import { useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import BrandLogo from './BrandLogo'
import { navLinks } from '../data/portfolioData'

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header
      className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <BrandLogo />

        <nav className="hidden items-center gap-8 text-sm text-stone-700 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `transition ${isActive ? 'text-[#9b7445]' : 'text-stone-700 hover:text-stone-900'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-3 py-2 text-stone-700 transition hover:border-[#9b7445] hover:text-[#9b7445]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-stone-50 p-2.5 text-stone-900"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-stone-50 p-2.5 text-stone-900"
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden border-t border-stone-200 bg-white md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-stone-700">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 ${isActive ? 'bg-[#9b7445] text-stone-950' : 'bg-stone-50 text-stone-700'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  )
}
