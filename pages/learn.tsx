// app/learn/page.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LearnPage() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen px-6 py-10 bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto glassmorphic rounded-xl p-6">
          <h1 className="text-4xl font-bold mb-4">📚 Your Learning Progress</h1>
          <p className="mb-6 text-gray-300">Track your scanned questions and keep learning with videos!</p>

          {/* Sample Progress Section */}
          <div className="bg-white/10 rounded-lg p-4 mb-8">
            <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
            <div className="w-full bg-white/20 rounded-full h-4">
              <div className="bg-blue-500 h-4 rounded-full w-[60%]"></div>
            </div>
            <p className="mt-2 text-sm text-blue-300">60% completed</p>
          </div>

          {/* Sample Scanned Questions Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/10 p-4 rounded-lg shadow-md hover:scale-[1.02] transition">
                <h3 className="font-semibold text-lg mb-2">Question {item}</h3>
                <p className="text-sm text-gray-300">Topic: Some chapter | Status: ✅ Completed</p>
                <button className="mt-3 text-blue-400 hover:underline">Watch Video</button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
