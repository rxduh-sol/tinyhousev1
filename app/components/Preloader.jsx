"use client";
import { motion } from "framer-motion";

export default function Preloader({ isLoaded }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoaded ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black pointer-events-none"
    >
      <motion.img
        src="https://i.postimg.cc/cJwJhjgV/Blue-Black-Modern-House-Logo-Design-removebg-preview.png"
        alt="Logo"
        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-20 w-auto brightness-110"
      />
    </motion.div>
  );
}