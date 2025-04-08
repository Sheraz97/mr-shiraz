'use client'

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import { AnimateCard } from '@/components/AnimateCard';
import IntroSection from './IntroSection';

const InfiniteScroll = ({ speed = 1 }) => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;

        const onWheel = (e) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY * 10;
        };

        container.addEventListener('wheel', onWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', onWheel);
        };
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden no-scrollbar">
            <div
                ref={scrollContainerRef}
                className="flex h-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar"
            >
                {[...Array(2)].map((_, i) => (
                    <div
                        key={i}
                        className="snap-start min-w-screen h-full flex items-center justify-center text-white text-4xl bg-gradient-to-r from-white to-blue-500 shadow-lg"
                    >
                        {
                            i == 0 ? (
                                <IntroSection />
                            ) : (
                                <AnimatedText />
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;