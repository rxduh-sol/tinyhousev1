// components/sustainability/TelemetryGraph.jsx
export default function TelemetryGraph() {
  const bars = [40, 70, 45, 90, 65, 80, 30, 55, 40];
  return (
    <div className="flex gap-1 h-12 items-end">
      {bars.map((h, i) => (
        <div 
          key={i} 
          className="flex-1 bg-[#00c06f]/20 rounded-t-sm transition-all duration-500" 
          style={{ height: `${h}%` }} 
        />
      ))}
    </div>
  );
}