import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import AlbumCard from '../components/AlbumCard'
import Lightbox from '../components/Lightbox'
import { albumsData } from '../data/portfolioData'

export default function AlbumsPage() {
  const [selectedAlbum, setSelectedAlbum] = useState(null)

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Albums" title="Wedding albums designed to last a lifetime." description="Luxury album stories crafted with elegance, emotion and premium presentation." />

      <div className="grid gap-8 lg:grid-cols-2">
        {albumsData.map((album) => (
          <AlbumCard key={album.id} album={album} onClick={() => setSelectedAlbum(album)} />
        ))}
      </div>

      {selectedAlbum && (
        <Lightbox
          item={selectedAlbum}
          items={albumsData}
          onClose={() => setSelectedAlbum(null)}
          onPrevious={() => {
            const currentIndex = albumsData.findIndex((item) => item.id === selectedAlbum.id)
            const nextIndex = currentIndex <= 0 ? albumsData.length - 1 : currentIndex - 1
            setSelectedAlbum(albumsData[nextIndex])
          }}
          onNext={() => {
            const currentIndex = albumsData.findIndex((item) => item.id === selectedAlbum.id)
            const nextIndex = currentIndex >= albumsData.length - 1 ? 0 : currentIndex + 1
            setSelectedAlbum(albumsData[nextIndex])
          }}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-20 rounded-[2rem] border border-stone-200 bg-white p-6 md:p-8"
      >
        <h3 className="text-3xl font-medium text-stone-900">Crafted with storytelling in mind</h3>
        <p className="mt-4 text-base leading-8 text-stone-600">
          Every album is designed to feel personal, tactile and visually refined—giving couples a treasured keepsake that can be revisited for years to come.
        </p>
      </motion.div>
    </div>
  )
}
