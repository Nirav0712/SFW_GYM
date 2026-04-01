"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Dumbbell, Target, Users, Zap, Heart, Brain, ArrowRight } from "lucide-react";
import Image from "next/image";

const programs = [
  {
    title: "Weight Training",
    icon: Dumbbell,
    desc: "Build muscle, increase strength and bone density with our comprehensive resistance training programs tailored for all levels.",
    benefits: ["Muscle Mass", "Strength Gain", "Body Shaping"],
    theme: "primary",
  },
  {
    title: "Cardio Kickstart",
    icon: Heart,
    desc: "Improve cardiovascular health, endurance, and burn fat with high-intensity interval training (HIIT) and cardio machines.",
    benefits: ["Fat Loss", "Stamina Boost", "Heart Health"],
    theme: "blue-500",
  },
  {
    title: "Yoga & Mindfulness",
    icon: Brain,
    desc: "Find your inner peace and improve flexibility, balance, and mental focus with our expert-led yoga sessions.",
    benefits: ["Flexibility", "Stress Relief", "Posture"],
    theme: "purple-500",
  },
  {
    title: "Personal Training",
    icon: Target,
    desc: "Get 1-on-1 attention with a customized workout plan and nutritional guidance to reach your goals faster.",
    benefits: ["Custom Plan", "1-on-1 Coach", "Fast Results"],
    theme: "amber-500",
  },
  {
    title: "Crossfit WOD",
    icon: Zap,
    desc: "Challenge yourself with constantly varied, high-intensity functional movements for complete fitness.",
    benefits: ["Functional Power", "Total Fitness", "Intensity"],
    theme: "red-500",
  },
  {
    title: "Group Classes",
    icon: Users,
    desc: "Motivate each other in high-energy group environments like Zumba, Aerobics, and specialized bootcamps.",
    benefits: ["Community", "High Energy", "Fun Workouts"],
    theme: "teal-500",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png" // Using existing for placeholder
            alt="Programs"
            fill
            className="object-cover opacity-40 brightness-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black font-outfit mb-6 tracking-tight uppercase"
          >
            OUR <span className="text-primary italic">PROGRAMS</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-inter">
            Diverse training modules designed to push your limits and achieve your personal fitness goals.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[3rem] group border-white/5 hover:border-primary/50 transition-all flex flex-col h-full"
            >
              <div className="mb-8 flex justify-between items-start">
                 <div className="p-6 bg-white/5 rounded-3xl group-hover:bg-primary transition-colors">
                   <p.icon className="w-10 h-10 text-primary group-hover:text-white" />
                 </div>
                 <div className="w-4 h-4 rounded-full bg-primary/20 animate-pulse group-hover:bg-primary" />
              </div>

              <h3 className="text-3xl font-black mb-6 font-outfit tracking-tight translate-z-10">{p.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8 grow">
                {p.desc}
              </p>

              <div className="space-y-4 mb-10">
                {p.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-bold text-white/80 tracking-widest uppercase">{b}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 rounded-2xl border border-white/10 hover:bg-primary hover:border-primary transition-all font-black flex items-center justify-center gap-3 group/btn">
                LEARN MORE
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialty Training */}
      <section className="py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 bg-primary/10 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 p-24 pointer-events-none opacity-20 group">
             <Dumbbell className="w-full h-full text-primary scale-125 rotate-12" />
          </div>
          
          <div className="max-w-xl relative z-10 space-y-10">
            <h2 className="text-5xl md:text-7xl font-black font-outfit leading-tight lowercase">
              CUSTOM <span className="text-primary italic uppercase tracking-tighter">TRANSFROMATION</span> PLANS
            </h2>
            <p className="text-xl text-white/60 leading-relaxed font-inter italic">
              "Every body is unique. That's why we create science-backed, personalized training and nutrition blueprints for those who want serious results."
            </p>
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-[0_0_50px_rgba(121,181,55,0.4)]">
              GET MY CUSTOM PLAN
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
