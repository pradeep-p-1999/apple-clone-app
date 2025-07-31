// components/ProductCard.tsx
import { iExploreCard } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "../atoms/LinkButton";
import ColorCirclePallete from "../atoms/ColorCirclePallete";

export default function ProductCard({
  title,
  description,
  price,
  imageSrc,
  learnMoreLink,
  buyLink,
    colors,
}: iExploreCard) {
  return (
    <div className=" text-center p-6 max-w-xs w-full flex flex-col justify-between h-full overflow-hidden">
      <div className="relative w-full h-56 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="mx-auto hover:scale-105 transition-transform duration-300"
        />
        
      </div>
      <div className="flex-1"><ColorCirclePallete colorOptions={colors}  /></div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <p className="text-sm text-gray-800 mt-2">{price}</p>

      <div className="flex justify-center gap-4 mt-4">
        <LinkButton linkAddress={learnMoreLink} linkPlaceholder="Learn More" />
        
        <Link
          href={buyLink}
          className="text-blue-600 text-sm font-medium hover:underline flex items-center"
        >
          Buy ›
        </Link>
      </div>
    </div>
  );
}
