import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: '深蓝智眸',
    subtitle: '支撑海洋观测网建设的云边协同智能质控系统',
    description: '依托大模型与云边协同架构，攻克海洋数据质控、多源融合挑战。主导设计并训练10亿参数海洋观测基础大模型，首创细粒度时间戳Token化技术。成果应用于国家海洋环境预报中心，被鉴定为“国际领先水平”。',
    tags: ['LLaMA大模型架构', '云边协同架构', '时空序列预测', '多模态数据融合'],
    image: '/images/proj_shenlan_1784003975269.png'
  },
  {
    id: 2,
    title: '脑域融通',
    subtitle: '面向异构数据的通用预训练情绪感知系统',
    description: '提出解耦式通用大模型学习范式与统一通道架构（UCS），彻底打通跨设备脑电数据融合壁垒。首创“自监督预训练+空间多变量微调”范式，在三大主流数据集实现突破性 SOTA 性能。',
    tags: ['自监督学习(SSL)', '对比学习', '统一通道架构(UCS)', '动态图注意力网络'],
    image: '/images/proj_naoyu_1784003989001.png'
  },
  {
    id: 3,
    title: '光脉智盾',
    subtitle: '面向多场景边缘智能的 PPG 生理身份认证系统',
    description: '以人体微循环 PPG 信号为内隐特征，构建全生命周期持续内生认证设施。深度融合 Mamba 与 xLSTM 架构，首创多智能体协同认证中枢，完美适配多种国产异构边缘 AI 芯片。',
    tags: ['PPG生理信号处理', 'Mamba/xLSTM架构', '多智能体协同调度', '自监督特征解耦'],
    image: '/images/proj_guangmai_1784004001279.png'
  },
  {
    id: 4,
    title: '数智硫影',
    subtitle: '面向工业湿法脱硫的智能优化控制系统',
    description: '攻克湿法脱硫大惯性滞后痛点，构建实时智能决策全链路控制系统。主导研发 Flueformer 高精度时序预测模型与改进版 SAC 强化学习算法，在真实电厂实机联调中将运行预算大幅缩减 30.8%。',
    tags: ['强化学习(SAC)', '云边协同架构', '时序预测模型', 'Gumbel-Softmax离散化'],
    image: '/images/proj_shuzhi_1784004011872.png'
  },
  {
    id: 5,
    title: '智政云枢',
    subtitle: '基于内外协同的政务大模型与一站式智能体服务平台',
    description: '参与攻关13B参数纪检司法专属政务大模型。创新结合算子融合与投机解码实现近2倍推理加速，构建具备深度记忆与反思机制的 RAG 智能体服务架构，深度赋能核心政务业务流。',
    tags: ['大模型高效微调', '异构算力协同调度', '投机解码加速', 'RAG检索增强'],
    image: '/images/proj_zhizheng_1784004029544.png'
  },
  {
    id: 6,
    title: '智热未来 (创业项目)',
    subtitle: '基于群智能优化与人工智能算法的新一代智慧供热系统',
    description: '作为CTO主导研发新一代智慧供热智能体。建立混合整数线性规划与协同元启发式算法，引入 PPO 深度强化学习赋予系统“未冷先热”预判能力，于国家电投集团项目实现极大的节能减排效益。',
    tags: ['群智能优化(SDS-CA)', '深度强化学习(PPO)', '物联网感知', 'AI Agent'],
    image: '/images/proj_zhire_1784004040613.png'
  },
  {
    id: 7,
    title: '蔚蓝智擎',
    subtitle: '基于大模型决策与多智能体协同的一站式海洋处理平台',
    description: '颠覆传统数据处理范式，打造基于大模型大脑与多智能体（Multi-Agent）协同引擎的一站式平台。主导 FoRA 高效微调策略，引入 MADDPG 算法实现海量高维任务的最优动态自动化调度编排。',
    tags: ['多智能体协同', 'MADDPG强化学习', 'FoRA微调', '分布式调度'],
    image: '/images/proj_weilan_new_1784005059589.png'
  },
  {
    id: 8,
    title: '执天明镜',
    subtitle: '海洋水色遥感辐射定标与大气校正双射可逆基座',
    description: '构建面向海洋水色遥感的定标-校正一体化基座。突破传统物理反演正逆割裂难题，融合多模态动态调制与物理联合损失，提升卫星数据可信度。',
    tags: ['INN 双射可逆网络', 'FT-Transformer', 'MeanShift'],
    image: '/images/proj_zhitian_1784004059900.png'
  },
  {
    id: 9,
    title: '智守护',
    subtitle: '智能行车安全系统',
    description: '研发基于树莓派硬件的汽车故障检测与安全辅助系统。创新性地集成了仪表盘警示灯识别、视野盲区监测以及道路行人行为识别，保障行车双重安全。',
    tags: ['YOLOv12', '树莓派4B+', 'OpenPose'],
    image: '/images/proj_zhishouhu_1784004070505.png'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-cyber-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center">
            <span className="text-cyber-purple neon-text-purple">02.</span> CORE PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group relative overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Image placeholder with cyber overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-purple/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050510] to-transparent z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyber-purple font-mono mb-4 leading-relaxed">{project.subtitle}</p>
                  <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-cyan/50 rounded-xl transition-colors duration-300 pointer-events-none shadow-[inset_0_0_20px_rgba(0,243,255,0)] group-hover:shadow-[inset_0_0_20px_rgba(0,243,255,0.2)]"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
