import { CircleStackIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import Table from "@/components/Table";
import { PackagesColumn } from "@/components/Table/columns/packages-column";
import useGetData from "@/hooks/useGetData";

function AllPackagesPage() {
  const { data, isLoading, isError, error } = useGetData({
    path: `/sms/package/get`,
  });

  // console.log("data", data);

  // console.log("error", isError);

  const packagesData = data?.data;

  return (
    <PageWrapper
      title="All Packages"
      isLoading={isLoading}
      icon={<CircleStackIcon />}
    >
      {packagesData && (
        <Table columnsHeading={PackagesColumn} usersData={packagesData} />
      )}
    </PageWrapper>
  );
}

export default AllPackagesPage;
