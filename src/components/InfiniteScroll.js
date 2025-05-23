'use client'

import React, { useEffect, useRef } from 'react';
import IntroSection from './IntroSection';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';

const InfiniteScroll = () => {
    const scrollContainerRef = useRef(null);
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);
    const speed = 20; // Adjust this value to change the scroll speed

    useEffect(() => {
        const container = scrollContainerRef.current;

        const onWheel = (e) => {
            e.preventDefault();
            container.scrollLeft += e.deltaY * speed;
        };

        const onTouchStart = (e) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
        };

        const onTouchMove = (e) => {
            e.preventDefault();
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;

            // Use vertical swipe for horizontal scrolling on mobile
            const deltaY = touchY - touchStartY.current;
            container.scrollLeft -= deltaY * speed; // Multiply by 2 for better sensitivity

            // Update touch positions for continuous tracking
            touchStartX.current = touchX;
            touchStartY.current = touchY;
        };

        container.addEventListener('wheel', onWheel, { passive: false });
        container.addEventListener('touchstart', onTouchStart, { passive: false });
        container.addEventListener('touchmove', onTouchMove, { passive: false });

        return () => {
            container.removeEventListener('wheel', onWheel);
            container.removeEventListener('touchstart', onTouchStart);
            container.removeEventListener('touchmove', onTouchMove);
        };
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden no-scrollbar bg-white">
            <div
                ref={scrollContainerRef}
                className="flex h-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar"
            >
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="snap-start min-w-screen h-full flex items-center justify-center text-4xl shadow-lg"
                    >
                        {
                            i === 0 ?
                                <IntroSection />
                                :
                                i === 1 ?
                                    <Portfolio />
                                    :
                                    i == 2 ?
                                        <ContactMe />
                                        :
                                        null
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;