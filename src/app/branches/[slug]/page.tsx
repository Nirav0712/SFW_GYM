"use client";

import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2,
  Users, Dumbbell, Trophy, Star, ChevronRight, MessageCircle,
  Calendar, Target, Zap, Instagram, Phone as PhoneIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextBorder from "@/components/TextBorder";
import SectionHeading from "@/components/SectionHeading";
import Wsa from "@/components/Wsa";
import { branches, getBranchBySlug } from "@/lib/branches";
import { use } from "react";


// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ rating, accentColor }: { rating: number; accentColor: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4"
          fill={i < rating ? accentColor : "transparent"}
          stroke={i < rating ? accentColor : "rgba(255,255,255,0.2)"}
        />
      ))}
    </div>
  );
}



// ─── Page Component ────────────────────────────────────────────────────────────
export default function BranchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const branch = getBranchBySlug(slug);
  if (!branch) notFound();

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const ac = branch.accentColor;
  const acRgb = branch.accentColorRgb;

  return (
    <main className="bg-black text-white selection:bg-primary selection:text-white">
      <Navbar />

      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, #000 0%, rgba(${acRgb},0.08) 100%)` }}
      >
        {/* background image with parallax */}
        <motion.div
          style={{ y: parallaxY, backgroundImage: `url(${branch.heroImage})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 60%, #000 100%)`,
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(${acRgb},0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(${acRgb},0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[180px] opacity-20 animate-pulse" style={{ background: ac }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white/40 text-sm mb-12"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/branches" className="hover:text-white transition-colors">Branches</Link>
            <ChevronRight className="w-4 h-4" />
            <span style={{ color: ac }}>{branch.name}</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-xs font-bold uppercase tracking-[6px] mb-6 px-4 py-2 rounded-full"
                style={{
                  color: ac,
                  background: `rgba(${acRgb},0.12)`,
                  border: `1px solid rgba(${acRgb},0.25)`,
                }}
              >
                Est. {branch.establishedYear} · {branch.subtitle}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 40, skewX: -15 }}
                animate={{ opacity: 1, y: 0, skewX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-6xl md:text-8xl font-black font-outfit uppercase leading-none mb-6"
              >
                SFW
                <br />
                <span style={{ color: ac }}>{branch.name}</span>
                <br />
                <span className="text-4xl md:text-5xl text-white/20 font-outfit">GYM</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-3xl font-athletic uppercase tracking-[4px] mb-4"
                style={{ color: ac }}
              >
                {branch.tagline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-white/60 text-lg leading-relaxed mb-12 max-w-lg"
              >
                {branch.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  className="group flex items-center gap-3 px-8 py-5 font-black uppercase tracking-[3px] text-sm transition-all duration-300 active:scale-95"
                  style={{ background: ac, color: "#000" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center gap-3 px-8 py-5 font-black uppercase tracking-[3px] text-sm transition-all duration-300 border-2 hover:border-opacity-60"
                  style={{ borderColor: ac, color: ac }}
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>

            {/* Right — stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Active Members", value: branch.stats.members, icon: Users },
                { label: "Expert Trainers", value: branch.stats.trainers, icon: Trophy },
                { label: "Equipment Pieces", value: branch.stats.equipment, icon: Dumbbell },
                { label: "Area (sq ft)", value: branch.area, icon: Target },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="rounded-2xl p-6 border transition-all duration-300 hover:scale-105 bg-[#09090a]"
                  style={{
                    borderColor: `rgba(${acRgb},0.2)`,
                  }}
                >
                  <s.icon className="w-6 h-6 mb-3" style={{ color: ac }} />
                  <div className="text-3xl font-black font-outfit" style={{ color: ac }}>
                    {s.value}
                  </div>
                  <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-xs uppercase tracking-widest"
        >
          <div className="w-px h-10 bg-white/20" />
          Scroll
          <div className="w-px h-10 bg-white/20" />
        </motion.div>
      </section>

      {/* ── 2. ABOUT ─────────────────────────────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="About This Branch"
          title={`THE ${branch.name.toUpperCase()} STORY`}
          subtitle="Real infrastructure, real coaches, real results. Here's everything that makes this location special."
          accentColor={ac}
        />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Long description */}
          <div className="lg:col-span-3 space-y-6">
            {branch.longDescription.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-white/65 text-lg leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Unique highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {branch.uniqueHighlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-6 border bg-[#09090a]"
                  style={{
                    borderColor: `rgba(${acRgb},0.2)`,
                  }}
                >
                  <div className="text-2xl mb-3" style={{ color: ac }}>★</div>
                  <h4 className="font-black text-lg mb-2">{h.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{h.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 sticky top-28"
          >
            {/* Hours */}
            <div className="rounded-2xl p-6 border border-white/10 bg-[#09090a]">
              <h4 className="font-black text-lg mb-5 flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: ac }} /> Opening Hours
              </h4>
              <div className="space-y-3 text-sm">
                {[
                  { day: "Monday – Friday", time: branch.hours.weekday },
                  { day: "Saturday", time: branch.hours.saturday },
                  { day: "Sunday", time: branch.hours.sunday },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="text-white/50">{h.day}</span>
                    <span className="font-bold" style={{ color: ac }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-2xl p-6 border border-white/10 bg-[#09090a]">
              <h4 className="font-black text-lg mb-5 flex items-center gap-2">
                <PhoneIcon className="w-5 h-5" style={{ color: ac }} /> Contact
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: ac }} />
                  <div>
                    <p className="text-white/70">{branch.addressLine1}</p>
                    <p className="text-white/70">{branch.addressLine2}</p>
                    <p className="text-white/50">{branch.city} – {branch.pincode}</p>
                  </div>
                </div>
                <a href={`tel:${branch.phone}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" style={{ color: ac }} />
                  {branch.phone}
                </a>
                {branch.phone2 && (
                  <a href={`tel:${branch.phone2}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                    <Phone className="w-4 h-4" style={{ color: ac }} />
                    {branch.phone2}
                  </a>
                )}
                <a href={`mailto:${branch.email}`} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" style={{ color: ac }} />
                  {branch.email}
                </a>
              </div>
            </div>

            {/* Membership Pricing */}
            <div className="rounded-2xl p-6 border bg-[#09090a]" style={{ borderColor: `rgba(${acRgb},0.3)` }}>
              <h4 className="font-black text-lg mb-5 flex items-center gap-2">
                <Star className="w-5 h-5" style={{ color: ac }} /> Membership Plans
              </h4>
              <div className="space-y-3">
                {[
                  { label: "Monthly", price: branch.membership.monthly },
                  { label: "Quarterly", price: branch.membership.quarterly },
                  { label: "Yearly", price: branch.membership.yearly },
                ].map((m) => (
                  <div key={m.label} className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">{m.label}</span>
                    <span className="font-black text-xl" style={{ color: ac }}>{m.price}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 w-full flex items-center justify-center gap-2 py-4 font-black uppercase tracking-[3px] text-sm rounded-xl transition-all duration-300 hover:opacity-90"
                style={{ background: ac, color: "#000" }}
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. FEATURES ──────────────────────────────────────────────────── */}
      <Wsa branch={branch} ac={ac} acRgb={acRgb} />

      {/* ── 4. PROGRAMS ──────────────────────────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Training Programs"
          title="YOUR PROGRAM AWAITS"
          subtitle="Every program is backed by science, coached by certified professionals, and tailored to your goals."
          accentColor={ac}
        />

        <div className="services-wrap flex flex-col xl:flex-row gap-6 mt-16">
          {branch.programs.map((svc, i) => (
            <div
              key={i}
              className="service-card group relative h-[550px] flex-1 overflow-hidden rounded-[28px] cursor-pointer transition-all duration-500 ease-in-out bg-black"
            >
              {/* Content Wrapper */}
              <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:inset-3 overflow-hidden rounded-[28px] group-hover:rounded-[22px]">
                {/* Background Image - Rotating through gallery and heroImage */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${i % 2 === 0 ? (branch.gallery[0] || branch.heroImage) : (branch.gallery[1] || branch.heroImage)})`,
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient Overlay - Always subtle, darkens on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Arrow Button Container */}
                <div className="absolute top-0 right-0 z-30 ">
                  <div className="absolute top-0 right-0 w-25 h-25 bg-black rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-4">
                    <div
                      className="box-border flex h-16 w-16 items-center justify-center rounded-full text-white transition-all duration-300 group-hover:scale-95 group-hover:rotate-12"
                      style={{
                        background: `linear-gradient(135deg, rgba(${acRgb},0.8) 0%, rgba(${acRgb},0.6) 45%, ${ac} 100%)`,
                      }}
                    >
                      <span className="text-[28px] font-light leading-none -mt-0.5">↗</span>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 right-0 bottom-0 z-20 px-0">
                  <div
                    className="mx-0 translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
                    style={{
                      background: `linear-gradient(135deg, rgba(${acRgb},0.95) 0%, rgba(0,0,0,0.85) 60%, rgba(${acRgb},0.95) 100%)`,
                      borderTopLeftRadius: "22px",
                      borderTopRightRadius: "22px",
                      borderBottomLeftRadius: "28px",
                      borderBottomRightRadius: "28px",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="px-8 py-10">
                      {/* Tags & Title - Always visible */}
                      <div className="flex gap-2 mb-4 justify-center">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white">
                          {svc.duration}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20 text-white/70">
                          {svc.level}
                        </span>
                      </div>

                      <h3 className="text-white text-[24px] text-center font-black uppercase leading-tight mb-3">
                        {svc.title}
                      </h3>

                      {/* Description - Fades in on hover */}
                      <p className="text-white/70 text-[14px] font-medium text-center line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @media (min-width: 1280px) {
            .services-wrap:hover .service-card {
              flex: 0.85;
            }

            .services-wrap .service-card:hover {
              flex: 1.35;
            }
          }
        `}</style>
      </section>


      {/* ── 5. TRAINERS ──────────────────────────────────────────────────── */}
      {/* <section className="py-32" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Expert Coaching Staff"
            title="MEET YOUR COACHES"
            subtitle={`Hand-picked, certified professionals who live and breathe fitness. Your results are their mission at SFW ${branch.name}.`}
            accentColor={ac}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branch.trainers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center rounded-2xl p-8 border border-white/10 hover:border-white/20 bg-[#09090a] transition-all duration-300"
              >
               
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl font-black font-outfit transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `rgba(${acRgb},0.15)`, border: `2px solid rgba(${acRgb},0.3)`, color: ac }}
                >
                  {t.name.charAt(0)}
                </div>
                <h3 className="font-black text-lg mb-1">{t.name}</h3>
                <p className="text-sm mb-3" style={{ color: ac }}>{t.specialization}</p>
                <p className="text-white/40 text-xs uppercase tracking-widest">{t.experience} Exp.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-32" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Expert Coaching Staff"
            title="MEET YOUR COACHES"
            subtitle={`Hand-picked, certified professionals who live and breathe fitness. Your results are their mission at SFW ${branch.name}.`}
            accentColor={ac}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {branch.trainers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl p-6 bg-gradient-to-b from-[#0a0a0c] to-[#050506] border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[rgba(230,126,34,0.05)] via-transparent to-transparent" />

                {/* Glow orb behind avatar */}
                <div
                  className="absolute w-32 h-32 rounded-full blur-3xl -top-10 -left-10 transition-opacity duration-500 opacity-0 group-hover:opacity-60"
                  style={{ background: `radial-gradient(circle, rgba(${acRgb},0.3), transparent)` }}
                />

                {/* Avatar Container with Creative Ring Design */}
                <div className="relative mb-5 flex justify-center">
                  {/* Pulsing ring background */}
                  <div
                    className="absolute w-24 h-24 rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${ac}, transparent 70%)` }}
                  />

                  {/* Rotating border ring */}
                  <div className="absolute w-24 h-24 rounded-full border-2 border-dashed animate-spin-slow" style={{ borderColor: `${ac}40` }} />

                  {/* Avatar circle with gradient and shine */}
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black font-outfit transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, rgba(${acRgb},0.2), rgba(${acRgb},0.05))`,
                      border: `2px solid ${ac}`,
                      boxShadow: `0 0 20px rgba(${acRgb},0.2)`
                    }}
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span style={{ color: ac }}>{t.name.charAt(0)}</span>
                  </div>
                </div>

                {/* Name with gradient text */}
                <h3 className="font-black text-xl mb-1 text-center bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  {t.name}
                </h3>

                {/* Specialization badge with creative styling */}
                <div className="flex justify-center mb-3">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full tracking-wide backdrop-blur-sm"
                    style={{
                      background: `rgba(${acRgb},0.12)`,
                      color: ac,
                      border: `1px solid rgba(${acRgb},0.25)`
                    }}
                  >
                    {t.specialization}
                  </span>
                </div>

                {/* Experience with icon and progress bar style */}
                <div className="relative mt-2 mb-1">
                  <div className="flex items-center justify-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>{t.experience} Experience</span>
                  </div>
                  {/* Decorative line that expands on hover */}
                  <div className="h-[2px] w-12 mx-auto mt-2 rounded-full transition-all duration-500 group-hover:w-20" style={{ background: `linear-gradient(90deg, ${ac}, transparent)` }} />
                </div>

                {/* Hover reveal micro-badge */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 backdrop-blur-sm" style={{ color: ac }}>
                    Book Session →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. AMENITIES ─────────────────────────────────────────────────── */}
      {/* <section className="py-32 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Member Facilities"
          title="EVERY COMFORT, COVERED"
          subtitle="From locker rooms to premium recovery suites, SFW ensures your entire gym experience — not just the workout — is world-class."
          accentColor={ac}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {branch.amenities.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 rounded-xl p-4 border border-white/8 bg-[#09090a] hover:bg-white/8 transition-all"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: ac }} />
              <span className="text-sm font-medium text-white/70">{a}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-black text-2xl mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6" style={{ color: ac }} />
            Nearby Landmarks
          </h3>
          <div className="flex flex-wrap gap-3">
            {branch.nearbyLandmarks.map((lm) => (
              <span key={lm} className="px-4 py-2 rounded-full text-sm border border-white/10 text-white/50 bg-[#09090a]">
                {lm}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-28 max-w-7xl mx-auto px-6">

        <SectionHeading
          label="Member Facilities"
          title="EVERY COMFORT, COVERED"
          subtitle="From locker rooms to premium recovery suites, SFW ensures your entire gym experience — not just the workout — is world-class."
          accentColor={ac}
        />

        {/* Amenities */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-14">
          {branch.amenities.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 40, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 120 }}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.06,
              }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-white/10"
            >
              {/* Inner Box */}
              <div className="relative flex items-center gap-3 rounded-2xl p-5 
        bg-[#0b0b0d]/90 backdrop-blur-xl border border-white/10
        overflow-hidden transition-all duration-300">

                {/* Animated Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div
                    className="absolute inset-0 blur-2xl"
                    style={{ backgroundColor: ac, opacity: 0.25 }}
                  />
                </div>

                {/* Icon */}
                <CheckCircle2
                  className="w-5 h-5 shrink-0 z-10 group-hover:scale-125 transition"
                  style={{ color: ac }}
                />

                {/* Text */}
                <span className="text-sm font-semibold text-white/70 group-hover:text-white z-10">
                  {a}
                </span>

                {/* Shine Effect */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rotate-45 blur-2xl opacity-0 group-hover:opacity-100 transition duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nearby Landmarks */}
        <div className="mt-24">
          <h3 className="font-extrabold text-2xl mb-8 flex items-center gap-3">
            <MapPin className="w-6 h-6" style={{ color: ac }} />
            Nearby Landmarks
          </h3>

          <div className="flex flex-wrap gap-4">
            {branch.nearbyLandmarks.map((lm, i) => (
              <motion.div
                key={lm}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.12,
                  boxShadow: `0px 0px 20px ${ac}`,
                }}
                className="px-6 py-2.5 rounded-full text-sm font-medium 
          border border-white/10 text-white/60 
          bg-[#0b0b0d]/90 backdrop-blur-lg
          hover:text-white hover:border-white/30 
          transition-all duration-300 cursor-pointer"
              >
                {lm}
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* ── 7. TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-32" style={{ background: "#000" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Member Stories"
            title="REAL RESULTS, REAL PEOPLE"
            subtitle="Don't take our word for it. Here's what our members say about their journey at this location."
            accentColor={ac}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branch.testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-8 border border-white/10 bg-[#09090a] relative flex flex-col"
              >
                <div
                  className="absolute top-6 right-6 text-6xl font-serif leading-none opacity-20"
                  style={{ color: ac }}
                >
                  "
                </div>
                <StarRating rating={t.rating} accentColor={ac} />
                <p className="text-white/65 mt-5 leading-relaxed text-sm flex-1">"{t.review}"</p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-black">{t.name}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{t.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. MAP ───────────────────────────────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Find Us"
          title="GET DIRECTIONS"
          subtitle={`We're easy to find. Visit SFW ${branch.name} at ${branch.addressLine1}, ${branch.city}.`}
          accentColor={ac}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] overflow-hidden border"
          style={{ borderColor: `rgba(${acRgb},0.2)` }}
        >
          <iframe
            src={branch.mapEmbedUrl}
            width="100%"
            height="480"
            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(80%)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${branch.fullName} Location Map`}
          />
        </motion.div>
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(branch.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all hover:opacity-80"
            style={{ background: ac, color: "#000" }}
          >
            <MapPin className="w-4 h-4" /> Open in Google Maps
          </a>
          <a
            href={`tel:${branch.phone}`}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-black uppercase tracking-wider text-sm border-2 transition-all hover:opacity-80"
            style={{ borderColor: ac, color: ac }}
          >
            <Phone className="w-4 h-4" /> Call Branch
          </a>
        </div>
      </section>

      {/* ── 9. OTHER BRANCHES ────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className=" ">
          <h3 className="text-2xl font-black mb-6">Explore Other Branches</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {branches
              .filter((b) => b.slug !== branch.slug)
              .map((b) => (
                <Link
                  key={b.slug}
                  href={`/branches/${b.slug}`}
                  className="group rounded-xl p-5 border border-white/10 hover:border-white/20  transition-all duration-300 hover:scale-105"
                >
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: b.accentColor }}>
                    Est. {b.establishedYear}
                  </div>
                  <div className="font-black text-lg">{b.name}</div>
                  <div className="text-white/40 text-xs mt-1">{b.stats.members} members</div>
                  <div className="flex items-center gap-1 mt-3 text-xs font-bold" style={{ color: b.accentColor }}>
                    Visit <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ──────────────────────────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden p-16 md:p-24 text-center bg-[#09090a] border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 blur-[150px] opacity-30" style={{ background: ac }} />
          <div className="absolute bottom-0 left-0 w-60 h-60 blur-[120px] opacity-20" style={{ background: ac }} />
          <div className="relative z-10">
            <p className="font-bold uppercase tracking-[6px] text-sm mb-6" style={{ color: ac }}>
              SFW {branch.name}
            </p>
            <h2 className="text-5xl md:text-7xl font-black font-outfit mb-8 leading-none">
              READY TO START YOUR
              <br />
              <span style={{ color: ac }} className="italic">
                TRANSFORMATION?
              </span>
            </h2>
            <p className="text-white/50 text-xl max-w-xl mx-auto mb-12">
              Join {branch.stats.members} members already training at SFW {branch.name}. First session is on us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-14 py-6 font-black text-xl uppercase tracking-[4px] transition-all hover:opacity-90 hover:scale-105"
                style={{ background: ac, color: "#000" }}
              >
                JOIN NOW
              </Link>
              <Link
                href={`https://wa.me/${branch.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                className="px-14 py-6 font-black text-xl uppercase tracking-[4px] border-2 transition-all hover:scale-105"
                style={{ borderColor: ac, color: ac }}
              >
                WHATSAPP
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TextBorder />
      <Footer />
    </main>
  );
}
