import Image from "next/image";
import { useRouter } from "next/navigation";
export const Slide4 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4 lg:flex-row  justify-between items-center text-center bg-[#048c6b] rounded-lg p-8 lg:p-[100px] w-full max-w-6xl">
      <div className="p-2 border-4 border-[#07b98e] rounded-full flex justify-center items-center">
        <div className="relative w-48 h-48 border-2 lg:w-96 lg:h-96 rounded-full overflow-hidden lg:border-[8px] border-white">
          <Image
            src="/life.png"
            alt="Team Working"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-full lg:w-[400px] flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl lg:text-2xl font-extrabold text-start  text-white my-2">
          Амьдралын чанарт үзүүлэх нөлөө
        </h1>
        <p className="text-white text-lg text-start  mb-4">
          Амьдралыг өргөн цар хүрээгээр харах: Олон төрлийн мэдлэгтэй байснаар
          өөрийнхөө амьдралыг илүү утга учиртай болгоно.
        </p>
        <p className="text-white text-lg mb-4 text-start ">
          Ирээдүйгээ тодорхойлох: Ямар чиглэлээр ажиллах, цаашдаа юу хийхээ
          тодорхойлоход тусалдаг.
        </p>

        <button
          onClick={() => router.push("/ethics/someJobsAbout")}
          className="bg-[#00765a] w-40 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-400"
        >
          Ажлын байрны ёс зүй
        </button>
      </div>
    </div>
  );
};
