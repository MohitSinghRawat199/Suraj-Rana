import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import PortfolioCard from '../components/PortfolioCard'
import PortfolioFilter from '../components/PortfolioFilter'
import Lightbox from '../components/Lightbox'
import { portfolioCategories, portfolioData } from '../data/portfolioData'

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return portfolioData
    return portfolioData.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  const currentItem = activeIndex !== null ? filteredItems[activeIndex] : null

  const showPrevious = () => {
    if (activeIndex === null) return
    setActiveIndex((prev) => (prev <= 0 ? filteredItems.length - 1 : prev - 1))
  }

  const showNext = () => {
    if (activeIndex === null) return
    setActiveIndex((prev) => (prev >= filteredItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="Portfolio" title="Selected work" description="A curated collection of portraits, wedding stories, creative editing and premium visual narratives." />

      <PortfolioFilter
        categories={portfolioCategories}
        active={selectedCategory}
        onChange={setSelectedCategory}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <PortfolioCard key={item.id} item={item} onClick={() => setActiveIndex(index)} />
        ))}
      </div>

      <AnimatePresence>
        {currentItem && (
          <Lightbox
            item={currentItem}
            items={filteredItems}
            onClose={() => setActiveIndex(null)}
            onPrevious={showPrevious}
            onNext={showNext}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
