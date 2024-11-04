"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WebHosting = () => {
  const router = useRouter();

  return (
    <div className="w-screen h-screen bg-[#00765a] flex flex-col items-center p-6">
      {/* Header */}
      <div className="flex justify-between w-full text-white mb-8">
        <h1 className="text-xl font-bold">Мэргэжлийн ёс зүй</h1>
        <nav className="flex space-x-8">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="underline font-semibold">
            Contact
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-center bg-[#048c6b] rounded-lg p-8 lg:p-[100px] w-full max-w-5xl">
        {/* Circular Image */}
        <div className="relative w-48 h-48 lg:w-96 lg:h-96 mb-4 rounded-full overflow-hidden">
          <Image
            src="/knowledge.png"
            alt="Team Working"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[400px] flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl w-40 rounded-2xl flex justify-center items-center font-bold bg-white text-green-500">
            Сэдэв
          </h2>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white my-2">
            Мэргэжлүүдийн талаар өргөн мэдлэгтэй байх нь
          </h1>
          <p className="text-white text-lg mb-4">
            Зарим мэргэжлийн ёс зүй, онцлог
          </p>

          {/* Start Button */}
          <button
            onClick={() => router.push("/ethics/slides")}
            className="bg-[#00765a] w-40 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-400"
          >
            Start Slide
          </button>
        </div>
      </div>

      {/* Footer with Website Link */}
      <p className="mt-8 text-white text-sm">www.reallygreatsite.com</p>
    </div>
  );
};

export default WebHosting;
