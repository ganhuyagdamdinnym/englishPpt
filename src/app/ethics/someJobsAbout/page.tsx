"use client";
import { SoftwareEngineer } from "../components/SoftwareEngineer";
import { AboutEthics } from "../components/AboutEthics";
import Image from "next/image";
import { useState } from "react";

const SomeJobsAbout = () => {
  const [whichComp, setWhichComp] = useState<string>("aboutEthics");
  return (
    <div className="w-screen h-screen pb-12 pt-[200px] lg:pt-4 lg:pb-4 bg-[#00765a] flex justify-center gap-2 pl-4 pr-4 overflow-scroll scrollbar-hide">
      {/* <AboutEthics /> */}
      {whichComp === "aboutEthics" ? (
        <AboutEthics setWhichComp={setWhichComp} />
      ) : null}
      {whichComp === "SoftwareEngineer" ? <SoftwareEngineer /> : null}
    </div>
  );
};

export default SomeJobsAbout;
