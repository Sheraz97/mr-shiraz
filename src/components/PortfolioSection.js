'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import localFont from 'next/font/local'
import { AnimateCard } from './AnimateCard'

// Load ATF Book font
const atfBook = localFont({
  src: '../../public/ATF_SmLt.otf',
  display: 'swap',
  variable: '--font-atf-book'
})

const CompactProjectPortfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "E-Commerce Suite",
      description: "React web + mobile + Node.js backend",
      tags: ["Full Stack", "React", "Node"],
      image: "/ecommerce-project.jpg",
      accentColor: "#6366F1"
    },
    {
      title: "Health Tracker",
      description: "Cross-platform health app",
      tags: ["Mobile", "React Native"],
      image: "/health-app.jpg",
      accentColor: "#10B981"
    },
    {
      title: "DashboardX",
      description: "Admin dashboard",
      tags: ["Web", "React"],
      image: "/dashboard-project.jpg",
      accentColor: "#3B82F6"
    },
    {
      title: "Social API",
      description: "Backend service",
      tags: ["Backend", "Node.js"],
      image: "/api-project.jpg",
      accentColor: "#8B5CF6"
    }
  ]

  return (
    <div 
      ref={ref}
      className={`${atfBook.variable} font-sans min-h-[100vh] w-[100vw] bg-gray-50 py-[2vh] px-[4vw] overflow-hidden`}
    >
      <div className="max-w-[90vw] mx-auto h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-[3vh]"
        >
          <motion.div 
            className="w-[3vw] h-[0.15vh] bg-blue-600 mx-auto mb-[1vh] rounded-full"
            initial={{ width: '1.5vw' }}
            animate={inView ? { width: '3vw' } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
          />
          <h2 className="text-[2.8vw] font-bold text-gray-900 mb-[0.5vh]">
            My Work
          </h2>
          <p className="text-[1.6vw] text-gray-600 max-w-[50vw] mx-auto">
            Selected projects
          </p>
        </motion.div>

        {/* Projects grid */}
        {/* <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * index, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="group relative w-full h-[32vh]"
            >
              <div className="h-full bg-white rounded-lg shadow-xs overflow-hidden border border-gray-100 transition-all duration-200 group-hover:shadow-sm">
                <div className="h-[12vh] relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-400 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15" />
                </div>
                
                <div className="p-[1.5vw] h-[20vh] flex flex-col">
                  <div className="flex flex-wrap gap-[0.3vw] mb-[0.5vh]">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[1vw] font-medium px-[0.8vw] py-[0.3vh] rounded-full"
                        style={{
                          backgroundColor: `${project.accentColor}15`,
                          color: project.accentColor
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-[1.8vw] font-bold text-gray-900 mb-[0.3vh] leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-[1.3vw] text-gray-600 mb-[0.5vh] flex-grow">
                    {project.description}
                  </p>
                  
                  <motion.button
                    className="self-start text-[1.2vw] font-medium flex items-center mt-auto"
                    style={{ color: project.accentColor }}
                    whileHover={{ x: 2 }}
                  >
                    View
                    <svg className="w-[1.2vw] h-[1.2vw] ml-[0.3vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        <AnimateCard projects={projects} />

        {/* View more */}
        <motion.div
          className="text-center mt-[3vh]"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-[2.5vw] py-[1vh] border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 text-[1.4vw]"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            View All
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default CompactProjectPortfolio