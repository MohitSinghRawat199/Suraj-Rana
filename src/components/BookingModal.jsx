import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const bookingEmail = 'surajrana557899@gmail.com'

export default function BookingModal({ open, onClose, presetPackage }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    location: '',
    package: presetPackage || '',
    notes: '',
  })

  useEffect(() => {
    setForm((current) => ({ ...current, package: presetPackage || '' }))
  }, [presetPackage])

  if (!open) return null

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = `Booking Request: ${form.package || 'Photography / Album Design'}`
    const body = [
      'NEW BOOKING REQUEST',
      '',
      `Service / Package: ${form.package || 'Not specified'}`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Preferred date: ${form.date || 'Not provided'}`,
      `Location: ${form.location || 'Not provided'}`,
      '',
      'Additional details:',
      form.notes || 'None',
    ].join('\n')
    window.location.href = `mailto:${bookingEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-w-2xl w-full rounded-xl bg-[#faf9f6] p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-stone-900">Book a Session</h3>
          <button onClick={onClose} className="rounded-full p-1 text-stone-600 hover:text-stone-900"><X size={18} /></button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <label className="text-sm text-stone-600">Package</label>
          <input name="package" value={form.package} onChange={handleChange} placeholder="Package" className="rounded-md bg-[#faf9f6] border border-stone-200 p-2 text-stone-900" />

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-sm text-stone-600">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="rounded-md bg-[#faf9f6] border border-stone-200 p-2 text-stone-900" />
            </div>
            <div>
              <label className="text-sm text-stone-600">Email</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" required className="rounded-md bg-[#faf9f6] border border-stone-200 p-2 text-stone-900" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-sm text-stone-600">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="rounded-md bg-[#faf9f6] border border-stone-200 p-2 text-stone-900" />
            </div>
            <div>
              <label className="text-sm text-stone-600">Date</label>
              <input name="date" value={form.date} onChange={handleChange} type="date" className="rounded-md bg-[#faf9f6] border border-stone-200 p-2 text-stone-900" />
            </div>
          </div>

          <div>
            <label className="text-sm text-stone-600">Location</label>
            <input name="location" value={form.location} onChange={handleChange} placeholder="City, venue or address" className="rounded-md bg-[#faf9f6] border border-stone-200 p-2 text-stone-900" />
          </div>

          <div>
            <label className="text-sm text-stone-600">Additional Details</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="w-full rounded-md bg-[#faf9f6] border border-stone-200 p-2 text-stone-900" />
          </div>

          <div className="mt-2 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="rounded-full border border-stone-200 px-4 py-2 text-sm text-stone-900">Cancel</button>
            <button type="submit" className="rounded-full bg-[#9b7445] px-4 py-2 text-sm font-medium text-stone-950">Continue to Email</button>
          </div>
        </form>
      </div>
    </div>
  )
}
