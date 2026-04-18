import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const brandName = "Insimbi Ilola Insimbi"
const slogan = "Iron Sharpens Iron"

function Typewriter({ text, className, delayStart = 0, addPeriod = false }) {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [isComplete, setIsComplete] = useState(false)
  
  useEffect(() => {
    const startDelay = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
          setIsComplete(true)
          setShowCursor(false)
        }
      }, 80)
      return () => clearInterval(interval)
    }, delayStart)
    return () => clearTimeout(startDelay)
  }, [text, delayStart])

  useEffect(() => {
    if (!isComplete) {
      const cursorBlink = setInterval(() => {
        setShowCursor(prev => !prev)
      }, 530)
      return () => clearInterval(cursorBlink)
    }
  }, [isComplete])

  return (
    <span className={className}>
      {displayText}
      {isComplete && addPeriod && <span>.</span>}
      {showCursor && !isComplete && (
        <span className="inline-block w-0.5 h-[0.9em] bg-secondary ml-0.5 align-middle"></span>
      )}
    </span>
  )
}

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          poster="/assets/video/hero-poster.jpg"
        >
          <source src="/assets/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4"
          >
            <Typewriter text={brandName} className="" delayStart={0} addPeriod={true} />
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mb-6"
          >
            <Typewriter 
              text={slogan} 
              className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl text-secondary" 
              delayStart={1500} 
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="font-body text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Empowering Leaders. Transforming Business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <button className="btn-primary">Book a Session</button>
            </Link>
            <Link to="iron-sharpens-iron" smooth={true} duration={500} offset={-70}>
              <button className="btn-secondary">Explore Events</button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth={true} duration={500} offset={-70}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-secondary rounded-full" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}