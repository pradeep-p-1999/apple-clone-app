import ExploreCard from "../molecules/ExploreCard";
import Image from "next/image";
const benefits = [{
  title: "Apple Watch SE",
  description: "All the essentials. Light on price",
  price: "From $249 or $20.75/mo. for 12 mo.*",
  imageSrc: "/assets/applewatch1.png",
  learnMoreLink: "#",
  buyLink: "#",
  colors: ["#c5c9c6", "#665362", "#cbe6ca"],
},{
  title: "Apple Watch Series 10",
  description: "Thinnest. Biggest display.23 Advanced health features.",
  price: "From $399 or $33.25/mo. for 12 mo.*",
  imageSrc: "/assets/applewatch2.png",
  learnMoreLink: "#",
  buyLink: "#",
  colors: ["#c5c9c6", "#665362"],
},{
  title: "Apple Watch Ultra 2",
  description: "The ultimate sportsand adventure watch.",
  price: "From $799 or $66.58/mo. for 12 mo.*",
  imageSrc: "/assets/applewatch3.png",
  learnMoreLink: "#",
  buyLink: "#",
  colors: ["#c5c9c6", "#33bfcc", "#cc7333"],
}
];
export default function GTKCards() {
  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px] h-[550px] bg-black rounded-2xl overflow-hidden relative text-white">
      <Image        src='/assets/naturestock1.jpg'        alt='Performance and Battery Life'    fill        className="object-cover"      />
      <div className="absolute top-4 left-4 right-4">
        <h3 className="text-xs font-semibold">Performance and Battery Life</h3>
        <p className="text-xl font-bold mt-1">Go fast. Go far.</p>
      </div>
      <div className="absolute bottom-4 right-4 bg-[#3338] rounded-full p-2">
        <span className="text-white text-xl">+</span>
      </div>
    </div>
  );
  



}

