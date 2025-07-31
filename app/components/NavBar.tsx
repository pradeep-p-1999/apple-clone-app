import { navItems } from "../data/navItems";
import Image from "next/image";

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
