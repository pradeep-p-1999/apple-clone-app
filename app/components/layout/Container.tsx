import BenefitSection from "../organisms/BenefitSection";
import ExploreSection from "../organisms/ExploreSection";

export default function Container() {
  return (
    <div className="flex flex-col">
      <BenefitSection></BenefitSection>
      <ExploreSection></ExploreSection>
    </div>
  );
}
