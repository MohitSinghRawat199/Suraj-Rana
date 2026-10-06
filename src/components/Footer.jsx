import { Camera, MessageCircleMore, MapPin, Mail, Palette, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-[#0a0a0b]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-lg font-semibold tracking-[0.2em] text-[#f6f3ee] uppercase">PHOTOGRAPHER</p>
            <p className="mt-4 max-w-sm text-stone-300">
              Photographer • Photo Editor • Graphic Designer
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#d8b98a]">Navigate</h3>
            <div className="flex flex-col gap-3 text-stone-300">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#d8b98a]">Connect</h3>
            <div className="flex gap-3 text-stone-300">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:border-[#d8b98a]/50 hover:text-white"><Camera size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:border-[#d8b98a]/50 hover:text-white"><Palette size={18} /></a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:border-[#d8b98a]/50 hover:text-white"><MessageCircleMore size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 PHOTOGRAPHER. All Rights Reserved.</p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-5">
            <span className="inline-flex items-center gap-2"><Phone size={14} /> +91 98765 43210</span>
            <span className="inline-flex items-center gap-2"><Mail size={14} /> hello@photographerstudio.com</span>
            <span className="inline-flex items-center gap-2"><MapPin size={14} /> India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
