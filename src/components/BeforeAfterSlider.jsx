import { useState } from 'react'
import { MoveHorizontal } from 'lucide-react'

export default function BeforeAfterSlider({ originalImage, editedImage, title = 'Retouching preview' }) {
  const [position, setPosition] = useState(50)

  return (
    <div>
      <div className="relative isolate aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-white/10 bg-stone-900 focus-within:ring-2 focus-within:ring-[#d8b98a]/70">
        <img src={originalImage} alt={`${title}, original`} className="absolute inset-0 h-full w-full object-contain" loading="lazy" />
        <img
          src={editedImage}
          alt={`${title}, edited`}
          className="absolute inset-0 h-full w-full object-contain"
          style={{ clipPath: `inset(0 0 0 ${position}%)`, filter: 'saturate(1.12) contrast(1.05) brightness(1.04)' }}
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-white">ORIGINAL</span>
        <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-white">EDITED</span>
        <div className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `${position}%` }}>
          <div className="absolute inset-y-0 w-px -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)]" />
          <div className="absolute left-0 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/70 text-white shadow-lg">
            <MoveHorizontal size={18} />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Compare original and edited versions of ${title}`}
          className="comparison-range absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-3 text-xs leading-5 text-stone-400">Sample preview using the existing profile image. Replace both image sources with a matched original and finished edit.</p>
    </div>
  )
}
