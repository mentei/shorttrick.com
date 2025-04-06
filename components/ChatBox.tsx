// components/ChatBox.tsx

"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react"; // or any icon lib

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white p-3 rounded-full shadow-lg transition-all"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="mt-4 w-80 h-96 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-xl text-white">
          <h3 className="font-semibold mb-2">Ask ShortTrick</h3>
          <input
            type="text"
            placeholder="Type your question..."
            className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-white/60"
          />
          <button className="mt-2 px-4 py-2 bg-blue-500 rounded-lg text-white float-right">
            Send
          </button>
        </div>
      )}
    </div>
  );
}
