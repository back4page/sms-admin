import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

function Card({ title, count, link }) {
  return (
    <Link href={link} passHref>
      <div className="bg-white  min-h-[150px] px-8 py-6 gap-40 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg group cursor-pointer">
        <div className="space-y-4">
          <h1 className="capitalize text-[15px] text-custom-indigo2 font-semibold">
            {title}
          </h1>
          <div className="text-custom-gray2 font-semibold text-[33px]">
            {/* {count ? (
              <div className="flex  items-center">
                <p className="">{count}</p>
              </div>
            ) : (
              "---"
            )} */}
            <div className="flex  items-center">
              {/* <TbCurrencyTaka /> */}
              <p className="">{count}</p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-1 text-gray-400 text-sm font-semibold group-hover:underline underline-offset-2">
            <p className="text-end">Details</p>
            <ArrowRightCircleIcon className="h-[18px] w-[18px]" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
