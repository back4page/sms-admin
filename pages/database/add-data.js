import { CircleStackIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";

function AddDataPage() {
  return (
    <PageWrapper title="Add Data" icon={<CircleStackIcon />}>
      <ContentWrapper>
        <div className="">Add Data page</div>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default AddDataPage;
