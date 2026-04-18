import { motion } from 'framer-motion'
import { HiCalendar, HiLocationMarker } from 'react-icons/hi'

const fallbackImage = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'

const events = [
  {
    image: '/assets/images/portfolio/event-1.jpg',
    title: 'Iron Sharpens Iron 2026',
    date: 'March 15, 2026',
    location: 'Sandton, Johannesburg',
    category: 'Flagship Event',
  },
  {
    image: '/assets/images/portfolio/event-2.jpg',
    title: 'Leadership Summit 2026',
    date: 'February 8, 2026',
    location: 'Cape Town',
    category: 'Conference',
  },
  {
    image: '/assets/images/portfolio/event-3.jpg',
    title: 'CEO Masterclass Series',
    date: 'January 20, 2026',
    location: 'Virtual / Hybrid',
    category: 'Workshop',
  },
  {
    image: '/assets/images/portfolio/event-4.jpg',
    title: 'Business Networking Gala',
    date: 'December 10, 2025',
    location: 'Durban',
    category: 'Networking',
  },
]

export default function Portfolio() {
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

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = fallbackImage
                  }}
                />
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