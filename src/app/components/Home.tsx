import Image from "next/image";

export const HomePage = () => {
  return (
    <div className="w-[1000px] h-[600px] bg-black">
      home
      <Image
        src={"/learningPhoto1.png"}
        alt="Learning Photo"
        width={500}
        height={300}
      />
    </div>
  );
};
