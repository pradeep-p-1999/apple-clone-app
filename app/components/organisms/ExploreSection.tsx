import ExploreCard from "../molecules/ExploreCard";
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
export default function ExploreSection() {
  return (
    <section className="bg-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold max-w-lg">
            Explore the lineup.
          </h2>
          <a href="#" className="text-blue-600 text-sm">Compare all models </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((x, index) => (
            <ExploreCard
              key={index}
              title={x.title}
              description={x.description}
              price={x.price}
              imageSrc={x.imageSrc}
              learnMoreLink={x.learnMoreLink}
              buyLink={x.buyLink}
              colors={x.colors} // Example color options
            />
          ))}
          </div>
      </div>
    </section>
  );
}

