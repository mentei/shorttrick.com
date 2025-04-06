import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QRScannerUI from "@/components/QRScannerUI";
import ChatBox from "@/components/ChatBox";
import ProgressBar from "@/components/ProgressBar";


export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] min-h-screen text-white relative">
      <Navbar />
      
      <main className="pt-24 pb-16 px-6 relative z-10">
        <section className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 rounded-3xl shadow-xl">
            <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Welcome to ShortTrick 🚀
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Scan questions, learn with videos, and track your progress like a pro.
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <QRScannerUI />
          </div>
        </section>
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
  JUst made your way to  solve problem  
</h1>
<p className="mt-4 text-lg text-white/80">
  I Am  a short_trick  creator 👍
</p>

<ProgressBar progress={60} /> {/* You can pass any progress value */}


        <ChatBox />

      </main>

      <Footer />
    </div>
  );
}
