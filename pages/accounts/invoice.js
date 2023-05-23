import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";

function InvoicePage() {
  return (
    <PageWrapper title="Invoice" icon={<CurrencyDollarIcon />}>
      <ContentWrapper>
        <div className="">InvoicePage</div>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default InvoicePage;
