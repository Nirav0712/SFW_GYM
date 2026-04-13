import Link from "next/link";
import { Camera, Share2, MessageSquare, MapPin, Phone, Mail } from "lucide-react";

const branchLinks = [
  { name: "Hirawadi", slug: "hirawadi", color: "#79B537" },
  { name: "Maninagar", slug: "maninagar", color: "#79B537" },
  // { name: "Satellite", slug: "satellite", color: "#A78BFA" },
  // { name: "Bopal", slug: "bopal", color: "#F59E0B" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo + About */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3 group relative">
              <div className="relative z-10 py-1 transition-transform duration-500 hover:scale-105 active:scale-95">
                <img
                  src="/sfwlogo.png"
                  alt="SFW Gym Logo"
                  className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(121,181,55,0.2)] group-hover:drop-shadow-[0_0_20px_rgba(121,181,55,0.5)] transition-all"
                />
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed font-inter">
              Ahmedabad's fastest-growing gym network. 4 premium locations, 70+ certified trainers, and a community of 3,200+ members transforming their bodies and lives every day.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.youtube.com/@SFWTHEGYM"
                target="_blank"
                className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all text-white/50 hover:text-white flex items-center justify-center"
              >
                <i className="fa-brands fa-youtube text-lg"></i>
              </Link>

              <Link
                href="https://www.facebook.com/SFWGYM/"
                target="_blank"
                className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all text-white/50 hover:text-white flex items-center justify-center"
              >
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </Link>

              <Link
                href="https://www.instagram.com/sfwthegym/"
                target="_blank"
                className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all text-white/50 hover:text-white flex items-center justify-center"
              >
                <i className="fa-brands fa-instagram text-lg"></i>
              </Link>
            </div>
            {/* <div className="flex gap-4">
              <Link
                href="https://www.youtube.com/@SFWTHEGYM"
                target="_blank"
                className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all text-white/50 hover:text-white"
              >
                <i className="fa-brands fa-youtube w-5 h-5"></i>
              </Link>

              <Link
                href="https://www.facebook.com/SFWGYM/"
                target="_blank"
                className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all text-white/50 align-center hover:text-white"
              >
                <i className="fa-brands fa-facebook-f w-5 h-5"></i>
              </Link>

              <Link
                href="https://www.instagram.com/sfwthegym/"
                target="_blank"
                className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all text-white/50 hover:text-white"
              >
                <i className="fa-brands fa-instagram w-5 h-5"></i>
              </Link>
            </div> */}


          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold font-outfit mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-4 font-inter text-white/60">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Our Programs</Link></li>
              {/* <li><Link href="/pricing" className="hover:text-primary transition-colors">Membership</Link></li> */}
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Branches */}
          <div>
            <h4 className="text-xl font-bold font-outfit mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">
              Our Branches
            </h4>
            <ul className="space-y-4 font-inter">
              <li>
                <Link href="/branches" className="text-primary hover:text-primary/80 transition-colors text-sm font-bold uppercase tracking-wider">
                  → All Locations
                </Link>
              </li>
              {branchLinks.map((b) => (
                <li key={b.slug}>
                  <Link
                    href={`/branches/${b.slug}`}
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                      style={{ background: b.color }}
                    />
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          {/* <div>
            <h4 className="text-xl font-bold font-outfit mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">
              Contact Us
            </h4>
            <ul className="space-y-6 font-inter text-white/60">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>Hirawadi, Maninagar, Satellite, Bopal — Ahmedabad, Gujarat</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98250 11111</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@sfwgym.com</span>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-inter">
            © {new Date().getFullYear()} SFW Gym. All rights reserved. · 2   Locations across Ahmedabad.
          </p>
          <div className="flex gap-8 text-xs font-inter text-white/40">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
