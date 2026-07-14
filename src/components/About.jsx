import { motion } from 'framer-motion'

const education = [
  {
    period: '2024.09 - 至今',
    school: '齐鲁工业大学（山东省科学院）',
    major: '计算机技术（硕士）',
    details: '专业成绩：GPA 4.66/5 (2/254) | 国家奖学金',
    roles: '校园职务：计算机科学与技术学部研24-1班团支书、研究生党支部纪检委员',
    lab: '实验室：超算中心大数据团队、海洋动力-物理环境与智能感知全国重点实验室、算力互联网与信息安全教育部重点实验室',
    courses: '课程：高级人工智能及其应用(96)、高级算法设计与应用(95)、机器学习技术(98)、海洋信息智能感知技术(94)等'
  },
  {
    period: '2020.09 - 2024.06',
    school: '聊城大学',
    major: '计算机科学与技术（本科）',
    details: '专业成绩：GPA 3.52/5 (9/85) | 山东省政府奖学金',
    roles: '校园职务：计算机学院本20-1班班长兼副团支书、格创计算机协会理事长',
    lab: '实验室：智能优化与调度团队、山东省“十三五”高校“大数据智能分析与优化控制”重点实验室',
    courses: '课程：程序设计基础C语言(95)、面向对象程序设计C++(100)、国家计算机二级office高级应用(96)、Java与面向对象技术(97)、软件工程(99)、算法分析与设计(96)、Web前端技术(96)、Python程序设计(95)、专业实训(99)等'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-cyber-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center">
            <span className="text-neon-cyan neon-text-cyan">01.</span> ABOUT ME
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Bio & Skills */}
            <div className="space-y-6">
              <div className="glass-card p-8 hover:shadow-[0_0_20px_rgba(176,38,255,0.2)] transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  复合型算法人才 <span className="text-cyber-purple">@AI</span>
                </h3>
                <p className="text-gray-300 leading-relaxed space-y-4">
                  具备极强学术攻坚能力与完整 AI 商业化落地经验。不仅精通大模型底层架构，更在复杂动态系统中自主落地过深度强化学习智能体。
                  <br /><br />
                  拒绝纸上谈兵，具备将复杂前沿算法转化为实际商业价值的全栈工程化思维。热衷于跨界技术创新，致力于探索下一代 AI Agent 与智能决策体系。
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['LLM', 'DRL', 'Multi-Agent', '时空预测', 'Mamba/xLSTM'].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-mono border border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills Specialties */}
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-4 text-white font-orbitron">技能特长 (SKILLS & SPECIALTIES)</h3>
                <div className="space-y-4 text-sm text-gray-300">
                  <p><strong className="text-neon-cyan">研究方向：</strong>人工智能、多源时间序列分析、复杂时空数据挖掘、复杂系统建模与智能调控、大模型与智能体的前沿应用。</p>
                  <p><strong className="text-neon-cyan">开发实践：</strong>具备从论文阅读、算法实现到模型复现与性能验证的完整能力，能独立完成模型训练、性能优化及部署上线全流程。</p>
                  <p><strong className="text-neon-cyan">科研能力：</strong>担任国际学术会议ICME、SMC 审稿人；熟悉国家自然科学基金、省重大科技创新工程等课题的申请书撰写。</p>
                  <p><strong className="text-neon-cyan">数字媒体：</strong>熟练使用Word、Excel、PowerPoint 办公三件套、Photoshop 图像设计、Premiere视频剪辑等制作技能。</p>
                  <p><strong className="text-neon-cyan">沟通表达：</strong>拥有出色的公众表达能力，作为项目唯一答辩人在数十项国家级学科竞赛路演中屡获佳绩，得到评委老师一致好评。</p>
                  <p><strong className="text-neon-cyan">运营策划：</strong>担任格创计算机协会理事长积累了百人团队统筹经验，具备极强的资源外联、跨部门协调与技术活动落地执行能力。</p>
                  <p><strong className="text-neon-cyan">国际交流：</strong>具备出色的中英文双语表达与跨文化沟通能力。曾赴韩国济州、葡萄牙波尔图、泰国曼谷及国内上海、福州等地进行个人中稿学术论文的全英文路演汇报，并与来自世界各地的学者、企业赞助商及行业精英开展深度探讨。</p>
                </div>
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="relative border-l-2 border-cyber-purple/30 pl-8 space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-cyber-bg border-2 border-cyber-purple flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-neon-cyan animate-pulse"></div>
                  </div>
                  <div className="glass-card p-5">
                    <span className="text-sm font-mono text-neon-cyan">{edu.period}</span>
                    <h4 className="text-lg font-bold text-white mt-1">{edu.school}</h4>
                    <p className="text-cyber-purple font-medium">{edu.major}</p>
                    <p className="text-neon-cyan/90 text-sm mt-4 font-bold leading-relaxed">{edu.details}</p>
                    <p className="text-gray-200 text-sm mt-3 leading-relaxed"><span className="text-white font-semibold">校园职务：</span>{edu.roles.replace('校园职务：', '')}</p>
                    <p className="text-gray-200 text-sm mt-3 leading-relaxed"><span className="text-white font-semibold">实验室：</span>{edu.lab.replace('实验室：', '')}</p>
                    <p className="text-gray-200 text-sm mt-3 leading-relaxed"><span className="text-white font-semibold">主修课程：</span>{edu.courses.replace('课程：', '')}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
