"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const HomeFeaturedDestinations = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS with options
  }, []);
  return (
    <div className=" bg-gray-900  md:px-20 md:py-20 lg:px-20 lg:py-20 xl:px-40 xl:py-20 2xl:px-40 2xl:py-20 rounded-lg my-40 overflow-hidden">
      <div className="p-6 bg-red-500 rounded-[1000%] text-white ">
        <h1 className="text-3xl font-bold mb-4">Welcome to Travel Buddy</h1>

        <section className="mb-8 text-gray-800 ">
          <h2 className="text-2xl font-semibold mb-4 text-gray-300">
            Featured Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2   gap-4">
            <div
              data-aos="fade-right"
              className="bg-white shadow-lg rounded-lg p-4  "
            >
              <img
                src="/featuredDestinations/france.jpg" // Adjust the path
                alt="Paris"
                className="w-full  h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">Paris, France</h3>
              <p>
                Experience the romantic charm of Paris with its iconic landmarks
                like the Eiffel Tower, exquisite cuisine, and vibrant culture.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src="/featuredDestinations/japan.jpg" // Adjust the path
                alt="Tokyo"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">Tokyo, Japan</h3>
              <p>
                Explore the bustling city of Tokyo, known for its towering
                skyscrapers, traditional temples, and world-class shopping and
                dining.
              </p>
            </div>
            <div
              data-aos="fade-right"
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src="/featuredDestinations/usa.jpg" // Adjust the path
                alt="New York"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">New York, USA</h3>
              <p>
                Discover the vibrant energy of New York City, home to iconic
                sites like Times Square, Central Park, and Broadway shows.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src="/featuredDestinations/australia.jpg" // Adjust the path
                alt="Australia"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold">Explore Australia</h2>
              <p>
                Australia, the land down under, is renowned for its stunning
                landscapes, unique wildlife, and vibrant cities. From the iconic
                Sydney Opera House.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeFeaturedDestinations;
