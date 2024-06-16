import Image from "next/image";
import React from "react";

import JavaScript from "../../../../public/images/about-img/js.png";
import ReactF from "../../../../public/images/about-img/react.png";
import Next from "../../../../public/images/about-img/next.png";
import TailWind from "../../../../public/images/about-img/tailwind.png";
import Git from "../../../../public/images/about-img/git.png";
import GitHub from "../../../../public/images/about-img/github.png";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="text-black w-full min-h-screen bg-gradient-to-b from-slate-300 to-slate-50"
      >
        {/*DESKTOP RESPONSIVE*/}
        <div className="pb-10 lg:block hidden">
          <div className="text-center items-center justify-center flex-row ">
            <h1 className="font-bold text-5xl pt-24">About Me</h1>
          </div>
          <div className="flex text-center items-center justify-center pt-16">
            <div className="w-1/2 px-64 border-collapse">
              <h1 className="font-semibold text-4xl ">Language</h1>
            </div>
            <div className="w-1/2 px-6 border-collapse">
              <h1 className="font-semibold text-4xl">Version control</h1>
            </div>
          </div>
          <div className="flex m-20 gap-10">
            <div className="flex text-center items-center justify-start w-1/2 border-2 border-black p-2 rounded-lg">
              <div className="flex-row text-center items-center justify-center">
                <Image
                  src={JavaScript}
                  alt="JavaScript Icon"
                  className="w-16 mx-5"
                />
                <h3 className="font-semibold mx-3">JavaScript</h3>
              </div>
              <p className="text-center font-medium mx-41 py-4 px-6 bg-slate-50 border-2 border-black rounded-lg">
                Enthusiastic about this language due to its advanced
                interactivity, long-term Full-Stack development, DOM
                manipulation, rich ecosystem and libraries, real-time execution,
                integration with APIs, ease of always evolving.
              </p>
            </div>

            <div className="flex text-center items-center justify-start w-1/2 border-2 border-black p-2 rounded-lg">
              <div className="flex-row text-center items-center justify-center ">
                <Image src={Git} alt="Git Icon" className="w-16 mx-5" />
                <h3 className="font-semibold mx-10 mb-2">Git</h3>
                <Image src={GitHub} alt="GitHub Icon" className="w-16 mx-5" />
                <h3 className="font-semibold mx-3">GitHub</h3>
              </div>
              <p className="text-center font-medium mx-5 py-5 bg-slate-50 border-2 border-black rounded-lg">
                Version control is essential for teamwork and versioning, which
                is why you are always learning these two tools.
              </p>
            </div>
          </div>
          <div className="flex text-center items-center justify-center">
            <div className="w-1/2 px-64 border-collapse">
              <h1 className="font-semibold text-4xl">Framework</h1>
            </div>
            <div className="w-1/2 px-56 border-collapse">
              <h1 className="font-semibold text-4xl">Front-End Skills</h1>
            </div>
          </div>
          <div className="flex m-20 gap-10">
            <div className="flex text-center items-center justify-start w-1/2 border-2 border-black p-2 rounded-lg">
              <div className="flex-row text-center items-center justify-center">
                <Image src={ReactF} alt="React Icon" className="w-16 mx-5" />
                <h3 className="font-semibold mx-5 mb-33233">ReactJS</h3>
                <Image src={Next} alt="Next Icon" className="w-16 mx-5" />
                <h3 className="font-semibold">NextJS</h3>
              </div>
              <p className="text-center font-medium mx-10 px-5 py-5 bg-slate-50 border-2 border-black rounded-lg">
                Currently using ReactJS for compensation, efficient updates to
                the DOM, range of library, tools and also SEO-Friendly, also
                NextJS for hybrid rendering, automatic routes, integrated
                features, optimized performance and long-term Full-FullStack
                development.
              </p>
            </div>
            <div className="flex text-center items-center justify-start w-1/2 border-2 border-black p-2 rounded-lg">
              <div className="flex-row text-center items-center justify-center">
                <Image
                  src={TailWind}
                  alt="TailWind Icon"
                  className="w-16 mx-10"
                />
                <h3 className="font-semibold mx-5">TailWindCSS</h3>
              </div>
              <p className="text-center font-medium mx-5 px-5 py-5 bg-slate-50 border-2 border-black rounded-lg">
                Currently used for its consistent and scalable design,
                productivity, flexible customization and simplified
                responsiveness.
              </p>
            </div>
          </div>
        </div>
        {/*MOBILE RESPONSIVE*/}
        <div className="pb-10 lg:hidden ">
          <div className="text-center items-center justify-center ">
            <h1 className="font-bold text-5xl pt-5">About Me</h1>
            <div className="w-full">
              <h1 className="font-semibold text-4xl py-5">Language</h1>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="text-center items-center justify-center m-4 p-2 border-2 border-black rounded-lg">
              <div className="flex flex-row items-center justify-center">
                <Image
                  src={JavaScript}
                  alt="JavaScript Icon"
                  className="w-16 items-center justify-center"
                />
              </div>
              <h3 className="font-semibold mb-3">JavaScript</h3>
              <div className="flex">
                <p className="flex text-center font-medium mx-41 py-4 px-9 bg-slate-50 border-2 border-black rounded-2xl">
                  Enthusiastic about this language due to its advanced
                  interactivity, long-term Full-Stack development, DOM
                  manipulation, rich ecosystem and libraries, real-time
                  execution, integration with APIs, ease of always evolving.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-center py-5 ">
            <h1 className="font-semibold text-4xl">Version control</h1>
          </div>
          <div className="flex flex-row">
            <div className="text-center items-center justify-center m-4 p-2 border-2 border-black rounded-lg">
              <div className="flex flex-row items-center justify-around">
                <Image src={Git} alt="Git Icon" className="w-16 " />

                <Image src={GitHub} alt="GitHub Icon" className="w-16 mx-4" />
              </div>
              <div className="flex text-center items-center justify-around ">
                <h3 className="font-semibold ">Git</h3>
                <h3 className="font-semibold ">GitHub</h3>
              </div>
              <div className=""></div>
              <div className="flex mt-3">
                <p className="flex text-center font-medium mx-41 py-4 px-9 bg-slate-50 border-2 border-black rounded-2xl">
                  Version control is essential for teamwork and versioning,
                  which is why you are always learning these two tools..
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-center py-5 ">
            <h1 className="font-semibold text-4xl">Framework</h1>
          </div>
          <div className="flex flex-row">
            <div className="text-center items-center justify-center m-4 p-2 border-2 border-black rounded-lg">
              <div className="flex flex-row items-center justify-around">
                <Image src={ReactF} alt="React Icon" className="w-16 mx-5" />
                <Image src={Next} alt="Next Icon" className="w-16 mx-5" />
              </div>
              <div className="flex text-center items-center justify-around ">
                <h3 className="font-semibold ">ReactJS</h3>
                <h3 className="font-semibold ">NextJS</h3>
              </div>
              <div className=""></div>
              <div className="flex mt-3">
                <p className="flex text-center font-medium mx-41 py-4 px-9 bg-slate-50 border-2 border-black rounded-2xl">
                  Currently using ReactJS for compensation, efficient updates to
                  the DOM, range of library, tools and also SEO-Friendly, also
                  NextJS for hybrid rendering, automatic routes, integrated
                  features, optimized performance and long-term Full-FullStack
                  development.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full text-center py-5 ">
            <h1 className="font-semibold text-4xl">Front-End Skills</h1>
          </div>
          <div className="flex flex-row">
            <div className="text-center items-center justify-center m-4 p-2 border-2  border-black rounded-lg">
              <div className="flex flex-row items-center justify-around">
                <Image src={TailWind} alt="React Icon" className="w-16 mx-5" />
              </div>
              <div className="flex text-center items-center justify-around ">
                <h3 className="font-semibold ">TailWindCSS</h3>
              </div>
              <div className=""></div>
              <div className="flex mt-3">
                <p className="flex text-center font-medium mx-41 py-4 px-9 bg-slate-50 border-2 border-black rounded-2xl">
                  Currently used for its consistent and scalable design,
                  productivity, flexible customization and simplified
                  responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
