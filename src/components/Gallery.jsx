import { motion } from 'framer-motion'

const photos = [
  { src: '/images/avatar1.png', alt: '半身照' },
  { src: '/images/avatar2.jpg', alt: '工作照' },
  { src: '/images/avatar3.jpg', alt: '全身照' },
  { src: '/images/avatar4.jpg', alt: '生活照 1' },
  { src: '/images/avatar5.jpg', alt: '生活照 2' }
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 relative bg-cyber-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center">
            <span className="text-neon-cyan neon-text-cyan">#</span> LIFE & STYLE
          </h2>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-lg border-2 border-neon-cyan/20 hover:border-neon-cyan/60 transition-colors duration-300 inline-block w-full"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/90 via-cyber-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-mono font-medium tracking-wider px-4 py-1 border border-neon-cyan/50 rounded-full bg-cyber-dark/50 backdrop-blur-sm shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                    {photo.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
