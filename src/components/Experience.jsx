import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    role: '算法工程师 (实习)',
    company: '国家超级计算济南中心',
    date: '2025.07 - 至今',
    location: '济南',
    description: '参与科教产融合试点工程重大创新专项“端边云架构的海洋智能感知与信息处理关键技术”项目，设计研发海洋时间序列通用大模型；参与国家自然科学基金面上项目，提出并实现 PPG 与 EEG 轻量化识别框架并落地于可穿戴设备；参与科技部重点基础研究计划项目，构建支持异构数据对齐的统一通道模式（UCS），攻克多模态跨域泛化难题；参与山东省重大科技创新工程“多源大气污染物智能控制”，首创解耦时序预测模型并提出改进 SAC 强化学习算法构建优化控制智能体等。'
  },
  {
    id: 2,
    role: '联合创始人 / 首席技术官 (CTO)',
    company: '灵理电子信息技术（聊城）有限责任公司',
    date: '2023.11 - 2024.08',
    location: '聊城',
    description: '主导“智热未来——新一代智慧供热系统”从实验室走向商业化的全生命周期。带领团队将群智能与 AI 算法进行工程化重构，打通从算法预研、代码实现到现场联调的完整交付链路。产品落地于国家电投聊城热力站项目，显著降低运行能耗，成功推动产学研成果商业化闭环。'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-cyber-dark border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center">
            <span className="text-neon-pink neon-text-pink">#</span> INTERNSHIP & EXPERIENCE
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative glass-card p-6 md:p-8 rounded-xl border-l-4 border-l-neon-pink hover:shadow-[0_0_20px_rgba(255,0,255,0.15)] transition-all group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-cyber-purple font-medium">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start md:items-end gap-2 text-sm text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-neon-cyan" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-neon-cyan" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
                
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-pink/5 rounded-full blur-3xl -z-10"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
