"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight, Users, Dumbbell, Star, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextBorder from "@/components/TextBorder";
import { branches } from "@/lib/branches";
import Cards from "@/components/Cards";


export default function BranchesPage() {
  return (
    <main className="bg-black text-white min-h-screen selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Animated background grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(121,181,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(121,181,55,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/80 to-black z-0" />

        {/* Floating orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-bold uppercase tracking-[6px] text-sm mb-6"
          >
            SFW Gym Network
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-black font-outfit uppercase leading-none mb-8"
          >
            OUR{" "}
            <span
              className="italic"
              style={{
                WebkitTextStroke: "2px #79B537",
                color: "transparent",
              }}
            >
              BRANCHES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {branches.length} world-class gym locations across Ahmedabad — each with its own unique character, specialized programs, and championship infrastructure. Find your nearest SFW below.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-10 mt-14"
          >
            {[
              { label: "Locations", value: `${branches.length}` },
              { label: "Total Members", value: "3,200+" },
              { label: "Expert Trainers", value: "70+" },
              { label: "Years of Excellence", value: "8+" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black font-outfit text-primary">{s.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Branches Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {branches.map((branch, idx) => (
            <motion.div
              key={branch.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 bg-[#09090a]"
            >
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                style={{ background: branch.accentColor }}
              />

              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-[2rem]"
                style={{ background: `radial-gradient(circle at 30% 30%, rgba(${branch.accentColorRgb},0.08), transparent 70%)` }}
              />

              <div className="relative z-10 p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <span
                      className="text-xs font-bold uppercase tracking-[4px] mb-3 block"
                      style={{ color: branch.accentColor }}
                    >
                      Est. {branch.establishedYear}
                    </span>
                    <h2 className="text-4xl font-black font-outfit uppercase tracking-tight">
                      {branch.name}
                    </h2>
                    <p className="text-white/40 text-sm mt-1 uppercase tracking-widest">
                      {branch.subtitle}
                    </p>
                  </div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl font-outfit shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `rgba(${branch.accentColorRgb},0.2)`, border: `1px solid rgba(${branch.accentColorRgb},0.3)` }}
                  >
                    {branch.name.charAt(0)}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/60 leading-relaxed mb-8 text-base">
                  {branch.description}
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {Object.entries(branch.stats).slice(0, 4).map(([key, val]) => (
                    <div
                      key={key}
                      className="rounded-xl p-3 text-center"
                      style={{ background: `rgba(${branch.accentColorRgb},0.08)`, border: `1px solid rgba(${branch.accentColorRgb},0.15)` }}
                    >
                      <div className="text-lg font-black font-outfit" style={{ color: branch.accentColor }}>
                        {val}
                      </div>
                      <div className="text-white/40 text-[10px] uppercase tracking-wider mt-0.5 leading-tight">
                        {key === "members" ? "Members" : key === "trainers" ? "Trainers" : key === "equipment" ? "Equip." : "Exp."}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Info row */}
                <div className="space-y-3 mb-8 border-t border-white/10 pt-8">
                  <div className="flex items-start gap-3 text-white/60">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: branch.accentColor }} />
                    <span className="text-sm">{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <Phone className="w-4 h-4 shrink-0" style={{ color: branch.accentColor }} />
                    <span className="text-sm">{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/60">
                    <Clock className="w-4 h-4 shrink-0" style={{ color: branch.accentColor }} />
                    <span className="text-sm">Weekdays: {branch.hours.weekday}</span>
                  </div>
                </div>

                {/* Features preview */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {branch.features.slice(0, 3).map((f) => (
                    <span
                      key={f.title}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: `rgba(${branch.accentColorRgb},0.12)`,
                        color: branch.accentColor,
                        border: `1px solid rgba(${branch.accentColorRgb},0.2)`,
                      }}
                    >
                      {f.title}
                    </span>
                  ))}
                  {branch.features.length > 3 && (
                    <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-white/5 text-white/40 border border-white/10">
                      +{branch.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={`/branches/${branch.slug}`}
                  className="flex items-center justify-between w-full px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-[3px] transition-all duration-300 group/btn"
                  style={{
                    background: `rgba(${branch.accentColorRgb},0.15)`,
                    border: `1px solid rgba(${branch.accentColorRgb},0.3)`,
                    color: branch.accentColor,
                  }}
                >
                  <span>Explore {branch.name} Branch</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Section Teaser */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#09090a] border border-white/10 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/5 blur-[100px]" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <p className="text-primary font-bold uppercase tracking-[6px] text-sm mb-4">All Locations</p>
            <h2 className="text-5xl font-black font-outfit mb-6">FIND YOUR NEAREST SFW</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              Click any branch above to see its location on Google Maps, contact details, and a full tour of facilities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {branches.map((b) => (
                <Link
                  key={b.slug}
                  href={`/branches/${b.slug}`}
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                  style={{
                    background: `rgba(${b.accentColorRgb},0.15)`,
                    border: `1px solid rgba(${b.accentColorRgb},0.3)`,
                    color: b.accentColor,
                  }}
                >
                  <MapPin className="w-4 h-4" />
                  {b.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Cards />

      <TextBorder />

      <Footer />

    </main>
  );
}
