"use client";
import { EnglishLearningWaysData } from "../../../datas/englishPptData";
import { useState, useEffect } from "react";
import { DataType } from "../../../datas/Types";
import Image from "next/image";

export const EnglishPpt = () => {
  const [currentData, setCurrrentData] = useState<DataType>();
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [endText, setEndText] = useState<string>("");
  const [rotate, setRotate] = useState(false); // State to trigger rotation
  const [rotateleft, setRotateleft] = useState(false);

  const switchLector = (index: number) => {
    setSlideIndex(0); // Reset slide index
    setEndText(""); // Clear any end text
    setCurrrentData(EnglishLearningWaysData[index]); // Update currentData
  };

  const handleMinusSlideIndex = () => {
    if (endText !== "") {
      setEndText("");
    }
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    setRotateleft(true);
  };

  const handleSlideIndexAdd = () => {
    if (endText !== "") {
      setEndText("");
    }
    if (slideIndex < (currentData?.slides.length || 0) - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setEndText("Thanks for give attention");
      setSlideIndex(-1);
    }
    setRotate(true); // Trigger rotation on click
  };

  useEffect(() => {
    setCurrrentData(EnglishLearningWaysData[0]); // Load initial data
  }, []);

  // Reset rotation effect after the animation completes
  useEffect(() => {
    if (rotate) {
      const timer = setTimeout(() => setRotate(false), 500); // Reset after 500ms (animation duration)
      return () => clearTimeout(timer);
    }
  }, [rotate]);

  useEffect(() => {
    if (rotateleft) {
      const timer = setTimeout(() => setRotateleft(false), 500); // Reset after 500ms (animation duration)
      return () => clearTimeout(timer);
    }
  }, [rotateleft]);

  return (
    <div
      style={{
        backgroundImage: `url(${currentData?.slides[slideIndex]?.image})`,
      }}
      className="w-full h-full flex flex-col items-center justify-between bg-no-repeat bg-cover bg-center pt-24 bg-gray-900 text-white"
    >
      <div className="w-full h-[80%] flex items-center justify-between px-10">
        <Image
          onClick={handleMinusSlideIndex}
          src={"/rightArrow.svg"}
          alt="leftArrow"
          style={{ rotate: "180deg" }}
          height={40}
          width={40}
          className="cursor-pointer hover:scale-105 transition-transform shadow-lg"
        />
        <div
          className={`w-[600px] min-h-[200px] bg-gray-800 ${
            rotateleft ? "left" : ""
          } rounded-md shadow-md flex items-center justify-center ${
            rotate ? "rotate" : ""
          }`} // Apply rotation class conditionally
        >
          {endText === "" ? (
            <div className="flex flex-col justify-center items-center p-12">
              <h1 className="text-2xl font-semibold text-gray-100 mb-4">
                {currentData?.slides[slideIndex].title}
              </h1>
              <div className="text-xl font-medium text-gray-100 space-y-2">
                {currentData?.slides[slideIndex]?.description.map(
                  (e, index) => (
                    <p key={index}>
                      {index + 1}.{e}
                    </p>
                  )
                )}
              </div>
            </div>
          ) : (
            <h1 className="text-3xl font-semibold text-gray-100">{endText}</h1>
          )}
        </div>
        <Image
          src={"/rightArrow.svg"}
          alt="RightArrow"
          height={40}
          width={40}
          className="cursor-pointer hover:scale-105 transition-transform shadow-lg"
          onClick={handleSlideIndexAdd}
        />
      </div>
      <div className="w-full h-40 flex gap-2 mb-[-72px] justify-center">
        {EnglishLearningWaysData.map((e, index) => (
          <div
            onClick={() => switchLector(index)}
            key={index}
            className="w-52 h-full p-4 text-center font-semibold rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors shadow-sm flex flex-col items-center justify-center"
          >
            <div className="text-lg font-bold">{e.way}</div>
            <div className="text-sm font-light mt-1 text-gray-300">
              {e.lector}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes rotate-center {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        @keyframes rotate-left {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotateY(-360deg);
          }
        }
        .rotate {
          animation: rotate-center 1s ease-in-out;
        }
        .left {
          animation: rotate-left 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};
