"use client";
import { motion } from "framer-motion";

export default function SectionHeader({ tag, title, highlight, italicSubtitle }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-12"
    >
      <motion.span 
        variants={{
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 }
        }}
        transition={{ duration: 0.6 }}
        className="text-[#00c06f] font-bold text-[10px] uppercase tracking-[0.4em] block mb-4"
      >
        {tag}
      </motion.span>

      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white text-6xl md:text-7xl font-bold tracking-tighter leading-[0.9] uppercase"
      >
        {title} 
        {highlight && <span className="text-[#00c06f] block">{highlight}</span>}
      </motion.h2>

      {italicSubtitle && (
        <motion.h3 
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-5xl font-bold tracking-tighter mt-2 italic font-serif normal-case"
        >
          {italicSubtitle}
        </motion.h3>
      )}
    </motion.div>
  );
}