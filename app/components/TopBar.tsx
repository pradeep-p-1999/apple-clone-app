"use client";
import { useState } from "react";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("India");
  const [showAltNav, setShowAltNav] = useState(false);

  const countries = ["India", "United States", "United Kingdom", "Canada", "Australia"];

  if (showAltNav) {
    return (
      <nav className="bg-[#f5f5f7] border-b border-gray-300 w-full  sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center h-12">
          <ul className="flex space-x-8 text-gray-800 text-sm font-medium items-center">
            <li>
              <a href="/" className="hover:text-blue-600 transition">Home</a>
            </li>
            <li>
              <a href="/test" className="hover:text-blue-600 transition">Test</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-[#f5f5f7] border-b border-gray-300 w-full   sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center h-12">
        <ul className="flex space-x-8 text-gray-800 text-sm font-medium items-center">
          <li>
            <span>
              Choose another country or region to see content specific to your location and shop online.
            </span>
          </li>
          <li className="relative">
            <button
              className="flex items-center bg-white border rounded-full px-4 py-1 shadow hover:bg-gray-100 transition"
              onClick={() => setOpen(!open)}
            >
              <span className="mr-2">{country}</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {open && (
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow z-10">
                {countries.map((c) => (
                  <div
                    key={c}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${c === country ? "font-bold" : ""}`}
                    onClick={() => {
                      setCountry(c);
                      setOpen(false);
                    }}
                  >
                    {c}
                  </div>
                ))}
              </div>
            )}
          </li>
          <li>
            <button className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800 transition">Continue</button>
          </li>
          <li>
            <button
              className="text-gray-500 text-xl px-2 hover:text-black transition"
              onClick={() => setShowAltNav(true)}
            >
              ×
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}