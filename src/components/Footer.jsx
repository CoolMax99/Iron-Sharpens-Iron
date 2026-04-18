import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiArrowRight } from 'react-icons/hi'

const footerLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Iron Sharpens Iron', to: 'iron-sharpens-iron' },
  { name: 'Portfolio', to: 'portfolio' },
  { name: 'Gallery', to: 'gallery' },
  { name: 'Contact', to: 'contact' },
  { name: 'Insights', to: 'insights' },
]

const socialLinks = [
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'X (Twitter)' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container-custom">
        {/* Footer Top */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              <span className="text-secondary">ISI</span>
            </h3>
            <p className="font-body text-gray-400 text-sm mb-6 leading-relaxed">
              Empowering professionals and entrepreneurs through leadership coaching, 
              corporate training, and transformative event platforms.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="font-body text-gray-400 text-sm cursor-pointer hover:text-secondary transition-colors duration-300 flex items-center gap-2"
                  >
                    <HiArrowRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="font-body text-gray-400 text-sm hover:text-secondary transition-colors duration-300 flex items-center gap-2">
                  <HiArrowRight className="w-3 h-3" />
                  Leadership Development
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-gray-400 text-sm hover:text-secondary transition-colors duration-300 flex items-center gap-2">
                  <HiArrowRight className="w-3 h-3" />
                  Business Coaching
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-gray-400 text-sm hover:text-secondary transition-colors duration-300 flex items-center gap-2">
                  <HiArrowRight className="w-3 h-3" />
                  Corporate Training
                </a>
              </li>
              <li>
                <a href="#services" className="font-body text-gray-400 text-sm hover:text-secondary transition-colors duration-300 flex items-center gap-2">
                  <HiArrowRight className="w-3 h-3" />
                  Team Building
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-heading font-bold text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="font-body text-gray-400 text-sm">
                <span className="block text-white mb-1">Email</span>
                <a href="mailto:hello@insimbi.co.za" className="hover:text-secondary transition-colors">
                  hello@insimbi.co.za
                </a>
              </li>
              <li className="font-body text-gray-400 text-sm">
                <span className="block text-white mb-1">Location</span>
                South Africa
              </li>
              <li className="font-body text-gray-400 text-sm">
                <span className="block text-white mb-1">Hours</span>
                Mon - Fri: 8:00 AM - 5:00 PM
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="font-body text-gray-400 text-sm">
              © {new Date().getFullYear()} Insimbi Ilola Insimbi. All rights reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex gap-6">
              <a href="#" className="font-body text-gray-400 text-sm hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-gray-400 text-sm hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-body text-gray-400 text-sm hover:text-secondary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}