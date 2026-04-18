import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: 'Location',
      details: 'South Africa',
    },
    {
      icon: HiMail,
      title: 'Email',
      details: 'hello@insimbi.co.za',
      link: 'mailto:hello@insimbi.co.za',
    },
    {
      icon: HiPhone,
      title: 'Phone',
      details: '+27 (0) 123 456 789',
      link: 'tel:+27123456789',
    },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaXTwitter, href: '#', label: 'X (Twitter)' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ]

  return (
    <section id="contact" className="section-py bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mt-2 mb-6">
              Let's Start a Conversation
            </h2>
            <p className="font-body text-gray-600 text-lg mb-8 leading-relaxed">
              Ready to transform your leadership journey? Reach out to us today and let's 
              explore how we can help you achieve your goals.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-primary">{item.title}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="font-body text-gray-600 hover:text-secondary transition-colors"
                      >
                        {item.details}
                      </a>
                    ) : (
                      <p className="font-body text-gray-600">{item.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-accent p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="font-heading font-semibold text-primary block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="font-heading font-semibold text-primary block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="form-input"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="font-heading font-semibold text-primary block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="form-input resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Status Message */}
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 font-body text-center"
                >
                  Thank you! We'll be in touch soon.
                </motion.p>
              )}
            </form>

            {/* Social Links */}
            <div className="mt-6">
              <p className="font-heading font-semibold text-primary mb-4 text-center">Follow Us</p>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}