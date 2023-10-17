import { ChartPieIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import Cards from "../components/Cards";
import { useSession } from "next-auth/react";
import useGetData from "@/hooks/useGetData";

function HomePage() {
  const { data: session } = useSession();

  const id = session?.user?.id;

  // console.log("session", session);

  const {
    data: allCounts,
    isLoading,
    error,
  } = useGetData({ path: `/sms/today/month/total/${id}` });

  // console.log("allCounts", allCounts);

  console.log("error", error);

  return (
    <PageWrapper
      title="Dashboard"
      isLoading={isLoading}
      icon={<ChartPieIcon />}
    >
      <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2">
        {allCounts && <Cards allCounts={allCounts} />}
      </div>
    </PageWrapper>
  );
}

export default HomePage;
