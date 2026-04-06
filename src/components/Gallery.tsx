"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
    { id: 1005, size: "normal", speed: 2, w: 300, h: 400 },
    { id: 1019, size: "big", speed: 1, w: 600, h: 800 },
    { id: 1027, size: "small", speed: 4, w: 400, h: 300, horizontal: true },
    { id: 1028, size: "normal", speed: 3, w: 300, h: 400 },
    { id: 1041, size: "normal", speed: 2, w: 400, h: 300, horizontal: true },
    { id: 1042, size: "big", speed: 4, w: 800, h: 600, horizontal: true },
    { id: 1049, size: "small", speed: 2, w: 300, h: 400 },
    { id: 1056, size: "normal", speed: 1, w: 300, h: 400, horizontal: true },
    { id: 1062, size: "small", speed: 3, w: 400, h: 300, horizontal: true },
    { id: 1068, size: "big", speed: 1, w: 600, h: 800 },
    { id: 1069, size: "normal", speed: 2, w: 400, h: 300, horizontal: true },
    { id: 1072, size: "normal", speed: 1, w: 300, h: 400, horizontal: true },
    { id: 1075, size: "small", speed: 4, w: 400, h: 300, horizontal: true },
    { id: 1081, size: "big", speed: 3, w: 600, h: 800 },
    { id: 111, size: "normal", speed: 2, w: 400, h: 300, horizontal: true },
    { id: 129, size: "small", speed: 4, w: 400, h: 300, horizontal: true },
    { id: 137, size: "big", speed: 2, w: 600, h: 800 },
    { id: 141, size: "normal", speed: 1, w: 300, h: 400, horizontal: true },
    { id: 145, size: "small", speed: 3, w: 400, h: 300, horizontal: true },
    { id: 147, size: "normal", speed: 1, w: 300, h: 400 },
];

export default function Gallery() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [xRange, setXRange] = useState(0);
    const [clickedImages, setClickedImages] = useState<number[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        setIsMounted(true);
        const updateRange = () => {
            if (contentRef.current) {
                const width = contentRef.current.scrollWidth;
                const windowWidth = window.innerWidth;
                setXRange(Math.max(0, width - windowWidth));
            }
        };

        updateRange();
        window.addEventListener("resize", updateRange);
        // Added a small delay to account for image layout shifts
        const timer = setTimeout(updateRange, 100);

        return () => {
            window.removeEventListener("resize", updateRange);
            clearTimeout(timer);
        };
    }, []);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const x = useTransform(smoothProgress, [0, 1], [0, -xRange]);

    const handleImageClick = (id: number) => {
        setClickedImages((prev) => [...prev, id]);
        setTimeout(() => {
            setClickedImages((prev) => prev.filter((i) => i !== id));
        }, 2000);
    };

    if (!isMounted) return <section className="h-screen bg-black" />;

    return (
        <section ref={targetRef} className="relative h-[600vh] bg-[#eee] dark:bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div
                    ref={contentRef}
                    style={{ x }}
                    className="relative flex items-center h-full w-max px-6 sm:px-8 lg:px-12 space-x-[5vw]"
                >
                    {items.map((item, i) => {
                        let sizeClass = "";
                        if (item.size === "big") {
                            sizeClass = item.horizontal ? "h-[60vh] w-[80vh]" : "h-[80vh] w-[60vh]";
                        } else if (item.size === "normal") {
                            sizeClass = item.horizontal ? "h-[45vh] w-[60vh]" : "h-[60vh] w-[45vh]";
                        } else {
                            sizeClass = item.horizontal ? "h-[30vh] w-[40vh]" : "h-[40vh] w-[30vh]";
                        }

                        // Staggered Y position
                        let yOffset = "0";
                        if (i % 3 === 0) yOffset = "-10vh";
                        if (i % 4 === 0) yOffset = "10vh";
                        if (item.size === "small") {
                            if (i % 3 === 0) yOffset = "20vh";
                            if (i % 4 === 0) yOffset = "-20vh";
                        }

                        const isClicked = clickedImages.includes(item.id);

                        const isFirst = i === 0;
                        const isLast = i === items.length - 1;

                        return (
                            <motion.div
                                key={i}
                                className={`relative shrink-0 ${sizeClass} z-1 
                                    ${isFirst ? "ml-0" : "ml-[3vw]"
                                    } ${isLast ? "mr-0" : "-mr-[30vh]"}`}
                                style={{ y: yOffset }}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                            >
                                <motion.div
                                    className="relative w-full h-full overflow-hidden rounded-xl group cursor-pointer shadow-2xl shadow-black/20"
                                    onClick={() => handleImageClick(item.id)}
                                    animate={isClicked ? { scale: 5, opacity: 0 } : { scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <img
                                        src={`https://picsum.photos/id/${item.id}/${item.w}/${item.h}`}
                                        alt="Gallery image"
                                        className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
