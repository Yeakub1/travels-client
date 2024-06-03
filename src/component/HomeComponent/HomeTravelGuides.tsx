const HomeTravelGuides = () => {
  const tipsAndGuides = [
    {
      id: 1,
      title: "Packing Essentials",
      description:
        "Learn about the essential items to pack for your next trip.",
      image: "/travelGuides/PackingEssentials.jpg", // Updated image path
    },
    {
      id: 2,
      title: "Budget Travel Hacks",
      description:
        "Discover useful hacks to travel on a budget without compromising on experiences.",
      image: "/travelGuides/TravelHacks.jpg", // Updated image path
    },
    {
      id: 3,
      title: "Safety Tips Abroad",
      description:
        "Stay safe during your travels with these important safety tips for international trips.",
      image: "/travelGuides/SafetyTipsAbroad.jpg", // Updated image path
    },
    // Add more tips and guides as needed
  ];

  return (
    <section className="bg-gray-900 text-white py-12 my-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Travel Tips and Guides
        </h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
          {tipsAndGuides.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-lg overflow-hidden shadow-md "
            >
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold  text-gray-800 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTravelGuides;
