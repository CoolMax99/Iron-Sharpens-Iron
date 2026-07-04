import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronLeft, HiChevronRight, HiGlobe } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const sponsors = [
  {
    id: 'age-uphile',
    name: 'Age Uphile Clinicals',
    about: 'A holistic clinic',
    image: '/Iron-Sharpens-Iron/assets/images/portfolio/Sponsor-1.jpeg',
    contact: {
      type: 'whatsapp',
      value: 'https://wa.me/27659156335',
      label: '065 915 6335',
    },
  },
  {
    id: 'african-bank',
    name: 'African Bank',
    about: 'A banking company',
    image: '/Iron-Sharpens-Iron/assets/images/portfolio/Sponsor-3.jpeg',
    contact: {
      type: 'website',
      value: 'https://www.africanbank.co.za',
      label: 'africanbank.co.za',
    },
  },
  {
    id: 'whealth-organic',
    name: 'Whealth Organic',
    about: 'Natural health product company',
    image: '/Iron-Sharpens-Iron/assets/images/portfolio/Sponsor-2.jpg',
    contact: {
      type: 'website',
      value: 'https://www.whealthorganic.co.za',
      label: 'whealthorganic.co.za',
    },
  },
]

export default function Sponsors() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const totalSlides = sponsors.length

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const goNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <section id="sponsors" className="section-py bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
            Trusted By
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mt-2">
            Proud Partners
          </h2>
          <p className="font-body text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Collaborating with organizations that share our vision for growth.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="bg-accent rounded-lg shadow-md card-hover"
              >
                <div className="relative">
                  <div className="relative z-10 overflow-hidden rounded-t-lg">
                    <img
                      src={sponsors[currentIndex].image}
                      alt={sponsors[currentIndex].name}
                      className="w-full h-56 object-contain p-4"
                    />
                  </div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-secondary/30 rounded-lg -z-0" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl text-primary mb-2">
                    {sponsors[currentIndex].name}
                  </h3>
                  <p className="font-body text-gray-600 text-sm mb-4">
                    {sponsors[currentIndex].about}
                  </p>
                  <a
                    href={sponsors[currentIndex].contact.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-body text-sm"
                  >
                    {sponsors[currentIndex].contact.type === 'whatsapp' ? (
                      <FaWhatsapp className="w-5 h-5" />
                    ) : (
                      <HiGlobe className="w-5 h-5" />
                    )}
                    <span>{sponsors[currentIndex].contact.label}</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-accent rounded-lg shadow-md card-hover"
            >
              <div className="relative">
                <div className="relative z-10 overflow-hidden rounded-t-lg">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-56 object-contain p-4"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-secondary/30 rounded-lg -z-0" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-primary mb-2">
                  {sponsor.name}
                </h3>
                <p className="font-body text-gray-600 text-sm mb-4">
                  {sponsor.about}
                </p>
                <a
                  href={sponsor.contact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors font-body text-sm"
                >
                  {sponsor.contact.type === 'whatsapp' ? (
                    <FaWhatsapp className="w-5 h-5" />
                  ) : (
                    <HiGlobe className="w-5 h-5" />
                  )}
                  <span>{sponsor.contact.label}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Footer */}
        <div className="flex items-center justify-center gap-4 mt-10 lg:mt-12">
          <button
            onClick={goPrev}
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 lg:hidden"
            aria-label="Previous sponsor"
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {sponsors.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-secondary w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to sponsor ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 lg:hidden"
            aria-label="Next sponsor"
          >
            <HiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
