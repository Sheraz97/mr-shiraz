import { useState } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    AnimatePresence
} from "framer-motion";
import Card from "./Card";

export function AnimateCard() {
    const [index, setIndex] = useState(0);

    return (
        <motion.div style={{ width: 150, height: 150, position: "relative" }}>
            <AnimatePresence initial={true}>
                <Card key={index + 1} frontCard={false} />
                <Card key={index + 2} frontCard={false} />
                <Card
                    key={index}
                    frontCard={true}
                    index={index}
                    setIndex={setIndex}
                    drag="x"
                />
            </AnimatePresence>
        </motion.div>
    );
}