"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import StarRating from "./StarRating";

export default function TestimonialsSlider({ branch, ac }: any) {
    const testimonials = branch.testimonials;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const current = testimonials[currentIndex];

    return (
        <section className="py-32 bg-black">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <SectionHeading
                    label="Member Stories"
                    title="REAL RESULTS, REAL PEOPLE"
                    subtitle="Don't take our word for it. Here's what our members say about their journey at this location."
                    accentColor={ac}
                />

                <div className="grid md:grid-cols-2 gap-16 items-center mt-20">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border border-white/10">
                            <Image
                                src={current.image || "/images/image.png"}
                                alt={current.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="max-w-xl">

                        {/* Quote Symbol */}
                        <div
                            className="text-8xl opacity-20 mb-4"
                            style={{ color: ac }}
                        >
                            "
                        </div>

                        {/* Review */}
                        <p className="text-white/70 text-lg leading-relaxed mb-8">
                            "{current.review}"
                        </p>

                        {/* Rating */}
                        <StarRating rating={current.rating} accentColor={ac} />

                        {/* Author */}
                        <div className="mt-8">
                            <p className="text-white text-xl font-bold">
                                {current.name}
                            </p>

                            <p className="text-white/40 text-sm uppercase tracking-widest mt-1">
                                {current.duration}
                            </p>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-6 mt-12 max-w-[500px]">

                            {/* Prev */}
                            <button
                                onClick={prevSlide}
                                className="w-[55px] h-[55px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
                            >
                                &#8249;
                            </button>

                            {/* Progress Bar */}
                            <div className="flex-1 h-[4px] bg-white/10 relative rounded">
                                <div
                                    className="absolute top-0 left-0 h-[4px] transition-all duration-500 rounded"
                                    style={{
                                        width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
                                        background: ac,
                                    }}
                                />
                            </div>

                            {/* Next */}
                            <button
                                onClick={nextSlide}
                                className="w-[55px] h-[55px] rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
                            >
                                &#8250;
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}