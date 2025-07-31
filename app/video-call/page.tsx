"use client";
import React, { useEffect, useRef, useState } from "react";
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";

const SIGNALR_URL = "http://localhost:32771/videoHub"; // Use your backend IP if needed
const ROOM_ID = "room1";

export default function VideoCall() {
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);
  const [connection, setConnection] = useState<HubConnection | null>(null);

  // Setup SignalR and WebRTC
  useEffect(() => {
    let stream: MediaStream | null = null;
    let signalRConnection: HubConnection | null = null;

    async function setupSignalR() {
      signalRConnection = new HubConnectionBuilder()
        .withUrl(SIGNALR_URL)
        .withAutomaticReconnect()
        .build();

      await signalRConnection.start();
      await signalRConnection.invoke("JoinRoom", ROOM_ID);

      // Offer received from other peer
      signalRConnection.on("ReceiveOffer", async (sdp: RTCSessionDescriptionInit) => {
        await peerConnection.current?.setRemoteDescription(new RTCSessionDescription(sdp));
        const answer = await peerConnection.current?.createAnswer();
        await peerConnection.current?.setLocalDescription(answer!);
        if (signalRConnection) {
          await signalRConnection.invoke("SendAnswer", ROOM_ID, answer);
        }
      });

      // Answer received from other peer
      signalRConnection.on("ReceiveAnswer", async (sdp: RTCSessionDescriptionInit) => {
        await peerConnection.current?.setRemoteDescription(new RTCSessionDescription(sdp));
      });

      // ICE candidate received from other peer
      signalRConnection.on("ReceiveIceCandidate", async (candidate: RTCIceCandidateInit) => {
        await peerConnection.current?.addIceCandidate(new RTCIceCandidate(candidate));
      });

      setConnection(signalRConnection);
    }

    async function setupWebcamAndPeer() {
      try {
        if (!navigator.mediaDevices?.getUserMedia) {
          alert("Webcam not supported in this browser.");
          return;
        }
        stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        peerConnection.current = new RTCPeerConnection();

        stream.getTracks().forEach(track =>
          peerConnection.current!.addTrack(track, stream!)
        );

        peerConnection.current.ontrack = (event) => {
          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0];
          }
        };

        peerConnection.current.onicecandidate = (event) => {
          if (event.candidate && connection) {
            connection.invoke("SendIceCandidate", ROOM_ID, event.candidate);
          }
        };

        await setupSignalR();
      } catch (err) {
        alert("Error accessing webcam. Please check permissions.");
        console.error("Error accessing webcam:", err);
      }
    }

    setupWebcamAndPeer();

    return () => {
      if (stream) stream.getTracks().forEach(track => track.stop());
      if (peerConnection.current) peerConnection.current.close();
      if (signalRConnection) signalRConnection.stop();
    };
  }, []);

  // Start call (send offer)
  const startCall = async () => {
    if (peerConnection.current && connection) {
      const offer = await peerConnection.current.createOffer();
      await peerConnection.current.setLocalDescription(offer);
      await connection.invoke("SendOffer", ROOM_ID, offer);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 flex flex-col items-center justify-center font-sans px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-lg">Omegle Video Call</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-4xl">
        {/* Local Video */}
        <div className="bg-black/80 rounded-xl shadow-2xl p-4 flex flex-col items-center w-full md:w-1/2">
          <video
            ref={localVideoRef}
            className="w-full h-56 md:h-64 rounded-lg bg-gray-700 mb-2 object-cover"
            autoPlay
            muted
            playsInline
          />
          <span className="text-white text-sm font-semibold">You</span>
        </div>
        {/* Remote Video */}
        <div className="bg-black/80 rounded-xl shadow-2xl p-4 flex flex-col items-center w-full md:w-1/2">
          <video
            ref={remoteVideoRef}
            className="w-full h-56 md:h-64 rounded-lg bg-gray-700 mb-2 object-cover"
            autoPlay
            playsInline
          />
          <span className="text-white text-sm font-semibold">Stranger</span>
        </div>
      </div>
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow transition"
          onClick={startCall}
        >
          Start
        </button>
        {/* End/Next buttons can be implemented as needed */}
      </div>
      <p className="mt-8 text-gray-300 text-sm text-center max-w-md">
        Connect with random strangers for a video chat.<br />
        <span className="font-semibold text-blue-300">Click "Start" to begin, "End" to stop, or "Next" to find a new stranger.</span>
      </p>
    </div>
  );
}