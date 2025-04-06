import Image from "next/image";

export default function QRScannerUI() {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-2xl w-full max-w-sm">
      <h2 className="text-xl font-semibold text-white text-center mb-4">📷 Scan QR to Begin</h2>
      <img src="/qr-image.png" alt="QR Code" className="mx-auto w-48 h-48" />
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-xl">
        Start Scanning
      </button>
    </div>
  );
}
