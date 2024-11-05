import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setWhichComp: Dispatch<SetStateAction<string>>;
};
export const AboutEthics = (props: Props) => {
  const { setWhichComp } = props;
  return (
    <div className="flex flex-col gap-4 lg:flex-row  justify-between items-center text-center bg-[#048c6b] rounded-lg p-8 lg:p-[100px] w-full max-w-6xl">
      <div className="p-2 border-4 border-[#07b98e] rounded-full flex justify-center items-center">
        <div className="relative w-48 h-48 border-2 lg:w-96 lg:h-96 rounded-full overflow-hidden lg:border-[8px] border-white">
          <Image
            src="/workPlaces.png"
            alt="Team Working"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-full lg:w-[400px] flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl lg:text-2xl font-extrabold text-start  text-white my-2">
          Ажлын байрны ёс зүйн ач холбогдол
        </h1>
        <p className="text-white text-lg text-start  mb-4">
          1.Ажлын орчинд итгэлцэл үүсгэнэ: Ёс зүйтэй хандах нь ажилтнууд болон
          удирдлагуудын хооронд итгэлцэл бий болгож, ажлын үр бүтээмжийг
          нэмэгдүүлдэг.
        </p>
        <p className="text-white text-lg mb-4 text-start ">
          2.Багийн ажиллагааг дэмжинэ: Ёс зүйн зарчмуудыг баримтлах нь багийн
          гишүүдийн хоорондын харилцааг сайжруулж, хамтын ажиллагааг үр ашигтай
          болгодог.
        </p>
        <p className="text-white text-lg mb-4 text-start ">
          3.Асуудлыг зөв шийдвэрлэхэд дэмжлэг үзүүлнэ: Ёс зүйтэй ажиллах нь
          асуудлыг шударгаар шийдвэрлэх боломжийг олгож, зөрчилдөөнөөс
          сэргийлдэг.
        </p>

        <button
          onClick={() => setWhichComp("SoftwareEngineer")}
          className="bg-[#00765a] w-40 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-400"
        >
          Зарим мэргэжлийн хувьд
        </button>
      </div>
    </div>
  );
};
