"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { IconCloud } from "./IconCloud";

// 1. Define the props interface for TS
interface EnergyDossierProps {
  isLoaded: boolean;
}

// 2. Apply Variants type and use 'as const' to satisfy the cubic-bezier requirement
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] as const // This 'as const' locks the 4-number tuple
    } 
  }
};

export default function EnergyDossier({ isLoaded }: EnergyDossierProps) {
  const [vitals, setVitals] = useState([40, 70, 45, 90, 65, 80, 30]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(prev => prev.map(v => Math.max(20, Math.min(100, v + (Math.random() * 20 - 10)))));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="sustainability" 
      className="relative min-h-screen bg-black flex items-center justify-center py-32 px-10 border-t border-white/5 overflow-hidden scroll-mt-32"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1800px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
      >
        {/* The rest of your JSX remains exactly the same */}
        
        {/* LEFT: BENTO SYSTEM */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-8">
          {/* 1. Main Solar Card */}
          <motion.div 
            variants={itemVariants}
            className="col-span-2 bg-zinc-950/50 rounded-[40px] p-12 border border-white/10 flex flex-col justify-between min-h-[400px] relative overflow-hidden group"
          >
            <motion.img 
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1.5 }}
              src="https://i.postimg.cc/sgrZNXLh/image.png" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]" 
            />
            <div className="relative z-10">
              <span className="text-[#00c06f] font-mono text-xs tracking-[0.5em] uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00c06f] rounded-full animate-pulse" />
                System 01 // Energy
              </span>
              <h2 className="text-7xl font-bold text-white tracking-tighter uppercase mt-4">Solar<br/>Energy</h2>
            </div>
            <div className="relative z-10 flex justify-between items-end">
              <p className="max-w-xs text-zinc-400 text-sm leading-relaxed">
                Solar Panels for a fully renewable energy source that can power this home.
              </p>
              <div className="text-right font-mono">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="block text-4xl font-light tracking-tighter text-[#00c06f]"
                >
                  8.4 <span className="text-sm">kW/h</span>
                </motion.span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Live Output</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Sedum Roof Card */}
          <motion.div 
            variants={itemVariants}
            className="relative group rounded-[40px] overflow-hidden border border-white/10 min-h-[450px]"
          >
            <img src="https://i.postimg.cc/FHp1CxcM/image.png" className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-[2s]" />
            <div className="absolute inset-0 p-10 flex flex-col justify-between bg-gradient-to-t from-black via-black/40 to-transparent">
              <span className="text-[#00c06f] font-mono text-[10px] tracking-[0.3em] uppercase">System 02 // Bio</span>
              <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                <h4 className="text-3xl font-bold mb-2 uppercase italic">Sedum Roof</h4>
                <p className="text-zinc-400 text-xs leading-relaxed max-w-[200px]">Passive thermal regulation by plants and ecosystems living above</p>
              </motion.div>
            </div>
          </motion.div>

          {/* 3. Telemetry Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#0b0b0b] rounded-[40px] p-10 border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="space-y-8 relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Internal Temp</p>
                  <p className="text-3xl font-medium text-white">15°C <span className="text-xs text-[#00c06f] font-mono ml-2 tracking-tighter uppercase">Optimized</span></p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#00c06f]/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#00c06f] rounded-full animate-ping" />
                </div>
              </div>
              
              <div className="h-px bg-white/10 w-full" />

              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Live Status</p>
                <div className="flex gap-1.5 h-12 items-end">
                  {vitals.map((h, i) => (
                    <motion.div 
                      key={i} 
                      animate={{ height: `${h}%` }}
                      className="flex-1 bg-gradient-to-t from-[#00c06f]/40 to-[#00c06f] rounded-t-[2px]" 
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-4">
              <p className="text-[9px] font-mono text-zinc-600 leading-tight uppercase overflow-hidden whitespace-nowrap">
                <motion.span
                  animate={{ x: [0, -100, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  * Real-time Data Monitoring Sequence Active *
                </motion.span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: ICON CLOUD WITH BACKGROUND TEXT */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[700px]"
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <h3 className="text-[12rem] font-black text-white/[0.02] uppercase tracking-tighter leading-none rotate-12">
              Impact
            </h3>
          </div>

          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-[450px] h-[450px] bg-[#00c06f]/10 blur-[120px] rounded-full" 
          />

          <div className="relative scale-110 lg:scale-[1.4] transform-gpu">
            <IconCloud />
          </div>

          <div className="mt-16 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 border border-[#00c06f]/30 rounded-full mb-4"
            >
              <span className="text-[#00c06f] font-mono text-[9px] tracking-[0.4em] uppercase">
                Global Alignment
              </span>
            </motion.div>
            
            <h4 className="text-2xl font-bold text-white uppercase tracking-tight">
              Sustainability <br />
              <span className="text-white/40 italic">Goals</span>
            </h4>
            
            <p className="mt-4 text-zinc-600 text-[10px] font-mono uppercase tracking-widest max-w-[280px] mx-auto leading-relaxed">
              Aligning with UN Sustainable Development goals to create a better future.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}