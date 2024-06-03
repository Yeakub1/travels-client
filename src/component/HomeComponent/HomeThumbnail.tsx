// import homeThumbnail from "../../../public/home/HomeThumbnail.jpg";

import HomeSearching from "./HomeSearching";

const HomeThumbnail = () => {
  return (
    <div>
      <div className="relative bg-gradient-to-r  from-purple-600 to-blue-600 h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] 2xl:h-[600px] text-white overflow-hidden ">
        <div className="absolute inset-0">
          <img
            src="/home/HomeThumbnail.jpg"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Find Your Perfect Travel Buddy
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
          <a
            href="/dashboard/createTrip"
            className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Share Your Trip
          </a>

          <HomeSearching />
        </div>
      </div>
    </div>
  );
};

export default HomeThumbnail;
