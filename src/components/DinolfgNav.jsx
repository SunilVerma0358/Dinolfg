import React, { useState } from "react";
import { Discord, Instagram, Twitter } from "./common/SvgExport";
const DinolfgNav = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <div className="max-w-[1156px] mx-auto px-3 container">
      <div className="bg-white rounded-[61px] p-[4px_7.24px_8px_24px] border-b-4 border-black">
        <div className="flex items-center justify-between gap-3">
          <a href="#!" className="max-w-[158px]">
            <p className=" font-normal text-white max-[374px]:text-2xl text-3xl lg:text-[39px] leading-[37.17px] text-center">
              <span className="text-[#FBA11D] ff_lucky  drop-shadow-[0px_2px_0px#000]">
                D
              </span>
              <span className="text-[#23AAAC]  ff_lucky drop-shadow-[0px_2px_0px#000]">
                I
              </span>
              <span className="text-[#D45B07]  ff_lucky drop-shadow-[0px_2px_0px#000]">
                N
              </span>
              <span className="text-[#8EC627]  ff_lucky drop-shadow-[0px_2px_0px#000]">
                O
              </span>
              <span className="text-[#8EC627]  ff_lucky drop-shadow-[0px_2px_0px#000]">
                L
              </span>
              <span className="text-[#FCCA2B]  ff_lucky drop-shadow-[0px_2px_0px#000]">
                F
              </span>
              <span className="text-[#8F78D2]  ff_lucky drop-shadow-[0px_2px_0px#000]">
                G
              </span>
            </p>
          </a>
          <div className="flex items-center gap-12 lg:gap-[136px]">
            <div
              className={`${
                first ? "left-0" : " -left-full"
              } flex gap-3  max-md:w-full h-screen md:h-full absolute  bg-white top-0 items-center justify-center md:h-unset md:static md:left-0  md:bg-transparent md:justify-end flex-col md:flex-row z-30  transition-all ease-linear duration-300 `}
            >
              <ul className="flex items-center gap-3 lg:gap-7 flex-col md:flex-row">
                <li>
                  <a
                    href="#About"
                    onClick={setopen}
                    className=" font-Chewy font-normal text-black text-base lg:text-lg leading-[23.52px] relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-black hover:after:w-full hover:after:left-0 after:duration-300 "
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#Tokenomic"
                    onClick={setopen}
                    className=" font-Chewy font-normal text-black text-base lg:text-lg leading-[23.52px] relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-black hover:after:w-full hover:after:left-0 after:duration-300"
                  >
                    Tokenomic
                  </a>
                </li>
                <li>
                  <a
                    href="#Roadmap"
                    onClick={setopen}
                    className=" font-Chewy font-normal text-black text-base lg:text-lg leading-[23.52px]  relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-black hover:after:w-full hover:after:left-0 after:duration-300"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <a
                    href="#Faq"
                    onClick={setopen}
                    className=" font-Chewy font-normal text-black text-base lg:text-lg leading-[23.52px] relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-black hover:after:w-full hover:after:left-0 after:duration-300 "
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <button className=" sm:hidden bg-[url(../src/assets/image/HeroButton.webp)] bg-cover bg-no-repeat  font-Chewy font-normal text-black text-base lg:text-lg leading-[23.52px] p-[11px_36px] md:me-3 lg:me-0 lg:ms-1 hover:text-white duration-300">
                Join Now
              </button>
            </div>
            <div className="flex items-center max-[374px]:gap-1 gap-2 lg:gap-2 pe-3 md:pe-0">
              <div className=" group duration-300 hover:-translate-y-2">
                <a
                  href="https://twitter.com/radialcode?lang=en"
                  target="blank"
                  className=" border border-black rounded-[61px] w-[37px] h-[37px] flex items-center justify-center group-hover:bg-[#1DA1F2] group-hover:border-transparent "
                >
                  <Twitter />
                </a>
              </div>
              <div className="duration-300 hover:-translate-y-2 group">
                <a
                  href="https://discord.com/"
                  target="blank"
                  className=" border border-black rounded-[61px] w-[37px] h-[37px] flex items-center justify-center duration-300 group-hover:bg-blue-600 group-hover:border-transparent"
                >
                  <Discord />
                </a>
              </div>
              <div className="duration-300 hover:-translate-y-2 group">
                {" "}
                <a
                  href="https://www.instagram.com/radialcode/?hl=en"
                  target="blank"
                  className=" border border-black rounded-[61px] w-[37px] h-[37px] flex items-center justify-center duration-300 group-hover:bg-instagram group-hover:border-transparent "
                >
                  <Instagram />
                </a>
              </div>
              <div className="flex items-center gap-2 md:gap-0">
                <button className="hidden sm:block bg-[url(../src/assets/image/HeroButton.webp)] bg-cover bg-no-repeat  font-Chewy font-normal text-black text-base lg:text-lg leading-[23.52px] p-[11px_36px] md:me-3 lg:me-0 lg:ms-1 hover:text-white duration-300">
                  Join Now
                </button>
                <div className="sm:pt-2" onClick={setopen}>
                  {first ? (
                    <div className="flex md:hidden flex-col relative z-50 justify-between w-[28px] h-[28px] cursor-pointer  ">
                      {" "}
                      <span className="bg-black w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
                      <span className="bg-black w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-[56deg] bottom-[11px]"></span>
                    </div>
                  ) : (
                    <div className="flex md:hidden flex-col  z-50 justify-between w-[28px] h-[28px] cursor-pointer relative ">
                      {" "}
                      <span className="bg-black w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                      <span className="bg-black  w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                      <span className="bg-black w-full h-[3px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DinolfgNav;
