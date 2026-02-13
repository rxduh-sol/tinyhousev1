"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ClientTab({ client, onDismiss, index, isTop }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      
      id="client" 
      
      className="absolute inset-0 w-full h-fit min-h-[520px] bg-zinc-900/40 backdrop-blur-[60px] border border-white/20 
                 rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.3)] p-12 flex flex-col cursor-default overflow-hidden scroll-mt-32"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ 
        scale: 1 - index * 0.04, 
        y: index * 12, 
        opacity: 1,
        zIndex: 50 - index 
      }}
      exit={{ 
        x: 1000, 
        opacity: 0, 
        rotate: 10, 
        transition: { duration: 0.6, ease: "circOut" } 
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      {/* 1. Header Area */}
      <div className="flex justify-end h-12">
        {isTop && (
          <button 
            onClick={onDismiss}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00c06f] text-black hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,192,111,0.4)] z-50 cursor-pointer"
          >
            <span className="text-xs font-bold font-sans">✕</span>
          </button>
        )}
      </div>

      {/* 2. Content Area */}
      <div className="flex-1 flex flex-col items-center text-center justify-center">
        <motion.div layout className="w-28 h-28 rounded-[36px] overflow-hidden shadow-2xl mb-6 ring-4 ring-[#00c06f]/20 shrink-0">
          <img src={client.image} className="w-full h-full object-cover" alt={client.name} />
        </motion.div>
        
        <motion.div layout className="mb-4">
          <h4 className="text-3xl font-bold text-white tracking-tighter mb-1 uppercase italic">{client.name}</h4>
          <p className="text-[#00c06f] text-[10px] uppercase tracking-[0.5em] font-black">{client.role}</p>
        </motion.div>

        <motion.div 
          layout
          initial={false}
          animate={{ height: isHovered ? "auto" : 60 }}
          className="px-4 overflow-hidden"
          transition={{ type: "spring", stiffness: 250, damping: 30 }}
        >
          <p className="text-white/80 text-lg leading-relaxed font-serif italic">
            "{client.quote}"
          </p>
        </motion.div>
      </div>

      {/* 3. Footer Area */}
      <div className="pt-8 border-t border-white/10 flex flex-col items-center shrink-0 mt-6">
        <div className="flex gap-4 justify-center items-center">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                (client.id % 3) === i ? 'bg-[#00c06f] shadow-[0_0_15px_rgba(0,192,111,0.6)]' : 'bg-white/10'
              }`} 
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}