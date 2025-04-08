// 'use client'

// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import AnimatedText from '@/components/AnimatedText';
// import { AnimateCard } from '@/components/AnimateCard';
// import IntroSection from './IntroSection';

// const InfiniteScroll = ({ speed = 1 }) => {
//     const scrollContainerRef = useRef(null);

//     useEffect(() => {
//         const container = scrollContainerRef.current;

//         const onWheel = (e) => {
//             e.preventDefault();
//             container.scrollLeft += e.deltaY * 10;
//         };

//         container.addEventListener('wheel', onWheel, { passive: false });

//         return () => {
//             container.removeEventListener('wheel', onWheel);
//         };
//     }, []);

//     return (
//         <div className="w-screen h-screen overflow-hidden no-scrollbar">
//             <div
//                 ref={scrollContainerRef}
//                 className="flex h-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory no-scrollbar"
//             >
//                 {[...Array(2)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="snap-start min-w-screen h-full flex items-center justify-center text-white text-4xl bg-gradient-to-r from-white to-blue-500 shadow-lg"
//                     >
//                         {
//                             i == 0 ? (
//                                 <IntroSection />
//                             ) : (
//                                 <AnimatedText />
//                             )
//                         }
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default InfiniteScroll;

'use client'

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import { AnimateCard } from '@/components/AnimateCard';
import IntroSection from './IntroSection';

const InfiniteScroll = ({ speed = 20 }) => {
    const scrollContainerRef = useRef(null);
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);

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
            container.scrollLeft -= deltaY * speed * 2; // Multiply by 2 for better sensitivity

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
    }, [speed]);

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
                        {i === 0 ? <IntroSection /> : <AnimatedText />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;