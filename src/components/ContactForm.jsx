import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const validate = () => {
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Name is required.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = 'Valid email is required.'
    }
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required.'
    if (!form.service) nextErrors.service = 'Please choose a service.'
    if (!form.message.trim()) nextErrors.message = 'Message is required.'

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSuccess('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSuccess('')
      return
    }

    setErrors({})
    setSuccess('Your inquiry has been sent successfully. I will get back to you soon.')
    setForm(initialForm)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.8rem] border border-white/10 bg-[#101011] p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-stone-200">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-stone-950/60 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:border-[#d8b98a] focus:outline-none"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-2 text-xs text-red-300">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm text-stone-200">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-stone-950/60 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:border-[#d8b98a] focus:outline-none"
            placeholder="Your email"
          />
          {errors.email && <p className="mt-2 text-xs text-red-300">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-stone-200">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-stone-950/60 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:border-[#d8b98a] focus:outline-none"
            placeholder="Your phone"
          />
          {errors.phone && <p className="mt-2 text-xs text-red-300">{errors.phone}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm text-stone-200">Service Required</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-stone-950/60 px-4 py-3 text-sm text-white focus:border-[#d8b98a] focus:outline-none"
          >
            <option value="">Select a service</option>
            <option value="Wedding Photography">Wedding Photography</option>
            <option value="Photo Editing">Photo Editing</option>
            <option value="Album Designing">Album Designing</option>
            <option value="Maternity Photography">Maternity Photography</option>
            <option value="Newborn Photography">Newborn Photography</option>
            <option value="Product Photography">Product Photography</option>
            <option value="Graphic Designing">Graphic Designing</option>
            <option value="Other">Other</option>
          </select>
          {errors.service && <p className="mt-2 text-xs text-red-300">{errors.service}</p>}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-stone-200">Message</label>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or event"
          className="w-full rounded-xl border border-white/10 bg-stone-950/60 px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:border-[#d8b98a] focus:outline-none"
        />
        {errors.message && <p className="mt-2 text-xs text-red-300">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[#d8b98a] px-5 py-3 text-sm font-medium text-stone-950 transition hover:brightness-110"
      >
        Send Inquiry
      </button>

      {success && <p className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">{success}</p>}
    </form>
  )
}
