const TeamPage = () => {
  const tipsAndGuides = [
    {
      id: 1,
      name: "Alice Smith",
      title: "Travel Blogger",
      image: "https://i.ibb.co/nrD5zb8/team-7.jpg",
      short_description:
        "Diana is a talented graphic designer with a keen eye for detail. She is responsible for creating visually appealing graphics that support marketing and branding initiatives.",
    },
    {
      id: 2,
      name: "Bob Jones",
      title: "Adventure Photographer",
      image: "https://i.ibb.co/kmxVpXg/team-5.png",
      short_description:
        "Bob is a skilled software engineer with a strong understanding of web development principles. He is a valuable asset to the team and is always willing to go the extra mile.",
    },
    {
      id: 3,
      name: "Charlie Brown",
      title: "Worldly Chef",
      image: "https://i.ibb.co/8c9R2j0/team-2.jpg",
      short_description:
        "Alice is a passionate and experienced team leader with a proven track record of success. She is known for her ability to motivate and inspire her team members.",
    },
  ];

  return (
    <section className="mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our professional team members
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {tipsAndGuides.map((tip) => (
            <div
              key={tip.id}
              className="rounded-lg overflow-hidden shadow-md border-[3px] p-2 text-center"
            >
              <img
                src={tip.image}
                alt={tip.name}
                className="w-48 h-48 rounded-full m-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold  text-gray-800 mb-2">
                  {tip.name}
                </h3>
                <p className="text-gray-700">{tip.title}</p>
                <p className="text-gray-700 my-3">{tip.short_description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
