import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";

function IncomePage() {
  return (
    <PageWrapper title="Income" icon={<CurrencyDollarIcon />}>
      <ContentWrapper>
        <div className="">IncomePage</div>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default IncomePage;
