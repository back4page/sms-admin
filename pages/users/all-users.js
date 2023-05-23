import { UsersIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import Table from "@/components/Table";
import { UserListColumn } from "@/components/Table/columns/user-list-column";
import { userListData } from "@/data/userListData";

function AllusersPage() {
  return (
    <PageWrapper title="All Users" icon={<UsersIcon />}>
      <Table columnsHeading={UserListColumn} usersData={userListData} />
    </PageWrapper>
  );
}

export default AllusersPage;
