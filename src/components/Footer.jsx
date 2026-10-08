import { Camera, MessageCircleMore, MapPin, Mail, Palette, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../data/portfolioData'

const footerLinks = [...navLinks, { label: 'Albums', path: '/albums' }]

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-serif text-xl font-semibold tracking-[0.12em] text-stone-900">Suraj Rana</p>
            <p className="mt-4 max-w-sm text-stone-600">
              Photographer • Photo Editor • Graphic Designer
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#9b7445]">Navigate</h3>
            <div className="flex flex-col gap-3 text-stone-600">
              {footerLinks.map((link) => (
                <Link key={link.path} to={link.path} className="transition hover:text-stone-900">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm uppercase tracking-[0.2em] text-[#9b7445]">Connect</h3>
            <div className="flex gap-3 text-stone-600">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-stone-200 p-2 hover:border-[#9b7445]/50 hover:text-stone-900"><Camera size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-stone-200 p-2 hover:border-[#9b7445]/50 hover:text-stone-900"><Palette size={18} /></a>
              <a href="https://wa.me/918470961756" target="_blank" rel="noreferrer" className="rounded-full border border-stone-200 p-2 hover:border-[#9b7445]/50 hover:text-stone-900"><MessageCircleMore size={18} /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-stone-200 pt-8 text-sm text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Suraj Rana. All Rights Reserved.</p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-5">
            <span className="inline-flex items-center gap-2"><Phone size={14} /> +91 84709 61756</span>
            <span className="inline-flex items-center gap-2"><Mail size={14} /> surajrana557899@gmail.com</span>
            <span className="inline-flex items-center gap-2"><MapPin size={14} /> India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
