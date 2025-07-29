import { NavigationDictionary } from "../interfaces/navigationDictionary";
import Image from "next/image";

const navItems: NavigationDictionary = {
  store: { label: "Store", url: "/store" },
  mac: { label: "Mac", url: "/mac" },
  ipad: { label: "iPad", url: "/ipad" },
  iphone: { label: "iPhone", url: "/iphone" },
  watch: { label: "Watch", url: "/watch" },
  vision: { label: "Vision", url: "/vision" },
  airpods: { label: "AirPods", url: "/airpods" },
  tvhome: { label: "TV & Home", url: "/tv-home" },
  entertainment: { label: "Entertainment", url: "/entertainment" },
  accessories: { label: "Accessories", url: "/accessories" },
  support: { label: "Support", url: "/support" },
};

export default function NavBar() {
  return (
    <nav className="bg-[#f5f5f7] border-b border-gray-300 w-full fixed top-12.25 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center h-12">
        <ul className="flex space-x-8 text-gray-800 text-sm font-medium items-center">
          <li>
            <a href="/" className="hover:text-black transition flex items-center">
              <Image
                src="/assets/apple-logo.png"
                alt="Apple Logo"
                width={20}
                height={20}
                priority
              />
            </a>
          </li>
          {Object.entries(navItems).map(([key, { label, url }]) => (
            <li key={key}>
              <a href={url} className="hover:text-black transition">
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="/" className="hover:text-black transition flex items-center">
              <Image
                src="/assets/search-logo.png"
                alt="Search Logo"
                width={20}
                height={20}
                priority
              />
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-black transition flex items-center">
              <Image
                src="/assets/cart-logo.png"
                alt="Cart Logo"
                width={20}
                height={20}
                priority
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
