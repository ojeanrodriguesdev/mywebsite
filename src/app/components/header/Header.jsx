"use client";

import { Link } from "react-scroll";
import React, { useState } from "react";

import Image from "next/image";
import Logo from "../../../../public/images/header-img/logo.png";
import MenuIcon from "../../../../public/images/header-img/MenuIcon.png";
import XIcon from "../../../../public/images/header-img/XIcon.png";

const Header = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <section>
      {/*DESKTOP RESPONSIVE*/}
      <header className="text-black font-semibold hidden lg:flex border-b-2 border-black">
        <div className="flex items-center bg-slate-100 pl-24 w-full h-14">
          <Image src={Logo} alt="Logo" className="w-10 m-0 p-0" />
          <span className="pl-10">JEAN RODRIGUES</span>
        </div>
        <div className="flex items-center bg-slate-100 pr-24">
          <ul className="flex">
            <Link to="home" smooth={true} duration={500} className="ml-4">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="ml-4">
              About
            </Link>
            <Link to="portfolio" smooth={true} duration={500} className="ml-4">
              Portfolio
            </Link>
          </ul>
        </div>
      </header>
      {/*MOBILE RESPONSIVE*/}
      <header className="absolute w-screen font-serif text-xs text-black lg:hidden flex flex-col border-b-2 border-black">
        <div className="flex items-center justify-around  bg-slate-100  w-full h-14 p-4">
          <Image src={Logo} alt="Logo" className="w-10 m-0 p-0" />
          <span>JEAN RODRIGUES</span>
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            {isMobileMenuVisible ? (
              <Image src={XIcon} alt="Close Icon" className="h-6 w-6" />
            
            ) : (
              <Image src={MenuIcon} alt="Menu Icon" className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMobileMenuVisible && (
          <div className="bg-slate-100 w-full">
            <ul className="flex flex-col items-center">
              <Link to="home" smooth={true} duration={500} className="my-4">
                Home
              </Link>
              <Link to="about" smooth={true} duration={500} className="my-4">
                About
              </Link>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                className="my-4"
              >
                Portfolio
              </Link>
            </ul>
          </div>
        )}
      </header>
    </section>
  );
};

export default Header;
