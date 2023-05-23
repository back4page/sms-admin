import ContentWrapper from "@/components/Wrappers/ContentWrapper";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import { CircleStackIcon } from "@heroicons/react/24/solid";

function UserDataPage() {
  return (
    <PageWrapper title="User Data" icon={<CircleStackIcon />}>
      <ContentWrapper>
        <div className="">User Data page</div>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default UserDataPage;
