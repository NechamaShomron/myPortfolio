import React from 'react'
import { motion } from 'framer-motion'
import { User, Target, Lightbulb, Heart } from 'lucide-react'

const About: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "End-to-End Solutions",
      description: "From requirements and architecture to development, deployment, and maintenance"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary-600" />,
      title: "Problem Solving",
      description: "Passionate about tackling complex technical challenges and finding innovative solutions"
    },
    {
      icon: <Heart className="w-8 h-8 text-primary-600" />,
      title: "Clean Design",
      description: "Focus on creating intuitive, user-friendly interfaces with attention to detail"
    },
    {
      icon: <User className="w-8 h-8 text-primary-600" />,
      title: "Continuous Learning",
      description: "Always staying updated with latest technologies and best practices"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Full-stack developer dedicated to building robust and user-friendly applications. Experienced in managing the full software lifecycle — from planning and architecture to development, deployment, and maintenance — with a focus on clean code, practical problem-solving, and continuous improvement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What I Bring to Your Team
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I combine technical expertise with strong communication skills to deliver 
              solutions that not only meet requirements but exceed expectations. My experience 
              spans the entire development lifecycle, from initial concept to production 
              deployment and ongoing maintenance. I thrive in collaborative environments 
              while also being capable of working independently to deliver complete solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
