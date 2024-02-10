import React from "react";
const Preloader = () => {
  return (
    <div>
      <div
        className="bg-[#0A4740] h-screen flex justify-center items-center flex-col
    "
      >
        <div className="flex items-center gap-2">
          <p className=" font-Chewy text-white text-[60px] font-bold  tracking-wide pr-3">
            LOADING
          </p>
          <span className="text-[60px] text-white animate-proloader  font-bold duration-500 delay-150">
            .
          </span>
          <span className="text-[60px] text-white animate-proloader1 font-bold duration-500  delay-300">
            .
          </span>
          <span className="text-[60px] text-white animate-proloader2 font-bold duration-500  delay-500">
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
