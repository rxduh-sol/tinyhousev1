"use client";
import { motion } from "framer-motion";

export const JourneyControls = ({ page, total, onPaginate }) => (
  <div className="flex gap-20 shrink-0 items-center justify-center pb-8 z-[60]">
    <button onClick={() => onPaginate(-1)} disabled={page === 0} className="btn-3d back">Prev</button>
    <div className="flex flex-col items-center min-w-[240px]">
      <span className="font-mono text-[#00c06f] text-[10px] font-black tracking-[0.6em] mb-3 uppercase opacity-50">Dossier Progress</span>
      <div className="h-[2px] bg-zinc-900 w-full relative">
        <motion.div 
          className="h-full bg-[#00c06f] shadow-[0_0_15px_#00c06f]"
          animate={{ width: `${((page + 1) / total) * 100}%` }}
          transition={{ type: "spring", stiffness: 60 }}
        />
      </div>
    </div>
    <button onClick={() => onPaginate(1)} disabled={page === total - 1} className="btn-3d next">Next Page</button>
  </div>
);