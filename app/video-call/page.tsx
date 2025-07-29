"use client";
import React, { useEffect, useRef } from "react";

export default function VideoCall() {
  const localVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    async function getWebcam() {
      try {
        if (typeof navigator !== "undefined" && navigator.mediaDevices?.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
          if (localVideoRef.current) {
            localVideoRef.current.srcObject = stream;
          }
        } else {
          console.error("getUserMedia is not supported in this environment.");
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    }
    getWebcam();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex flex-col items-center justify-center font-sans">
      <h1 className="text-4xl font-bold text-white mb-8">Omegle Video Call</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Local Video */}
        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col items-center">
          <video
            ref={localVideoRef}
            className="w-64 h-40 rounded-lg bg-gray-700 mb-2"
            autoPlay
            muted
            playsInline
          />
          <span className="text-white text-sm">You</span>
        </div>
        {/* Remote Video */}
        <div className="bg-black rounded-lg shadow-lg p-4 flex flex-col items-center">
          <video
            className="w-64 h-40 rounded-lg bg-gray-700 mb-2"
            autoPlay
            playsInline
          />
          <span className="text-white text-sm">Stranger</span>
        </div>
      </div>
      <div className="mt-10 flex gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition">
          Start
        </button>
        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow transition">
          End
        </button>
        <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded shadow transition">
          Next
        </button>
      </div>
      <p className="mt-8 text-gray-300 text-sm text-center max-w-md">
        Connect with random strangers for a video chat. Click "Start" to begin, "End" to stop, or "Next" to find a new stranger.
      </p>
    </div>
  );
}