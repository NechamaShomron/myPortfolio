import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Database, Globe, Calendar } from 'lucide-react'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Approval & Workflow Management System",
      description: "Enhanced a multi-step approval workflow system with new configurable data types, dynamic approval stations, and advanced validation rules, alongside a redesigned UI. Developed and integrated a sidebar module as a standalone React/Node.js app.",
      technologies: ["Angular", "React", "Next.js", "Node.js", "C#", ".NET", "EF", "SQL"],
      company: "Kiloma Advanced Solutions",
      type: "Enterprise Application",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "To Do Bom",
      description: "Built a collaborative task and board management tool with task pinning, overdue tracking, subtasks, tags, and calendar views. Features real-time collaboration and intuitive project management capabilities.",
      technologies: ["React", "Next.js", "Node.js", "SQL"],
      company: "Kiloma Advanced Solutions",
      type: "Collaboration Tool",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Favorite Locations",
      description: "Developed a web app for sharing and rating travel destinations, with reviews and Google Maps integration. Users can discover new places, read reviews, and plan their travels based on community recommendations.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      company: "Personal Project",
      type: "Travel Application",
      icon: <Globe className="w-6 h-6" />
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating full-stack development capabilities 
            and problem-solving skills across different domains.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center text-primary-600 mb-2">
                    {project.icon}
                  </div>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {project.company}
                </p>
              </div>

              {/* Project Description */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Development Approach
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each project follows a systematic approach: understanding requirements, 
              designing architecture, implementing with clean code practices, thorough 
              testing, and seamless deployment. I focus on creating maintainable, 
              scalable solutions that deliver real business value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
