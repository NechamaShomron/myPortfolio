import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react'

const Experience: React.FC = () => {
  const experience = {
    company: "Kiloma Advanced Solutions, Ministry of Defense",
    position: "Full Stack Developer",
    duration: "April 2022 — January 2024",
    location: "Tel Aviv, Israel",
    achievements: [
      "Led development of multiple applications from requirements and design through coding, deployment, and support",
      "Built front-end interfaces with React, Next.js, and Angular; developed RESTful APIs with .NET, Node.js, and Express.js",
      "Designed and managed SQL and MongoDB databases, improving performance and reliability",
      "Oversaw server deployments, ensuring scalability and security",
      "Collaborated directly with stakeholders while independently delivering full solutions",
      "Resolved complex technical issues, strengthening system stability"
    ]
  }

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in full-stack development, delivering comprehensive solutions 
            for complex business requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {experience.position}
                  </h3>
                  <div className="flex items-center text-primary-600 font-semibold mb-2">
                    <Briefcase className="w-5 h-5 mr-2" />
                    {experience.company}
                  </div>
                </div>
                <div className="flex flex-col md:items-end">
                  <div className="flex items-center text-gray-600 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {experience.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">
                Key Achievements & Responsibilities
              </h4>
              <div className="space-y-4">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies used */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Technologies & Tools Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'Next.js', 'Angular', 'Node.js', 'Express.js', 
                  '.NET', 'C#', 'SQL', 'MongoDB', 'TypeScript', 'JavaScript',
                  'HTML/CSS', 'Git'
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
