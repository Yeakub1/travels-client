import { IoSettingsOutline } from "react-icons/io5";
import { MdFlight, MdOutlineEmojiEvents } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";

const BestServices = () => {
    return (
      <div className="my-20 max-w-7xl m-auto">
        <div className="text-center">
          <p className="uppercase text-lg">CATEGORY</p>
          <h1 className=" text-3xl font-semibold">We Offer Best Services</h1>
        </div>
        <div className="grid md:grid-cols-4 gap-5 my-10">
          <div className="py-8 px-4 text-center shadow-lg hover:shadow-2xl rounded-md">
            <TiWeatherPartlySunny className="text-8xl m-auto" />
            <p className="text-lg my-1">Calculated Weather</p>
            <p className="text-sm ">
              Built Wicket longer admire do barton vantity itself do in it.
            </p>
          </div>
          <div className="py-8 px-4 text-center shadow-lg hover:shadow-2xl rounded-md">
            <MdFlight className="text-8xl m-auto" />
            <p className="text-lg my-1">Best Flight</p>
            <p className="text-sm ">
              engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
          <div className="py-8 px-4 text-center shadow-lg hover:shadow-2xl rounded-md">
            <MdOutlineEmojiEvents className="text-8xl m-auto" />
            <p className="text-lg my-1">Local Events</p>
            <p className="text-sm ">
              barton vantity itself do in it.Preferred to men it engrossed
              listening.
            </p>
          </div>
          <div className="py-8 px-4 text-center shadow-lg hover:shadow-2xl rounded-md">
            <IoSettingsOutline className="text-8xl m-auto" />
            <p className="text-lg my-1">Customizition</p>
            <p className="text-sm ">
              We deliver outsourced aviation services for military customers.
            </p>
          </div>
        </div>
      </div>
    );
};
export default BestServices;