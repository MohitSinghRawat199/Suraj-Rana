import { useState } from 'react'
import { X } from 'lucide-react'

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

  if (!open) return null

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // No backend — just show confirmation and log to console
    console.log('Booking request', form)
    alert('Booking request submitted — we will contact you soon.')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="max-w-2xl w-full rounded-xl bg-[#0b0b0c] p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Book a Session</h3>
          <button onClick={onClose} className="rounded-full p-1 text-stone-300 hover:text-white"><X size={18} /></button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-3">
          <label className="text-sm text-stone-300">Package</label>
          <input name="package" value={form.package} onChange={handleChange} placeholder="Package" className="rounded-md bg-[#0b0b0c] border border-white/10 p-2 text-white" />

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-sm text-stone-300">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="rounded-md bg-[#0b0b0c] border border-white/10 p-2 text-white" />
            </div>
            <div>
              <label className="text-sm text-stone-300">Email</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="rounded-md bg-[#0b0b0c] border border-white/10 p-2 text-white" />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="text-sm text-stone-300">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="rounded-md bg-[#0b0b0c] border border-white/10 p-2 text-white" />
            </div>
            <div>
              <label className="text-sm text-stone-300">Date</label>
              <input name="date" value={form.date} onChange={handleChange} type="date" className="rounded-md bg-[#0b0b0c] border border-white/10 p-2 text-white" />
            </div>
          </div>

          <div>
            <label className="text-sm text-stone-300">Location</label>
            <input name="location" value={form.location} onChange={handleChange} placeholder="City, venue or address" className="rounded-md bg-[#0b0b0c] border border-white/10 p-2 text-white" />
          </div>

          <div>
            <label className="text-sm text-stone-300">Additional Details</label>
            <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="w-full rounded-md bg-[#0b0b0c] border border-white/10 p-2 text-white" />
          </div>

          <div className="mt-2 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white">Cancel</button>
            <button type="submit" className="rounded-full bg-[#d8b98a] px-4 py-2 text-sm font-medium text-stone-950">Send Booking</button>
          </div>
        </form>
      </div>
    </div>
  )
}
