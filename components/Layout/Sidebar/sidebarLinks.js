import {
  UsersIcon,
  CurrencyDollarIcon,
  CircleStackIcon,
  Cog6ToothIcon,
  ListBulletIcon,
  ChartPieIcon,
} from "@heroicons/react/24/solid";

export const sidebarLinks = [
  {
    name: "Dashboard",
    link: "/",
    icon: <ChartPieIcon />,
  },
  {
    name: "Users",
    icon: <UsersIcon />,
    subLinks: [
      {
        name: "All Users",
        link: "/users/all-users",
      },
      {
        name: "Add User",
        link: "/users/add-user",
      },
    ],
  },
  {
    name: "Accounts",
    icon: <CurrencyDollarIcon />,
    subLinks: [
      {
        name: "Income",
        link: "/accounts/income",
      },
      {
        name: "Invoice",
        link: "/accounts/invoice",
      },
    ],
  },
  {
    name: "Database",
    icon: <CircleStackIcon />,
    subLinks: [
      {
        name: "Add Data",
        link: "/database/add-data",
      },
      {
        name: "User Data",
        link: "/database/user-data",
      },
      {
        name: "Create Package",
        link: "/database/create-package",
      },
      {
        name: "All Packages",
        link: "/database/all-packages",
      },
    ],
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <Cog6ToothIcon />,
  },
  {
    name: "User Data list",
    link: "/user-data-list",
    icon: <ListBulletIcon />,
  },
];
