import { format } from "date-fns";

export const usersAccountColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  // {
  //   Header: "Image",
  //   accessor: "image",
  // },
  {
    Header: "Joined At",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return format(new Date(value), "MMMM dd yyyy, p");
    },
  },
];
