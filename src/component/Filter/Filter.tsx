import {
  useGetTripForFilterQuery,
  useGetTripQuery,
} from "@/Redux/api/Trip/tripApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { setTripData } from "@/Redux/api/Trip/tripSlice";
import destinationHelper from "@/helper/filterHelper/destinationHelper";
import dateHelper from "@/helper/filterHelper/dateHelper";


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
  const { data: getFilterData } = useGetTripForFilterQuery("");
  const dispatch = useAppDispatch();
  const uniqueDestination = destinationHelper(getFilterData);

  useEffect(() => {
    dispatch(setTripData(data));
  }, [data, limit]);


  return (
    <div className=" mb-20 mt-10">
      <div className="">
        <div className="flex flex-col">
          <div className="rounded-xl border border-gray-200  bg-white p-6 shadow-lg">
            <form className="">
              <section className="my-10">
                {/* searchTram start */}
                <div className="pt-2 relative mx-auto">
                  <input
                    className="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm"
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

              <section className="grid gap-6 md:grid-cols-2">
                {/* Destination start */}
                <div className="flex flex-col">
                  <label className="text-sm">Destination</label>

                  <select
                    onChange={(e) => setDestination(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md bg-gray-100 px-2 py-2"
                  >
                    <option disabled selected>
                      select
                    </option>
                    {uniqueDestination?.map((a, index) => (
                      <option key={index}>{a}</option>
                    ))}
                  </select>
                </div>
                {/* Destination end */}
                {/* TravelType start */}
                <div className="flex flex-col">
                  <label htmlFor="manufacturer" className="text-sm">
                    Travel Type
                  </label>

                  <select
                    onChange={(e) => setTravelType(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md bg-gray-100 px-2 py-2"
                  >
                    <option disabled selected>
                      select
                    </option>

                    <option>Adventure</option>
                    <option>Leisure</option>
                    <option>Business</option>
                  </select>
                </div>
                {/* TravelType  end */}

                {/* sortBy start */}
                <div className="flex flex-col">
                  <label htmlFor="manufacturer" className="text-sm">
                    SortBy
                  </label>

                  <select
                    onChange={(e) => setSortBy(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md bg-gray-100 px-2 py-2"
                  >
                    <option disabled selected>
                      select
                    </option>
                    <option>destination</option>
                    <option>startDate</option>
                    <option>endDate</option>
                  </select>
                </div>
                {/* sortBy end */}

                {/* sortOrder start */}
                <div className="flex flex-col">
                  <label htmlFor="manufacturer" className="text-sm">
                    SortOrder
                  </label>

                  <select
                    onChange={(e) => SetSortOrder(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md bg-gray-100 px-2 py-2"
                  >
                    <option disabled selected>
                      select
                    </option>
                    <option>desc</option>
                    <option>asc</option>
                  </select>
                </div>
                {/* sortOrder end */}
                {/* Limit start */}
                <div className="flex flex-col">
                  <label htmlFor="manufacturer" className="text-sm">
                    Limit
                  </label>

                  <select
                    onChange={(e) => SetLimit(e.target.value)}
                    id="manufacturer"
                    className="mt-2 block w-full rounded-md bg-gray-100 px-2 py-2"
                  >
                    <option disabled selected>
                      select
                    </option>
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
              <div className="mt-6 flex justify-center ">
                <button className="bg-[#09867E] hover:bg-[#09867E] btn text-white w-full">
                  Clear All
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
