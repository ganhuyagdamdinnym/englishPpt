import Image from "next/image";

export const HomePage = () => {
  return (
    <div className="w-full h-full flex justify-center">
      <div></div>
      <Image
        src={"/learningPhoto1.png"}
        alt="Learning Photo"
        width={1200}
        height={600}
      />
      <div></div>
    </div>
  );
};
