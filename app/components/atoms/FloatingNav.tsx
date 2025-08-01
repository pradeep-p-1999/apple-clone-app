"use client"; // only if using app directory

import React from "react";

export default function FloatingNav({ navOptions }: { navOptions: string[] }) {
  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md shadow-lg rounded-full px-6 py-2 flex gap-4 text-sm text-gray-800">
      {navOptions.map((option, index) => {
        const showDivider = index !== navOptions.length - 1;
        return (
          <React.Fragment key={index}>
            <button className="hover:underline">{option}</button>
            {showDivider && <span>|</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
}
