import Link from "next/link";
import LinkButton from "../Button/LinkButton";

const TripCard = ({ data }: any) => {
  const {
    id,
    userId,
    destination,
    startDate,
    endDate,
    description,
    photos,
    travelType,
  } = data;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-20">
      <figure>
        {" "}
        <img className=" h-[300px] w-full" src={photos?.[0]} alt="Mountain" />
      </figure>

      <div className=" space-y-1 px-10 py-5">
        <p className="text-gray-500">
          <span className=" font-medium text-black">Destination:</span>{" "}
          {destination}{" "}
        </p>
        <p className="text-gray-500">
          <span className=" font-medium text-black">startDate:</span>{" "}
          {startDate}{" "}
        </p>
        <p className="text-gray-500">
          <span className=" font-medium text-black">endDate:</span> {endDate}{" "}
        </p>
        <p className="text-gray-500">
          <span className=" font-medium text-black">Travel type:</span>{" "}
          {travelType}{" "}
        </p>
        <p className="text-gray-500">
          <span className=" font-medium text-black">Description:</span>{" "}
          {description}{" "}
        </p>
      </div>

      <div className="p-4 border-t mx-8 mt-2">
        <LinkButton title={" See details"} link={`/tripDetails/${id}`} />
      </div>
    </div>
  );
};

export default TripCard;
