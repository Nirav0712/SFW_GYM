"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Helper component for the vertical wave effect on characters
const LetterWave = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <div className="flex select-none">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: delay + index * 0.1,
            ease: "easeInOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textX = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const imageX = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Framer Motion variants for the "LightSpeed" entry
  const lightSpeedVariant = {
    hidden: { opacity: 0, x: -150, skewX: -20 },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] lg:min-h-[110vh] w-full overflow-hidden bg-[url('/herosection/herobaner.jpg')] bg-cover bg-center bg-no-repeat flex items-center pt-20 lg:pt-24"
    >
      {/* 1. Large Decorative "Wave" Background Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.div
          style={{
            x: textX,
            WebkitTextStroke: "1px rgba(0,0,0,0.06)",
            letterSpacing: "0.1em"
          }}
          className="text-[30vw] lg:text-[22vw] font-athletic font-black uppercase text-transparent whitespace-nowrap opacity-20 lg:opacity-25"
        >
          <div className="flex gap-10 lg:gap-20">
            <LetterWave text="JOIN NOW" />
            <LetterWave text="JOIN NOW" delay={1.5} />
            <LetterWave text="JOIN NOW" delay={3} />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          
          {/* Left Side Content */}
          <div className="max-w-4xl pt-4 lg:pt-10 text-center lg:text-left">
            
            {/* Main Heading as SVG for the "Movabe Border" effect */}
            <div className="relative group mx-auto lg:mx-0 max-w-[600px] lg:max-w-none">
              <svg
                viewBox="0 0 1000 320"
                className="w-full h-auto font-athletic font-black italic uppercase overflow-visible drop-shadow-2xl"
              >
                {/* Mobile Version - Stacked */}
                <motion.text
                  x="50%"
                  y="100"
                  textAnchor="middle"
                  initial="hidden"
                  animate="visible"
                  variants={lightSpeedVariant}
                  fill="#79B537"
                  stroke="#000"
                  strokeWidth="5"
                  className="text-[90px] md:text-[110px] animate-stroke block lg:hidden"
                  style={{ paintOrder: "stroke fill" }}
                >
                  TRANSFORM
                </motion.text>
                <motion.text
                  x="50%"
                  y="200"
                  textAnchor="middle"
                  initial="hidden"
                  animate="visible"
                  variants={lightSpeedVariant}
                  transition={{ delay: 0.15 }}
                  fill="#79B537"
                  stroke="#000"
                  strokeWidth="5"
                  className="text-[90px] md:text-[110px] animate-stroke block lg:hidden"
                  style={{ paintOrder: "stroke fill" }}
                >
                  YOUR BODY
                </motion.text>
                <motion.text
                  x="50%"
                  y="300"
                  textAnchor="middle"
                  initial="hidden"
                  animate="visible"
                  variants={lightSpeedVariant}
                  transition={{ delay: 0.3 }}
                  fill="#79B537"
                  stroke="#000"
                  strokeWidth="5"
                  className="text-[90px] md:text-[110px] animate-stroke block lg:hidden"
                  style={{ paintOrder: "stroke fill" }}
                >
                  AT SFW GYM!
                </motion.text>

                {/* Desktop Version */}
                <motion.text
                  x="0"
                  y="100"
                  initial="hidden"
                  animate="visible"
                  variants={lightSpeedVariant}
                  fill="#79B537"
                  stroke="#000"
                  strokeWidth="5"
                  className="text-[110px] animate-stroke hidden lg:block"
                  style={{ paintOrder: "stroke fill" }}
                >
                  TRANSFORM YOUR
                </motion.text>
                <motion.text
                  x="0"
                  y="215"
                  initial="hidden"
                  animate="visible"
                  variants={lightSpeedVariant}
                  transition={{ delay: 0.3 }}
                  fill="#79B537"
                  stroke="#000"
                  strokeWidth="5"
                  className="text-[110px] animate-stroke hidden lg:block"
                  style={{ paintOrder: "stroke fill" }}
                >
                  BODY AT SFW GYM!
                </motion.text>
              </svg>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-6 lg:mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-5"
            >
              <div className="flex items-start gap-2 lg:gap-5">
                <span className="text-primary text-4xl lg:text-6xl font-serif italic leading-none transform translate-y-1 lg:translate-y-2">"</span>
                <p className="text-lg md:text-2xl lg:text-3xl font-athletic font-black uppercase text-black leading-tight tracking-wide">
                  START YOUR TRAININGS WITH OUR{" "}
                  <span className="text-primary">PROFESSIONAL</span> TRAINERS
                  <span className="text-primary text-4xl lg:text-6xl font-serif italic leading-none px-1 lg:px-2 transform translate-y-2 lg:translate-y-4">"</span>
                </p>
              </div>
            </motion.div>

            {/* Premium CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <button 
                onClick={() => window.location.href = "/contact"} 
                className="mt-10 lg:mt-20 group relative overflow-hidden bg-primary text-white border-[2px] lg:border-[3px] border-black px-12 lg:px-20 py-5 lg:py-8 font-athletic text-lg lg:text-2xl font-black uppercase tracking-[5px] lg:tracking-[10px] shadow-[0_10px_30px_rgba(121,181,55,0.3)] lg:shadow-[0_20px_50px_rgba(121,181,55,0.3)] hover:shadow-primary/50 transition-all active:scale-95"
              >
                <span className="text-black group-hover:text-white relative z-10 text-center">JOIN NOW</span>
                <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute left-[5%] bottom-0 top-0 w-px bg-black/5 hidden xl:block" />
      <div className="absolute left-[10%] bottom-0 top-0 w-px bg-black/5 hidden xl:block" />
    </section>
  );
}