"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/browser";
import { FiCamera, FiLink, FiCheckCircle } from "react-icons/fi";

export default function QRCodeScanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    if (videoRef.current) {
      codeReader
        .decodeFromVideoDevice(undefined, videoRef.current!, (res, err) => {
          if (res) {
            setResult(res.getText());
            setIsScanning(false);
            (codeReader as any).reset();
          }
        })
        .catch(console.error);
    }

    return () => {
      (codeReader as any).reset();
    };
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-6 text-gray-800">
      <div className="mb-6 text-center">
        <FiCamera className="text-blue-500 mx-auto text-4xl mb-2" />
        <h1 className="text-2xl font-bold">QR Scanner</h1>
        <p className="text-gray-600 text-sm">Scan and see content instantly</p>
      </div>

      <div className="relative border-4 border-blue-400 rounded-xl overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          className="w-[320px] h-[240px] object-cover rounded-xl"
          autoPlay
          muted
        />
        {!isScanning && (
          <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center flex-col">
            <FiCheckCircle className="text-green-500 text-4xl mb-2" />
            <p className="text-green-700 font-semibold">Scan Complete</p>
          </div>
        )}
      </div>

      {result && (
        <div className="mt-6 bg-white px-4 py-3 rounded-xl shadow-md w-full max-w-md flex items-center gap-2 border border-blue-200">
          {result.startsWith("http") && (
            <FiLink className="text-green-500 text-xl" />
          )}
          <span className="break-all text-sm">
            {result.startsWith("http") ? (
              <a
                href={result}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {result}
              </a>
            ) : (
              result
            )}
          </span>
        </div>
      )}

      <button
        onClick={() => window.location.reload()}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md"
      >
        Scan Another
      </button>
    </main>
  );
}
