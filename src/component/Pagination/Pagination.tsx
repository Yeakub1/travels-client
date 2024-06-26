import React, { useEffect, useState } from "react";
import { useGetTripQuery } from "@/Redux/api/Trip/tripApi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setPage, setTripData } from "@/Redux/api/Trip/tripSlice";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { tripData, limit: setLimit }: any = useAppSelector((e) => e.trip);
  const { page = 1, limit = 10, total = 0 } = tripData?.meta || {};

  const totalPages = Math.ceil(total / limit);

  const dispatch = useAppDispatch();
  const { data } = useGetTripQuery("");

  useEffect(() => {
    dispatch(setTripData(data));
    dispatch(setPage(currentPage));
  }, [data, dispatch, currentPage]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const buttons = [];
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(
      <button
        key={i}
        className={`relative h-10 w-10 text-center  text-xs uppercase ${
          currentPage === i
            ? "bg-[#09867E] hover:bg-[#09867E] btn text-white rounded-full"
            : "bg-[#09867E] hover:bg-[#09867E] btn text-white rounded-full"
        }`}
        type="button"
        onClick={() => handlePageClick(i)}
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          {i}
        </span>
      </button>
    );
  }

         

  return (
    <div className="flex items-center gap-4">
      <button
        className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-center uppercase"
        type="button"
        disabled={currentPage === 1}
        onClick={handlePrevious}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          ></path>
        </svg>
        Previous
      </button>
      <div className="flex items-center gap-2">{buttons}</div>
      <button
        className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-center uppercase"
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
