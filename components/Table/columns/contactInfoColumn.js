import { format } from "date-fns";

export const contactInfoColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone No",
    accessor: "number",
  },
  {
    Header: "Country",
    accessor: "country",
  },
  {
    Header: "Time",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return format(new Date(value), "MMMM dd yyyy, p");
    },
  },
];
