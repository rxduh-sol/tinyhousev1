"use client";
import { motion } from "framer-motion";

export default function SystemTag({ text, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ 
        opacity: [0.4, 1, 0.4],
        y: [0, -6, 0],
        scale: [1, 1.05, 1],
        color: ["#52525b", "#00c06f", "#52525b"]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      className="flex items-center gap-2"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_8px_currentColor]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
        {text}
      </span>
    </motion.div>
  );
}