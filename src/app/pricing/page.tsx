"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck, Zap, Crown, ArrowRight } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    name: "Basic Plan",
    price: "1999",
    duration: "Monthly",
    icon: ShieldCheck,
    features: [
      { name: "24/7 Gym Access", included: true },
      { name: "Standard Locker Room", included: true },
      { name: "Personal Trainer Referral", included: true },
      { name: "Free Initial Assessment", included: true },
      { name: "Yoga Classes", included: true },
      { name: "Diet Consulting", included: true },
    ],
    popular: false,
    color: "white/5",
  },
  {
    name: "Elite Plan",
    price: "4999",
    duration: "Monthly",
    icon: Zap,
    features: [
      { name: "24/7 Gym Access", included: true },
      { name: "Premium Locker Room", included: true },
      { name: "10 Personal Training Sessions", included: true },
      { name: "Free Initial Assessment", included: true },
      { name: "Unlimited Yoga Classes", included: true },
      { name: "Basic Diet Consulting", included: true },
    ],
    popular: false,
    color: "primary",
  },
  {
    name: "Legend Plan",
    price: "9999",
    duration: "Monthly",
    icon: Crown,
    features: [
      { name: "All Access (All Branches)", included: true },
      { name: "VIP Locker Room & Sauna", included: true },
      { name: "Unlimited PT Sessions", included: true },
      { name: "Advanced Body Mapping", included: true },
      { name: "All Classes (Yoga, MMA, etc.)", included: true },
      { name: "Full Customized Nutrition", included: true },
    ],
    popular: false,
    color: "amber-500",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png" // Using existing for placeholder
            alt="Pricing"
            fill
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black font-outfit mb-6 tracking-tight uppercase"
          >
            JOIN THE <span className="text-primary italic">EXPERIENCE</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-inter">
            Select the membership tier that fits your ultimate fitness goals. No hidden fees, just results.
          </p>
        </div>
      </section>

      {/* Pricing Grids */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass p-12 rounded-[4rem] group border-white/5 flex flex-col h-full transform transition-all hover:scale-105 ${p.popular ? "border-primary/50 shadow-[0_0_80px_rgba(121,181,55,0.2)]" : "hover:border-white/20"
                }`}
            >
              {p.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white font-black text-sm px-8 py-3 rounded-full uppercase tracking-widest shadow-[0_0_30px_rgba(121,181,55,0.5)]">
                  Most Popular
                </div>
              )}

              <div className="mb-12">
                <div className={`w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-10 group-hover:bg-primary transition-colors`}>
                  <p.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black font-outfit mb-2">{p.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black font-outfit text-primary tracking-tighter">₹{p.price}</span>
                  <span className="text-white/40 font-bold uppercase tracking-widest text-xs">/ {p.duration}</span>
                </div>
              </div>

              <div className="space-y-6 mb-16 grow">
                {p.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    {f.included ? (
                      <Check className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-red-500/50 shrink-0" />
                    )}
                    <span className={`font-inter text-lg ${f.included ? "text-white/80" : "text-white/20 line-through"}`}>
                      {f.name}
                    </span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-6 rounded-3xl font-black text-xl transition-all shadow-xl flex items-center justify-center gap-3 ${p.popular ? "bg-primary text-white hover:bg-primary/80" : "bg-white text-black hover:bg-primary hover:text-white"
                }`}>
                CHOOSE PLAN
                <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-secondary p-12 rounded-[4rem] text-center space-y-10 border border-white/5 relative overflow-hidden">
          <ShieldCheck className="w-32 h-32 text-primary opacity-10 absolute -left-10 top-0 -rotate-12" />
          <Crown className="w-32 h-32 text-primary opacity-10 absolute -right-10 bottom-0 rotate-12" />

          <h4 className="text-3xl font-black font-outfit">100% SATISFACTION GUARANTEED</h4>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Try our gym for 7 days. If you're not completely satisfied with our facility or trainers, we'll provide a full refund of your membership fees. No questions asked.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
