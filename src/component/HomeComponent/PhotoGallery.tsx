const PhotoGallery = () => {
    return (
      <div className="my-20 max-w-7xl m-auto">
        <div className="text-center">
          <p className="uppercase text-lg">All-inclusive Resorts</p>
          <h1 className=" text-3xl font-semibold">
            On the Caribbean's Best Betch
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4 items-center my-10">
          <div className="">
            <img
              src="https://i.ibb.co/KGPSkMw/22.webp"
              className="w-full h-full"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <img
              src="https://i.ibb.co/nz0wTB8/blue-villa-beautiful-sea-hotel-1.jpg"
              className="w-full h-full"
            />
            <img
              src="https://i.ibb.co/MnXmQP9/downloads.webp"
              className="w-full h-full"
            />
            <img
              src="https://i.ibb.co/kG8Pzc8/download.jpg"
              className="w-full h-full"
            />
            <img
              src="https://i.ibb.co/yWvMq1d/Taj-Mahal-Agra-feature.jpg"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    );
};
export default PhotoGallery;