'use client'

import { motion } from 'framer-motion'
import { FiCode, FiLayout, FiUsers, FiTrendingUp } from 'react-icons/fi'
import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'

export default function About() {
  const highlights = [
    {
      icon: FiCode,
      title: 'Full-Stack Development',
      description: 'Experienced in building web applications with modern technologies like React, Next.js, and Python Flask.',
    },
    {
      icon: FiLayout,
      title: 'UI/UX Design',
      description: 'Passionate about creating intuitive and visually appealing user interfaces with focus on user experience.',
    },
    {
      icon: FiUsers,
      title: 'Team Collaboration',
      description: 'Strong team player with excellent communication skills and leadership capabilities.',
    },
    {
      icon: FiTrendingUp,
      title: 'Continuous Learning',
      description: 'Always eager to learn new technologies and stay updated with industry trends.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/sandy.png"
                    alt="Sandyka Ardiansyah"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              I&apos;m Sandyka, a passionate{' '}
              <span className="gradient-text">Fullstack Developer</span>
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                As an Informatics student at Universitas Negeri Surabaya, I am an enthusiastic and active individual with a strong interest in UI/UX design and front-end development. Known for creativity and effective team collaboration.
              </p>
              <p>
                Beyond technical skills, I excel in leadership and teamwork - essential abilities that support me in leading initiatives, communicating effectively, and adapting in dynamic professional environments.
              </p>
              <p>
                With a high commitment to growth and innovation, I&apos;m always ready to face new challenges that drive both personal and career development.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h4 className="text-3xl font-bold text-primary-500">3.69</h4>
                <p className="text-gray-600 dark:text-gray-400">GPA</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h4 className="text-3xl font-bold text-primary-500">10+</h4>
                <p className="text-gray-600 dark:text-gray-400">Projects</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <h4 className="text-3xl font-bold text-primary-500">2+</h4>
                <p className="text-gray-600 dark:text-gray-400">Years Exp</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4"
              >
                <item.icon className="text-primary-500" size={24} />
              </motion.div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}