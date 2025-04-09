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
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
      })

    return (
        <motion.div style={{  position: "relative" }}>
            <AnimatePresence initial={true}>
                {projects?.map(((project, i) => (
                    <Card
                        key={i}
                        frontCard={i == projects.length - 1 ? true : false}
                        project={project}
                        index={i == projects.length - 1 ? index : index + 1}
                        setIndex={i == projects.length - 1 ? setIndex : null}
                        drag={i == projects.length - 1 ? "x" : ""}
                    >
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
                    </Card>
                )))}
                {/* <Card key={index + 2} frontCard={false} />
                <Card key={index + 1} frontCard={false} />
                <Card
                    key={index}
                    frontCard={true}
                    index={index}
                    setIndex={setIndex}
                    drag="x"
                /> */}
            </AnimatePresence>
        </motion.div>
    );
}