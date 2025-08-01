
import BenefitSection from "../organisms/BenefitSection";
import DropdownActionButton from "../organisms/DropdownActionButton";
import ExploreSection from "../organisms/ExploreSection";
import FloatingNavSection from "../organisms/FloatingNavSection";
import GTKCards from "../organisms/GTKCards";

export default function Container() {
  const navOptionValues = [
    "Downloads",
    "Products",
    "Specs",
];
  return (
    <div className="flex flex-col">
      <BenefitSection></BenefitSection>
      <ExploreSection></ExploreSection>
      <GTKCards></GTKCards>
      <FloatingNavSection navOptions={navOptionValues}></FloatingNavSection>
      <DropdownActionButton mode={"primary"}></DropdownActionButton>
    </div>
  );
}
