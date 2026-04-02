"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function TextBorder() {
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [showCursor, setShowCursor] = useState(false);

    const lightSpeedVariant = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        setCursor({
            x: e.clientX,
            y: e.clientY,
        });
    };

    return (
        <div
            className="relative group w-full py-16 bg-black px-10 flex justify-center cursor-none"
            onMouseEnter={() => setShowCursor(true)}
            onMouseLeave={() => setShowCursor(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Custom Cursor */}
            {showCursor && (
                <div
                    className="fixed pointer-events-none z-50"
                    style={{
                        left: cursor.x,
                        top: cursor.y,
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <div className="w-28 h-28 border-2 border-white rounded-full flex flex-col items-center justify-center text-white text-sm font-semibold bg-black/70 backdrop-blur">
                        <span className="text-orange-400 text-lg">↗</span>
                        Contact Us
                    </div>
                </div>
            )}

            <Link href="/contact" className="w-full max-w-5xl">
                <svg
                    viewBox="0 0 1000 150"
                    className="w-full h-auto font-athletic font-black italic uppercase overflow-visible drop-shadow-2xl"
                >
                    {/* White Layer */}
                    <motion.text
                        x="500"
                        y="100"
                        textAnchor="middle"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={lightSpeedVariant}
                        fill="none"
                        // stroke="#FFF"
                        stroke="#79B537"
                        strokeWidth="2"
                        className="text-[110px] animate-stroke-white"
                        style={{ paintOrder: "stroke fill" }}
                    >
                        LET'S DISCUSS
                    </motion.text>

                    {/* Green Layer */}
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

                    {/* Black Layer */}
                    <motion.text
                        x="500"
                        y="100"
                        textAnchor="middle"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={lightSpeedVariant}
                        fill="none"
                        stroke="#000"
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