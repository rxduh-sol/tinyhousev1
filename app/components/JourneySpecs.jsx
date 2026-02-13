"use client";
import { motion } from "framer-motion";

export const JourneySpecs = ({ stage, page, TypewriterText }) => (
  <div className="w-[40%] h-full p-12 flex flex-col justify-between bg-zinc-950/40 relative">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
         style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-[1px] w-8 bg-[#00c06f]" />
        <span className="text-[#00c06f] font-mono text-[10px] font-bold tracking-[0.4em] uppercase">Stage // 0{page + 1}</span>
      </div>
      <h3 className="text-white text-6xl font-black uppercase italic tracking-tighter mb-8 leading-[0.8]">
        <TypewriterText text={stage.title} delay={300} />
      </h3>
      <p className="text-zinc-400 italic text-xl leading-relaxed max-w-[90%]">
        <TypewriterText text={stage.desc} delay={600} />
      </p>
    </div>

    <div className="relative z-10">
      <div className="grid grid-cols-2 gap-4 mb-10">
        {stage.tags?.slice(0, 4).map((tag) => (
          <div key={tag} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#00c06f]" />
            <span className="text-white/40 text-[10px] font-mono uppercase tracking-widest">{tag}</span>
          </div>
        ))}
      </div>
      <div className="pt-6 border-t border-white/5 flex justify-between items-center opacity-20 font-mono text-[9px]">
        <span>MOD_ID: V.01_SYS</span>
        <span>©2024-2026</span>
      </div>
    </div>
  </div>
);