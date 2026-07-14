import { motion } from 'framer-motion'
import { Mail, Phone, Send, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative bg-cyber-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center">
            <span className="text-neon-cyan neon-text-cyan">05.</span> CONTACT ME
          </h2>

          <div className="max-w-xl mx-auto items-center">
            {/* Contact Info */}
            <div className="glass-card p-8 flex flex-col justify-center text-center space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-32 bg-cyber-purple/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 p-32 bg-neon-cyan/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">Get In Touch</h3>
              <p className="text-gray-400 mb-4">期待与您交流前沿 AI 技术与合作机会。</p>
              
              <div className="space-y-6 max-w-sm mx-auto">
                <a href="tel:+8613954950677" className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group/link justify-center">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover/link:border-neon-cyan/50 group-hover/link:shadow-[0_0_10px_#00f3ff] transition-all">
                    <Phone size={20} />
                  </div>
                  <span className="font-mono text-lg tracking-wide">13954950677</span>
                </a>

                <a href="mailto:10431240178@stu.qlu.edu.cn" className="flex items-center gap-4 text-gray-300 hover:text-cyber-purple transition-colors group/link justify-center">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover/link:border-cyber-purple/50 group-hover/link:shadow-[0_0_10px_#b026ff] transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="font-mono text-sm tracking-wide">10431240178@stu.qlu.edu.cn</span>
                </a>

                <a href="https://github.com/AcKingW" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group/link justify-center">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover/link:border-white/50 group-hover/link:shadow-[0_0_10px_#ffffff] transition-all">
                    <Github size={20} />
                  </div>
                  <span className="font-mono text-lg tracking-wide">github.com/AcKingW</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        <p className="font-orbitron">© {new Date().getFullYear()} HAO WANG. All rights reserved.</p>
        <p className="mt-1 text-xs">Built with React, Vite & Tailwind CSS</p>
      </footer>
    </section>
  )
}
