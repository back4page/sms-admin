import { HomeIcon } from "@heroicons/react/24/solid";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import Cards from "../components/Cards";
// import { useSession } from "next-auth/react";

function HomePage() {
  // const { data: session } = useSession();

  // console.log("session", session);

  return (
    <PageWrapper title="Dashboard" icon={<HomeIcon />}>
      <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 ">
        <Cards />
      </div>
    </PageWrapper>
  );
}

export default HomePage;
