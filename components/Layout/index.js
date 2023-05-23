import Header from "./Header";
import Sidebar from "./Sidebar";
import { Router, useRouter } from "next/router";
import { sidebarLinks } from "./Sidebar/sidebarLinks";
import useToggle from "@/hooks/useToggle";
import HeadSection from "./HeadSection";
import { useSession } from "next-auth/react";

function Layout({ children }) {
  const { toggle: showMenu, setToggle: setShowMenu, node } = useToggle();

  Router.events.on("routeChangeStart", (url) => {
    setShowMenu(false);
  });

  const { pathname } = useRouter();
  const { data: session } = useSession();

  if (pathname === "/sign-in") {
    return <>{children}</>;
  }

  if (pathname === "/404" && !session) {
    return <>{children}</>;
  }

  return (
    <>
      <HeadSection />
      <div className="lg:flex">
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          node={node}
          navLinks={sidebarLinks}
        />

        <div className="lg:flex-1">
          <Header showMenu={showMenu} setShowMenu={setShowMenu} />

          <div className="py-12 px-2 lg:px-16 2xl:px-20">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Layout;
