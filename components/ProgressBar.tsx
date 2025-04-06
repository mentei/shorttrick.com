// components/ProgressBar.tsx

export default function ProgressBar({ progress = 45 }) {
    return (
      <div className="w-full mt-6 bg-white/10 border border-white/20 backdrop-blur-md rounded-full h-6 shadow-inner overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }
  