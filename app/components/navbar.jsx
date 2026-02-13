"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  const navVariants = {
    hidden: { width: "100px", opacity: 0, y: -20 },
    visible: { 
      width: "100%", 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], 
        delay: 0.2,
        when: "beforeChildren", 
        staggerChildren: 0.1    
      }
    }
  };

  const linkVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Updated navigation mapping
  const navLinks = [
    { name: 'Client', id: 'client' },
    { name: 'Build Journal', id: 'journey' },
    { name: 'Sustainability', id: 'sustainability' },
  ];

  return (
    <div className="fixed top-8 left-0 w-full z-[100] flex justify-center px-6 pointer-events-none">
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full h-[68px] flex justify-between items-center bg-zinc-900/40 backdrop-blur-3xl rounded-full border border-white/10 px-8 shadow-2xl pointer-events-auto"
      >
        {/* LOGO SECTION */}
        <div 
          className="flex items-center gap-4 flex-shrink-0 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="https://i.postimg.cc/cJwJhjgV/Blue-Black-Modern-House-Logo-Design-removebg-preview.png" 
            alt="Logo" 
            className="h-9 w-auto brightness-125" 
          />
          <span className="font-bold tracking-[0.3em] text-[11px] uppercase text-white font-poppins">
            Tiny House <span className="text-[#00c06f] ml-1"></span>
          </span>
        </div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-12 text-[9px] uppercase tracking-[0.4em] font-bold text-white/40 font-poppins">
          {navLinks.map((link) => (
            <motion.li 
              key={link.id}
              variants={linkVariants}
              whileHover={{ y: -2, color: "#fff" }}
              onClick={() => scrollToSection(link.id)}
              className="cursor-pointer transition-all hover:text-white relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#00c06f] transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}
        </ul>

        {/* CALL TO ACTION BUTTON */}
        <motion.button
          variants={linkVariants}
          whileHover={{ scale: 1.05, backgroundColor: "#00e082" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('reveal')}
          className="bg-[#00c06f] text-black text-[10px] font-black uppercase px-8 py-2.5 rounded-full tracking-[0.2em] shadow-[0_0_20px_rgba(0,192,111,0.3)] transition-all"
        >
          Final Concept
        </motion.button>
      </motion.nav>
    </div>
  );
}