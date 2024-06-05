import LinkButton from "../Button/LinkButton";

const TripCard = ({ data }: any) => {
  const {
    id,
    destination,
    startDate,
    endDate,
    description,
    photos,
    travelType,
  } = data;
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={photos?.[0]} alt="Shoes" className="h-40" />
      </figure>

      <div className="p-5">
        <p>
          <span>Destination:</span> {destination}
        </p>
        <p>
          <span >startDate:</span> {startDate}
        </p>
        <p>
          <span>endDate:</span> {endDate}
        </p>
        <p>
          <span>Travel type:</span> {travelType}
        </p>
        <p>
          <span>Description:</span> {description}
        </p>
      </div>

      <div className="pb-4 mt-2 text-center">
        <LinkButton title={" See details"} link={`/tripDetails/${id}`} />
      </div>
    </div>
  );
};

export default TripCard;
