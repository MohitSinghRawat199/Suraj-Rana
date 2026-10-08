import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  date: '',
  message: '',
}

const contactEmail = 'surajrana557899@gmail.com'

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
    const subject = `Portfolio inquiry: ${form.service}`
    const body = [
      'NEW PORTFOLIO INQUIRY',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Event type: ${form.service}`,
      `Event date: ${form.date || 'Not provided'}`,
      '',
      'Message:',
      form.message,
    ].join('\n')
    setSuccess('Your email app will open with the inquiry details ready to send.')
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.8rem] border border-stone-200 bg-white p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-stone-700">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:border-[#9b7445] focus:outline-none"
            placeholder="Your name"
          />
          {errors.name && <p className="mt-2 text-xs text-red-300">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm text-stone-700">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:border-[#9b7445] focus:outline-none"
            placeholder="Your email"
          />
          {errors.email && <p className="mt-2 text-xs text-red-300">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-stone-700">Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:border-[#9b7445] focus:outline-none"
            placeholder="Your phone"
          />
          {errors.phone && <p className="mt-2 text-xs text-red-300">{errors.phone}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm text-stone-700">Event Type</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 focus:border-[#9b7445] focus:outline-none"
          >
            <option value="">Select an event or project type</option>
            <option value="Wedding Photography">Wedding Photography</option>
            <option value="Portrait Photography">Portrait Photography</option>
            <option value="Pre-Wedding Photography">Pre-Wedding Photography</option>
            <option value="Event Photography">Event Photography</option>
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
        <label className="mb-2 block text-sm text-stone-700">Event Date</label>
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 focus:border-[#9b7445] focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-stone-700">Message</label>
        <textarea
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or event"
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:border-[#9b7445] focus:outline-none"
        />
        {errors.message && <p className="mt-2 text-xs text-red-300">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-[#9b7445] px-5 py-3 text-sm font-medium text-stone-950 transition hover:brightness-110"
      >
        Send Inquiry
      </button>

      {success && <p className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">{success}</p>}
    </form>
  )
}
