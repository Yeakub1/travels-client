import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="about-us p-8 bg-gray-100 text-gray-900">
      <div className="container mx-auto">
        <div className="mission-statement mb-8">
          <h2 className="text-3xl font-bold mb-4">Brief Description</h2>
          <p className="text-lg mb-4">
            Welcome to the Travel Buddy website! This platform is designed for
            travelers who want to journey with companions. Here, travelers can
            post their travel plans, delete or edit them if needed, and choose
            other travelers as companions for their adventures.
          </p>
        </div>
        <div className="mission-statement mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At Travel-Buddy, we are committed to revolutionizing the way people
            travel. Our mission is to provide comprehensive, reliable, and
            user-friendly travel solutions that cater to the diverse needs of
            travelers worldwide. We believe that travel should be a seamless and
            enriching experience, and our goal is to make every journey
            enjoyable and hassle-free.
          </p>
          <p className="text-lg mb-4">
            We strive to achieve this mission through continuous innovation and
            a deep understanding of the travel industry. By leveraging
            cutting-edge technology, we aim to offer personalized travel
            planning, real-time updates, and a vast array of resources to help
            travelers make informed decisions.
          </p>
          <p className="text-lg mb-4">
            Our dedication to excellence is reflected in our commitment to
            customer satisfaction. We prioritize the needs of our users and work
            tirelessly to enhance our platform's features and services. Whether
            it's finding the best accommodations, discovering exciting
            activities, or ensuring secure and convenient transactions, we are
            here to support every step of your journey.
          </p>
          <p className="text-lg">
            Travel-Buddy is more than just a travel platform; it is a community
            of travel enthusiasts who share a passion for exploration and
            adventure. We encourage our users to connect, share experiences, and
            inspire each other to explore new destinations. Together, we are
            building a global network of travelers who are empowered by the
            tools and resources we provide.
          </p>
        </div>
        {/* Team Information */}
        <div className="team-info mb-8">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg mb-4">
            Our team consists of passionate travel enthusiasts and tech experts
            dedicated to bringing you the best travel solutions. We believe in
            the power of technology to transform the way people explore the
            world. Our diverse team brings together a wealth of experience and
            expertise from various fields, including software development,
            customer service, and travel planning.
          </p>
        </div>
        <div className="contact-info">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">
            We'd love to hear from you! Reach out to us through any of the
            following methods:
          </p>
          <ul className="mt-4">
            <li className="mb-2">
              <strong>Email:</strong> www.tonutonmoy12@gmail.com
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> +8801732159683
            </li>
            <li className="mb-2">
              <strong>Follow us on social media:</strong>
              <div className="flex space-x-4 mt-2">
                <Link
                  href="https://www.facebook.com/tonu.tonmoy.3"
                  className="link link-hover"
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.linkedin.com/in/showmic-arefin-tonmoy-560503280"
                  className="link link-hover"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/tonutonmoy"
                  className="link link-hover"
                >
                  HitHub
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
