"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Camera, Share2, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contactInfo = [
  {
    title: "Our Location",
    desc: "Hirawadi, Ahmedabad, Gujarat 380024",
    icon: MapPin,
  },
  {
    title: "Call Us",
    desc: "+91 999 888 7777",
    icon: Phone,
  },
  {
    title: "Email Us",
    desc: "hello@sfwhirawadigym.com",
    icon: Mail,
  },
  {
    title: "Working Hours",
    desc: "Mon - Sat: 5:00 AM - 11:00 PM, Sun: 7:00 AM - 1:00 PM",
    icon: Clock,
  },
];

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png" // Using existing for placeholder
            alt="Contact"
            fill
            className="object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black font-outfit mb-6 uppercase tracking-tight"
          >
            GET IN <span className="text-primary italic">TOUCH</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-inter">
            Have questions? We're here to help you start your journey. Visit us or send a message.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-primary font-bold uppercase tracking-widest">Connect With Us</h2>
              <h3 className="text-5xl font-black font-outfit leading-tight">READY TO CRUSH YOUR GOALS?</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Step into SFW Hirawadi Gym and experience the difference. Our doors are always open for those who are ready to commit to their best self.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all border-white/5"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 px-1 group-hover:bg-primary transition-colors">
                    <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 font-outfit">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed font-inter">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold font-outfit">Follow Our Journey</h4>
              <div className="flex gap-4">
                <Link 
                  href="https://www.youtube.com/@SFWTHEGYM" 
                  target="_blank"
                  className="p-4 bg-white/5 hover:bg-primary rounded-2xl transition-all text-white/50 hover:text-white group"
                >
                  <i className="fa-brands fa-youtube w-6 h-6 group-hover:scale-110 transition-transform"></i>
                </Link>
                <Link 
                  href="https://www.facebook.com/SFWGYM/" 
                  target="_blank"
                  className="p-4 bg-white/5 hover:bg-primary rounded-2xl transition-all text-white/50 hover:text-white group"
                >
                  <i className="fa-brands fa-facebook-f w-6 h-6 group-hover:scale-110 transition-transform"></i>
                </Link>
                <Link 
                  href="https://www.instagram.com/sfwthegym/" 
                  target="_blank"
                  className="p-4 bg-white/5 hover:bg-primary rounded-2xl transition-all text-white/50 hover:text-white group"
                >
                  <i className="fa-brands fa-instagram w-6 h-6 group-hover:scale-110 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-16 rounded-[4rem] border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl -z-10" />
            <h4 className="text-3xl font-black font-outfit mb-10">SEND US A MESSAGE</h4>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-4">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all appearance-none cursor-pointer">
                  <option className="bg-black">General Inquiry</option>
                  <option className="bg-black">Membership Plans</option>
                  <option className="bg-black">Personal Training</option>
                  <option className="bg-black">Free Trial Request</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40 ml-4">Message</label>
                <textarea rows={5} placeholder="Tell us about your fitness goals..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary focus:outline-none transition-all resize-none" />
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-6 rounded-2xl text-lg flex items-center justify-center gap-3 shadow-[0_0_50px_rgba(121,181,55,0.3)] hover:shadow-[0_0_60px_rgba(121,181,55,0.5)] transition-all transform hover:-translate-y-1">
                SEND MESSAGE
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Segment (Placeholder) */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto h-[500px] glass rounded-[4rem] overflow-hidden border-8 border-white/5 relative group">
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 group-hover:bg-black/40 transition-colors pointer-events-none">
            <div className="text-center space-y-4">
              <div className="bg-primary p-6 rounded-4xl inline-block animate-bounce shadow-2xl">
                <MapPin className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-black font-outfit uppercase">Visit Our Facility</h3>
              <p className="text-white/60 font-bold uppercase tracking-widest text-sm">Hirawadi, Ahmedabad</p>
            </div>
          </div>
          {/* Map placeholder bg */}
          <div className="absolute inset-0 grayscale opacity-40">
            <Image src="/images/hero.png" alt="Map" fill className="object-cover" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


