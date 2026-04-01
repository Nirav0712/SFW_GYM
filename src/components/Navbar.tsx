"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out backdrop-blur-md ${scrolled
        ? "bg-black/80 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.4)] border-b border-primary/30"
        : "bg-white/5 py-7 border-b border-transparent shadow-none"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            {/* <div className="relative">
              <div className="bg-primary p-2.5 rounded-sm transform group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-primary/20">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -inset-1 bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div> */}
            <span className="text-3xl font-athletic font-black tracking-[-1px] text-white uppercase italic">
              <img src="/sfwlogo.png" alt="sfwlogo" className="h-15 w-70" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-gray-600/90 hover:text-primary font-athletic text-xs uppercase tracking-[3px] transition-all relative group py-2 ${scrolled ? "text-white" : "text-gray-600/90"
                  }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="/contact"
              className="relative group overflow-hidden border-2 border-black px-8 py-3 transition-all active:scale-95"
            >
              <div className="absolute inset-0 bg-primary translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-out" />
              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 font-athletic text-sm font-black uppercase tracking-[2px] text-black group-hover:text-white ">
                Join Now
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors pr-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl overflow-hidden border-t border-primary/20"
          >
            <div className="flex flex-col gap-0 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block px-8 py-5 text-lg font-athletic font-black uppercase tracking-[4px] text-white hover:bg-primary/10 hover:text-primary border-l-4 border-transparent hover:border-primary transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="px-8 mt-6">
                <Link
                  href="/contact"
                  className="block w-full bg-primary text-center text-white py-5 font-athletic font-black uppercase tracking-[5px] shadow-xl shadow-primary/20 active:scale-[0.98] transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
