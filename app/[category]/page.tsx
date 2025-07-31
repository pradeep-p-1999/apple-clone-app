import { notFound } from "next/navigation";
import { navItems } from "../data/navItems";
import Container from "../components/layout/Container";

export default function CategoryPage({ params }: { params: { category: string } }) {

  if (!navItems[params.category]) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-8">
        {notFound()}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-200 flex items-center justify-center p-0">
      <Container></Container>
    </div>
  );
}