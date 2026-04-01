"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TextBorder() {
    const lightSpeedVariant = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div className="relative group w-full py-16 bg-black px-10 flex justify-center">
            <Link href="/contact" className="w-full max-w-5xl">
                <svg
                    viewBox="0 0 1000 150"
                    className="w-full h-auto font-athletic font-black italic uppercase overflow-visible drop-shadow-2xl cursor-pointer"
                >
                    {/* LET'S DISCUSS - White Racing Layer */}
                    <motion.text
                        x="500"
                        y="100"
                        textAnchor="middle"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={lightSpeedVariant}
                        fill="none"
                        stroke="#FFF"
                        strokeWidth="2"
                        className="text-[110px] animate-stroke-white"
                        style={{ paintOrder: "stroke fill" }}
                    >
                        LET'S DISCUSS
                    </motion.text>
                    
                    {/* LET'S DISCUSS - Green Racing Layer */}
                    <motion.text
                        x="500"
                        y="100"
                        textAnchor="middle"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={lightSpeedVariant}
                        fill="none"
                        stroke="#79B537"
                        strokeWidth="2"
                        className="text-[110px] animate-stroke-green"
                        style={{ paintOrder: "stroke fill" }}
                    >
                        LET'S DISCUSS
                    </motion.text>
                </svg>
            </Link>
        </div>
    );
}