import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

function GalleryTrackDesktop({ images, reverse = false }) {
  const doubledImages = [...images, ...images]
  const duration = Math.max(images.length * 4, 10)

  return (
    <div
      className={`flex ${reverse ? 'gallery-track-reverse' : 'gallery-track'}`}
      style={{ animationDuration: `${duration}s` }}
    >
      {doubledImages.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="flex-shrink-0 w-72 md:w-80 lg:w-96 mx-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image}
              alt={`Gallery ${index}`}
              className="w-full h-56 md:h-64 lg:h-72 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      ))}
    </div>
  )
}

function GalleryTrackMobile({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex}`}
              className="w-full h-64 object-cover object-top"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-6 h-2.5 bg-secondary'
                : 'w-2.5 h-2.5 bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [images, setImages] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const knownImages = [
      '/Iron-Sharpens-Iron/assets/images/portfolio/M5.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/M6.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/event-2.jpg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/event-1.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/M3.jpeg',
      '/Iron-Sharpens-Iron/assets/images/portfolio/M4.jpeg',
    ]

    const checkImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        img.src = src
      })
    }

    const findImages = async () => {
      const results = await Promise.all(knownImages.map(src => checkImage(src)))
      const foundImages = knownImages.filter((_, i) => results[i])
      setImages(foundImages)
      setLoaded(true)
    }

    findImages()
  }, [])

  if (!loaded || images.length === 0) {
    return null
  }

  return (
    <section id="gallery" className="section-py bg-primary overflow-hidden">
      <div className="container-custom mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
            Our Community
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-2">
            Moments in Motion
          </h2>
          <p className="font-body text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Experience the energy and transformation through our community snapshots.
          </p>
        </motion.div>
      </div>

      {isMobile ? (
        <div className="px-4">
          <GalleryTrackMobile images={images} />
        </div>
      ) : (
        <>
          <div className="mb-8">
            <GalleryTrackDesktop images={images} reverse={false} />
          </div>
          <div>
            <GalleryTrackDesktop images={images} reverse={true} />
          </div>
        </>
      )}
    </section>
  )
}
