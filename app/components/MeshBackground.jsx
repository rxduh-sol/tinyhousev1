export default function MeshBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <img 
        src="/mesh.png" 
        alt=""
        className="w-full h-full object-cover scale-110 blur-[100px] opacity-40"
      />
      <div className="absolute inset-0 opacity-[0.1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}