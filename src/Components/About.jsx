import React from "react";
import logo from "../assets/logo.png";

const About = () => {
  return (
    <section className="py-[50px] w-full text-white">
      <div className="container grid md:grid-cols-2 items-center justify-between gap-14">
        <div className="order-2 md:order-1">
          <img src={logo} alt="" className="w-full" />
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <h1
            className="text-4xl break-all text-white  capitalize w-max"
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            about china town
          </h1>

          <p
            data-aos="fade-left"
            data-aos-easing="linear"
            className="leading-relaxed mt-5 tracking-wider"
          >
            Chinatown is a vibrant and exciting neighborhood that's full of life
            and culture. From its colorful markets to its bustling streets,
            there's always something new and exciting to discover in Chinatown.
            And now, with Chinatown Coin, you can experience all the excitement
            and energy of this amazing neighborhood in the world of
            cryptocurrency.
          </p>
          <p
            className="leading-relaxed mt-5 tracking-wider"
            data-aos="fade-right"
            data-aos-easing="linear"
          >
            o why not take a virtual stroll through the streets of Chinatown
            Coin and see what treasures you can find? Who knows, you might just
            discover a whole new world of possibilities!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
