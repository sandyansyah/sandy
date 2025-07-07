'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi'
import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'

export default function Projects() {
  const projects = [
    {
      title: 'Recipe AI App with Web3 Integration',
      period: 'Mar 2025 - Jun 2025',
      description: 'AI-powered recipe recommendation system with Web3 authentication and encrypted community chat',
      technologies: ['Python', 'Flask', 'NLTK', 'scikit-learn', 'Web3.js', 'Solana Web3', 'AES-256'],
      features: [
        'Created AI recommendation system using NLP and TF-IDF vectorization',
        'Integrated multi-chain Web3 authentication (Ethereum & Solana)',
        'Implemented encrypted chat system using CryptSan (AES-256-CBC)',
        'Features: ingredient parsing, cosine similarity matching, wallet analytics',
      ],
      github: 'https://github.com/sandyansyah/recipe-app',
      demo: '#',
      image: '/project-recipe-ai.png',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'PT. Sandyka - Konsultan Manajemen Pembangunan',
      period: 'Jan 2025 - Present',
      description: 'Professional portfolio website with integrated consultation system for construction management consultancy',
      technologies: ['Next.js', 'Django', 'TailwindCSS', 'Django REST Framework', 'PostgreSQL', 'TypeScript'],
      features: [
        'Built full-stack application with Next.js frontend and Django REST backend',
        'Created responsive design with SEO optimization',
        'Implemented real-time consultation form with client & server validation',
        'Features: portfolio showcase, admin dashboard, team management, services display',
      ],
      github: 'https://github.com/sandyansyah/pt-sandyka',
      demo: 'https://konsultasi.sandykaa.com',
      image: '/project-pt-sandyka.png',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'BookSpace - Co-working Space Reservation',
      period: 'Sep 2024 - Dec 2024',
      description: 'Comprehensive booking platform for co-working spaces with real-time availability',
      technologies: ['Python 3.13', 'Flask 3.0+', 'SQLAlchemy', 'Bootstrap 5.3', 'Chart.js'],
      features: [
        'Built comprehensive booking platform with real-time availability checking',
        'Created admin dashboard with data visualization using Chart.js',
        'Features: user reviews & ratings, booking management, space search',
      ],
      github: 'https://github.com/sandy/booking',
      demo: '#',
      image: '/project-bookspace.png',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'CinemaTicket - Online Movie Ticket Booking',
      period: 'Mar 2024 - May 2024',
      description: 'Complete cinema ticket booking platform with interactive seat selection',
      technologies: ['Python', 'Flask', 'SQLAlchemy', 'Bootstrap 5', 'SQLite', 'JavaScript'],
      features: [
        'Developed complete ticket booking platform with interactive seat selection',
        'Implemented user authentication with role-based access control',
        'Built admin dashboard for managing movies, schedules, and analytics',
        'Features: movie search, seat reservation, e-ticket generation',
      ],
      github: 'https://github.com/sandyansyah/cinematicket',
      demo: '#',
      image: '/project-cinematicket.png',
      color: 'from-red-500 to-orange-500',
    },
    {
      title: 'E-commerce Website',
      period: 'Jan 2024 - Feb 2024',
      description: 'Modern e-commerce platform with complete shopping cart and order management system',
      technologies: ['Flask', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Flask-Login', 'Flask-WTF'],
      features: [
        'Built user registration & authentication system with Flask-Login',
        'Created product catalog with categories and shopping cart functionality',
        'Implemented order management system with admin dashboard',
        'Features: responsive design, secure authentication, inventory management',
      ],
      github: 'https://github.com/sandyansyah/ecommerce-flask',
      demo: '#',
      image: '/project-ecommerce.png',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Featured Projects" subtitle="Showcasing my best work" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FiCode className="text-white text-4xl" />
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {project.period}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {project.features.slice(0, 2).map((feature, i) => (
                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    <FiGithub />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                  >
                    <FiExternalLink />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}