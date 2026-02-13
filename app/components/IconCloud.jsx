"use client";
import React, { useEffect, useRef, useState } from "react";

const SDG_IMAGES = [
  "https://i.postimg.cc/Gpd6MFrh/E-WEB-Goal-01.png",
  "https://i.postimg.cc/yNs2fmBk/E-WEB-Goal-02.png",
  "https://i.postimg.cc/Gpd6MFr4/E-WEB-Goal-03.png",
  "https://i.postimg.cc/YSMTX6kG/E-WEB-Goal-04.png",
  "https://i.postimg.cc/25rgHQmq/E-WEB-Goal-05.png",
  "https://i.postimg.cc/hGcNCLg7/E-WEB-Goal-06.png",
  "https://i.postimg.cc/KYxC9PFT/E-WEB-Goal-07.png",
  "https://i.postimg.cc/fbD1HcZX/E-WEB-Goal-08.png",
  "https://i.postimg.cc/yNs2fmBF/E-WEB-Goal-09.png",
  "https://i.postimg.cc/jjtB8HK6/E-WEB-Goal-10.png",
  "https://i.postimg.cc/KYxC9PFr/E-WEB-Goal-11.png",
  "https://i.postimg.cc/CKS9vGYs/E-WEB-Goal-12.png",
  "https://i.postimg.cc/W4Tx9Gjn/E-WEB-Goal-13.png",
  "https://i.postimg.cc/N0BZN6YD/E-WEB-Goal-14.png",
  "https://i.postimg.cc/43sj86Zw/E-WEB-Goal-15.png",
  "https://i.postimg.cc/TP0FBKYb/E-WEB-Goal-16.png",
  "https://i.postimg.cc/vmhkC4H9/E-WEB-Goal-17.png"
];

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function IconCloud() {
  const canvasRef = useRef(null);
  const [iconPositions, setIconPositions] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [targetRotation, setTargetRotation] = useState(null);
  
  const rotationRef = useRef({ x: 0, y: 0 });
  const iconCanvasesRef = useRef([]);
  const imagesLoadedRef = useRef([]);
  const animationFrameRef = useRef(0);

  // 1. Create high-res offscreen canvases for each SDG
  useEffect(() => {
    imagesLoadedRef.current = new Array(SDG_IMAGES.length).fill(false);
    const newIconCanvases = SDG_IMAGES.map((src, index) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = 80; // Larger for clarity
      offscreen.height = 80;
      const offCtx = offscreen.getContext("2d");

      if (offCtx) {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        img.onload = () => {
          offCtx.beginPath();
          offCtx.arc(40, 40, 40, 0, Math.PI * 2);
          offCtx.clip();
          offCtx.drawImage(img, 0, 0, 80, 80);
          imagesLoadedRef.current[index] = true;
        };
      }
      return offscreen;
    });
    iconCanvasesRef.current = newIconCanvases;
  }, []);

  // 2. Map 17 icons to a Fibonacci Sphere
  useEffect(() => {
    const newIcons = [];
    const numIcons = SDG_IMAGES.length;
    const offset = 2 / numIcons;
    const increment = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < numIcons; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      newIcons.push({
        x: Math.cos(phi) * r * 120, // Radius of sphere
        y: y * 120,
        z: Math.sin(phi) * r * 120,
        id: i,
      });
    }
    setIconPositions(newIcons);
  }, []);

  // 3. Optimized Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Automatic drift speed based on mouse distance
      const dx = mousePos.x - centerX;
      const dy = mousePos.y - centerY;
      const speed = 0.002;

      if (!isDragging && !targetRotation) {
        rotationRef.current.x += (dy / canvas.height) * speed;
        rotationRef.current.y += (dx / canvas.width) * speed;
      }

      iconPositions.forEach((icon, index) => {
        const cosX = Math.cos(rotationRef.current.x);
        const sinX = Math.sin(rotationRef.current.x);
        const cosY = Math.cos(rotationRef.current.y);
        const sinY = Math.sin(rotationRef.current.y);

        // 3D rotation math
        const rotatedX = icon.x * cosY - icon.z * sinY;
        const rotatedZ = icon.x * sinY + icon.z * cosY;
        const rotatedY = icon.y * cosX + rotatedZ * sinX;

        const scale = (rotatedZ + 240) / 300; 
        const opacity = Math.max(0.2, Math.min(1, (rotatedZ + 150) / 200));

        if (iconCanvasesRef.current[index] && imagesLoadedRef.current[index]) {
          ctx.save();
          ctx.translate(centerX + rotatedX, centerY + rotatedY);
          ctx.scale(scale, scale);
          ctx.globalAlpha = opacity;
          ctx.drawImage(iconCanvasesRef.current[index], -30, -30, 60, 60);
          ctx.restore();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [iconPositions, mousePos, isDragging]);

  return (
    <div className="flex items-center justify-center w-full h-full p-10">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        onMouseMove={(e) => {
          const rect = canvasRef.current.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        className="cursor-grab active:cursor-grabbing transform-gpu"
      />
    </div>
  );
}