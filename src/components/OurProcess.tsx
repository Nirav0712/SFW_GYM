"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        id: "01",
        title: "MOTIVATE",
        description: "Our trainers will ignite your passion and keep you focused on your target with personalized motivation strategies.",
        image: "/images/process/motivate.png",
    },
    {
        id: "02",
        title: "WORKOUT",
        description: "Execute elite training protocols designed specifically for your body type and fitness goals using premium gear.",
        image: "/images/process/workout.png",
    },
    {
        id: "03",
        title: "RESULTS",
        description: "Track your transformation and celebrate your progress as you reach peak performance and aesthetic perfection.",
        image: "/images/process/results.png",
    },
];

export default function OurProcess() {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-[4px] text-sm mb-4"
                    >
                        Our Process
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-black font-athletic text-black leading-tight uppercase"
                    >
                        CHANGE YOUR HABITS <br /> FOR BETTER
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 text-black/60 max-w-2xl mx-auto text-lg leading-relaxed font-inter"
                    >
                        A big change starts with a small step. Our expert team will create a special program following your health and body needs. Start it now.
                    </motion.p>
                </div>

                {/* Process Flow Grid */}
                <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-start">

                    {/* Dashed Connectors (Desktop Only) */}
                    <div className="hidden lg:block absolute top-[150px] left-[20%] right-[20%] h-px border-t-2 border-dashed border-black/10 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            {/* Step Circle Container */}
                            <div className="relative w-[300px] h-[300px] mb-12">
                                {/* Dashed Border Overlay */}
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-black/20 group-hover:border-primary transition-colors duration-500 group-hover:animate-[spin_20s_linear_infinite]" />

                                {/* Image Wrapper */}
                                <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Step ID Badge (Optional addition for flair) */}
                                <div className="absolute -top-2 -right-2 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-athletic text-sm border-4 border-white shadow-lg">
                                    {step.id}
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-3xl font-black font-athletic text-black mb-6 uppercase tracking-wider group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-black/60 leading-relaxed font-inter px-4">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
