import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Particles, { ParticlesProvider } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { ChevronDown } from 'lucide-react'

const particlesInit = async (engine) => {
  await loadSlim(engine)
}

export default function Hero() {
  const [text, setText] = useState('')
  const skills = ["大模型架构与微调", "强化学习与智能决策", "多智能体协同", "复杂时空数据挖掘", "复合型 AI 人才"]
  const [skillIndex, setSkillIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const currentSkill = skills[skillIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentSkill.substring(0, text.length + 1))
        if (text === currentSkill) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setText(currentSkill.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setSkillIndex((prev) => (prev + 1) % skills.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, skillIndex])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Particles Background */}
      <ParticlesProvider init={particlesInit}>
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
              },
              modes: {
                grab: { distance: 150, links: { opacity: 0.5 } },
              },
            },
            particles: {
              color: { value: "#00f3ff" },
              links: {
                color: "#b026ff",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: { default: "bounce" },
              },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </ParticlesProvider>

      {/* Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative mb-8 group"
        >
          {/* Cyberpunk Glow Effect */}
          <div className="absolute inset-0 bg-neon-cyan/30 rounded-full blur-xl group-hover:bg-cyber-purple/40 transition-colors duration-500"></div>
          {/* Avatar Container */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-neon-cyan/50 p-1 overflow-hidden backdrop-blur-sm group-hover:border-cyber-purple transition-colors duration-500 shadow-[0_0_20px_rgba(0,243,255,0.3)]">
            <img 
              src="/images/avatar6.jpg" 
              alt="Hao Wang Avatar" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-2 -right-2 bg-cyber-bg border border-neon-cyan text-neon-cyan text-xs font-orbitron px-2 py-1 rounded">
            LEVEL_99
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-cyber-purple font-orbitron tracking-widest uppercase mb-4 text-sm md:text-base font-bold neon-text-purple"
        >
          探索下一代 AI Agent 与智能决策的极致边界
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-orbitron"
        >
          Hello, I'm <span className="text-neon-cyan neon-text-cyan">Hao Wang</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="h-8 md:h-12 text-xl md:text-3xl text-gray-300 flex items-center justify-center"
        >
          <span>I specialize in </span>
          <span className="ml-2 font-bold text-white border-r-2 border-neon-cyan pr-1 animate-pulse">
            {text}
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-neon-cyan animate-bounce cursor-pointer z-10"
      >
        <ChevronDown size={32} className="neon-text-cyan" />
      </motion.a>
    </section>
  )
}
