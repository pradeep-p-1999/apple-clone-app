import Image from "next/image";
import { User } from "./interfaces/index";
import FeaturesCarousel from "./components/organisms/FeaturesCarousel";
import HomeGrid from "./components/organisms/HomeGrid";

export default function Home() {
  //typed User modal
  const user: User = {
    name: "Pradeep",
    age: 25,
    gender: "male",
  };

  // function
  function returnGender(): string {
    return user.gender;
  }

  //function without type
  function identity<X>(value: X): X {
    return value;
  }

  //identiy - local function
  const product = identity<string>("MSI sword");

  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex flex-col items-center justify-start p-8 text-center">
        <h1 className="text-2xl font-bold">Welcome to the Apple Clone App</h1>
        <p className="mt-4">
          User: {user.name}, Age: {user.age}, Gender: {returnGender()}
        </p>
        <p className="mt-4">Product: {product}</p>
      </section>
<HomeGrid />
      {/* Full-width carousel section */}
      <section className="w-full overflow-hidden">
        <FeaturesCarousel />
      </section>
      
    </main>
  );
}
