import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

const fallbackImage = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'

const blogPosts = [
  {
    image: '/Iron-Sharpens-Iron/assets/images/blog/blog-1.jpg',
    category: 'Leadership',
    title: 'The Future of Leadership: 5 Trends Shaping Business in 2026',
    excerpt: 'Explore the key leadership trends that are transforming how organizations approach growth and team management.',
    date: 'March 10, 2026',
    readTime: '5 min read',
  },
  {
    image: '/Iron-Sharpens-Iron/assets/images/blog/blog-2.jpg',
    category: 'Business Strategy',
    title: 'Building Sustainable Partnerships: A Guide for Entrepreneurs',
    excerpt: 'Learn how to forge meaningful business relationships that drive mutual growth and long-term success.',
    date: 'February 28, 2026',
    readTime: '7 min read',
  },
  {
    image: '/Iron-Sharpens-Iron/assets/images/blog/blog-3.jpg',
    category: 'Personal Development',
    title: 'From Good to Great: Elevating Your Professional Journey',
    excerpt: 'Practical strategies to accelerate your career growth and achieve your full potential.',
    date: 'February 15, 2026',
    readTime: '6 min read',
  },
]

export default function BlogPreview() {
  return (
    <section id="insights" className="section-py bg-accent">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
              Insights
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-primary mt-2">
              Thought Leadership
            </h2>
          </div>
          <button className="btn-secondary hidden md:inline-flex items-center gap-2 mt-4 md:mt-0">
            View All Posts <HiArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = fallbackImage
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white font-heading font-semibold text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-primary mb-3 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-body text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="font-body text-gray-400 text-xs">{post.date}</span>
                  <span className="font-body text-gray-400 text-xs">{post.readTime}</span>
                </div>
                
                {/* Read More */}
                <a
                  href="#"
                  className="flex items-center gap-2 text-secondary font-heading font-semibold text-sm mt-4 hover:gap-3 transition-all"
                >
                  Read More <HiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-8 md:hidden"
        >
          <button className="btn-secondary">
            View All Posts <HiArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}