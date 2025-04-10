import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiSend, FiX, FiDownload } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiCodepen } from 'react-icons/si';

const ContactMe = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // useInView hooks for animations
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });
    const [infoRef, infoInView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
            setIsSubmitted(false);
            setIsModalOpen(false);
        }, 3000);
    };

    const handleDownloadCV = () => {
        window.open('/shiraz-ahmed.pdf', '_blank');

        // const link = document.createElement('a');
        // link.href = cvPdf;
        // link.download = 'Shiraz-Ahmed-CV.pdf';
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);
    };

    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.98 }
    };

    const modalVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 25 }
        },
        exit: { opacity: 0, y: 20 }
    };

    const contactInfo = [
        { icon: <FiMail />, text: "hello@mr-shiraz.com", url: "mailto:hello@mr-shiraz.com" },
        { icon: <FiPhone />, text: "+92 335 1744729", url: "tel:+923351744729" },
        { icon: <FaLinkedin />, text: "sherrazahmed-97", url: "https://www.linkedin.com/in/sherrazahmed-97/" }
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, url: "https://linkedin.com" },
        { icon: <FaGithub />, url: "https://github.com" },
        { icon: <FaTwitter />, url: "https://twitter.com" },
        { icon: <SiCodepen />, url: "https://codepen.io" }
    ];

    return (
        <motion.section
            id="contact"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
            ref={sectionRef}
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <motion.h2
                    className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2 relative"
                    initial={{ opacity: 0 }}
                    animate={sectionInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <motion.span
                        className="relative inline-block"
                    >
                        <motion.span
                            className="absolute bottom-0 left-0 h-1 bg-blue-500"
                            initial={{ width: 0 }}
                            animate={sectionInView ? { width: '100%' } : {}}
                            transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                        />
                        Let's Connect
                    </motion.span>
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={sectionInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </motion.p>

                {/* Modified Contact Info Section */}
                <motion.div
                    className="flex flex-col justify-center gap-6 mb-10"
                    ref={infoRef}
                >
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: -20, opacity: 0 }}
                            animate={infoInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <a
                                href={info.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors"

                            >
                                <span className="text-blue-500 text-xl">
                                    {info.icon}
                                </span>
                                <span className="text-base">{info.text}</span>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.button
                    onClick={handleDownloadCV}
                    className="mb-2 px-6 py-2 bg-white border border-indigo-600 text-indigo-600 text-base font-medium rounded-full shadow-sm hover:bg-indigo-50 transition-all flex items-center gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={sectionInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <FiDownload />
                    Download My CV
                </motion.button>

                <motion.button
                    onClick={() => setIsModalOpen(true)}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-base font-medium rounded-full shadow-md hover:shadow-lg transition-all"
                    initial={{ y: 20, opacity: 0 }}
                    animate={sectionInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Send Me a Message
                </motion.button>

                <motion.div
                    className="flex justify-center gap-4 mt-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={sectionInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    {socialLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-indigo-600 text-lg transition-colors"
                            whileHover={{ y: -3, scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Modal (unchanged) */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                            >
                                <FiX size={20} />
                            </button>

                            <h3 className="text-lg font-medium text-gray-800 mb-4">Send me a message</h3>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="p-4 bg-green-50 text-green-700 text-sm rounded-lg mb-4"
                                >
                                    Thank you! Your message has been sent. I'll get back to you soon.
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium rounded-md shadow hover:shadow-md transition-all"
                                    >
                                        <FiSend size={14} />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.section>
    );
};

export default ContactMe;