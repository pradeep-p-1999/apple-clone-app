import FloatingNav from "../atoms/FloatingNav";
import ExploreCard from "../molecules/ExploreCard";

export default function FloatingNavSection({navOptions}: {navOptions: string[]}) {
  return (<>
  
  <FloatingNav navOptions={navOptions} />
  
  </>
  );
}

