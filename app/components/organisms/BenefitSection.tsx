import { CreditCard, Repeat1Icon, TruckIcon, VideoIcon } from "lucide-react";

const benefits = [
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Secure Payments",
    description: "Make secure payments with Apple Pay and enjoy peace of mind.",
  },{
    icon: <TruckIcon className="w-6 h-6" />,
    title: "Secure Payments",
    description: "Make secure payments with Apple Pay and enjoy peace of mind.",
  },{
    icon: <VideoIcon className="w-6 h-6" />,
    title: "Secure Payments",
    description: "Make secure payments with Apple Pay and enjoy peace of mind.",
  },{
    icon: <Repeat1Icon className="w-6 h-6" />,
    title: "Secure Payments",
    description: "Make secure payments with Apple Pay and enjoy peace of mind.",
  },{
    icon: <CreditCard className="w-6 h-6" />,
    title: "Secure Payments",
    description: "Make secure payments with Apple Pay and enjoy peace of mind.",
  },{
    icon: <CreditCard className="w-6 h-6" />,
    title: "Secure Payments",
    description: "Make secure payments with Apple Pay and enjoy peace of mind.",
  },
];
export default function BenefitSection() {
  return (
    <section className="bg-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold max-w-lg">
            why apple is best
            place to buy your next device
          </h2>
          <a href="#" className="text-blue-600 text-sm"> shop apple watch </a>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>  
      </div>
    </section>
  );
}
import BenefitCard from "../molecules/BenefitCard";