import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8 text-primary-600" />,
      skills: [
        { name: "React" },
        { name: "Next.js" },
        { name: "Angular" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
        { name: "Tailwind CSS"}
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-primary-600" />,
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: ".NET" },
        { name: "C#" },
        { name: "RESTful APIs" }
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-8 h-8 text-primary-600" />,
      skills: [
        { name: "SQL" },
        { name: "MongoDB" },
        { name: "Entity Framework" },
        { name: "Database Design" }
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: <Globe className="w-8 h-8 text-primary-600" />,
      skills: [
        { name: "Git" },
        { name: "Server Management" }
      ]
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-8 h-8 text-primary-600" />,
      skills: [
        { name: "UI/UX Design" },
        { name: "Figma" },
        { name: "User Research" },
        { name: "Prototyping" }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and expertise across 
            different areas of software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Additional Skills & Tools
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Agile/Scrum Methodologies",
                "Code Review & Testing",
                "Performance Optimization",
                "Security Best Practices",
                "Project Management",
                "Team Collaboration",
                "Documentation",
                "Version Control"
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="text-gray-700 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
