"use client";

import React, { useState } from "react";

const OCRScan = () => {
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleScan = async () => {
    if (!image) return;

    setLoading(true);
    // Simulate OCR Process (replace with actual API)
    setTimeout(() => {
      setText("Q. What is the difference between HTTP and HTTPS?");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">📸 OCR Scanner</h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="mb-4"
        />

        <button
          onClick={handleScan}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          {loading ? "Scanning..." : "Start Scan"}
        </button>

        {text && (
          <div className="mt-6">
            <h2 className="font-semibold mb-2">Extracted Question:</h2>
            <p className="bg-gray-200 p-4 rounded text-black">{text}</p>

            <div className="mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                📺 Learn with Video
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OCRScan;
