"use client";
import { motion } from "framer-motion";

export default function Hero({ isLoaded }) {
  return (
    <section className="relative w-full h-screen flex flex-col justify-end overflow-hidden bg-black">
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        // Only animate once isLoaded is true
        animate={isLoaded ? { scale: 1, opacity: 1 } : { scale: 1.15, opacity: 0 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 bg-no-repeat bg-top bg-cover z-0" 
        style={{ backgroundImage: "url('/coolhaus.png')" }} 
      />
      
      <div className="absolute inset-0 z-10 backdrop-blur-3xl"
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent 40%, black 98%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 40%, black 98%)'
        }}
      />

      <div className="relative z-20 px-10 pb-20 max-w-7xl mx-auto w-full font-poppins text-white">
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[#00c06f] uppercase tracking-[1em] text-[10px] mb-4 font-bold"
          >
            Designed By Manhiru 9G
          </motion.h2>
        </div>

        <h1 className="text-7xl md:text-[9rem] font-bold tracking-tighter leading-[0.8] uppercase">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%" }}
              animate={isLoaded ? { y: 0 } : { y: "100%" }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >Tiny House</motion.span>
          </div>
          
          <div className="overflow-hidden h-fit">
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/20 italic font-light lowercase tracking-normal block mt-2"
            >
              A New Perspective
            </motion.span>
          </div>
        </h1>
      </div>
    </section>
  );
}