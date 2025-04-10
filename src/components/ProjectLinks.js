'use client'

import { motion } from 'framer-motion';
import { FaGooglePlay, FaAppStore, FaLaptop } from 'react-icons/fa';

const ProjectLinks = ({
    webUrl,
    appStoreUrl,
    playStoreUrl,
    className = ''
}) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 10 } }
    }

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className={`flex flex-wrap gap-2 ${className}`}
        >
            {webUrl && (
                <motion.a
                    variants={item}
                    href={webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaLaptop className="text-indigo-500" />
                    Web App
                </motion.a>
            )}

            {appStoreUrl && (
                <motion.a
                    variants={item}
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaAppStore className="text-blue-500" />
                    App Store
                </motion.a>
            )}

            {playStoreUrl && (
                <motion.a
                    variants={item}
                    href={playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaGooglePlay className="text-green-500" />
                    Play Store
                </motion.a>
            )}
        </motion.div>
    )
}

export default ProjectLinks