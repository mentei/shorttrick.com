import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to ShortTrick</h1>
        <p className="mt-2">Scan questions, learn with videos, and track your progress!</p>
      </main>


      <Footer />

  
    </div>
  );
}