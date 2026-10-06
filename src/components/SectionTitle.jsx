export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const classes = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`mb-12 max-w-2xl ${classes}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b98a]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-stone-300 md:text-lg">{description}</p>}
    </div>
  )
}
