import React from "react";

import Slideshow from "@/app/components/slide/slideShow";

import image1 from "../../../../public/images/hero-img/image1.png";
import image2 from "../../../../public/images/hero-img/image2.png";
import image3 from "../../../../public/images/hero-img/image3.png";
import Logo from "../../../../public/images/header-img/logo.png";
import Image from "next/image";

const Hero = () => {
  const images = [image1, image2, image3];

  return (
    <>
      <section
        id="home"
        className="text-black w-full min-h-screen bg-gradient-to-b from-slate-50 to-slate-300"
      >
        {/*DESKTOP RESPONSIVE*/}
        <div className="lg:flex hidden">
          <div className="lg:w-[50%] lg:h-[50%] lg:pl-44">
            <Slideshow images={images} />
          </div>
          <div className="w-1/2 p-8 flex items-center justify-center flex-col font-bold">
            <h1 className="text-5xl absolute z-10">Jean Rodrigues</h1>
            <h3 className="text-2xl mt-24 absolute z-10">Web Developer</h3> 
            <Image
              src={Logo}
              alt="Logo"
              className="absolute w-1/2 z-0 opacity-15"
            />
          </div>
        </div>
        {/*MOBILE RESPONSIVE*/}
        <div className="lg:hidden flex flex-col">
          <div className="font-bold w-screen max-h-full text-center items-center justify-center flex-col">
            <h1 className="text-4xl mt-24">Jean Rodrigues</h1>
            <h3 className="text-xl mt-5">Web Developer</h3>
          </div>
          <div className="w-screen h-96 px-16 mt-11 mb-5">
            <Slideshow images={images} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
