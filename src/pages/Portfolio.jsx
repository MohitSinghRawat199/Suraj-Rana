import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import PortfolioCard from '../components/PortfolioCard'
import PortfolioFilter from '../components/PortfolioFilter'
import Lightbox from '../components/Lightbox'
import CaseStudyCard from '../components/CaseStudyCard'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import { caseStudies, portfolioCategories, portfolioData } from '../data/portfolioData'
import ProfileImage from '../assets/Suraj.jpeg'

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

      <PortfolioFilter categories={portfolioCategories} active={selectedCategory} onChange={(category) => {
        setSelectedCategory(category)
        setActiveIndex(null)
      }} />

      <div className="portfolio-masonry grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} onClick={() => setActiveIndex(index)} />
          ))}
        </AnimatePresence>
      </div>

      <section className="mt-24" aria-labelledby="case-studies-heading">
        <SectionTitle id="case-studies-heading" eyebrow="Selected stories" title="Photography case studies" description="The story, photographs, and finishing details behind selected projects." />
        <div className="grid gap-7 lg:grid-cols-2">
          {caseStudies.map((project) => <CaseStudyCard key={project.id} project={project} />)}
        </div>
      </section>

      <section className="mt-24" aria-labelledby="editing-heading">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle id="editing-heading" eyebrow="Editing" title="A closer look at the finish" description="Move the divider to compare the original photograph with a subtle preview treatment." />
            <p className="-mt-6 text-sm leading-7 text-stone-400">The preview uses an existing site portrait with a visual treatment to demonstrate the control. Replace the two image sources with a matched original and finished edit to show a real retouching example.</p>
          </div>
          <BeforeAfterSlider originalImage={ProfileImage} editedImage={ProfileImage} title="Profile portrait sample" />
        </div>
      </section>

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
