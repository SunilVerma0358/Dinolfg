import React from "react";
import ABoutSectionBottom from "../assets/image/AboutSectionBottom.webp";
import TokenomicsImg from "../assets/image/Tokenics.webp";
import TokenomicsImgFull from "../assets/image/TokenFullChart.webp";
import TokenomicsMainImg from "../assets/image/Tokeonmics.webp";
import TaddayBira from "../assets/image/Tiddaybire.webp";
import First from "../assets/iconsvg/first.svg";
import marketing from "../assets/iconsvg/marketing.svg";
import NoTax from "../assets/iconsvg/NoTax.svg";
import NoMint from "../assets/iconsvg/NoMint.svg";
import Liquidity from "../assets/iconsvg/Liquidity.svg";
import Tokenomicsleft from "../assets/image/TokenimcsLeftImg.webp";
import Denosar from "../assets/image/donasor.webp";
import Tokenomicsbottom from "../assets/image/UntiyImg.webp";
import TokenomicsRight from "../assets/image/UnitlityRIght.webp";
import TokenomicsMainEllipse from "../assets/image/TokenomicsMainEllips.webp";
const Tokenomics = () => {
  return (
    <div id="Tokenomic" className="relative bg-[#0a4740] py-48 md:py-60 z-10">
      <div className="max-w-[1135px] mx-auto px-3 container pb-12 sm:pb-28 ">
        <h2 className=" font-Chewy font-normal text-white text-[36px] sm:text-[64px] leading-[131%] text-center mb-5 sm:mb-28 md:mb-36">
          Tokenomics
        </h2>
        <div className="max-w-[589px] mx-auto relative ">
          <img
            className="w-[300px] md:w-[400px] lg:w-[500px] xl:w-[589px] mx-auto hidden sm:block"
            src={TokenomicsMainImg}
            alt="img"
          />

          <div className="max-w-[200px] mx-auto  sm:hidden pt-6  ">
            <img
              className="w-full animate-bounce2"
              src={TokenomicsImgFull}
              alt="Img"
            />
          </div>
          <div className="sm:hidden border-dashed border-[2px] py-4 px-5 rounded-md border-[#FBA11D] mt-5">
            <h3 className="font-Balsamiq font-normal text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#FBA11D] leading-[25.4px] md:leading-[38.4px] text-center ">
              333,333,333
            </h3>
            <p className=" font-Balsamiq font-normal text-lg sm:text-xl md:text-2xl text-white leading-[17px] sm:leading-[25.4px] md:leading-[38.4px] text-center pt-1 ">
              Supply
            </p>
          </div>
          <div className="sm:hidden border-dashed border-[2px] py-4 px-5 rounded-md border-[#23AAAC] mt-4">
            <h3 className="font-Balsamiq font-normal text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#23AAAC] leading-[25.4px] md:leading-[38.4px] text-center">
              95% Uniswa
              <span className="block">5% Marketing</span>
            </h3>
            <p className=" font-Balsamiq font-normal text-lg sm:text-xl md:text-2xl text-white leading-[25.4px] md:leading-[38.4px] pt-1 text-center ">
              Allocation
            </p>
          </div>
          <div className="sm:hidden border-dashed border-[2px] py-4 px-5 rounded-md border-[#D45B07] mt-4">
            {" "}
            <h3 className="font-Balsamiq font-normal text-lg md:text-2xl lg:text-[32px] text-[#D45B07] leading-[25.4px] md:leading-[38.4px] pt-1 sm:pt-4 text-center">
              No Tax
            </h3>
          </div>
          <div className="sm:hidden border-dashed border-[2px] py-4 px-5 rounded-md border-[#FB5352] mt-4">
            {" "}
            <h3 className="font-Balsamiq font-normal text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#FB5352] leading-[25.4px] md:leading-[38.4px] text-center ">
              No Mint Function
            </h3>
          </div>
          <div className="sm:hidden border-dashed border-[2px] py-4 px-5 rounded-md border-[#8EC627] mt-4">
            {" "}
            <h3 className="font-Balsamiq font-normal text-lg sm:text-xl md:text-2xl lg:text-[32px] text-[#8EC627] leading-[25.4px] md:leading-[38.4px] text-center">
              Liquidity lock for 1 year
            </h3>
          </div>
          <div className=" hidden sm:block max-w-[90px] lg:max-w-[133px] max-h-[157px] mx-auto absolute top-[-40%] md:top-[-25%] xl:top-[-18%] left-[43%] lg:left-[39%] animate-bounce2">
            <img className="w-full" src={TaddayBira} alt="taddybirea" />
          </div>
          <div className=" absolute top-[25%] sm:top-[10%] -left-2 sm:left-[-1%] md:left-[-14%] lg:left-[-33%] xl:left-[-45%] hidden sm:inline-flex items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
            <div>
              <h3 className="font-Balsamiq font-normal text-[15px] sm:text-xl md:text-2xl lg:text-[32px] text-[#FBA11D] leading-[25.4px] md:leading-[38.4px] ">
                333,333,333
              </h3>
              <p className="text-end font-Balsamiq font-normal text-[15px] sm:text-xl md:text-2xl text-white leading-[17px] sm:leading-[25.4px] md:leading-[38.4px] pt-1 ">
                Supply
              </p>
            </div>
            <img
              className="h-[40px] sm:h-[60px] md:h-[105px]"
              src={First}
              alt="first"
            />
          </div>
          <div className="absolute bottom-[-35%] md:bottom-[-34%] lg:bottom-[-15%] left-[5%] md:left-[-5%] lg:left-[-25%] hidden sm:inline-flex items-center gap-4 xl:gap-6">
            <div>
              <h3 className="font-Balsamiq font-normal text-[15px] sm:text-xl md:text-2xl lg:text-[32px] text-[#23AAAC] leading-[25.4px] md:leading-[38.4px] text-end">
                95% Uniswa
                <span className="block">5% Marketing</span>
              </h3>
              <p className="text-end font-Balsamiq font-normal text-[15px] sm:text-xl md:text-2xl text-white leading-[25.4px] md:leading-[38.4px] pt-1 ">
                Allocation
              </p>
            </div>
            <img
              className=" h-[40px] sm:h-[80px] md:h-[105px]"
              src={marketing}
              alt="first"
            />
          </div>
          <div className="hidden sm:block mx-auto absolute bottom-[-52%] sm:bottom-[-60%] md:bottom-[-52%] lg:bottom-[-35%] left-[43%]">
            <img className="mx-auto h-[40px]" src={NoTax} alt="first" />
            <h3 className="font-Balsamiq font-normal text-xl md:text-2xl lg:text-[32px] text-[#D45B07] leading-[25.4px] md:leading-[38.4px] pt-1 sm:pt-4">
              No Tax
            </h3>
          </div>
          <div className="absolute right-[-2px] md:right-[-14%] lg:right-[-33%] bottom-[-19%] sm:bottom-[-31%] md:bottom-[-22%] lg:bottom-[-11%] hidden sm:inline-flex items-center gap-2 sm:gap-4 xl:gap-6">
            <img
              className="h-[40px] sm:h-[80px] md:h-[105px]"
              src={NoMint}
              alt="first"
            />
            <h3 className="font-Balsamiq font-normal text-[15px] sm:text-xl md:text-2xl lg:text-[32px] text-[#FB5352] leading-[25.4px] md:leading-[38.4px] ">
              No Mint Function
            </h3>
          </div>
          <div className="absolute right-[-1%] sm:right-[-4%] md:right-[-14%] lg:right-[-37%] xl:right-[-47%] top-[27%] sm:top-[10%] lg:top-[14%] hidden sm:inline-flex items-center gap-2 lg:gap-4 xl:gap-6 ">
            <img
              className="h-[40px] sm:h-[60px] md:h-[105px]"
              src={Liquidity}
              alt="first"
            />
            <h3 className="font-Balsamiq font-normal text-[15px] sm:text-xl md:text-2xl lg:text-[32px] text-[#8EC627] leading-[25.4px] md:leading-[38.4px] max-w-[90px] sm:max-w-[140px] lg:max-w-[217px] inline">
              Liquidity lock for 1 year
            </h3>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-0 left-0 right-0 ">
        <img
          className="w-full h-[200px] md:h-[235px]"
          src={ABoutSectionBottom}
          alt="AboutSectionBottom"
        />
      </div>
      <div className="w-full absolute  bottom-0 left-0 right-0 z-[-1]">
        <img
          className="w-full h-[200px] md:h-[235px]"
          src={TokenomicsImg}
          alt="Tokenomics"
        />
      </div>
      <div className=" w-[230px] absolute bottom-0 left-0 z-[-1] ">
        <img
          className="w-full relative hidden md:block"
          src={Tokenomicsleft}
          alt="Tokenimcs"
        />
        <img
          className="absolute bottom-0 left-0 w-[150px]"
          src={Denosar}
          alt="after"
        />
      </div>
      <div className="absolute bottom-[6%] left-[35%] w-[81px] max-[450px]:hidden">
        <img src={Tokenomicsbottom} alt="unltuy" />
      </div>
      <div className="absolute bottom-0 right-[35%] w-[81px]">
        <img src={Tokenomicsbottom} alt="unltuy" />
      </div>
      <div className="absolute bottom-[2%] right-[3%] w-[100px] sm:w-[180px] ">
        <img src={TokenomicsRight} alt="unltuy" />
      </div>
      <div className="absolute top-[10%] xl:top-[8%] right-0 w-[200px] sm:w-[255px] lg:w-[400px] xl:w-[500px] z-[-1] ">
        <img src={TokenomicsMainEllipse} alt="unltuy" />
      </div>
    </div>
  );
};

export default Tokenomics;
