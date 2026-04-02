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

// ─── Section Heading ──────────────────────────────────────────────────────────
function SectionHeading({
  label,
  title,
  subtitle,
  accentColor,
}: {
  label: string;
  title: string;
  subtitle?: string;
  accentColor: string;
}) {
  return (
    <div className="text-center mb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-bold uppercase tracking-[6px] text-sm mb-4"
        style={{ color: accentColor }}
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-6xl font-black font-outfit uppercase leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/50 text-lg mt-5 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
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
                  className="rounded-2xl p-6 border transition-all duration-300 hover:scale-105"
                  style={{
                    background: `rgba(${acRgb},0.08)`,
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
                  className="rounded-2xl p-6 border"
                  style={{
                    background: `rgba(${acRgb},0.06)`,
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
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
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
            <div className="rounded-2xl p-6 border border-white/10 bg-white/5">
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
            <div className="rounded-2xl p-6 border" style={{ borderColor: `rgba(${acRgb},0.3)`, background: `rgba(${acRgb},0.06)` }}>
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
      <section className="py-32" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="World-Class Facilities"
            title="WHAT SETS US APART"
            subtitle={`Everything you need to train harder, recover faster, and progress further — all under one roof at SFW ${branch.name}.`}
            accentColor={ac}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branch.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="rounded-2xl p-8 group cursor-default border border-white/5 hover:border-white/10 transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `rgba(${acRgb},0.15)`, border: `1px solid rgba(${acRgb},0.25)` }}
                >
                  <Zap className="w-6 h-6" style={{ color: ac }} />
                </div>
                <h3 className="text-xl font-black mb-3 group-hover:text-white transition-colors" style={{ color: ac }}>
                  {f.title}
                </h3>
                <p className="text-white/55 leading-relaxed text-sm">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PROGRAMS ──────────────────────────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Training Programs"
          title="YOUR PROGRAM AWAITS"
          subtitle="Every program is backed by science, coached by certified professionals, and tailored to your goals."
          accentColor={ac}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {branch.programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl p-8 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 transition-all duration-300 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: ac }}
              />
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-black mb-1">{p.title}</h3>
                  <div className="flex gap-3 text-xs">
                    <span
                      className="px-3 py-1 rounded-full font-medium"
                      style={{ background: `rgba(${acRgb},0.15)`, color: ac }}
                    >
                      {p.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/50 font-medium">
                      {p.level}
                    </span>
                  </div>
                </div>
                <Calendar className="w-6 h-6 text-white/20 group-hover:text-white/40 transition-colors" />
              </div>
              <p className="text-white/55 leading-relaxed text-sm">{p.description}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: ac }}>
                Enquire Now <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 5. TRAINERS ──────────────────────────────────────────────────── */}
      <section className="py-32" style={{ background: "rgba(255,255,255,0.02)" }}>
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
                className="group text-center rounded-2xl p-8 border border-white/10 hover:border-white/20 bg-white/5 transition-all duration-300"
              >
                {/* Avatar */}
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
      </section>

      {/* ── 6. AMENITIES ─────────────────────────────────────────────────── */}
      <section className="py-32 max-w-7xl mx-auto px-6">
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
              className="flex items-center gap-3 rounded-xl p-4 border border-white/8 bg-white/4 hover:bg-white/8 transition-all"
            >
              <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: ac }} />
              <span className="text-sm font-medium text-white/70">{a}</span>
            </motion.div>
          ))}
        </div>

        {/* Nearby Landmarks */}
        <div className="mt-16">
          <h3 className="font-black text-2xl mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6" style={{ color: ac }} />
            Nearby Landmarks
          </h3>
          <div className="flex flex-wrap gap-3">
            {branch.nearbyLandmarks.map((lm) => (
              <span key={lm} className="px-4 py-2 rounded-full text-sm border border-white/10 text-white/50 bg-white/5">
                {lm}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ──────────────────────────────────────────────── */}
      <section className="py-32" style={{ background: "rgba(255,255,255,0.02)" }}>
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
                className="rounded-2xl p-8 border border-white/10 bg-white/5 relative flex flex-col"
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
        <div className="glass rounded-[2rem] p-10">
          <h3 className="text-2xl font-black mb-6">Explore Other Branches</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {branches
              .filter((b) => b.slug !== branch.slug)
              .map((b) => (
                <Link
                  key={b.slug}
                  href={`/branches/${b.slug}`}
                  className="group rounded-xl p-5 border border-white/10 hover:border-white/20 bg-white/5 transition-all duration-300 hover:scale-105"
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
        <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden p-16 md:p-24 text-center glass">
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
