"use client";
import { motion } from "framer-motion";
import SystemTag from "./SystemTag";
import { SYSTEM_TAGS } from "../constants";

// This controls the "stagger" - how long to wait between each paragraph
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.3, // 0.3 seconds between each item
      delayChildren: 0.2 
    }
  }
};

// This is the animation for each individual paragraph
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

export default function BriefContent() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the section is visible
      className="space-y-8 max-w-xl"
    >
      {/* Paragraph 1 */}
      <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
        This project focuses on a <span className="text-white font-medium">modern, minimalist tiny home</span> repurposed from a recycled shipping container. The layout is engineered to be practical yet comfortable, featuring a living room and a bedroom and a full kitchen within a highly optimized footprint.
      </motion.p>
      
      {/* Paragraph 2 */}
      <motion.p variants={itemVariants} className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light">
        Set in a hilly forest, the structure is designed to endure <span className="text-white font-medium italic">heavy rain, thunder, and wind</span> through advanced weather-resistance and a back room for storage. The look follows a pattern of <span className="text-white font-medium tracking-tight">cyan, white, and wood</span> palette, making an affordable, eco-friendly home.
      </motion.p>

      {/* The Animated Line */}
      <motion.div 
        variants={{ 
          hidden: { width: 0, opacity: 0 }, 
          visible: { width: 64, opacity: 1, transition: { duration: 1 } } 
        }}
        className="h-[1px] bg-[#00c06f] my-4" 
      />
      
      {/* The Jumpy Tags Row */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-2">
        {SYSTEM_TAGS.map((tag, i) => (
          <SystemTag key={tag} text={tag} delay={i * 0.1} />
        ))}
      </motion.div>
    </motion.div>
  );
}