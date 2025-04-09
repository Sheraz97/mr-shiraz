import { useState } from "react";
import {
    motion,
    AnimatePresence
} from "framer-motion";
import Card from "./Card";
import { useInView } from 'react-intersection-observer'
import Image from "next/image";

export function AnimateCard({ projects }) {
    const [index, setIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    })

    return (
        <motion.div style={{ position: "relative" }}>
            <AnimatePresence
                initial={true}
                onExitComplete={() => setSelectedIndex(selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1)}>
                <div
                    key={index + 1}
                    style={{
                        transform: `rotate(6deg)`,
                    }}>
                    <Card frontCard={false}>
                        <div
                            initial={{ opacity: 1, y: 20 }}
                            transition={{ delay: 0.08 * index, duration: 0.4 }}
                            className="group relative w-full h-[32vh]"
                        >
                            <div className="h-full bg-white rounded-lg shadow-xs overflow-hidden border border-gray-100 transition-all duration-200 group-hover:shadow-sm">
                                <div className="h-[12vh] relative overflow-hidden">
                                    <Image
                                        src={projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].image}
                                        alt={projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].title}
                                        fill
                                        className="object-cover transition-transform duration-400 group-hover:scale-103"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15" />
                                </div>

                                <div className="p-[1.5vw] h-[20vh] flex flex-col">
                                    <div className="flex flex-wrap gap-[0.3vw] mb-[0.5vh]">
                                        {projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-[1vw] font-medium px-[0.8vw] py-[0.3vh] rounded-full"
                                                style={{
                                                    backgroundColor: `${projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].accentColor}15`,
                                                    color: projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].accentColor
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-[1.8vw] font-bold text-gray-900 mb-[0.3vh] leading-tight">
                                        {projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].title}
                                    </h3>

                                    <p className="text-[1.3vw] text-gray-600 mb-[0.5vh] flex-grow">
                                        {projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].description}
                                    </p>

                                    <button
                                        className="self-start text-[1.2vw] font-medium flex items-center mt-auto"
                                        style={{ color: projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].accentColor }}
                                    >
                                        View
                                        <svg className="w-[1.2vw] h-[1.2vw] ml-[0.3vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <div
                    key={index + 2}
                    style={{
                        transform: `rotate(4deg)`,
                    }}>
                    <Card frontCard={false}>
                        <div
                            initial={{ opacity: 1, y: 20 }}
                            transition={{ delay: 0.08 * index, duration: 0.4 }}
                            className="group relative w-full h-[32vh]"
                        >
                            <div className="h-full bg-white rounded-lg shadow-xs overflow-hidden border border-gray-100 transition-all duration-200 group-hover:shadow-sm">
                                <div className="h-[12vh] relative overflow-hidden">
                                    <Image
                                        src={projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].image}
                                        alt={projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].title}
                                        fill
                                        className="object-cover transition-transform duration-400 group-hover:scale-103"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15" />
                                </div>

                                <div className="p-[1.5vw] h-[20vh] flex flex-col">
                                    <div className="flex flex-wrap gap-[0.3vw] mb-[0.5vh]">
                                        {projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-[1vw] font-medium px-[0.8vw] py-[0.3vh] rounded-full"
                                                style={{
                                                    backgroundColor: `${projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].accentColor}15`,
                                                    color: projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].accentColor
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-[1.8vw] font-bold text-gray-900 mb-[0.3vh] leading-tight">
                                        {projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].title}
                                    </h3>

                                    <p className="text-[1.3vw] text-gray-600 mb-[0.5vh] flex-grow">
                                        {projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].description}
                                    </p>

                                    <button
                                        className="self-start text-[1.2vw] font-medium flex items-center mt-auto"
                                        style={{ color: projects[selectedIndex == projects.length - 1 ? 0 : selectedIndex + 1].accentColor }}
                                    >
                                        View
                                        <svg className="w-[1.2vw] h-[1.2vw] ml-[0.3vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card
                    key={index}
                    frontCard={true}
                    index={index}
                    setIndex={setIndex}
                    drag="x"
                >
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.08 * index, duration: 0.4 }}
                        className="group relative w-full h-[32vh]"
                    >
                        <div className="h-full bg-white rounded-lg shadow-xs overflow-hidden border border-gray-100 transition-all duration-200 group-hover:shadow-sm">
                            <div className="h-[12vh] relative overflow-hidden">
                                <Image
                                    src={projects[selectedIndex].image}
                                    alt={projects[selectedIndex].title}
                                    fill
                                    className="object-cover transition-transform duration-400 group-hover:scale-103"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/15" />
                            </div>

                            <div className="p-[1.5vw] h-[20vh] flex flex-col">
                                <div className="flex flex-wrap gap-[0.3vw] mb-[0.5vh]">
                                    {projects[selectedIndex].tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[1vw] font-medium px-[0.8vw] py-[0.3vh] rounded-full"
                                            style={{
                                                backgroundColor: `${projects[selectedIndex].accentColor}15`,
                                                color: projects[selectedIndex].accentColor
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 2 }}
                                    className="text-[1.8vw] font-bold text-gray-900 mb-[0.3vh] leading-tight">
                                    {projects[selectedIndex].title}
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 2 }}
                                    className="text-[1.3vw] text-gray-600 mb-[0.5vh] flex-grow">
                                    {projects[selectedIndex].description}
                                </motion.p>

                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 2 }}
                                    className="self-start text-[1.2vw] font-medium flex items-center mt-auto"
                                    style={{ color: projects[selectedIndex].accentColor }}
                                >
                                    View
                                    <svg className="w-[1.2vw] h-[1.2vw] ml-[0.3vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </Card>
            </AnimatePresence>
        </motion.div>
    );
}