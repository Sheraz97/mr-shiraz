'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const PersonalIntroduction = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    })

    return (
        <div
            className="relative min-h-screen w-full overflow-hidden bg-white flex items-center justify-center p-8"
            ref={ref}
        >
            {/* Main content container */}
            <div className="relative z-10 max-w-6xl w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                {/* Text content */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Animated greeting */}
                    <motion.div
                        className="flex items-center gap-4 mb-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <motion.div
                            className="h-1 w-12 bg-blue-600 rounded-full"
                            initial={{ width: 48 }}
                            animate={inView ? { width: 80 } : {}}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        />
                        <motion.h2
                            className="text-blue-600 font-medium text-lg md:text-xl"
                        >
                            Hello, I'm
                        </motion.h2>
                    </motion.div>

                    {/* Name with animation */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Shiraz Ahmed
                    </motion.h1>

                    {/* Animated title */}
                    <motion.h2
                        className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2 relative"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <motion.span
                            className="relative inline-block"
                        >
                            <motion.span
                                className="absolute bottom-0 left-0 h-1 bg-blue-500"
                                initial={{ width: 0 }}
                                animate={inView ? { width: '100%' } : {}}
                                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                            />
                            Full Stack Developer
                        </motion.span>
                    </motion.h2>

                    {/* Animated description */}
                    <motion.div
                        className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        A Full Stack Developer having 7+ years of experience
                        <br />
                        <br />

                        I craft immersive digital experiences with a focus on beautiful interfaces,
                        smooth animations, and clean code.
                        Currently creating magic at{' '}
                        <motion.span className="inline-flex items-center gap-2">
                            <motion.div
                                className="relative ml-1"
                                initial={{ opacity: 0, scale: 1 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                <Image
                                    src={require("public/folio3.png")}
                                    alt="Folio3 Logo"
                                    width={40}
                                    height={40}
                                    className="object-contain cursor-pointer"
                                    onClick={() => window.open("https://www.folio3.com/", "_blank")}
                                />
                            </motion.div>
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* Floating profile picture - Fixed dimensions */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0],
                    } : {}}
                    transition={{
                        opacity: { delay: 0.5, duration: 0.6 },
                        scale: { delay: 0.5, duration: 0.6 },
                        y: {
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <div className="relative w-[300px] h-[300px]"> {/* Fixed dimensions */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-blue-100 blur-xl opacity-50"
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.5, 0.7, 0.5]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        />
                        <motion.div
                            className="relative w-full h-full rounded-full overflow-hidden shadow-2xl"
                            style={{
                                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.25)'
                            }}
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 1, -1, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                rotate: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <Image
                                src="/shiraz-ahmed-2.jpg"
                                alt="Profile Picture"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative background elements */}
            <motion.div
                className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-blue-100 blur-3xl opacity-70"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 0.7 } : {}}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
            />
        </div>
    )
}

export default PersonalIntroduction