import React from "react";
import UtilityAndTop from "../assets/image/Roadmap.webp";
import RightCycle from "../assets/image/cycleRight.webp";
import Bike from "../assets/image/Bike.webp";
import UnityleRight from "../assets/image/UnitlityRIght.webp";
import Unitylebottom from "../assets/image/UnityleBottom.webp";

const UtilityAndUsecase = () => {
  return (
    <div className="bg-[#0a4740] relative z-10 ">
      <div className=" max-w-[1140px] px-3 container mx-auto pt-24 sm:pt-28 md:pt-36 pb-24 sm:pb-28 md:pb-36">
        <h2 className=" font-Chewy font-normal text-4xl sm:text-5xl md:text-[64px] text-white leading-[60px] md:leading-[83.63px] pt-5 text-center  ">
          Utility and Usecase
        </h2>
        <div
          data-aos="fade-up"
          className="border border-white rounded-[20px] bg-[#09655A] p-[31px_12px] md:p-[62px_24px_62px_32px] mt-12 sm:mt-28 md:mt-40 max-w-[1014px] mx-auto md:relative "
        >
          <div className=" flex flex-col-reverse md:flex-row flex-wrap -mx-3 ">
            <div className="w-full md:w-9/13 px-3 pt-7 md:pt-0">
              <p className=" font-Balsamiq font-normal text-white  text-lg sm:text-[24px] md:text-[26px] lg:text-[32px] leading-[25px] sm:leading-[32px] md:leading-[38.4px] md:max-w-[600px] lg:max-w-[700px] ">
                We are going to work hard in otder to add
                <span className="text-[#8EC627] font-bold"> $</span>
                <span className="text-[#FBA11D] font-bold">D</span>
                <span className="text-[#23AAAC] font-bold">I</span>
                <span className="text-[#D45B07] font-bold">N</span>
                <span className="text-[#FB5352] font-bold">O </span> to main
                platforms as a form of payment
              </p>
              <p className=" font-Balsamiq font-normal text-white  text-lg sm:text-[24px] md:text-[26px] lg:text-[32px] leading-[25px] sm:leading-[32px] md:leading-[38.4px] md:max-w-[600px] lg:max-w-[700px] pt-3 sm:pt-5 md:pt-7 ">
                You will be able to buy a lot of things with{" "}
                <span className="text-[#8EC627] font-bold"> $</span>
                <span className="text-[#FBA11D] font-bold">D</span>
                <span className="text-[#23AAAC] font-bold">I</span>
                <span className="text-[#D45B07] font-bold">N</span>
                <span className="text-[#FB5352] font-bold">O</span>
              </p>
            </div>
            <div className="w-full md:w-3/12 px-3   ">
              <div className="max-w-[200px] sm:max-w-[255px] lg:max-w-[255px] max-h-full sm:max-h-[323px] md:absolute bottom-[-0%] right-[24px] mx-auto md:mx-0">
                <img
                  className="w-full h-full"
                  src={RightCycle}
                  alt="RightCycle"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="border border-white rounded-[20px] bg-[#09655A] p-[31px_12px] md:p-[95px_27px] max-w-[1014px] mt-10 sm:mt-20 mx-auto md:mt-32 "
        >
          <div className="flex flex-row flex-wrap -mx-3">
            <div className=" w-full md:w-3/12 px-3 md:relative">
              <div className="md:absolute bottom-[-110%] lg:bottom-[-91%] right-0 max-w-[200px] md:max-w-[267px] max-h-[280px]  mx-auto md:mx-0">
                <img className="w-full" src={Bike} alt="bike" />
              </div>
            </div>
            <div className=" w-full md:w-9/12 px-3 pt-8 md:pt-0">
              <p className=" font-Balsamiq font-normal text-white  text-lg sm:text-[24px] md:text-[28px] lg:text-[32px] leading-[38.4px] text-center md:text-end ">
                We are going to have staking and buyback/ burning mechanism
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="w-full" src={Unitylebottom} alt="Right" />
      <div className="w-full h-[240px] absolute top-0 right-0 left-0 z-[-1]">
        <img className="w-full" src={UtilityAndTop} alt="Top Ellipse" />
      </div>
      <div className="absolute bottom-[20%] right-0 max-w-[250px] xl:max-w-[300px] z-[-1]">
        <img className="w-full" src={UnityleRight} alt="Right" />
      </div>
    </div>
  );
};

export default UtilityAndUsecase;
