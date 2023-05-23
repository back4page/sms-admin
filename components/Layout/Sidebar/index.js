import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

function Sidebar({ showMenu, setShowMenu, node, name, navLinks }) {
  // const [role, setRole] = useState("root");
  const router = useRouter();
  const [showSubMenu, setShowSubMenu] = useState("");

  // console.log("usersession", data);

  // const username = data?.user?.username;

  // const [active, setActive] = useState("");

  const activeClass = (path) => {
    // router.pathname === path
    if (router.pathname === path) {
      return "bg-custom-blue5 text-white";
    }
    // if (router.pathname.includes(path)) {
    //   return "bg-custom-blue5 text-white";
    // }

    return "text-custom-blue2 hover:text-white hover:bg-custom-blue5";
  };

  const activeSubLinkClass = (navLink, i) => {
    const value = navLink.subLinks.find(
      (subLink) => subLink.link === router.pathname
    );

    // if (router.pathname === value?.link) {
    if (router.pathname === value?.link && showSubMenu !== i) {
      return "bg-custom-blue5 text-white";
    }

    return "text-custom-blue2 hover:text-white hover:bg-custom-blue5";
  };

  const menu = (index) => {
    if (showSubMenu === index) {
      return setShowSubMenu(null);
    }
    setShowSubMenu(index);
  };

  // useEffect(() => {
  //   if (showMenu) {
  //     document.body.classList.add("overflow-y-hidden");
  //   }

  //   return () => document.body.classList.remove("overflow-y-hidden");
  // }, [showMenu]);

  return (
    <div
      className={`
        ${
          showMenu
            ? "fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:bg-transparent"
            : ""
        }
      `}
    >
      <div
        ref={node}
        className={`h-screen bg-custom-blue z-30 top-0 bottom-0 fixed lg:sticky sidebar text-white lg:translate-x-0 w-[264px] ease-out duration-300 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }
      `}
      >
        <div className=" items-center gap-10">
          <div className="text-white py-[16px] font-semibold flex justify-between items-center">
            <h1 className="pl-6 text-xl lg:text-2xl">SMS Dashboard</h1>
            <span
              className="p-1 mr-5 rounded-full border-2 border-custom-blue2 text-custom-blue2 lg:hidden"
              onClick={() => setShowMenu(!showMenu)}
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </span>
          </div>

          <div className="mt-3 mx-3 space-y-2">
            {navLinks?.map((navLink, i) => (
              <div key={i} className="">
                {!navLink.subLinks ? (
                  <Link href={navLink.link} passHref>
                    <div
                      // key={i}
                      className={`px-3 py-3 flex justify-between items-center font-semibold transition duration-300 rounded-md ${activeClass(
                        navLink.link
                      )}`}
                      // onClick={() => setShowSubMenu("")}
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-[18px] w-[18px]">
                          {navLink.icon}
                        </span>

                        <p className="text-[13px]">{navLink.name}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div
                    onClick={() => menu(i)}
                    className={`px-3 py-3 font-semibold transition duration-300 rounded-md cursor-pointer ${activeSubLinkClass(
                      navLink,
                      i
                    )}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="h-4 w-4">{navLink.icon}</span>
                        <p className="text-sm">{navLink.name}</p>
                      </div>

                      <span
                        className={
                          showSubMenu === i ? "rotate-180" : "rotate-0"
                        }
                      >
                        <ChevronDownIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                )}
                {showSubMenu === i && (
                  <div className="pt-2 space-y-2">
                    {navLink.subLinks.map((subLink, i) => (
                      <div key={i} className="">
                        <Link href={subLink.link}>
                          <p
                            className={`text-sm px-14 py-3 flex justify-between items-center font-semibold transition duration-300 rounded-md ${
                              router.pathname === subLink.link
                                ? "bg-custom-blue5 text-white"
                                : "text-custom-blue2 hover:text-white hover:bg-custom-blue5"
                            }`}
                          >
                            {subLink.name}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
