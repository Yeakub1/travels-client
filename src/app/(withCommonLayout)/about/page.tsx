import Link from "next/link";
import React from "react";
import TeamPage from "./team";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import TravelStory from "./TravelStory";

const About = () => {
  return (
    <section className="p-8">
      <div className="max-w-7xl mx-auto">
        <TravelStory />
        <TeamPage />
        <div className="w-2/3 m-auto mt-20">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <ul className="mt-4">
            <li className="mb-2">Email: mryeakub10@gmail.com</li>
            <li className="mb-2">Phone: +88 01708664232</li>
            <li className="mb-2">
              social media
              <div className="flex space-x-4 mt-2 text-2xl">
                <Link href="https://www.facebook.com/yeakub108" className="">
                  <FaFacebook />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yeakub1"
                  className="link link-hover"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://github.com/Yeakub1"
                  className="link link-hover"
                >
                  <FaGithub />
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
