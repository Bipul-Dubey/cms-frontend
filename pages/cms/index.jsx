import CmsPage from "@/components/CMS/CmsPage";
import Features from "@/components/CMS/features";
import Pricing from "@/components/CMS/Pricing";
import WelcomeBox from "@/components/CMS/WelcomeBox";

function CMS({}) {
  return (
    <CmsPage>
      <WelcomeBox />
      <Features />
      <Pricing />
    </CmsPage>
  );
}

export default CMS;
