import Link from "next/link";
import { Dumbbell, Camera, Share2, MessageSquare, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
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
              Empowering your fitness journey at Hirawadi, Ahmedabad. Premium equipment, expert trainers, and a community that pushes you to be your best version.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all text-white/50 hover:text-white">
                <Camera className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all text-white/50 hover:text-white">
                <Share2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-3 bg-white/5 hover:bg-primary rounded-full transition-all text-white/50 hover:text-white">
                <MessageSquare className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold font-outfit mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">Quick Links</h4>
            <ul className="space-y-4 font-inter text-white/60">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Membership</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold font-outfit mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">Our Programs</h4>
            <ul className="space-y-4 font-inter text-white/60">
              <li><Link href="#" className="hover:text-primary transition-colors">Personal Training</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Yoga Classes</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cardio Intensity</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Muscle Building</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">CrossFit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold font-outfit mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">Contact Us</h4>
            <ul className="space-y-6 font-inter text-white/60">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <span>Hirawadi, Ahmedabad, Gujarat 380024</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 999 888 7777</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@sfwhirawadigym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-inter">
            © {new Date().getFullYear()} SFW Hirawadi Gym. All rights reserved.
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
