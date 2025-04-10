import { motion } from 'framer-motion';

const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 }
};

export default function AnimatedText() {
    return (
        <div className='min-h-screen min-w-screen flex items-center justify-center'>
            {/* <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 3 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center"
                >
                    Hey there! Welcome to my website!
                </motion.div>
            </motion.div> */}

            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                initial="hidden"
                animate="show"
                className="text-center"
            >
                <motion.h1
                    variants={item}
                    className="text-5xl font-bold mb-4"
                >
                    Stay tuned for more!
                </motion.h1>
            </motion.div>
        </div>
    );
}
