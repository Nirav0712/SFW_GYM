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
      className="relative min-h-[110vh] w-full overflow-hidden bg-[url('/herosection/herobaner.jpg')] bg-cover bg-center bg-no-repeat flex items-center pt-24"
    >
      {/* 1. Large Decorative "Wave" Background Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.div
          style={{
            x: textX,
            WebkitTextStroke: "1.5px rgba(0,0,0,0.08)",
            letterSpacing: "0.15em"
          }}
          className="text-[22vw] font-athletic font-black uppercase text-transparent whitespace-nowrap opacity-25"
        >
          <div className="flex gap-20">
            <LetterWave text="JOIN NOW" />
            <LetterWave text="JOIN NOW" delay={1.5} />
            <LetterWave text="JOIN NOW" delay={3} />
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* Left Side Content */}
        <div className="max-w-4xl pt-10">

          {/* Logo/Badge */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-14"
          >
            <div className="w-14 h-14 rounded-full border-[5px] border-primary flex items-center justify-center shadow-xl shadow-primary/20">
              <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
            </div>
          </motion.div> */}

          {/* Main Heading as SVG for the "Movabe Border" effect */}
          <div className="relative group">
            <svg
              viewBox="0 0 1000 300"
              className="w-full h-auto font-athletic font-black italic uppercase overflow-visible drop-shadow-2xl"
            >
              <motion.text
                x="0"
                y="100"
                initial="hidden"
                animate="visible"
                variants={lightSpeedVariant}
                fill="#79B537"
                stroke="#000"
                strokeWidth="5"
                className="text-[110px] animate-stroke"
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
                className="text-[110px] animate-stroke"
                style={{ paintOrder: "stroke fill" }}
              >
                BODY AT GYMORT!
              </motion.text>
            </svg>
          </div>

          {/* Tagline with specific "PROFESSIONAL" orange highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex items-start gap-5"
          >
            <span className="text-primary text-6xl font-serif italic leading-none transform translate-y-2">"</span>
            <p className="text-xl md:text-3xl font-athletic font-black uppercase text-black leading-tight tracking-wide">
              START YOUR TRAININGS WITH OUR{" "}
              <span className="text-primary">PROFESSIONAL</span> TRAINERS
              <span className="text-primary text-6xl font-serif italic leading-none px-2 transform translate-y-4">"</span>
            </p>
          </motion.div>

          {/* Premium CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <button className="mt-20 group relative overflow-hidden bg-primary text-white border-[3px] border-black px-20 py-8 font-athletic text-2xl font-black uppercase tracking-[10px] shadow-[0_20px_50px_rgba(121,181,55,0.3)] hover:shadow-primary/50 transition-all active:scale-95">
              <span className="text-black group-hover:text-white relative z-10">JOIN NOW</span>
              <div className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </button>
          </motion.div>
        </div>

        {/* Right Side Athlete */}
        {/* <motion.div
           style={{ x: imageX }}
           initial={{ opacity: 0, x: 200, scale: 0.8 }}
           animate={{ opacity: 1, x: 0, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="relative h-[90vh] w-full hidden lg:flex items-center justify-center p-10"
        >
          <div className="absolute inset-0 bg-primary/5 blur-[150px] animate-pulse" />
          <Image
            src="/images/athlete.png"
            alt="Elite Athlete"
            width={800}
            height={1000}
            className="object-contain relative z-10 drop-shadow-[0_45px_45px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-[1.03]"
            priority
          />
        </motion.div> */}
      </div>

      {/* Decorative vertical lines */}
      {/* <div className="absolute left-[5%] bottom-0 top-0 w-px bg-black/10 hidden xl:block" />
      <div className="absolute left-[10%] bottom-0 top-0 w-px bg-black/10 hidden xl:block" /> */}

    </section>
  );
}