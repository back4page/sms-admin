import { CircleStackIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";

function CreatePackagepage() {
  return (
    <PageWrapper title="Create Package" icon={<CircleStackIcon />}>
      <ContentWrapper>
        <div className="">Create Package page</div>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default CreatePackagepage;
