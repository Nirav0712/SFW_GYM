"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const trainers = [
  {
    name: "JAMES TAYLOR",
    role: "GYM Trainer",
    image: "/images/trainers/james.png",
  },
  {
    name: "JOHN WILLIAMS",
    role: "Box Trainer",
    image: "/images/trainers/john.png",
  },
  {
    name: "KATE MOORE",
    role: "CrossFit Trainer",
    image: "/images/trainers/kate.png",
  },
  {
    name: "SARAH JOHNSON",
    role: "Yoga & Fitness",
    image: "/images/trainers/sarah.png",
  },
  {
    name: "MIKE TYSON",
    role: "Boxing & Strength",
    image: "/images/trainers/mike.png",
  },
];

export default function OurTrainers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show 3 items at a time on desktop

  const handleNext = () => {
    if (currentIndex + 1 <= trainers.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Optional: loop
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(trainers.length - itemsPerPage); // Optional: loop
    }
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Header & CTA */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-4">
              <motion.h4 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-primary font-bold uppercase tracking-[4px] text-sm"
              >
                Our Trainers
              </motion.h4>
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-black font-athletic text-black leading-[1.1] uppercase italic"
              >
                MEET OUR <br /> SKILLED <br /> TEAM
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                href="/trainers"
                className="inline-flex items-center group overflow-hidden"
              >
                 <div className="bg-primary text-white border-2 border-primary px-8 py-4 font-athletic text-sm font-black uppercase tracking-[2px] transition-transform group-hover:-translate-x-1">
                    View All
                 </div>
                 <div className="bg-black text-white p-4 border-2 border-black transition-transform group-hover:-translate-x-1">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                 </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Trainer Cards Carousel */}
          <div className="lg:col-span-8 relative">
            <div className="relative overflow-hidden">
              <motion.div 
                animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex gap-6"
                style={{ width: "100%" }}
              >
                {trainers.map((trainer, index) => (
                  <motion.div
                    key={trainer.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="shrink-0 w-full md:w-[calc(33.333%-16px)] group"
                  >
                    {/* Trainer Image Box */}
                    <div className="relative aspect-4/5 overflow-hidden bg-gray-100 mb-6">
                      <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Plus Button Overlay */}
                      <div className="absolute bottom-4 right-4 p-3 bg-white hover:bg-primary transition-colors cursor-pointer shadow-lg group">
                        <Plus className="w-6 h-6 text-black group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black font-athletic text-primary uppercase tracking-tight">
                        {trainer.name}
                      </h3>
                      <p className="text-black/50 font-medium uppercase text-xs tracking-[2px]">
                        {trainer.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 lg:flex items-center justify-between w-[calc(100%+40px)] pointer-events-none hidden">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white pointer-events-auto hover:bg-primary transition-colors disabled:opacity-30"
                  disabled={currentIndex === 0}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white pointer-events-auto hover:bg-primary transition-colors disabled:opacity-30"
                  disabled={currentIndex >= trainers.length - itemsPerPage}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
            
            {/* Dots / Indicators */}
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4">
               {Array.from({ length: trainers.length - itemsPerPage + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      currentIndex === i ? "w-8 bg-primary" : "w-3 bg-gray-300 hover:bg-primary/50"
                    }`}
                  />
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
