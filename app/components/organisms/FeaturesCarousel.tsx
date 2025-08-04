"use client";

import { useEffect, useRef } from "react";

const images = [
  {
    src: "/assets/naturestock1.jpg",
    title: "Seth Rogen: The Zane Lowe Interview",
    tag: "Music",
  },
  {
    src: "/assets/naturestock2.jpg",
    title: "PGA TOUR Pro Golf",
    tag: "Arcade",
  },
  {
    src: "/assets/naturestock3.jpg",
    title: "Strength with Gregg",
    tag: "Fitness+",
  },
  { src: "/assets/naturestock4.jpg", title: "A-List Pop", tag: "Music" },
  { src: "/assets/naturestock5.jpg", title: "Balatro", tag: "Arcade" },
  {
    src: "/assets/naturestock6.png",
    title: "Strong and Calm Combos for Busy Devs",
    tag: "Fitness+",
  },
];

export default function AutoScrollCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = 1;
    let requestId: number;

    const autoScroll = () => {
      if (!container) return;

      container.scrollLeft += scrollStep;

      const scrollableWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= scrollableWidth) {
        container.scrollLeft -= scrollableWidth;
      }

      requestId = requestAnimationFrame(autoScroll);
    };

    requestId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(requestId);
  }, []);

  const loopImages = [...images, ...images]; // for infinite scroll

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 whitespace-nowrap overflow-x-auto scroll-smooth no-scrollbar touch-pan-x"
      >
        {loopImages.map((item, idx) => (
          <div
            key={idx}
            className="relative min-w-[70vw] sm:min-w-[250px] h-[160px] sm:h-[140px] flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <button className="bg-white text-black px-4 py-1 rounded-full text-xs sm:text-sm shadow hover:bg-gray-100">
                Watch now
              </button>
            </div>
            <div className="absolute bottom-2 left-2 text-white text-xs sm:text-sm z-10">
              <div className="font-semibold">{item.title}</div>
              <div className="text-[10px] sm:text-xs opacity-80"> {item.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
