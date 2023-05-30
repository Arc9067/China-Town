import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className=" w-full pt-[150px] text-white">
      <div className="container flex-col gap-6 font-Asiana flex justify-center items-center">
        <h1
          className="text-5xl tracking-widest leading-relaxed text-center  md:text-6xl font-Asiana capitalize font-bold"
          data-aos="fade-"
          data-aos-easing="linear"
        >
          china town
        </h1>
        <p
          className="text-center tracking-wider leading-relaxed max-w-[500px] mx-auto text-2xl"
          data-aos="fade-right"
          data-aos-easing="linear"
        >
          "Experience the vibrant energy of Chinatown in the world of
          cryptocurrency with Chinatown Coin. Explore bustling streets, colorful
          markets, and endless possibilities. Discover a new realm of cultural
          immersion and untapped potential. Join us on this exciting digital
          adventure today!"
        </p>
        <a
          href=""
          className="bg-black capitalize text-2xl rounded-md px-6 py-3"
          data-aos="fade-down"
          data-aos-easing="linear"
        >
          buy china town
        </a>
        <div className="mt-10 flex flex-col gap-6 md:flex-row">
          <a
            href=""
            className="bg-secondary capitalize text-3xl rounded-md px-6 py-3"
            data-aos="fade-right"
            data-aos-easing="ease"
          >
            telegram
          </a>
          <a
            href=""
            className="bg-black capitalize text-3xl rounded-md px-6 py-3"
            data-aos="zoom-right"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            twitter
          </a>
          <a
            href=""
            className="bg-secondary capitalize text-3xl rounded-md px-6 py-3"
            data-aos="fade-left"
            data-aos-easing="linear"
          >
            dextool
          </a>
          <a
            href=""
            className="bg-black capitalize text-3xl rounded-md px-6 py-3"
            data-aos="fade-right"
            data-aos-easing="linear"
          >
            medium
          </a>
        </div>

        <img src={Logo} alt="logo" className="md:w-[15rem] object-cover" />
      </div>
    </section>
  );
};

export default Hero;
