"use client";
import { EnglishLearningWaysData } from "../../../datas/englishPptData";
import { useState, useEffect } from "react";
import { DataType } from "../../../datas/Types";
import Image from "next/image";

export const EnglishPpt = () => {
  // const [data, setData] = useState<DataType[]>(EnglishLearningWaysData);
  const [currentData, setCurrrentData] = useState<DataType>();
  const [whichMethod, setWhichMethod] = useState<string>("");
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [endText, setEndText] = useState<string>("");

  const switchLector = (index: number) => {
    setSlideIndex(0);
    setCurrrentData(EnglishLearningWaysData[index]);
  };

  const handleMinusSlideIndex = () => {
    if (slideIndex <= 0) {
      null;
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };
  const handleSlideIndexAdd = () => {
    if (slideIndex >= (currentData?.slides.length || 0) - 1) {
      setEndText("Thanks for give attention");
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  console.log("test", slideIndex);

  useEffect(() => {
    console.log("data", EnglishLearningWaysData[0]);
    setCurrrentData(EnglishLearningWaysData[0]);
  }, []);
  console.log("current", currentData);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between pt-24 bg-gray-900 text-white">
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
        <div className="w-[600px] h-full bg-gray-800 rounded-md shadow-md flex items-center justify-center">
          {endText == "" ? (
            <h1>{currentData?.slides[slideIndex].title}</h1>
          ) : (
            <h1>{endText}</h1>
          )}

          {/* Content for the slide goes here */}
        </div>
        <Image
          src={"/rightArrow.svg"}
          alt="RightArrow"
          height={40}
          width={40}
          className="cursor-pointer hover:scale-105 transition-transform shadow-lg"
          onClick={() => handleSlideIndexAdd()}
        />
      </div>
      <div className="w-full h-40 flex gap-2 mb-[-72px] justify-center">
        {EnglishLearningWaysData.map((e, index) => (
          <div
            onClick={() => switchLector(index)}
            key={index}
            className="w-40 h-full p-4 text-center font-semibold rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors shadow-sm flex flex-col items-center justify-center"
          >
            <div className="text-lg font-bold">{e.way}</div>
            <div className="text-sm font-light mt-1 text-gray-300">
              {e.lector}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
