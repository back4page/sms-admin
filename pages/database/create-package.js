import { useSession } from "next-auth/react";
import { CircleStackIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";
import CreatePackageForm from "@/components/Forms/CreatePackageForm";

function CreatePackagePage() {
  const { data: session } = useSession();
  const id = session?.user?.id;

  return (
    <PageWrapper title="Create Package" icon={<CircleStackIcon />}>
      <ContentWrapper>
        <CreatePackageForm id={id} />
      </ContentWrapper>
    </PageWrapper>
  );
}

export default CreatePackagePage;
