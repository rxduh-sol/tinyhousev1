"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./ProgressCirlce"; 
import { JOURNEY_STAGES } from "../constants";

// Modular Components
import { BuildHeader } from "./BuildHeader";
import { JourneySpecs } from "./JourneySpecs";
import { JourneyControls } from "./JourneyControls";
import { NotebookFrame } from "./NotebookFrame";
import { TypewriterText } from "./TypewriterText";
import Bg3 from "./bg3.jsx"; 

export default function JourneySection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);
  if (!isMounted) return <LoadingScreen />;

  const currentStage = JOURNEY_STAGES[page];
  const paginate = (dir) => {
    const next = page + dir;
    if (next >= 0 && next < JOURNEY_STAGES.length) setPage([next, dir]);
  };

  return (
    /* ADDED id="journey" AND scroll-mt-24 HERE */
    <section 
      id="journey" 
      className="relative bg-zinc-950 h-screen w-full flex flex-col items-center justify-between py-6 overflow-hidden border-t border-white/5 px-8 scroll-mt-24"
    >
      
      {/* 1. BACKGROUND SHADER */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Bg3 
          color={[0, 0.75, 0.43]} 
          amplitude={4.7}         
          distance={0.3} 
          enableMouseInteraction={true}
        />
      </div>

      {/* 2. FOREGROUND CONTENT */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-between">
        <BuildHeader />

        <div className="relative w-full max-w-[1600px] h-[60vh] flex items-center justify-center -mt-6 mb-2">
          <AnimatePresence initial={true} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={{
                enter: (dir) => ({ 
                    x: dir > 0 ? 800 : -800, 
                    opacity: 0, 
                    filter: "blur(20px)" 
                }),
                center: { x: 0, opacity: 1, filter: "blur(0px)" },
                exit: (dir) => ({ 
                    x: dir < 0 ? 800 : -800, 
                    opacity: 0, 
                    filter: "blur(20px)" 
                })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
              className="absolute inset-0 w-full h-full"
            >
              <NotebookFrame 
                page={page} 
                direction={direction} 
                stageImage={currentStage.image}
              >
                <JourneySpecs 
                  stage={currentStage} 
                  page={page} 
                  TypewriterText={TypewriterText} 
                />
              </NotebookFrame>
            </motion.div>
          </AnimatePresence>
        </div>

        <JourneyControls 
          page={page} 
          total={JOURNEY_STAGES.length} 
          onPaginate={paginate} 
        />
      </div>
      
      <style jsx global>{`
        .btn-3d {
          --color1: #00c06f; --color2: #166534;
          perspective: 1000px; padding: 0.8em 3.2em;
          background: linear-gradient(var(--color1), var(--color2));
          border: none; font-size: 11px; font-weight: 900;
          text-transform: uppercase; letter-spacing: 4px;
          color: #fff; cursor: pointer; transform: rotateX(15deg);
          transform-style: preserve-3d; transition: all 0.3s ease;
        }
        .btn-3d:hover:not(:disabled) { transform: rotateX(0deg) translateY(-5px); filter: brightness(1.2); }
        .btn-3d.back { --color1: #27272a; --color2: #09090b; }
        .btn-3d:disabled { opacity: 0.05; cursor: not-allowed; }
      `}</style>
    </section>
  );
}