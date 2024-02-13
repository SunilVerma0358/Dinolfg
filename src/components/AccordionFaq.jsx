import React from "react";
import AccordionTopImg from "../assets/image/AccordionTopImg.webp";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <div className="relative bg-white rounded-[40px] sm:w-9 w-6 sm:h-9 h-6 flex justify-center items-center ">
      <svg
        className={`${
          id === open ? "rotate-180" : " translate-x-[-1px]"
        }   transition-transform`}
        width="16"
        height="9"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.28571 8.53763e-07L8 5.625L13.7143 3.54204e-07L16 1.125L8 9L-3.44227e-07 1.125L2.28571 8.53763e-07Z"
          fill="#0A4740"
        />
      </svg>
    </div>
  );
}
const AccordionFaq = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div id="Faq" className=" relative bg-[#0A4740] z-10 overflow-hidden ">
      <div className="max-w-[801px] container mx-auto px-3 pt-24 xl:pt-36 pb-2">
        <div className="sm:py-12 md:py-12 lg:py-[130px] xl:py-[150px]">
          <h2 className=" font-Chewy font-normal text-white text-4xl sm:text-[40px] md:text-4xl lg:text-[64px] leading-[120%] text-center pb-5 sm:pb-[60px] ">
            FAQs
          </h2>
          <Accordion
            data-aos="fade-down"
            className="border border-white rounded-[40.5px] py-4 px-5 mb-3 sm:mb-6 bg-[#09655A]"
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="  font-Balsamiq font-normal text-base sm:text-lg md:text-xl text-white leading-[130%] py-0 text-start  "
            >
              Maecenas laoreet, sapien vel cursus ultricies?
            </AccordionHeader>
            <AccordionBody className="font-Balsamiq text-[13px] sm:text-base font-normal leading-[160%] text-white max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            data-aos="fade-down"
            className=" border-white rounded-[40.5px] border mb-3 sm:mb-6  py-4 px-5  bg-[#09655A] overflow-hidden"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="  font-Balsamiq text-base sm:text-lg md:text-xl py-0 text-start font-normal text-white leading-[130%]"
            >
              {" "}
              Maecenas laoreet, sapien vel cursus ultricies?
            </AccordionHeader>
            <AccordionBody className="font-Balsamiq text-[13px] sm:text-base font-normal leading-[160%] text-white max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            data-aos="fade-down"
            className=" border-white rounded-[40.5px] border mb-3 sm:mb-6  py-4 px-5 bg-[#09655A] "
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="  font-Balsamiq font-normal text-white text-base sm:text-lg md:text-xl py-0 text-start leading-[130%]"
            >
              {" "}
              Maecenas laoreet, sapien vel cursus ultricies?
            </AccordionHeader>
            <AccordionBody className="font-Balsamiq font-normal text-white text-[13px] sm:text-base leading-[160%] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            data-aos="fade-down"
            className=" border-white rounded-[40.5px] border mb-3 sm:mb-6 py-4 px-5  bg-[#09655A]"
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="  font-Balsamiq font-normal text-white text-base sm:text-lg md:text-xl leading-[130%] py-0 text-start"
            >
              Maecenas laoreet, sapien vel cursus ultricies?
            </AccordionHeader>
            <AccordionBody className="font-Balsamiq font-normal text-white text-[13px] sm:text-base leading-[160%] max-w-[880px] pt-2 pb-0 ">
              En Exclusive Games, ofrecemos experiencias únicas y
              personalizadas, respaldadas por más de 15 años de dedicación al
              desarrollo de multiplataformas para juegos de azar.
            </AccordionBody>
          </Accordion>
          <Accordion
            data-aos="fade-down"
            className=" border-white border mb-3 sm:mb-6 rounded-[40.5px] py-4 px-5  bg-[#09655A]"
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="  font-Balsamiq font-normal text-white text-base sm:text-lg md:text-xl py-0 text-start leading-[130%]"
            >
              Maecenas laoreet, sapien vel cursus ultricies?
            </AccordionHeader>
            <AccordionBody className="font-Balsamiq font-normal text-white text-[13px] sm:text-base  leading-[160%] max-w-[880px] pt-2 pb-0 ">
              Maecenas laoreet, sapien vel cursus ultricies?
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      <div className=" absolute top-[-9%] lg:top-[-12%] xl:top-[-10%] left-0 right-0">
        <img
          className="w-full  max-h-[240px] "
          src={AccordionTopImg}
          alt="img"
        />
      </div>
    </div>
  );
};

export default AccordionFaq;
