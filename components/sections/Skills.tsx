'use client'

import { motion } from 'framer-motion'
import { 
  FiCode, FiDatabase, FiTool, FiUsers,
  FiGitBranch, FiLayout, FiServer, FiSmartphone
} from 'react-icons/fi'
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiFlask, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3,
  SiMysql, SiSqlite, SiGit, SiGithub, SiFigma,
  SiNodedotjs, SiSolidity
} from 'react-icons/si'
import SectionTitle from '@/components/ui/SectionTitle'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiLayout,
      color: 'from-blue-400 to-blue-600',
      skills: [
        { name: 'React.js', icon: SiReact, level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, level: 85 },
        { name: 'TypeScript', icon: SiTypescript, level: 80 },
        { name: 'JavaScript', icon: SiJavascript, level: 95 },
        { name: 'HTML5', icon: SiHtml5, level: 95 },
        { name: 'CSS3', icon: SiCss3, level: 90 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
        { name: 'Three.js', icon: FiCode, level: 70 },
      ],
    },
    {
      title: 'Backend Development',
      icon: FiServer,
      color: 'from-green-400 to-green-600',
      skills: [
        { name: 'Python', icon: SiPython, level: 90 },
        { name: 'Flask', icon: SiFlask, level: 85 },
        { name: 'Node.js', icon: SiNodedotjs, level: 75 },
        { name: 'SQLAlchemy', icon: SiPython, level: 80 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: FiDatabase,
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 85 },
        { name: 'SQLite', icon: SiSqlite, level: 90 },
        { name: 'Git', icon: SiGit, level: 85 },
        { name: 'GitHub', icon: SiGithub, level: 90 },
      ],
    },
    {
      title: 'Web3 & Others',
      icon: FiCode,
      color: 'from-orange-400 to-orange-600',
      skills: [
        { name: 'Web3.js', icon: FiCode, level: 70 },
        { name: 'Solidity', icon: SiSolidity, level: 60 },
        { name: 'Figma', icon: SiFigma, level: 80 },
        { name: 'UI/UX Design', icon: FiLayout, level: 85 },
      ],
    },
  ]

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Leadership', level: 80 },
    { name: 'Time Management', level: 85 },
    { name: 'Adaptability', level: 90 },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Skills & Expertise" subtitle="Technologies I work with" />
        
        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
                  >
                    <skill.icon className="text-2xl text-primary-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{skill.name}</p>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-1">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-primary-400 to-primary-600 h-1.5 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Also Experienced In</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Microsoft Excel', 'Power BI', 'Chart.js', 'NLTK', 'scikit-learn', 'Design Thinking', 'Business Innovation', 'Entrepreneurship'].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}