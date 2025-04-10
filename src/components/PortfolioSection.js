'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import localFont from 'next/font/local'
import { AnimateCard } from './AnimateCard'
import { useState } from 'react'
import ShowProjects from './ViewProjectsModal'

// Load ATF Book font
const atfBook = localFont({
  src: '../../public/ATF_SmLt.otf',
  display: 'swap',
  variable: '--font-atf-book'
})

const CompactProjectPortfolio = () => {
  // const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "E-Commerce Suite",
      description: "React web + mobile + Node.js backend",
      tags: ["Full Stack", "React", "Node"],
      image: "/shiraz-ahmed.jpg",
      accentColor: "#6366F1"
    },
    {
      title: "Health Tracker",
      description: "Cross-platform health app",
      tags: ["Mobile", "React Native"],
      image: "/shiraz-ahmed.jpg",
      accentColor: "#10B981"
    },
    {
      title: "DashboardX",
      description: "Admin dashboard",
      tags: ["Web", "React"],
      image: "/shiraz-ahmed.jpg",
      accentColor: "#3B82F6"
    },
    {
      title: "Social API",
      description: "Backend service",
      tags: ["Backend", "Node.js"],
      image: "/shiraz-ahmed.jpg",
      accentColor: "#8B5CF6"
    }
  ]

  return (
    <div
      ref={ref}
      className={`${atfBook.variable} font-sans min-h-[100vh] w-[100vw] bg-gray-50 py-[2vh] px-[4vw] overflow-hidden`}
    >
      <div className="max-w-[90vw] mx-auto h-full flex flex-col justify-center align-center">
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

        {/* Animated Cards */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: -500,
          marginTop: 40,
        }}>
          <AnimateCard projects={projects} />
        </div>

        {/* View more */}
        <motion.div
          className="text-center mt-90"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center px-[2.5vw] py-[1vh] border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 text-[1.4vw]"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAll(true)}
          >
            View All
          </motion.a>
        </motion.div>
      </div>

      {/* Modal */}
      {/* <ShowProjects showAll={showAll} setShowAll={setShowAll} /> */}
    </div>
  )
}

export default CompactProjectPortfolio