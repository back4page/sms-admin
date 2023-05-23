import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import ContentWrapper from "@/components/Wrappers/ContentWrapper";

function SettingsPage() {
  return (
    <PageWrapper title="Settings" icon={<Cog6ToothIcon />}>
      <ContentWrapper>
        <div className="">Settings Page</div>
      </ContentWrapper>
    </PageWrapper>
  );
}

export default SettingsPage;
