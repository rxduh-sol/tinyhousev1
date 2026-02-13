"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Components
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero";
import MeshBackground from "./components/MeshBackground";
import SectionHeader from "./components/SectionHeader";
import BriefContent from "./components/BriefContent";
import ClientTab from "./components/ClientWindow";
import JourneySection from "./components/JourneySection";
import EnergyDossier from "./components/EnergyDossier";
import FinalReveal from "./components/FinalReveal"; 
import Preloader from "./components/Preloader"; 

// Data
import { STAKEHOLDERS } from "./constants";

export default function Home() {
  const [stack, setStack] = useState(STAKEHOLDERS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setStack((prev) => prev.slice(1));
    if (stack.length === 1) {
      setTimeout(() => setStack(STAKEHOLDERS), 1500);
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col selection:bg-[#00c06f]/30 overflow-clip bg-black text-white">
      
      <Preloader isLoaded={isLoaded} />

      <motion.div
        initial={{ filter: "blur(20px)", opacity: 0 }}
        animate={{ 
          filter: isLoaded ? "blur(0px)" : "blur(20px)",
          opacity: isLoaded ? 1 : 0 
        }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />

        {/* PAGE 1: HERO */}
        <section className="relative w-full overflow-hidden">
          <Hero isLoaded={isLoaded} />
        </section>

        {/* PAGE 2: MESH & BRIEF */}
        <section id="client" className="relative z-20 min-h-screen py-40 px-10 bg-zinc-950 scroll-mt-32">
          <MeshBackground />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 h-[600px] relative">
              {/* FIX: Added empty title and highlight props to satisfy TypeScript */}
              <SectionHeader 
                tag="Pre-Design" 
                italicSubtitle="Client Profile" 
                title="" 
                highlight="" 
              />
              
              <div className="relative h-full w-full">
                <AnimatePresence mode="popLayout">
                  {stack.map((person, index) => (
                    <ClientTab 
                      key={person.id}
                      client={person}
                      index={index}
                      isTop={index === 0}
                      onDismiss={handleDismiss}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block lg:col-span-1 h-[600px] flex justify-center">
              <div className="w-[1px] bg-white/5 h-full relative">
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="w-full bg-gradient-to-b from-transparent via-[#00c06f]/50 to-transparent" 
                />
              </div>
            </div>

            <div className="lg:col-span-6 pl-8">
              <SectionHeader 
                tag="Academic Process" 
                title="The Design" 
                highlight="Brief." 
                italicSubtitle="" 
              />
              <BriefContent />
            </div>
          </div>
        </section>

        <div className="relative z-10">
          <JourneySection isLoaded={isLoaded} />
        </div>

        <div className="relative z-10">
          <EnergyDossier isLoaded={isLoaded} />
        </div>

        <div className="relative z-10">
          <FinalReveal isLoaded={isLoaded} />
        </div>

        <footer className="relative z-10 py-20 bg-zinc-950 flex flex-col items-center justify-center border-t border-white/5">
          <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em]">
            Thats kinda it guys. Thanks, Manhiru
          </p>
          <div className="w-1 h-1 bg-[#00c06f] rounded-full mt-4 shadow-[0_0_10px_#00c06f]" />
        </footer>
      </motion.div>
    </main>
  );
}