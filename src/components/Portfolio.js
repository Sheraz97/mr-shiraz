import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ss1 from '../../assets/1.png';
import ss2 from '../../assets/2.png';
import ss3 from '../../assets/3.png';
import ss4 from '../../assets/4.png';
import ss5 from '../../assets/5.png';
import ss6 from '../../assets/6.png';
import ss7 from '../../assets/7.png';
import ss8 from '../../assets/8.png';
import ss9 from '../../assets/9.png';

const Portfolio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const projects = [
        {
            title: 'Koodos',
            description: 'A real-time social running app',
            ss: ss1,
        },
        {
            title: 'Koodos',
            description: 'A real-time social running app',
            ss: ss2,
        },
        {
            title: 'Koodos',
            description: 'A real-time social running app',
            ss: ss3,
        },
        {
            title: 'Scuttlebutt',
            description: 'The Social Network Just for Boaters',
            ss: ss4,
        },
        {
            title: 'Scuttlebutt',
            description: 'The Social Network Just for Boaters',
            ss: ss5,
        },
        {
            title: 'Scuttlebutt',
            description: 'The Social Network Just for Boaters',
            ss: ss6,
        },
        {
            title: 'Zinco',
            description: 'An E-commerce store',
            ss: ss7,
        },
        {
            title: 'Zinco',
            description: 'An E-commerce store',
            ss: ss8,
        },
        {
            title: 'Zinco',
            description: 'An E-commerce store',
            ss: ss9,
        },
    ];

    // Auto-rotate screenshots every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % projects.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center flex-col min-h-screen" ref={ref}>
            <div className="w-screen flex justify-center">
                <motion.div
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
                    className='mt-4 relative'
                    style={{
                        height: 'max-content',
                        width: 250,
                        height: 520,
                    }}>

                    {projects.map((project, index) => (
                        <Image
                            key={index}
                            src={project.ss}
                            alt={`App screenshot ${index + 1}`}
                            width={250}
                            height={520}
                            className={`
                                inset-0
                                object-cover 
                                transition-opacity 
                                duration-1000 
                                ${currentIndex === index ? 'opacity-100' : 'opacity-0'}
                                `}
                            style={{
                                position: 'absolute',
                                top: 9,
                                left: 9,
                                width: 233,
                                height: 503,
                                borderRadius: 30
                            }}
                        />
                    ))}

                    <Image
                        src="/iphone-frame.png"
                        alt="iPhone frame"
                        width={250}
                        height={0}
                        style={{
                            position: 'absolute'
                        }}
                    />
                </motion.div>
            </div>

            {/* Main content container */}
            <div className="relative z-10 max-w-6xl w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 justify-center text-center">
                <div className="md:w-1/2 mt-4">
                    <motion.div
                        className="flex items-center gap-2 mb-2 justify-center"
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

                        <motion.h2 className="text-blue-600 font-medium text-lg md:text-xl">
                            {projects[currentIndex].title}
                        </motion.h2>

                        <motion.div
                            className="h-1 w-12 bg-blue-600 rounded-full"
                            initial={{ width: 48 }}
                            animate={inView ? { width: 80 } : {}}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        />
                    </motion.div>

                    <motion.div
                        className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        {projects[currentIndex].description}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;