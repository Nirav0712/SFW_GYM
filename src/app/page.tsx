"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import { Dumbbell, Users, Trophy, Target, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/HeroSection";
import OurProcess from "@/components/OurProcess";
import OurTrainers from "@/components/OurTrainers";
import TextBorder from "@/components/TextBorder";
import Gallery from "@/components/Gallery";

const stats = [
  { label: "Active Members", value: "500+", icon: Users },
  { label: "Expert Trainers", value: "20+", icon: Trophy },
  { label: "Modern Equipment", value: "100+", icon: Dumbbell },
  { label: "Success Stories", value: "95%", icon: Target },
];

const programs = [
  {
    title: "Muscle Building",
    desc: "Transform your physique with our elite strength and conditioning protocols.",
    image: "/images/program-1.png",
    color: "from-green-500/20 to-transparent",
  },
  {
    title: "Cardio Intensity",
    desc: "Blast calories and boost heart health with our high-octane cardio sessions.",
    image: "/images/program-2.png",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "Yoga & Flexibility",
    desc: "Find your balance and enhance mobility with expert-led yoga practices.",
    image: "/images/program-3.png",
    color: "from-purple-500/20 to-transparent",
  },
];

const features = [
  "24/7 Premium Access",
  "Free Initial Assessment",
  "Custom Meal Planning",
  "Modern Locker Rooms",
  "High-Intensity Zone",
  "Supplements Shop",
];

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <main className="bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />

      <HeroSection />
      {/* <Gallery /> */}

      {/* Stats Section */}
      <section className="py-24 relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl text-center group hover:border-primary/50 transition-all"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-125 transition-transform" />
                <h3 className="text-4xl font-bold font-outfit mb-2">{stat.value}</h3>
                <p className="text-white/50 text-sm uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OurProcess />

      {/* Why Choose Us Section */}
      <section className="py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[4rem] overflow-hidden aspect-square">
                <Image
                  src="/hirawadi-images/107.webp"
                  alt="Gym Interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0" />
            </div>

            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary font-bold uppercase tracking-widest">About Our Club</h2>
                <h3 className="text-5xl font-black font-outfit leading-tight">WE PROVIDE THE BEST <br /> TRAINING FOR YOU</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  Success at SFW Gym is measured by your progress. We offer a holistic approach to fitness that combines science-based training, nutritional guidance, and an environment that keeps you focused.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="font-bold text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => router.push("/about")} className="bg-white text-black px-10 py-5 rounded-2xl font-black hover:bg-primary hover:text-white transition-all transform hover:scale-105">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <Gallery />
      <OurTrainers />

      {/* Programs Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20">
          <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Our Programs</h2>
          <h3 className="text-5xl font-black font-outfit">CHOOSE YOUR PROGRAM</h3>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="relative aspect-4/5 rounded-[3rem] overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-linear-to-t ${program.color} group-hover:opacity-60 transition-opacity z-10`} />
              <Image
                src={`/images/hero.png`} // Using hero for now, will replace with specific
                alt={program.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                <h4 className="text-3xl font-black mb-4">{program.title}</h4>
                <p className="text-white/70 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {program.desc}
                </p>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-32 px-4 flex justify-center">
        <div className="max-w-7xl w-full glass rounded-4xl md:rounded-4xl p-6 md:p-20 text-center relative overflow-hidden flex flex-col items-center">

          {/* Background blur effects */}
          <div className="absolute top-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-primary/20 blur-[80px] md:blur-[150px] -z-10" />
          <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary/10 blur-[80px] md:blur-[150px] -z-10" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black font-outfit mb-6 md:mb-10 leading-tight">
            READY TO START YOUR
            <br className="hidden md:block" />
            <span className="text-primary italic"> TRANSFORMATION?</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 md:mb-12 max-w-xl">
            Get your first month at 50% discount. Offer valid for the next 48 hours for new members.
          </p>

          {/* Button */}
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 md:px-12 md:py-6 rounded-xl md:rounded-2xl font-black text-base md:text-xl shadow-[0_0_50px_rgba(121,181,55,0.4)] transition-all transform hover:scale-105 w-full sm:w-auto">
            CLAIM DISCOUNT NOW
          </button>

        </div>
      </section>

      <TextBorder />
      <Footer />
    </main>
  );
}
