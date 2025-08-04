"use client";
import Image from "next/image";

export default function FeaturesCarousel() {
  const features = [
    {
      title: "MacBook Air",
      description: "Sky blue color. Big-time performance with M4.",
      image: "/assets/macbook.jpg",
      link: "#",
      color: "bg-gradient-to-b from-sky-100 to-white",
      dark: false,
    },
    {
      title: "iPad Pro",
      description: "Unbelievably thin. Incredibly powerful.",
      image: "/assets/ipad.jpg",
      link: "#",
      color: "bg-black",
      dark: true,
    },
    {
      title: "Apple Intelligence",
      description: "Powerful intelligence integrated into your devices.",
      image: "/assets/appleai.jpg",
      link: "#",
      color: "bg-white",
      dark: false,
    },
    {
      title: "Apple Watch",
      description: "The ultimate device for a healthy life.",
      image: "/assets/watch.jpg",
      link: "#",
      color: "bg-gray-100",
      dark: false,
    },
    {
      title: "AirPods Pro 2",
      description: "Now with Adaptive Audio.",
      image: "/assets/airpods.jpg",
      link: "#",
      color: "bg-black",
      dark: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Top Banner Card */}
      <div className="w-full rounded-xl overflow-hidden bg-gradient-to-b from-sky-100 to-white flex flex-col items-center justify-center text-center py-10">
        <div className="z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold">MacBook Air</h1>
          <p className="mt-2 text-sm md:text-lg">
            Sky blue color. Big-time performance with M4.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">
            Learn more
          </button>
        </div>

        <div className="w-full mt-8 flex justify-center">
          <img
            src="/assets/macbook.jpg"
            alt="MacBook"
            className="w-[80%] max-w-[500px] object-contain"
          />
        </div>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {features.slice(1).map((feature, index) => (
          <div
            key={index}
            className={`rounded-xl overflow-hidden ${feature.color} relative flex flex-col justify-between h-[300px]`}
          >
            {/* Image */}
            <Image
              src={feature.image}
              alt={feature.title}
              width={500}
              height={300}
              className="w-full h-full object-cover absolute top-0 left-0 opacity-50"
            />

            {/* Overlay */}
            <div className={`relative p-6 z-10 ${feature.dark ? "text-white" : "text-black"}`}>
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="mt-2 text-sm">{feature.description}</p>
              <a
                href={feature.link}
                className="inline-block mt-4 px-4 py-1 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
