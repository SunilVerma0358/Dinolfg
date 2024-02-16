import React from "react";
import footerImg from "../assets/image/footerImg.webp";
import FooterCycle from "../assets/image/cycleRight.webp";
import {
  FooterDiscord,
  FooterInstagram,
  FooterTwitter,
} from "./common/SvgExport";
const Footer = () => {
  return (
    <div className="relative bg-[#0A4740] z-10">
      <div className="container mx-auto px-3 max-w-[1140px] pt-14 md:pt-20 pb-56 xl:pb-64">
        <div className="mx-auto max-w-[324px] max-h-[76px] ">
          <h2 className=" font-Chewy font-normal text-white text-4xl sm:text-[64px] leading-[50px] sm:leading-[65px] md:leading-[83.63px] text-center">
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
        </div>
        <p
          className=" font-Balsamiq font-normal text-white text-sm leading-[16.2px] max-w-[376px] mx-auto text-center py-5 sm:py-8
        "
        >
          Sed tempus pretium est, vestibulum dapibus mauris viverra id.
          Curabitur feugiat porta lorem,{" "}
        </p>
        <div className="flex items-center  gap-2 pe-3 md:pe-0 justify-center">
          <div className="duration-300 hover:-translate-y-2 group">
            <a
              href="https://twitter.com/radialcode?lang=en"
              target="blank"
              className="border border-white rounded-[61px] w-[37px] h-[37px] flex items-center justify-center transition-all duration-300 ease-linear group hover:-translate-y-3 group-hover:bg-[#1DA1F2] group-hover:border-transparent  "
            >
              <FooterTwitter />
            </a>
          </div>
          <div className="duration-300 hover:-translate-y-2 group">
            <a
              href="https://discord.com/"
              target="blank"
              className="border border-white rounded-[61px] w-[37px] h-[37px] flex items-center justify-center transition-all ease-linear duration-300 group-hover:bg-blue-600 group-hover:border-transparent "
            >
              <FooterDiscord />
            </a>
          </div>
          <div className="duration-300 hover:-translate-y-2 group">
            <a
              href="https://www.instagram.com/radialcode/?hl=en"
              target="blank"
              className="border border-white rounded-[61px] w-[37px] h-[37px] flex items-center justify-center transition-all duration-300 ease-linear group-hover:bg-instagram group-hover:border-transparent "
            >
              <FooterInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0 right-0 z-[-1] ">
        <img
          className="w-full h-[240px] xl:h-[300px]"
          src={footerImg}
          alt="footerImg"
        />
      </div>
      <div className=" absolute bottom-[4%] right-[2%] max-w-[150px] animate-movebike2 ">
        <img
          src={FooterCycle}
          alt="footerCycles
      "
        />
      </div>
    </div>
  );
};

export default Footer;
