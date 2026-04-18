import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function GalleryTrack({ images, reverse = false }) {
  const doubledImages = [...images, ...images]
  
  return (
    <div className={`flex ${reverse ? 'gallery-track-reverse' : 'gallery-track'}`}>
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
              className="w-full h-56 md:h-64 lg:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      ))}
    </div>
  )
}

export default function Gallery() {
  const [images, setImages] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif']
    const patterns = [
      (i, ext) => `/Iron-Sharpens-Iron/assets/images/gallery/gallery-${i}.${ext}`,
      (i, ext) => `/Iron-Sharpens-Iron/assets/images/gallery/img-${i}.${ext}`,
      (i, ext) => `/Iron-Sharpens-Iron/assets/images/gallery/${i}.${ext}`,
      (i, ext) => `/Iron-Sharpens-Iron/assets/images/gallery/image-${i}.${ext}`,
    ]
    const foundImages = []

    const checkImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(true)
        img.onerror = () => resolve(false)
        img.src = src
      })
    }

    const findImages = async () => {
      for (const pattern of patterns) {
        for (let i = 1; i <= 20; i++) {
          for (const ext of imageExtensions) {
            const src = pattern(i, ext)
            const exists = await checkImage(src)
            if (exists) {
              foundImages.push(src)
            }
          }
        }
        if (foundImages.length > 0) break
      }
      
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

      <div className="mb-8">
        <GalleryTrack images={images} reverse={false} />
      </div>

      <div>
        <GalleryTrack images={images} reverse={true} />
      </div>
    </section>
  )
}