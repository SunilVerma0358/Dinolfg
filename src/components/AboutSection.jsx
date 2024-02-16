import React from "react";

import AboutSectionleft from "../assets/image/AboutSectionLeft.webp";
import AboutSectionRight from "../assets/image/AboutSectionRight.webp";
import Taddybire from "../assets/image/Tiddaybire.webp";
const AboutSection = () => {
  return (
    <div id="About" className="bg-[#09655A] relative z-20 ">
      <div className="max-w-[1135px] mx-auto px-3 container sm:pt-[70px] pb-32">
        <div className="max-w-[599px] mx-auto">
          <h2 className=" font-Chewy font-normal text-white text-4xl sm:text-[64px] leading-[40px] sm:leading-[83.63px] text-center">
            About{" "}
            <span className="text-[#FBA11D] ff_lucky  drop-shadow-[0px_2px_0px#fff]">
              D
            </span>
            <span className="text-[#23AAAC]  ff_lucky drop-shadow-[0px_2px_0px#fff]">
              I
            </span>
            <span className="text-[#D45B07]  ff_lucky drop-shadow-[0px_2px_0px#fff]">
              N
            </span>
            <span className="text-[#8EC627]  ff_lucky drop-shadow-[0px_2px_0px#fff]">
              O
            </span>
            <span className="text-[#8EC627]  ff_lucky drop-shadow-[0px_2px_0px#fff]">
              L
            </span>
            <span className="text-[#FCCA2B]  ff_lucky drop-shadow-[0px_2px_0px#fff]">
              F
            </span>
            <span className="text-[#8F78D2]  ff_lucky drop-shadow-[0px_2px_0px#fff]">
              G
            </span>
          </h2>
          <p className=" font-Balsamiq font-normal text-white text-lg sm:text-xl md:text-2xl leading-[24px]  sm:leading-[28.8px] text-center pt-5 sm:pt-[42px]">
            $DINO is a meme coin with very strong utility.
          </p>
          <p className=" font-Balsamiq font-normal text-white text-lg sm:text-xl md:text-2xl leading-[24px]  sm:leading-[28.8px] text-center pt-[18px]">
            Biggest problem of meme coins is lack of utility and usecase,
            <span className="text-[#8EC627] font-bold"> $</span>
            <span className="text-[#FBA11D] font-bold">D</span>
            <span className="text-[#23AAAC] font-bold">I</span>
            <span className="text-[#D45B07] font-bold">N</span>
            <span className="text-[#FB5352] font-bold">O </span>
            is going to fix it.
          </p>
          <p className=" font-Balsamiq font-normal text-white text-lg sm:text-xl md:text-2xl leading-[24px]  sm:leading-[28.8px] text-center pt-[10px]">
            We want to bring a lot of usecases and utility to $DINO holders,
            just sit back and relax.
          </p>
          <p className=" font-Balsamiq font-normal text-white text-lg sm:text-xl md:text-2xl leading-[24px]  sm:leading-[28.8px] text-center pt-[14px]">
            In $DINO, we want to build a very strong community, that’s why we
            are going to have a lot of games and crypto tips in our Telegram and
            Twitter.
          </p>
        </div>
      </div>
      <div className=" max-w-[200px] lg:max-w-[294px] h-[226px] absolute lg:left-0 bottom-[22%] lg:bottom-[46%] z-[-1]">
        <img className="w-full" src={AboutSectionleft} alt="about" />
      </div>
      <div className=" max-w-[200px] lg:max-w-[294px] h-[421px] absolute right-1 bottom-[-10%] lg:bottom-[-4%]  z-[-1]">
        <img src={AboutSectionRight} alt="about" />
      </div>
      <div className=" max-w-[180px] lg:max-w-[200px]  absolute right-1 bottom-[-10%] lg:bottom-[-22%] z-[-1] animate-bounce2">
        <img src={Taddybire} alt="about" />
      </div>
    </div>
  );
};

export default AboutSection;
