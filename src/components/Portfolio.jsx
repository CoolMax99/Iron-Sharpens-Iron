import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiCalendar, HiLocationMarker, HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const fallbackImage = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'

const events = [
  {
    image: '/Iron-Sharpens-Iron/assets/images/portfolio/event-1.jpeg',
    title: 'Black youth and the psychology of money',
    date: '28 June 2025',
    location: 'Moses Mabhida',
    category: 'Youth Event',
    slideshowImages: [
      '/Iron-Sharpens-Iron/assets/images/portfolio/A1.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/A2.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/A3.jpeg',
    ],
  },
  {
    image: '/Iron-Sharpens-Iron/assets/images/portfolio/B0.jpeg',
    title: 'Women in Taxi/Transport Industry',
    date: '31 August 2025',
    location: 'Durban Botanic Gardens',
    category: 'Women Entrepreneurship',
    slideshowImages: [
      '/Iron-Sharpens-Iron/assets/images/portfolio/B0.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/B1.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/B2.jpeg',
    ],
  },
  {
    image: '/Iron-Sharpens-Iron/assets/images/portfolio/C1.jpeg',
    title: 'Leadership & Transformation',
    date: '13 July 2025',
    location: 'The Bond Shed, Durban',
    category: 'Driving growth',
    slideshowImages: [
      '/Iron-Sharpens-Iron/assets/images/portfolio/C1.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/C3.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/Sponsor-3.jpeg',
    ],
  },
]

export default function Portfolio() {
  const [slideIndex, setSlideIndex] = useState(0)
  const [cardIndex, setCardIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const totalCards = events.length

  const goTo = (index) => {
    setDirection(index > cardIndex ? 1 : -1)
    setCardIndex(index)
  }

  const goNext = () => {
    setDirection(1)
    setCardIndex((prev) => (prev + 1) % totalCards)
  }

  const goPrev = () => {
    setDirection(-1)
    setCardIndex((prev) => (prev - 1 + totalCards) % totalCards)
  }

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section id="portfolio" className="section-py bg-accent">
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
            Our Track Record
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mt-2">
            Past Events
          </h2>
          <p className="font-body text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            A glimpse into our transformative events that have brought together leaders from across Africa.
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={cardIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
              >
                {/* Event Image */}
                <div className="relative overflow-hidden">
                  {events[cardIndex].slideshowImages ? (
                    <>
                      <div className="relative w-full h-56">
                        <AnimatePresence>
                          <motion.img
                            key={slideIndex}
                            src={events[cardIndex].slideshowImages[slideIndex]}
                            alt={events[cardIndex].title}
                            className="absolute inset-0 w-full h-full object-contain p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            onError={(e) => { e.target.src = fallbackImage }}
                          />
                        </AnimatePresence>
                      </div>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {events[cardIndex].slideshowImages.map((_, i) => (
                          <button
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              i === slideIndex ? 'bg-secondary' : 'bg-white/50'
                            }`}
                            onClick={() => setSlideIndex(i)}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <img
                      src={events[cardIndex].image}
                      alt={events[cardIndex].title}
                      className="w-full h-56 object-contain p-4"
                      onError={(e) => { e.target.src = fallbackImage }}
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white font-heading font-semibold text-xs px-3 py-1 rounded-full">
                      {events[cardIndex].category}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-primary mb-3">
                    {events[cardIndex].title}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-500">
                      <HiCalendar className="w-4 h-4" />
                      <span className="font-body text-sm">{events[cardIndex].date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <HiLocationMarker className="w-4 h-4" />
                      <span className="font-body text-sm">{events[cardIndex].location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                {event.slideshowImages ? (
                  <>
                    <div className="relative w-full h-56">
                      <AnimatePresence>
                        <motion.img
                          key={slideIndex}
                          src={event.slideshowImages[slideIndex]}
                          alt={event.title}
                          className="absolute inset-0 w-full h-full object-contain p-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          onError={(e) => { e.target.src = fallbackImage }}
                        />
                      </AnimatePresence>
                    </div>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                      {event.slideshowImages.map((_, i) => (
                        <button
                          key={i}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            i === slideIndex ? 'bg-secondary' : 'bg-white/50'
                          }`}
                          onClick={() => setSlideIndex(i)}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-contain p-4"
                    onError={(e) => {
                      e.target.src = fallbackImage
                    }}
                  />
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white font-heading font-semibold text-xs px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                  {event.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-500">
                    <HiCalendar className="w-4 h-4" />
                    <span className="font-body text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <HiLocationMarker className="w-4 h-4" />
                    <span className="font-body text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Footer - Mobile Only */}
        <div className="flex items-center justify-center gap-4 mt-10 lg:hidden">
          <button
            onClick={goPrev}
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Previous event"
          >
            <HiChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === cardIndex ? 'bg-secondary w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Next event"
          >
            <HiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">View All Events</button>
        </motion.div>
      </div>
    </section>
  )
}