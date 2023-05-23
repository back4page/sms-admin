import { UsersIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";
import UserForm from "@/components/Forms/UserForm";

function AddUserPage() {
  return (
    <PageWrapper title="Add New User" icon={<UsersIcon />}>
      <ContentWrapper>
        <UserForm />
      </ContentWrapper>
    </PageWrapper>
  );
}

export default AddUserPage;
