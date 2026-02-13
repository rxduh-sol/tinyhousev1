// components/SketchbookPage.jsx
export default function SketchbookPage({ children, rotation = 0 }) {
  return (
    <div 
      style={{ 
        transform: `rotate(${rotation}deg)`,
        backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
        backgroundSize: '20px 20px' 
      }}
      className="relative w-full min-h-[500px] bg-zinc-900 border border-white/10 rounded-sm shadow-2xl p-8 mb-[20vh]"
    >
      {/* Tape Effect on Corners */}
      <div className="absolute -top-2 -left-4 w-12 h-6 bg-white/10 -rotate-45 backdrop-blur-sm border border-white/5" />
      <div className="absolute -bottom-2 -right-4 w-12 h-6 bg-white/10 -rotate-45 backdrop-blur-sm border border-white/5" />
      
      {children}
    </div>
  );
}