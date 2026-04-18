import { motion } from 'framer-motion'
import { HiUserGroup, HiChartBar, HiAcademicCap, HiUserCircle } from 'react-icons/hi'

const services = [
  {
    icon: HiUserGroup,
    title: 'Leadership Development',
    description: 'Transform your leadership capabilities through our comprehensive programs designed for emerging and established leaders.',
    features: ['Executive Coaching', 'Leadership Workshops', 'Team Leadership', 'Strategic Thinking'],
  },
  {
    icon: HiChartBar,
    title: 'Business Coaching & Strategy',
    description: 'Navigate business challenges with expert guidance to develop winning strategies and sustainable growth plans.',
    features: ['Business Strategy', 'Growth Planning', 'Market Analysis', 'Financial Planning'],
  },
  {
    icon: HiAcademicCap,
    title: 'Corporate Training',
    description: 'Elevate your workforce with tailored training solutions that build critical skills and drive organizational excellence.',
    features: ['Custom Workshops', 'Skill Development', 'Management Training', 'Professional Development'],
  },
  {
    icon: HiUserCircle,
    title: 'Team Building & Facilitation',
    description: 'Forge high-performing teams through engaging facilitation that builds trust, collaboration, and shared vision.',
    features: ['Team Retreats', 'Facilitation', 'Conflict Resolution', 'Collaboration Tools'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-py bg-white">
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
            Our Services
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mt-2">
            Comprehensive Solutions for Growth
          </h2>
          <p className="font-body text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            We offer tailored programs designed to unlock your potential and drive measurable results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-accent p-8 rounded-lg shadow-md card-hover border border-transparent hover:border-secondary hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl text-primary mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-body text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-body text-sm text-gray-500 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}