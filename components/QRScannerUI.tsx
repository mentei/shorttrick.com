import Image from "next/image";

export default function QRScannerUI() {
  return (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-xl shadow-2xl w-full max-w-sm">
      <h2 className="text-xl font-semibold text-white text-center mb-4">📷 Scan QR to Begin</h2>
      <Image
        src="/qr-scan.png"
        alt="QR Code"
        width={192} // w-48 = 12rem = 192px
        height={192} // h-48 = 192px
        className="mx-auto"
      />
      <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-xl">
        Start Scanning
      </button>
    </div>
  );
}
