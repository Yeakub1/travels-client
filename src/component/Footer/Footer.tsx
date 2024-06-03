import React from "react";
import Container from "../Container/Container";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-base-content">
      <Container>
        <section className="footer bg-gray-900 p-10  text-gray-300 ">
          <aside>
            <p className="font-semibold text-2xl">
              Travel-Buddy
              <br />
            </p>
            <p>Providing reliable tech since 2024</p>
          </aside>
          <nav>
            <h6 className=" text-lg font-semibold text-gray-500">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav>
            <h6 className="footer-title">Contact</h6>
            <p>Email: www.tonutonmoy12@gmail.com</p>
            <p>Phone: +8801732159683</p>
            <div className="flex space-x-4">
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
          </nav>
        </section>
        <section className="footer footer-center p-4  bg-gray-900   text-gray-200  ">
          <aside className="my-10">
            <p>&copy; 2024 - All rights reserved by Travel-Buddy Ltd</p>
          </aside>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
