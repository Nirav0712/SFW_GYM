"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";

const items = [
    { id: "1.webp", size: "normal", horizontal: false },
    { id: "10.webp", size: "big", horizontal: true },
    { id: "100.webp", size: "small", horizontal: false },
    { id: "112.webp", size: "normal", horizontal: true },
    { id: "102.webp", size: "big", horizontal: false },
    { id: "103.webp", size: "small", horizontal: true },
    { id: "104.webp", size: "normal", horizontal: false },
    { id: "105.webp", size: "normal", horizontal: true },
    { id: "106.webp", size: "big", horizontal: false },
    { id: "107.webp", size: "small", horizontal: true },
    { id: "108.webp", size: "normal", horizontal: false },
    { id: "26.webp", size: "big", horizontal: true },
    { id: "11.webp", size: "small", horizontal: false },
    { id: "38.webp", size: "normal", horizontal: true },
    { id: "111.webp", size: "big", horizontal: false },
    { id: "112.webp", size: "small", horizontal: true },
    { id: "113.webp", size: "normal", horizontal: false },
    { id: "114.webp", size: "big", horizontal: true },
    { id: "115.webp", size: "small", horizontal: false },
    { id: "116.webp", size: "normal", horizontal: true },
    { id: "12.webp", size: "big", horizontal: false },
    { id: "13.jpg", size: "small", horizontal: true },
    { id: "13.webp", size: "normal", horizontal: false },
    { id: "14.webp", size: "big", horizontal: true },
    { id: "15.webp", size: "small", horizontal: false },
    { id: "16.webp", size: "normal", horizontal: true },
    { id: "17.webp", size: "big", horizontal: false },
    { id: "18.webp", size: "small", horizontal: true },
    { id: "19.webp", size: "normal", horizontal: false },
    { id: "2.webp", size: "big", horizontal: true },
    { id: "20.webp", size: "small", horizontal: false },
    { id: "21.webp", size: "normal", horizontal: true },
    { id: "22.webp", size: "big", horizontal: false },
    { id: "23.webp", size: "small", horizontal: true },
    { id: "24.webp", size: "normal", horizontal: false },
    { id: "25.webp", size: "big", horizontal: true },
    { id: "26.webp", size: "small", horizontal: false },
    { id: "27.webp", size: "normal", horizontal: true },
    { id: "28.webp", size: "big", horizontal: false },
    { id: "29.webp", size: "small", horizontal: true },
];

export default function Gallery() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [xRange, setXRange] = useState(0);
    const [clickedImages, setClickedImages] = useState<string[]>([]);
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

    const handleImageClick = (id: string) => {
        setClickedImages((prev) => [...prev, id]);
        setTimeout(() => {
            setClickedImages((prev) => prev.filter((i) => i !== id));
        }, 2000);
    };

    if (!isMounted) return <section className="h-screen bg-black" />;

    return (
        <section ref={targetRef} className="relative h-[1200vh] bg-[#eee] dark:bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div
                    ref={contentRef}
                    style={{ x }}
                    className="relative flex items-center h-full w-max px-6 sm:px-8 lg:px-12 space-x-[5vw]"
                >
                    {items.map((item, i) => {
                        let sizeClass = "";
                        if (item.size === "big") {
                            sizeClass = item.horizontal 
                                ? "h-[45vh] w-[60vh] sm:h-[55vh] sm:w-[75vh] lg:h-[65vh] lg:w-[90vh]" 
                                : "h-[55vh] w-[45vh] sm:h-[70vh] sm:w-[55vh] lg:h-[85vh] lg:w-[65vh]";
                        } else if (item.size === "normal") {
                            sizeClass = item.horizontal 
                                ? "h-[35vh] w-[45vh] sm:h-[45vh] sm:w-[60vh] lg:h-[50vh] lg:w-[70vh]" 
                                : "h-[45vh] w-[35vh] sm:h-[60vh] sm:w-[45vh] lg:h-[70vh] lg:w-[50vh]";
                        } else {
                            sizeClass = item.horizontal 
                                ? "h-[25vh] w-[35vh] sm:h-[30vh] sm:w-[45vh] lg:h-[35vh] lg:w-[50vh]" 
                                : "h-[35vh] w-[25vh] sm:h-[45vh] sm:w-[35vh] lg:h-[50vh] lg:w-[35vh]";
                        }

                        // Staggered Y position - scaled for mobile
                        let yClass = "";
                        if (i % 3 === 0) yClass = "-translate-y-[5vh] sm:-translate-y-[10vh]";
                        if (i % 4 === 0) yClass = "translate-y-[5vh] sm:translate-y-[10vh]";
                        if (item.size === "small") {
                            if (i % 3 === 0) yClass = "translate-y-[10vh] sm:translate-y-[20vh]";
                            if (i % 4 === 0) yClass = "-translate-y-[10vh] sm:-translate-y-[20vh]";
                        }

                        const isClicked = clickedImages.includes(item.id);

                        const isFirst = i === 0;
                        const isLast = i === items.length - 1;

                        return (
                            <motion.div
                                key={i}
                                className={`relative shrink-0 ${sizeClass} z-1 ${yClass}
                                    ${isFirst ? "ml-0" : "ml-[4vw] sm:ml-[3vw]"
                                    } ${isLast ? "mr-0" : "-mr-[15vh] sm:-mr-[30vh]"}`}
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
                                        src={`/hirawadi-images/${item.id}`}
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
