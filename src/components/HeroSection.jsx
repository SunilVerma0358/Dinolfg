import React from "react";
import DinolfgNav from "./DinolfgNav";
import aroplane from "../assets/image/aroplane.webp";
import cloud from "../assets/image/cloud.webp";
import cycleImg from "../assets/image/cycleRight.webp";
import cycle from "../assets/image/Bike.webp";
const HeroSection = () => {
  return (
    <div className="bg-[url(../src/assets/image/HeroSectionBg.webp)] bg-no-repeat bg-cover bg-size bg-center  h-screen  relative z-10 overflow-hidden">
      <div className="pt-7">
        <DinolfgNav />
      </div>
      <div className="max-w-[1135px] px-3 mx-auto container">
        <div className=" flex flex-col-reverse sm:flex-row -mx-3 flex-wrap pt-10 sm:pt-20 items-center">
          <div data-aos="fade-up" className=" w-full sm:w-6/12 px-3 pt-10">
            <div className="max-w-[250px] sm:max-w-[395px] max-h-[245px] sm:ms-10 mx-auto sm:mx-0 animate-bounce2 ">
              <img className="w-full " src={aroplane} alt="aroplane" />
            </div>
          </div>
          <div data-aos="fade-up" className=" w-full sm:w-6/12 px-3">
            <h1 className="ff_lucky font-normal text-[120px] md:text-[150px] lg:text-[175px] leading-[120px] md:leading-[166px] max-w-[300px] sm:max-w-[398px] mx-auto sm:mx-0">
              <span className="text-[#FBA11D] drop-shadow-[0px6px_0px#000]">
                D
              </span>
              <span className="text-[#23AAAC] drop-shadow-[0px_6px_0px#000]">
                I
              </span>
              <span className="text-[#D45B07] drop-shadow-[0px_6px_0px#000]">
                N
              </span>
              <span className="text-[#8EC627] drop-shadow-[0px_6px_0px#000]">
                O
              </span>{" "}
              <br />
              <span className="text-[#8EC627] drop-shadow-[0px_6px_0px#000]">
                L
              </span>
              <span className="text-[#FCCA2B] drop-shadow-[0px_6px_0px#000]">
                F
              </span>
              <span className="text-[#8F78D2] drop-shadow-[0px_6px_0px#000]">
                G
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className=" absolute max-w-[100px] sm:max-w-[140px] xl:max-w-[172px] right-0 top-[25%] sm:top-[15%] md:top-[10%] lg:top-[15%] z-[-1]">
        <img className="w-full" src={cloud} alt="img" />
      </div>
      <div className=" absolute max-w-[100px] sm:max-w-[140px] xl:max-w-[172px] left-[-4%] top-[21%] sm:top-[15%] md:top-[14%] lg:top-[18%] xl:top-[22%] z-[-1]">
        <img className="w-full" src={cloud} alt="img" />
      </div>
      <div className=" absolute max-w-[100px] sm:max-w-[140px] xl:max-w-[190px] right-[9%] bottom-[12%] xl:right-[6%] xl:bottom-[14%]  animate-movebike2">
        <img className="w-full" src={cycleImg} alt="img" />
      </div>
      <div className=" absolute max-w-[100px] sm:max-w-[140px] left-[35%] sm:left-[47%] bottom-[20%] xl:bottom-[22%] z-[-1] animate-movebike1">
        <img className="w-full" src={cycle} alt="img" />
      </div>
    </div>
  );
};

export default HeroSection;
