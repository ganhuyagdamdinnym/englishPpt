"use client";
import Image from "next/image";
import { HomePage } from "./components/Home";
import { useState } from "react";
import { set } from "mongoose";
import { EnglishPpt } from "./components/EnglishPpt";

const category = ["Home", "About", "Contact", "Projects"];
const myProjects = ["English", "Ethics"];
export default function Home() {
  const [categoryStatus, setCategoryStatus] = useState<string>("Home");
  const [selectedProjectName, setSelectedProjectName] = useState<string>("");
  const [selectProjectStatus, setSelectProjectStatus] =
    useState<string>("Home");
  const handlerStatus = (item: string) => {
    if (item == "Projects") {
      setSelectProjectStatus("SelectProject");
      setCategoryStatus(item);
    } else {
      setSelectProjectStatus("");
      setCategoryStatus(item);
      setSelectedProjectName("");
    }
  };
  const handleProjectSelect = (projectName: string) => {
    setSelectedProjectName(projectName);
    setSelectProjectStatus("");
  };
  return (
    <div className="w-screen h-screen flex justify-center">
      {selectProjectStatus === "SelectProject" ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="w-96 h-auto max-h-[80%] bg-white rounded-lg shadow-2xl transform transition-transform duration-300 scale-105 p-6 flex flex-col items-center overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Select Your Project</h2>
            <div className="w-full space-y-4">
              {myProjects.map((project, index) => (
                <div
                  key={index}
                  className="w-full p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer flex items-center justify-between"
                  onClick={() => handleProjectSelect(project)}
                >
                  <div className="text-lg font-medium text-gray-800">
                    {project}
                  </div>
                  {/* <span className="text-sm text-gray-600">{project.details}</span> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
      <div
        className="w-full h-24 bg-black fixed top-0 flex items-center justify-between pl-8 pr-[200px]"
        style={{ opacity: 0.8 }}
      >
        <Image src="/Logo.png" alt="Team Logo" width={50} height={50} />
        <div className="w-96 h-full flex justify-between items-center">
          {category.map((item, index) => (
            <div key={index}>
              <button
                className={
                  categoryStatus === item
                    ? "	text-white w-20 h-8 flex border-2 border-white justify-center items-center bg-black rounded-xl font-semibold"
                    : "	text-black w-20 h-8 flex justify-center items-center bg-white rounded-xl font-semibold"
                }
                style={{ opacity: 0.9 }}
                onClick={() => handlerStatus(item)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div
        className="w-full h-[90%] bg-[red]"
        style={{ backgroundImage: 'url("/learningPhoto1.png")' }}
      >
        {categoryStatus === "Projects" ? (
          <div className="w-full h-full">
            {selectedProjectName === "English" ? <EnglishPpt /> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
