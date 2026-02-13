"use client";
import { motion } from "framer-motion";
import { JOURNEY_STAGES } from "../constants"; // Added this import to check the rotate flag

export const NotebookFrame = ({ children, stageImage, direction, page }) => (
  <motion.div
    key={page}
    custom={direction}
    variants={{
      enter: (dir) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0, scale: 0.95 }),
      center: { x: 0, opacity: 1, scale: 1 },
      exit: (dir) => ({ x: dir < 0 ? 1000 : -1000, opacity: 0, scale: 0.95 })
    }}
    initial="enter" animate="center" exit="exit"
    transition={{ type: "spring", stiffness: 180, damping: 24 }}
    className="w-full h-full max-h-[55vh] relative"
  >
    {/* TAPE OVERLAYS */}
    <div className="absolute -top-4 left-16 w-32 h-10 bg-white/5 backdrop-blur-md z-50 border border-white/10 -rotate-3 shadow-2xl" />
    <div className="absolute -bottom-4 right-16 w-32 h-10 bg-white/5 backdrop-blur-md z-50 border border-white/10 -rotate-3 shadow-2xl" />

    <div className="w-full h-full overflow-hidden shadow-[0_80px_160px_rgba(0,0,0,1)] border border-white/5 bg-[#080808] flex flex-row">
      {/* IMAGE SIDE */}
      <div className="w-[60%] h-full relative overflow-hidden bg-zinc-900 border-r border-white/5">
        <motion.img
          key={stageImage}
          initial={{ scale: 1.1 }} 
          animate={{ scale: 1 }}
          src={stageImage}
          /* Added dynamic rotation check below */
          className={`w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000 ${
            JOURNEY_STAGES[page]?.rotate ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* DATA SIDE (Passed as children) */}
      {children}
    </div>
  </motion.div>
);