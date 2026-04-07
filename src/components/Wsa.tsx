// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   Zap, 
//   Shield, 
//   Activity, 
//   Leaf, 
//   Apple, 
//   Thermometer, 
//   Heart, 
//   Timer, 
//   Dumbbell, 
//   Bike, 
//   Coffee 
// } from "lucide-react";
// import SectionHeading from "./SectionHeading";
// import { Branch } from "@/lib/branches";

// interface WsaProps {
//     branch: Branch;
//     ac: string;
//     acRgb: string;
// }

// const iconMap: Record<string, React.ReactNode> = {
//   Shield: <Shield />,
//   Activity: <Activity />,
//   Leaf: <Leaf />,
//   Salad: <Apple />,
//   Zap: <Zap />,
//   Thermometer: <Thermometer />,
//   Heart: <Heart />,
//   Timer: <Timer />,
//   Dumbbell: <Dumbbell />,
//   Bike: <Bike />,
//   Coffee: <Coffee />,
// };

// const Wsa: React.FC<WsaProps> = ({ branch, ac, acRgb }) => {
//     return (
//         <section className="py-32 bg-black overflow-hidden">
//             <div className="max-w-7xl mx-auto px-6">
//                 <SectionHeading
//                     label="World-Class Facilities"
//                     title="WHAT SETS US APART"
//                     subtitle={`Everything you need to train harder, recover faster, and progress further — all under one roof at SFW ${branch.name}.`}
//                     accentColor={ac}
//                 />

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {branch.features.map((f, i) => (
//                         <motion.div
//                             key={f.title}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
//                             className="group relative rounded-[2rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 bg-[#09090a] p-10 cursor-default"
//                         >
//                             {/* Top accent line */}
//                             <div
//                                 className="absolute top-0 left-0 right-0 h-[1px] transition-all duration-500"
//                                 style={{ background: ac }}
//                             />

//                             {/* Soft radial glow on hover */}
//                             <div
//                                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-[2rem]"
//                                 style={{ background: `radial-gradient(circle at 30% 30%, rgba(${acRgb}, 0.1), transparent 70%)` }}
//                             />

//                             <div className="relative z-10">
//                                 {/* Icon Badge */}
//                                 <div
//                                     className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
//                                     style={{ 
//                                         background: `rgba(${acRgb}, 0.15)`, 
//                                         border: `1px solid rgba(${acRgb}, 0.2)` 
//                                     }}
//                                 >
//                                     <div className="w-7 h-7" style={{ color: ac }}>
//                                         {iconMap[f.icon] || <Zap />}
//                                     </div>
//                                 </div>

//                                 {/* Title */}
//                                 <h3 className="mt-8 text-2xl font-black font-outfit uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-white">
//                                     {f.title}
//                                 </h3>

//                                 {/* Description */}
//                                 <p className="mt-4 text-white/50 leading-relaxed text-base group-hover:text-white/70 transition-colors duration-300">
//                                     {f.description}
//                                 </p>

//                                 {/* Corner Highlight Pulse */}
//                                 <div 
//                                     className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 animate-pulse"
//                                     style={{ background: ac }}
//                                 />
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Wsa;

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Zap,
    Shield,
    Activity,
    Leaf,
    Apple,
    Thermometer,
    Heart,
    Timer,
    Dumbbell,
    Bike,
    Coffee,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Branch } from "@/lib/branches";

interface WsaProps {
    branch: Branch;
    ac: string;
    acRgb: string;
}

const iconMap: Record<string, React.ReactNode> = {
    Shield: <Shield />,
    Activity: <Activity />,
    Leaf: <Leaf />,
    Salad: <Apple />,
    Zap: <Zap />,
    Thermometer: <Thermometer />,
    Heart: <Heart />,
    Timer: <Timer />,
    Dumbbell: <Dumbbell />,
    Bike: <Bike />,
    Coffee: <Coffee />,
};

const Wsa: React.FC<WsaProps> = ({ branch, ac, acRgb }) => {
    return (
        <section className="py-32 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <SectionHeading
                    label="World-Class Facilities"
                    title="WHAT SETS US APART"
                    subtitle={`Everything you need to train harder, recover faster, and progress further — all under one roof at SFW ${branch.name}.`}
                    accentColor={ac}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {branch.features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-10 bg-[#09090a] border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                            style={{ "--primary": ac } as React.CSSProperties}
                        >

                            {/* Accent Bar */}
                            <div
                                className="absolute left-0 top-0 w-[4px] h-12 group-hover:h-full transition-all duration-500"
                                style={{ background: ac }}
                            />

                            {/* Watermark Icon */}
                            <div className="absolute -top-10 -right-10 opacity-[0.03] rotate-[-15deg] w-[150px] h-[150px] text-white pointer-events-none">
                                {iconMap[f.icon] || <Zap />}
                            </div>

                            {/* Header */}
                            <div className="flex items-center gap-4 relative z-10">

                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                                    style={{ background: ac }}
                                >
                                    <div className="text-black w-6 h-6">
                                        {iconMap[f.icon] || <Zap />}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-white uppercase">
                                    {f.title}
                                </h3>

                            </div>

                            {/* Description */}
                            <p className="text-white/60 mt-5 leading-relaxed relative z-10">
                                {f.description}
                            </p>

                            {/* Feature grid */}
                            {Array.isArray((f as any).features) && (
                                <div className="grid grid-cols-2 gap-3 mt-6 relative z-10">
                                    {(f as any).features.map((feat: string, idx: number) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-2 text-sm text-white/70 uppercase tracking-wide"
                                        >
                                            <CheckCircle2 size={14} style={{ color: ac }} />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* {f.features && (
                                <div className="grid grid-cols-2 gap-3 mt-6 relative z-10">
                                    {f.features.map((feat: string, idx: number) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-white/70 uppercase tracking-wide">
                                            <CheckCircle2 size={14} style={{ color: ac }} />
                                            {feat}
                                        </div>
                                    ))}
                                </div>
                            )} */}

                            {/* CTA */}
                            <button
                                className="mt-6 flex items-center gap-2 border px-6 py-2 text-sm font-bold uppercase tracking-widest transition"
                                style={{ borderColor: ac, color: ac }}
                            >
                                Explore <ArrowRight size={16} />
                            </button>

                            {/* Hover Slant Effect */}
                            <div
                                className="absolute top-0 left-[-100%] w-full h-full transition-all duration-700 group-hover:left-[100%]"
                                style={{
                                    background: `linear-gradient(120deg, transparent, rgba(${acRgb},0.06), transparent)`
                                }}
                            />

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Wsa;