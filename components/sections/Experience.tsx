'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import SectionTitle from '@/components/ui/SectionTitle'

export default function Experience() {
  const experiences = [
    {
      title: 'Fullstack Developer',
      company: 'UD Prima Utama',
      location: 'Gresik, Indonesia',
      period: 'Apr 2024 - Mar 2025',
      type: 'Part Time',
      description: [
        'Developed web-based POS application for internal sales and inventory management',
        'Utilized front-end and back-end technologies to create simple, efficient, and user-friendly cashier system',
        'Created transaction dashboard, financial reports, and product input features with user management',
        'Responsible for debugging, system updates, and staff training for internal usage',
      ],
    },
    {
      title: 'Web Developer',
      company: 'UD Maju Jaya',
      location: 'Gresik, Indonesia',
      period: 'Sep 2023 - Jan 2024',
      type: 'Part Time',
      description: [
        'Responsible for development and maintenance of UD Maju Jaya company profile website',
        'Designed professional and responsive UI using HTML, CSS, and JavaScript',
        'Implemented dynamic content and ensured stable, SEO-friendly website performance',
        'Worked directly with business owner to customize features and design according to business needs',
      ],
    },
    {
      title: 'Apple Foundation Program Batch 2',
      company: 'Apple Developer Academy',
      location: 'Universitas Ciputra, Surabaya',
      period: 'May 2023',
      type: 'Internship',
      description: [
        'Intensive 4-week training program by Apple and Universitas Ciputra',
        'Served as development team member building mobile app prototype using Swift',
        'Applied design thinking, UI/UX development, and presented ideas to Apple mentors',
        'Project concluded with pitching final product to mentor panel',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Work Experience" subtitle="My professional journey" />
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="absolute left-8 w-4 h-4 bg-primary-500 rounded-full hidden md:block transform -translate-x-1/2"
                  style={{ top: '2rem' }}
                >
                  <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping"></div>
                </motion.div>
                
                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="ml-0 md:ml-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary-500 font-semibold">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <FiCalendar />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}