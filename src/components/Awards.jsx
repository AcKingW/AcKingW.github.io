import { motion } from 'framer-motion'
import { Trophy, Medal, Star, Award as AwardIcon } from 'lucide-react'

const awardsData = [
  {
    category: '奖学金',
    icon: <Star className="text-yellow-400" size={24} />,
    items: [
      '国家奖学金',
      '山东省政府奖学金',
      '科研与技能奖学金',
      '多次获得一等奖学金'
    ]
  },
  {
    category: '国家级竞赛 (10余项)',
    icon: <Trophy className="text-neon-cyan" size={24} />,
    items: [
      '中国机器人及人工智能大赛国家级一等奖',
      '全国大学生数学竞赛国家级一等奖',
      '第十九届 iCAN 大学生创新创业大赛国家级二等奖',
      '第七届“华为杯”中国研究生人工智能创新大赛国家级三等奖',
      '全国商业精英挑战赛国家级三等奖',
      '第五届“传智杯”全国大学生 IT 技能大赛国家级三等奖',
      '美国大学生数学建模竞赛(MCM/ICM)国际级三等奖',
      '“华为杯”中国研究生数学建模竞赛国家级优秀奖',
      '主持大学生创新创业训练计划项目 1 项（已结题）'
    ]
  },
  {
    category: '省部级竞赛 (60余项)',
    icon: <Medal className="text-neon-pink" size={24} />,
    items: [
      '第十五届“挑战杯”大学生创业计划竞赛省级二等奖',
      '第三届大学生职业规划大赛省级铜奖',
      '山东省第十届大学生科技创新大赛省级二等奖',
      '全国大学生数学建模竞赛省级一等奖',
      '聊城市网络安全和信息化职业技能大赛一等奖（全市第一名）',
      '第二十届中国研究生电子设计竞赛华北赛区二等奖',
      '山东省大学生移动互联创新创业大赛省级一等奖',
      '山东省物联网创造力大赛省级一等奖'
    ]
  },
  {
    category: '荣誉称号',
    icon: <AwardIcon className="text-cyber-purple" size={24} />,
    items: [
      '山东省优秀毕业生',
      '齐鲁工业大学开学典礼在校硕士生发言代表',
      '齐鲁工业大学第二次党员代表大会学生党员代表',
      '校级优秀共青团干部 / 优秀学生干部 / 优秀共青团员',
      '聊城大学第四届科技创新之星 / 2022年度创新创业之星'
    ]
  }
]

export default function Awards() {
  return (
    <section id="awards" className="py-20 relative bg-cyber-bg border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-12 text-center">
            <span className="text-cyber-purple neon-text-purple">04.</span> HONORS & AWARDS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awardsData.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-xl border border-white/10 hover:border-cyber-purple/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white tracking-wider">{category.category}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm md:text-base">
                      <span className="text-cyber-purple mt-1">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
