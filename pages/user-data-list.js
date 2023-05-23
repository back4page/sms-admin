import { ListBulletIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";

function UserDataListpage() {
  return (
    <PageWrapper title="User Data List" icon={<ListBulletIcon />}>
      <ContentWrapper>
        <div className="">Users Data List Page</div>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default UserDataListpage;
