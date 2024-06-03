import {
  useGetTripForFilterQuery,
  useGetTripQuery,
} from "@/Redux/api/Trip/tripApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { setTripData } from "@/Redux/api/Trip/tripSlice";
import destinationHelper from "@/helper/filterHelper/destinationHelper";
import topBudgetHelper from "@/helper/filterHelper/topBudgetHelper";
import dateHelper from "@/helper/filterHelper/dateHelper";
import Loading from "../Loading/Loading";

const Filter = () => {
  const [searchTerm, SetSearchTerm] = useState("");
  const [destination, setDestination] = useState("");
  const [travelType, setTravelType] = useState("");
  const [limit, SetLimit] = useState("");

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, SetSortOrder] = useState("");

  const [endDate, setEndDate] = useState<Date | null | string>("");
  const [startDate, setStartDate] = useState<Date | null | string>("");

  const formatStartDate = dateHelper(startDate as Date);
  const formatEndDate = dateHelper(endDate as Date);
  const { page }: any = useAppSelector((e) => e.trip);

  console.log(page, "ccc");

  type MyObjectType = {
    limit: number | string;
    page: number | string;
    searchTerm: string;
    destination: string;
    sortBy: string;
    sortOrder: string;
    travelType: string;
    endDate: Date | null | string | undefined;
    startDate: Date | null | string | undefined;
  };

  const myObject: MyObjectType = {
    searchTerm: searchTerm,
    destination: destination,
    travelType: travelType,
    sortBy: sortBy,
    endDate: formatEndDate,
    startDate: formatStartDate,
    sortOrder: sortOrder,
    limit: limit,
    page: page,
  };

  const queryString = new URLSearchParams(
    myObject as Record<string, string>
  ).toString();
  const { data } = useGetTripQuery(queryString);
  const { data: getFilterData, isLoading } = useGetTripForFilterQuery("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTripData(data));
  }, [data, limit]);

  console.log(startDate);
  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  console.log(limit);

  const topBudget = topBudgetHelper(getFilterData);

  const uniqueDestination = destinationHelper(getFilterData);

  return (
    <div className=" mb-20 mt-10">
      <div className="">
        <div className="flex flex-col">
          <div className="rounded-xl border border-gray-200  bg-white p-6 shadow-lg">
            <form className="">
              <section className="my-10">
                {/* searchTram start */}
                <div className="pt-2 relative mx-auto text-gray-600">
                  <input
                    className="border-2  w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    placeholder="Search"
                    onChange={(e) => SetSearchTerm(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-4"
                  >
                    <svg
                      className="text-gray-600 h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 56.966 56.966"
                      width="512px"
                      height="512px"
                    >
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
                {/* searchTram end */}
              </section>

              <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {/* StartDate start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Start Date
                  </label>

                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      className="bg-gray-50 border  w-full  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w- ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date"
                      onChange={(date) => setStartDate(date.target.value)}
                    />
                  </div>
                </div>
                {/* StartDate end */}

                {/* EndDate start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    End Date
                  </label>

                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <input
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date"
                      onChange={(date) => setEndDate(date.target.value)}
                    />
                  </div>
                </div>
                {/* EndDate end */}

                {/* Destination start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Destination
                  </label>

                  <select
                    onChange={(e) => setDestination(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>
                    {uniqueDestination?.map((a, index) => (
                      <option key={index}>{a}</option>
                    ))}
                  </select>
                </div>
                {/* Destination end */}
                {/* TravelType start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Travel Type
                  </label>

                  <select
                    onChange={(e) => setTravelType(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>

                    <option>Adventure</option>
                    <option>Leisure</option>
                    <option>Business</option>
                  </select>
                </div>
                {/* TravelType  end */}

                {/* sortBy start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    SortBy
                  </label>

                  <select
                    onChange={(e) => setSortBy(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block  w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>
                    <option>destination</option>
                    <option>startDate</option>
                    <option>endDate</option>
                  </select>
                </div>
                {/* sortBy end */}

                {/* sortOrder start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    SortOrder
                  </label>

                  <select
                    onChange={(e) => SetSortOrder(e.target.value)}
                    id="manufacturer"
                    className="mt-2 w-full block rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>
                    <option>desc</option>
                    <option>asc</option>
                  </select>
                </div>
                {/* sortOrder end */}
                {/* Limit start */}
                <div className="flex flex-col">
                  <label
                    htmlFor="manufacturer"
                    className="text-sm font-medium text-stone-600"
                  >
                    Limit
                  </label>

                  <select
                    onChange={(e) => SetLimit(e.target.value)}
                    id="manufacturer"
                    className="mt-2 w-full block rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  >
                    <option className=" hidden"></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>
                {/* Limit end */}
              </section>
              <div className="mt-6 grid w-full  md:w-[100px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px] grid-cols-2 justify-end space-x-4 md:flex">
                <button className="rounded-lg bg-red-500 text-white px-8 py-2 font-medium  outline-none hover:opacity-80 focus:ring">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
