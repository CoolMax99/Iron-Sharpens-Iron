import { motion } from 'framer-motion'

export default function About() {
  const stats = [
    { number: '500+', label: 'Leaders Empowered' },
    { number: '20+', label: 'Annual Events' },
    { number: '50+', label: 'Corporate Clients' },
    { number: '10+', label: 'Years Experience' },
  ]

  return (
    <section id="about" className="section-py bg-accent">
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
              About Us
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mt-2 mb-6">
              Empowering Professionals & Communities
            </h2>
            <p className="font-body text-gray-600 text-lg mb-6 leading-relaxed">
              At <strong>Insimbi Ilola Insimbi</strong>, we believe that true growth comes from the 
              collision of ideas and the forging of meaningful partnerships. Our mission is to 
              empower professionals, entrepreneurs, and communities through transformative 
              leadership development, mentorship, and capacity-building initiatives.
            </p>
            <p className="font-body text-gray-600 text-lg mb-8 leading-relaxed">
              Inspired by the Zulu proverb "Insimbi Ilola Insimbi" (Iron Sharpens Iron), we create 
              platforms where diverse stakeholders can sharpen their skills, exchange ideas, and 
              forge lasting business relationships that drive economic transformation.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="font-body text-gray-600 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/assets/images/about-team.jpg"
                alt="Team collaboration"
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1552664730-30721e4faa36?w=800&q=80'
                }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-secondary rounded-lg -z-0 opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary rounded-lg -z-0 opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}