import { motion } from 'framer-motion'
import { BookOpen, Award, FileText, Code } from 'lucide-react'

const publications = [
  {
    title: 'MARINE-Transformer: A General-purpose Framework for Multivariate Ocean Time Series Analysis',
    venue: 'Neural Networks',
    badge: 'SCI一区 / TOP期刊'
  },
  {
    title: 'From Heterogeneity to Harmony: Universal Pretraining for EEG-Based Emotion Recognition',
    venue: 'DASFAA',
    badge: 'CCF-B'
  },
  {
    title: 'A Dynamic Ensemble and Replaying Model for Online Marine Sensor Data Prediction',
    venue: 'ECML-PKDD',
    badge: 'CCF-B'
  },
  {
    title: 'PhysioKamba: A Lightweight Mamba-KAN Framework for Robust Wearable Biometrics',
    venue: 'ICME',
    badge: 'CCF-B'
  },
  {
    title: 'Ocean-Llama: A Self-supervised Pre-trained Deep Learning Model for Ocean Observation Data',
    venue: 'PRCV',
    badge: 'CCF-C'
  },
  {
    title: 'Flueformer: A Decoupled Deep Learning Model for SO2 Prediction in Industrial Wet Flue Gas Desulfurization',
    venue: 'CSCWD',
    badge: 'CCF-C'
  },
  {
    title: 'Physio-xLSTM: Unraveling Hemodynamic Dynamics via Dual-Domain KAN-xLSTM Networks for Robust PPG Biometrics',
    venue: 'IJCNN',
    badge: 'CCF-C'
  }
]

const patents = [
  '基于遥感条件信息扩散的海洋时空数据插补方法 (授权)',
  '基于生物力学导数与 KAN-xLSTM 的 PPG 识别方法 (授权)',
  '基于稀疏专家混合的海洋异质时序数据自适应预测方法 (实审)',
  '基于强化学习与聚类经验回放的持续时序预测方法 (实审)',
  '一种基于错误感知奖励的工具选择优化系统及方法 (受理)',
  '面向PPG身份识别的可靠知识路由与自适应记忆方法 (受理)'
]

const softwares = [
  '基于大模型的海洋数据智能融合平台',
  '海洋云边协同智能分析平台',
  '多源多模态海洋数据融合智能分析与应用数据产线平台',
  '智能供热平衡系统',
  '个性化需求的旅游路线规划方法研究管理平台',
  '基于TensorFlow深度学习框架的中国传统音乐谱曲系统'
]

export default function Publications() {
  return (
    <section id="publications" className="py-20 relative bg-cyber-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center">
            <span className="text-neon-cyan neon-text-cyan">03.</span> ACADEMIC & IP
          </h2>

          <div className="space-y-6 mb-12">
            <h3 className="text-xl font-bold text-cyber-purple font-orbitron mb-4 flex items-center gap-2">
              <BookOpen size={20} /> 学术论文 (7篇)
            </h3>
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-5 flex flex-col md:flex-row gap-4 items-start md:items-center hover:bg-white/10 transition-colors group relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-cyan/50 group-hover:bg-neon-cyan transition-colors"></div>
                
                <div className="flex-1">
                  <h4 className="text-base font-bold text-gray-200 group-hover:text-white transition-colors leading-snug">
                    {pub.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-400">
                    <span className="font-mono text-neon-cyan">{pub.venue}</span>
                  </div>
                </div>

                <div className="flex-shrink-0 mt-3 md:mt-0">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 group-hover:bg-cyber-purple group-hover:text-white transition-all">
                    <Award size={14} />
                    {pub.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Patents */}
            <div>
              <h3 className="text-xl font-bold text-cyber-purple font-orbitron mb-4 flex items-center gap-2">
                <FileText size={20} /> 发明专利 (6项)
              </h3>
              <div className="space-y-3">
                {patents.map((patent, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-3 text-sm text-gray-300 hover:text-neon-cyan transition-colors border-l-2 border-transparent hover:border-neon-cyan"
                  >
                    • {patent}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Softwares */}
            <div>
              <h3 className="text-xl font-bold text-cyber-purple font-orbitron mb-4 flex items-center gap-2">
                <Code size={20} /> 软件著作权 (6项)
              </h3>
              <div className="space-y-3">
                {softwares.map((sw, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-3 text-sm text-gray-300 hover:text-cyber-purple transition-colors border-l-2 border-transparent hover:border-cyber-purple"
                  >
                    • {sw}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
