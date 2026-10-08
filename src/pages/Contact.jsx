import { MapPin, Mail, MessageCircleMore, Phone } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SectionTitle from '../components/SectionTitle'

export default function ContactPage() {
  const details = [
    { icon: Phone, label: 'Phone', value: '+91 84709 61756' },
    { icon: Mail, label: 'Email', value: 'surajrana557899@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'India' },
    { icon: MessageCircleMore, label: 'WhatsApp', value: '+91 84709 61756' },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Contact" title="Let&apos;s Create Something Beautiful" description="Tell me about your vision, occasion or project, and I’ll help bring it to life with thoughtful imagery and polished creative direction." />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-5">
          {details.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4 rounded-[1.5rem] border border-stone-200 bg-white p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9b7445]/10 text-[#9b7445]">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{label}</p>
                <p className="mt-2 text-base text-stone-800">{value}</p>
              </div>
            </div>
          ))}

          <a
            href="https://wa.me/918470961756"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            Chat on WhatsApp
          </a>
        </div>

        <ContactForm />
      </div>
    </div>
  )
}
