import React from "react";

const SliderCard = ({ images }: { images: string[] }) => {
  return (
    <div className="carousel w-full">
      {images?.map((imageUrl, index) => (
        <div
          key={index}
          id={`slide-${index}`}
          className="carousel-item relative w-full"
        >
          <div className=" flex justify-center w-full  bg-gray-900">
            <div className=" w-[100%] mx-auto">
              <img
                src={imageUrl}
                className="w-full h-[500px]"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>{" "}
          {/* Add alt text for accessibility */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href={`#slide-${index === 0 ? images.length - 1 : index - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide-${index === images.length - 1 ? 0 : index + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderCard;
