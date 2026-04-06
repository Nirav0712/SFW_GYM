"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Trophy, Clock, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";


const values = [
  {
    title: "Expert Guidance",
    desc: "Our trainers are certified professionals with years of experience in transformation.",
    icon: Trophy,
  },
  {
    title: "Modern Facility",
    desc: "Equipped with state-of-the-art machines and clean, spacious workout zones.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Timing",
    desc: "Open from early morning to late night to fit your busy lifestyle.",
    icon: Clock,
  },
];

export default function AboutPage() {
  const router = useRouter();
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="About Gym"
            fill
            className="object-cover opacity-40 grayscale blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black font-outfit mb-6 tracking-tight"
          >
            OUR <span className="text-primary italic">STORY</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-inter">
            Building a community of strength, discipline, and excellence in the heart of Hirawadi, Ahmedabad.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary font-bold uppercase tracking-widest">Our Mission</h2>
                <h3 className="text-5xl font-black font-outfit leading-tight">MORE THAN JUST A GYM, A MOVEMENT</h3>
                <p className="text-white/60 text-lg leading-relaxed italic border-l-4 border-primary pl-6 grow">
                  "At SFW Hirawadi Gym, our mission is to empower individuals to reach their peak physical and mental potential through world-class training and unwavering support."
                </p>
                <p className="text-white/60 text-lg leading-relaxed">
                  Founded with a passion for fitness excellence, we've grown from a local fitness center to a hub for transformation. We believe that everyone deserves access to the best equipment and the most knowledgeable guidance.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-2xl font-bold font-outfit">What sets us apart:</h4>
                <ul className="space-y-3">
                  {[
                    "International Standard Equipment",
                    "Scientific Training Methodology",
                    "Personalized Nutrition Coaching",
                    "Inclusive Community Atmosphere",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-x-10 inset-y-10 border-4 border-primary/20 rounded-[5rem] -rotate-6 z-0" />
              <div className="relative z-10 w-full h-full rounded-[4rem] overflow-hidden border-8 border-white/5 rotate-3 transition-transform hover:rotate-0 duration-500">
                <Image
                  src="/images/gym-interior.png" // Using existing for placeholder
                  alt="Gym Culture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">
            Our Values
          </h2>

          <h3 className="text-5xl font-black font-outfit">
            DRIVING EXCELLENCE EVERY DAY
          </h3>
        </div>

        {/* Card Stack Container */}
        <div className="max-w-6xl mx-auto flex justify-center">

          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}

              className="
        group relative
        w-[260px] h-[400px]
        bg-transparent
        border border-white/10
        backdrop-blur-sm
        bg-clip-padding
        rounded-xl
        shadow-[-1rem_0_3rem_#000]
        p-10
        transition-all duration-500
        hover:-translate-y-6
        text-center
        flex flex-col items-center
        justify-start
        "
              style={{ marginLeft: i === 0 ? "0px" : "-30px" }}
            >

              {/* Icon */}
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary">
                <v.icon className="w-10 h-10 text-primary group-hover:text-white" />
              </div>

              {/* Title */}
              <h4 className="text-2xl font-bold mb-4 font-outfit text-white">
                {v.title}
              </h4>

              {/* Description */}
              <p className="text-white/60 leading-relaxed font-inter">
                {v.desc}
              </p>

              {/* Progress Bar */}
              <div className="absolute bottom-16 left-10 right-10 h-[4px] bg-[#2e3033] ">
                <div className="h-full w-0 bg-linear-to-r from-cyan-500 via-orange-400 to-yellow-400 transition-all duration-500 group-hover:w-[80%]" />
              </div>

              {/* Circle Animation */}
              {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <svg width="80" height="80">
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="white"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    className="group-hover:[stroke-dashoffset:60] transition-all duration-700"
                  />
                </svg>
              </div> */}

            </motion.div>
          ))}
        </div>
      </section>
      {/* <section className="py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Our Values</h2>
          <h3 className="text-5xl font-black font-outfit">DRIVING EXCELLENCE EVERY DAY</h3>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-12 rounded-[3rem] group hover:border-primary/50 transition-all text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                <v.icon className="w-10 h-10 text-primary group-hover:text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4 font-outfit">{v.title}</h4>
              <p className="text-white/60 leading-relaxed font-inter">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-5xl md:text-7xl font-black font-outfit">READY FOR YOUR TRANSFORMATION?</h2>
          <button onClick={() => router.push("/contact")} className="bg-primary hover:bg-primary/90 text-white px-12 py-6 rounded-2xl font-black text-xl shadow-[0_0_50px_rgba(121,181,55,0.4)] transition-all transform hover:scale-110">
            JOIN THE MOVEMENT
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
