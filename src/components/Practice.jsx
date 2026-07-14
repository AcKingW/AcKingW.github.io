import { motion } from 'framer-motion'
import { Users, Target, Award } from 'lucide-react'

export default function Practice() {
  return (
    <section id="practice" className="py-20 relative bg-cyber-bg border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center">
            <span className="text-neon-cyan neon-text-cyan">#</span> SOCIAL PRACTICE
          </h2>

          <div className="relative glass-card p-6 md:p-8 rounded-xl border-l-4 border-l-neon-cyan hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] transition-all group overflow-hidden">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4 relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors mb-2">
                  智能时代延安红色资源数字化保护、传承与弘扬
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-mono">
                  <div className="flex items-center gap-1 text-cyber-purple">
                    <Users size={16} />
                    <span>“延安情·中国梦”实践服务队</span>
                  </div>
                  <div className="flex items-center gap-1 text-cyber-purple">
                    <Target size={16} />
                    <span>团队负责人 / 全栈工程师 / 通讯员</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base relative z-10">
              <p>
                <strong className="text-neon-cyan font-medium">实地调研与数字采集：</strong> 深入延安考察革命遗址，挖掘红色故事，并使用数字设备对历史材料、老照片进行全方位数字化留存与整合。
              </p>
              <p>
                <strong className="text-neon-cyan font-medium">前沿技术赋能红色文旅：</strong> 结合计算机专业优势，设计 AR 导览系统，利用多传感器融合与 3D 渲染实现实景动态指引，并开发“延安精神”互动体验小游戏。
              </p>
              <p>
                <strong className="text-neon-cyan font-medium">数字化平台搭建：</strong> 运用 HTML5、CSS3 独立编写并搭建了“延安精神”文化数字化网页平台，实现红色文化资源的线上化与便捷检索。
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <h4 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                <Award size={18} className="text-yellow-400" />
                实践荣誉与成果
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></span>
                  国家级实践结业与官方表扬信
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></span>
                  调查报告类国家级优秀作品奖
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></span>
                  山东省优秀实践团队
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan"></span>
                  五四“青春担当好团队”
                </li>
              </ul>
            </div>

            {/* Decorative background logo/glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-neon-cyan/5 rounded-full blur-3xl z-0"></div>
            <Users size={120} className="absolute -right-4 -bottom-4 text-white/5 z-0 transform -rotate-12" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
