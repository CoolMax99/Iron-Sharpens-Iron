import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { HiCalendar, HiLocationMarker, HiUsers } from 'react-icons/hi'

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration])

  return <span>{count}+</span>
}

export default function IronSharpensIron() {
  return (
    <section id="iron-sharpens-iron" className="section-py bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
              Flagship Program
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-2 mb-6">
              Iron Sharpens <span className="text-secondary">Iron</span>
            </h2>
            <p className="font-body text-gray-300 text-lg mb-6 leading-relaxed">
              Our flagship event platform brings together professionals, entrepreneurs, 
              and thought leaders for a day of intensive learning, networking, and collaboration. 
              It's more than an event—it's a catalyst for transformation.
            </p>
            <p className="font-body text-gray-300 text-lg mb-8 leading-relaxed">
              Participants engage in roundtables, masterclasses, and pitch sessions designed to 
              sharpen skills, exchange ideas, and forge meaningful partnerships that drive 
              business growth.
            </p>

            {/* Event Info */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <HiCalendar className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">Date</p>
                  <p className="font-body text-gray-400 text-sm">Quarterly / As Scheduled</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <HiLocationMarker className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">Location</p>
                  <p className="font-body text-gray-400 text-sm">South Africa / Hybrid</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center p-4 bg-white/5 rounded-lg"
              >
                <div className="stat-number">
                  <Counter end={500} />
                </div>
                <div className="font-body text-gray-400 text-xs mt-1">Leaders</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center p-4 bg-white/5 rounded-lg"
              >
                <div className="stat-number">
                  <Counter end={50} />
                </div>
                <div className="font-body text-gray-400 text-xs mt-1">Partners</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center p-4 bg-white/5 rounded-lg"
              >
                <div className="stat-number">
                  <Counter end={20} />
                </div>
                <div className="font-body text-gray-400 text-xs mt-1">Events</div>
              </motion.div>
            </div>

            {/* CTA */}
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              <button className="btn-primary">Register Interest</button>
            </Link>
          </motion.div>

          {/* Visual / Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                alt="Iron Sharpens Iron Event"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              {/* Overlay badge */}
              <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-lg shadow-xl">
                <HiUsers className="w-8 h-8 text-white" />
                <p className="font-heading font-bold text-white mt-2">Join the Movement</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-secondary/30 rounded-lg -z-0" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/10 rounded-full -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}