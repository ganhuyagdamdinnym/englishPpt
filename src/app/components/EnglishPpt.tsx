"use client";
import { EnglishLearningWaysData } from "../../../datas/englishPptData";
import { useState, useEffect } from "react";
import { DataType } from "../../../datas/Types";
import Image from "next/image";

export const EnglishPpt = () => {
  const [currentData, setCurrrentData] = useState<DataType>();
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [endText, setEndText] = useState<string>("");

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
  };

  useEffect(() => {
    setCurrrentData(EnglishLearningWaysData[0]); // Load initial data
  }, []);

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
            <h1 className="text-2xl font-semibold text-gray-100">
              {currentData?.slides[slideIndex].title}
            </h1>
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
    </div>
  );
};
