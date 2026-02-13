// components/sustainability/BentoCard.jsx
import { cn } from "@/lib/utils";

export default function BentoCard({ children, className, imgSrc, tag }) {
  return (
    <div className={cn(
      "relative group rounded-[40px] overflow-hidden border border-white/10 bg-zinc-950/50",
      className
    )}>
      {imgSrc && (
        <img 
          src={imgSrc} 
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000" 
          alt={tag}
        />
      )}
      <div className="relative z-10 p-10 h-full flex flex-col justify-between">
        {tag && (
          <span className="text-[#00c06f] font-mono text-[10px] tracking-[0.3em] uppercase mb-4">
            {tag}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}