"use client";
import { useState } from "react";
import Tesseract from "tesseract.js";

const OCRScanner = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOCR = async () => {
    if (!image) return;
    setLoading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      const result = await Tesseract.recognize(reader.result as string, "eng");
      setText(result.data.text);
      setLoading(false);
    };
    reader.readAsDataURL(image);
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-xl max-w-md mx-auto">
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
      <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded" onClick={handleOCR}>
        Scan
      </button>
      {loading && <p className="mt-2">Scanning...</p>}
      {text && <textarea className="w-full mt-2 p-2 border rounded" rows={5} value={text} readOnly />}
    </div>
  );
};

export default OCRScanner;