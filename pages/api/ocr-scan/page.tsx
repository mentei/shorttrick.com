import OCRScanner from "@/components/OCRScanner";
export default function OCRScanPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">📷 Scan Question</h1>
      <OCRScanner />
    </div>
  );
}
