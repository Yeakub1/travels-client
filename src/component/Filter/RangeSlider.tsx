import { useState } from "react";

const RangeSlider = ({ setMinBudget, setMaxBudget, topBudget }: any) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(topBudget);
  const min = 100;
  const max = topBudget;
  console.log(max, max);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
    setMinBudget(value);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
    setMaxBudget(value);
  };

  const calculateThumbPosition = (price: number) =>
    ((price - min) / (max - min)) * 100;

  return (
    <div className=" flex justify-center items-center my-10 p-8">
      <div className="relative max-w-xl w-full">
        <div>
          <input
            type="range"
            step="100"
            min={min}
            max={max}
            value={minPrice}
            onChange={handleMinPriceChange}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />
          <input
            type="range"
            step="100"
            min={min}
            max={max}
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
          />

          <div className="relative z-10 h-2">
            <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
            <div
              className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
              style={{
                left: `${calculateThumbPosition(minPrice)}%`,
                right: `${100 - calculateThumbPosition(maxPrice)}%`,
              }}
            ></div>
            <div
              className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2 -ml-1"
              style={{ left: `${calculateThumbPosition(minPrice)}%` }}
            ></div>
            <div
              className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2 -mr-3"
              style={{ right: `${100 - calculateThumbPosition(maxPrice)}%` }}
            ></div>
          </div>
        </div>

        <div className="flex justify-between items-center py-5">
          <div>
            <input
              type="text"
              maxLength={5}
              value={minPrice}
              onChange={handleMinPriceChange}
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
          <div>
            <input
              type="text"
              maxLength={5}
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
