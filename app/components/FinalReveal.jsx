"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { Marquee } from "./marquee.tsx"; 

// --- REVIEW DATA ---
const reviews = [
  { name: "Jason", username: "@jason_ogb", body: "The modularity here is a masterclass. That skin system is actually revolutionary.", img: "https://avatar.vercel.sh/jason" },
  { name: "Meehan", username: "@meehan_builds", body: "Structuring a house in 10 weeks is one thing, making it this clean is another. Huge win.", img: "https://avatar.vercel.sh/meehan" },
  { name: "Krishna", username: "@krishna_v", body: "Sustainability isn't just a buzzword here—it's baked into the logic. Speechless.", img: "https://avatar.vercel.sh/krishna" },
  { name: "Jason", username: "@jason_dev", body: "I've never seen anything like this before. It's amazing. I love it.", img: "https://avatar.vercel.sh/jason_alt" },
  { name: "Meehan", username: "@meehan_logic", body: "The spatial fluidity in such a small footprint is actually insane. Top tier.", img: "https://avatar.vercel.sh/meehan_alt" },
  { name: "Krishna", username: "@krishna_design", body: "I'm at a loss for words. This is amazing. I love it.", img: "https://avatar.vercel.sh/krishna_alt" },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// --- SUB-COMPONENT: REVIEW CARD ---
const ReviewCard = ({ img, name, username, body }) => (
  <figure className={cn(
    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
    "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15] transition-colors"
  )}>
    <div className="flex flex-row items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt="" src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium text-white">{name}</figcaption>
        <p className="text-xs font-medium text-white/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm text-white/80">{body}</blockquote>
  </figure>
);

// --- MAIN COMPONENT ---
export default function FinalReveal() {
  const [phase, setPhase] = useState("idle");

  const stats = [
    { label: "Weeks", value: 10 },
    { label: "Days", value: 4 },
    { label: "Hours", value: 15 },
    { label: "Minutes", value: 56 },
  ];

  const startSequence = () => {
    setPhase("title");
    setTimeout(() => setPhase("silence"), 3500); 
    setTimeout(() => setPhase("stats"), 6500); 
    setTimeout(() => {
      setPhase("reveal");
      triggerConfetti();
    }, 11500); 
  };

  const triggerConfetti = () => {
    const end = Date.now() + 5 * 1000;
    const colors = ["#00c06f", "#ffffff"];
    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  return (
    <section 
      id="reveal" 
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden py-24 scroll-mt-24"
    >
      <AnimatePresence mode="wait">
        {/* PHASE: IDLE (THE BUTTON) */}
        {phase === "idle" && (
          <motion.button
            key="btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
            transition={{ duration: 1 }}
            onClick={startSequence}
            className="px-16 py-8 border border-white/10 text-white font-black text-xl uppercase tracking-[0.8em] hover:bg-white hover:text-black transition-all duration-700 rounded-none italic"
          >
            Are You Ready?
          </motion.button>
        )}

        {/* PHASE: TITLE SEQUENCE */}
        {phase === "title" && (
          <motion.div 
            key="title" 
            initial={{ opacity: 0, letterSpacing: "1em" }} 
            animate={{ opacity: 1, letterSpacing: "2em" }} 
            exit={{ opacity: 0, scale: 1.1 }} 
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="text-white text-5xl font-thin uppercase text-center pl-[2em]"
          >
            You Spent...
          </motion.div>
        )}

        {/* PHASE: DRAMATIC SILENCE */}
        {phase === "silence" && <motion.div key="silence" />}

        {/* PHASE: TECHNICAL STATS BUILD-UP */}
        {phase === "stats" && (
          <motion.div key="stats" className="flex flex-wrap justify-center gap-16 md:gap-24">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50, filter: "blur(15px)" }} 
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} 
                transition={{ delay: i * 0.9, duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
                className="text-center"
              >
                <div className="text-8xl md:text-[12rem] font-black text-white tracking-tighter tabular-nums leading-none">
                  {stat.value}
                </div>
                <div className="text-[#00c06f] font-mono text-[10px] uppercase tracking-[1em] mt-8 opacity-40">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* PHASE: THE FINAL REVEAL */}
        {phase === "reveal" && (
          <motion.div key="reveal" className="w-full flex flex-col items-center px-6">
            
            {/* CINEMATIC FLASH */}
            <motion.div 
               initial={{ opacity: 1 }}
               animate={{ opacity: 0 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="fixed inset-0 bg-white z-[100] pointer-events-none"
            />

            <motion.div 
              initial={{ scale: 0.8, opacity: 0, filter: "brightness(0)" }}
              animate={{ scale: 1, opacity: 1, filter: "brightness(1)" }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-7xl aspect-video rounded-none overflow-hidden border border-white/5 bg-zinc-950/50 shadow-[0_0_150px_rgba(0,0,0,1)]"
            >
              <div className="grid grid-cols-2 h-full w-full p-4 md:p-8 gap-4 md:gap-8">
                <div className="relative overflow-hidden bg-black">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    src="https://i.postimg.cc/J0CkCzhg/20260212-152554.jpg" 
                    className="w-full h-full object-contain" 
                    alt="Render 1" 
                  />
                </div>
                <div className="relative overflow-hidden bg-black">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    src="https://i.postimg.cc/JhgXKqCG/20260212-152601.jpg" 
                    className="w-full h-full object-contain" 
                    alt="Render 2" 
                  />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute bottom-12 left-12 text-left"
              >
                <p className="text-[#00c06f] font-mono text-[10px] tracking-[1em] uppercase mb-4 opacity-60 italic">Architectural Concept Completed</p>
                <h3 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter italic leading-none">Tiny House V1</h3>
              </motion.div>
            </motion.div>

            {/* REVIEWS MARQUEE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1.5 }}
              className="relative mt-32 w-full flex flex-col items-center justify-center overflow-hidden"
            >
              <Marquee pauseOnHover className="[--duration:35s]">
                {firstRow.map((review) => <ReviewCard key={review.username} {...review} />)}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:35s] mt-6">
                {secondRow.map((review) => <ReviewCard key={review.username} {...review} />)}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 0.3 }} 
              transition={{ delay: 4 }}
              className="mt-20 text-[#00c06f] font-mono text-[10px] tracking-[1.5em] uppercase"
            >
              "Mission Complete" • "I Did It"
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}