"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Slide1 } from "../components/Slide1";
import { Slide2 } from "../components/Slide2";
import { Slide3 } from "../components/Slide3";
import { Slide4 } from "../components/Slide4";

const Slides = () => {
  const router = useRouter();
  const [whichSlide, setWhichSlide] = useState<number>(1);

  // Handler to navigate to the previous slide
  const handlePrev = () => {
    if (whichSlide > 1) setWhichSlide(whichSlide - 1);
  };

  // Handler to navigate to the next slide
  const handleNext = () => {
    if (whichSlide < 4) setWhichSlide(whichSlide + 1);
  };

  return (
    <div className="w-screen h-screen pt-4 bg-[#00765a] flex justify-between items-center gap-2 pl-4 pr-4">
      <p className="fixed h-10 w-full text-xl font-medium bottom-0 text-white flex justify-center items-center">
        {whichSlide}
      </p>

      {/* Left Arrow */}
      <Image
        src={"/rightArrow.svg"}
        alt="left arrow"
        height={40}
        width={40}
        className="rotate-180 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-140"
        onClick={handlePrev}
      />

      {/* Slide Content */}
      {whichSlide === 1 ? (
        <Slide1 />
      ) : whichSlide === 2 ? (
        <Slide2 />
      ) : whichSlide === 3 ? (
        <Slide3 />
      ) : whichSlide === 4 ? (
        <Slide4 />
      ) : null}

      {/* Right Arrow */}
      <Image
        src={"/rightArrow.svg"}
        alt="right arrow"
        height={40}
        width={40}
        className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.3]"
        onClick={handleNext}
      />
    </div>
  );
};

export default Slides;
