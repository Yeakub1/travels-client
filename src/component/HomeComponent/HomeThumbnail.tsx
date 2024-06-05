import Link from "next/link";

const HomeThumbnail = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="grid md:grid-cols-2 items-center">
        <div className="">
          <p className="text-xl text-[#09867E]">
            BEST DESITNATIONS AROUND THE WORLD
          </p>
          <h1 className="text-6xl font-semibold my-9">
            Travel, enjoy and live a new and full life.
          </h1>
          <p className="">
            Built Wicket longer admire do barton vantity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <Link href="/trip">
            <button className="bg-[#09867E] hover:bg-[#09867E] font-semibold text-white btn mt-10">
              Share Your Trip
            </button>
          </Link>
        </div>
        <div className="">
          <img
            src="https://jadoo-tour.vercel.app/assets/hero-img-ca36e7b0.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default HomeThumbnail;