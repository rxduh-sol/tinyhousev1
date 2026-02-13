"use client";
import { useState, useEffect } from "react";

export const TypewriterText = ({ text, className, delay = 0 }) => {
  const [displayChar, setDisplayChar] = useState("");
  useEffect(() => {
    let i = 0; setDisplayChar("");
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayChar(text.substring(0, i));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 15);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay]);
  return <span className={className}>{displayChar}</span>;
};