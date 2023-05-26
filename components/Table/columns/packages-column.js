import DeletePost from "@/components/DeletePost";
import Link from "next/link";
import { format } from "date-fns";

export const PackagesColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Number of SMS",
    accessor: "no_of_sms",
  },
  {
    Header: "Created At",
    accessor: "created_at",
    Cell: ({ value }) => {
      return format(new Date(value), "MMMM dd yyyy, p");
    },
  },
  {
    Header: "Options",
    accessor: "id",
    disableSortBy: true,
    width: 200,
    Cell: ({ row }) => (
      <div className="">
        {/* <div className="flex justify-center items-center gap-2"> */}
        {/* <div className="">
          <Link href={`/posters/details/${row.original._id}`}>
            <button className="bg-cyan-600 text-xs text-white font-semibold px-2 py-1 rounded">
              Details
            </button>
          </Link>
        </div>

        <div className="">
          <Link href={`/posters/edit/${row.original._id}`}>
            <button className="bg-slate-600 text-xs text-white font-semibold px-2 py-1 rounded">
              Edit
            </button>
          </Link>
        </div> */}

        <DeletePost packageInfo={row.original} />
      </div>
    ),
  },
];
