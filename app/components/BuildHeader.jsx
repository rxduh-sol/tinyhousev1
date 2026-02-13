"use client";
import React from "react";
import { motion } from "framer-motion";

export const BuildHeader = () => {
  return (
    <div className="w-full max-w-[1600px] flex justify-between items-end mb-8 px-4">
      <div className="relative">
        {/* SMALL GREEN TAG */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-2"
        >
          <span className="w-4 h-[1px] bg-[#00c06f]" />
          <span className="text-[#00c06f] font-mono text-[10px] tracking-[0.4em] uppercase">
            Build Log // 10 Weeks
          </span>
        </motion.div>

        {/* THE MAIN WORDS (Now with Green + Fancy Italic) */}
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Build <span className="text-[#00c06f] italic font-light tracking-normal">Journey.</span>
          </motion.h2>
        </div>
      </div>
      
      {/* RIGHT SIDE DATA */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-right hidden md:block pb-1"
      >
        <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.4em] mb-1">Status</p>
        <p className="text-xl font-bold text-white uppercase tracking-tighter">
          Done <span className="text-[#00c06f]">01</span>
        </p>
      </motion.div>
    </div>
  );
};