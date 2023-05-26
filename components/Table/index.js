import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import { GlobalFilter } from "./GlobalFilter";
// import useToggle from "@/hooks/useToggle";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronUpDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";

function Table({ columnsHeading, usersData }) {
  const columns = useMemo(() => columnsHeading, [columnsHeading]);

  const data = useMemo(() => usersData, [usersData]);

  // const { togggle: active, setToggle: setActive, node } = useToggle();

  // const showMenu = (i) => {
  //   if (active === i) {
  //     return setActive(null);
  //   }

  //   setActive(i);
  // };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    // selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 20 },
      // defaultColumn,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect
    // (hooks) => {
    //   hooks.visibleColumns.push((columns) => [
    //     {
    //       id: "selection",
    //       // Header: ({ getToggleAllRowsSelectedProps }) => (
    //       //   <Checkbox {...getToggleAllRowsSelectedProps()} />
    //       // ),
    //       // Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
    //     },
    //     ...columns,
    //   ]);
    // }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  // const selectedRows = JSON.stringify(
  //   {
  //     selectedFlatRows: selectedFlatRows.map((row) => row.original),
  //   },
  //   null,
  //   2
  // );

  // console.log(selectedRows);

  // const [pageNumber, setPageNumber] = useState(pageIndex + 1);

  // console.log(pageIndex + 1);

  return (
    // <div className="flex flex-col items-stretch  px-7 py-10">
    <div className="bg-white rounded-xl shadow-lg py-10">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="mt-10 flex flex-col items-stretch overflow-x-auto">
        <table {...getTableProps()} className="table-auto text-xs lg:text-base">
          <thead className="">
            {headerGroups.map((headerGroup, i) => (
              <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <th
                    key={i}
                    {...column.getHeaderProps({
                      style: { width: column.width },
                    })}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    // style={{ width: column.width }}
                    className={`px-4 py-3 text-sm capitalize hover:bg-cyan-200 transition-colors duration-200`}
                  >
                    {/* <span
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  > */}
                    <div className="flex items-center select-none">
                      {column.render("Header")}
                      {/* </span> */}
                      <span className="inline-block px-2">
                        {!column.disableSortBy && (
                          <div className="h-4 w-4">
                            {column.isSorted ? (
                              <span className="">
                                {column.isSortedDesc ? (
                                  <ChevronDownIcon />
                                ) : (
                                  <ChevronUpIcon />
                                )}
                              </span>
                            ) : (
                              // <FaSort />
                              <ChevronUpDownIcon />
                            )}
                          </div>
                        )}
                      </span>
                    </div>
                    {/* <div className="mt-2 text-black font-normal">
                      {column.canFilter ? column.render("Filter") : null}
                    </div> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  key={i}
                  {...row.getRowProps()}
                  className={"hover:bg-cyan-50 transition duration-200"}
                  // className={`hover:bg-cyan-50 transition duration-200 ${
                  //   active === i && "bg-cyan-50"
                  // }`}
                >
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        key={i}
                        {...cell.getCellProps()}
                        className="px-4 py-3 text-sm text-gray-700 lg:break-all font-semibold border-collapse border border-x-0 border-y-gray-100"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-7 text-sm">
        <div className="">
          <span className="text-sm">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
        </div>

        <div className="space-x-5">
          <span>
            Rows per page:{" "}
            <select
              className="outline-none w-12 border border-slate-300"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[20, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </span>

          <span>
            Go to page:{" "}
            <input
              type="number"
              min="1"
              max={pageOptions.length}
              className="w-10 outline-none border border-slate-500"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </span>
        </div>

        <div className="flex gap-1">
          <button
            className="p-1 text-sm rounded-sm bg-cyan-300 disabled:opacity-50"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <ChevronDoubleLeftIcon className="h-4 w-4" />
          </button>
          <button
            className="bg-cyan-300 active:bg-cyan-400 px-3 py-1 rounded-sm text-sm disabled:opacity-50"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className="bg-cyan-300 active:bg-cyan-400 px-3 py-1 rounded-sm text-sm disabled:opacity-50"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className="p-1 text-sm rounded-sm  bg-cyan-300 disabled:opacity-50"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <ChevronDoubleRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Table;
