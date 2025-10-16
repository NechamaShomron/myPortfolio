import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Code, Database, Globe } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100">
      <div className="container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4"
          >
            Hi, I'm <span className="gradient-text">Nechama</span>
          </motion.h2>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Full Stack{' '}
            <span className="gradient-text">Developer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about building innovative, reliable applications. 
            Experienced in delivering end-to-end solutions from requirements 
            to deployment with a focus on clean design and problem-solving.
          </motion.p>

          {/* Tech icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center space-x-8 mb-12"
          >
            <div className="flex items-center space-x-2 text-gray-600">
              <Code className="w-6 h-6 text-primary-600" />
              <span className="font-medium">Frontend</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Database className="w-6 h-6 text-primary-600" />
              <span className="font-medium">Backend</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Globe className="w-6 h-6 text-primary-600" />
              <span className="font-medium">Full Stack</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#projects"
              className="btn-primary text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn-secondary text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex justify-center"
          >
            <button
              onClick={scrollToNext}
              className="animate-bounce-slow text-gray-400 hover:text-primary-600 transition-colors duration-200"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
