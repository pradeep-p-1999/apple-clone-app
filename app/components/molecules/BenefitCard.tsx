import { iBenefitCard } from "@/app/interfaces";
import Title from "../atoms/Title";
import IconCircle from "../atoms/IconCircle";

export default function BenefitCard({ title, description, icon }: iBenefitCard) {
  return (
    <div className="bg-white rounded-2xl p-6 flex-col justify-between shadow-md h-full hover:shadow-2xl transition-shadow duration-300">
        <div className="text-2xl mb-4">
            {icon}
        </div>
        <div className="flex-1">
            <Title>{title}</Title>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="mt-4 flex justify-end">
            <IconCircle icon="+"></IconCircle>
        </div>
    </div>
  );
}