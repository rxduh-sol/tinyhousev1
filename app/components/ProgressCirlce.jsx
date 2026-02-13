// components/ProgressCircle.jsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProgressCircle({ targetRef }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="fixed bottom-10 left-10 z-50 flex items-center gap-4 bg-black/50 backdrop-blur-md p-4 rounded-full border border-white/10">
      <div className="relative w-16 h-16">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {/* Background Circle */}
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/10" />
          {/* Progress Circle */}
          <motion.circle
            cx="50" cy="50" r="45"
            stroke="#00c06f"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray="0 1"
            style={{ pathLength }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-mono text-[#00c06f]">
          <motion.span>{percentage}</motion.span>%
        </div>
      </div>
      <div className="hidden md:block">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">Build Phase</p>
        <p className="text-xs font-bold uppercase tracking-widest text-white">In Progress</p>
      </div>
    </div>
  );
}