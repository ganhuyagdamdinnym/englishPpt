import Image from "next/image";

export default function End() {
  return (
    <div
      style={{ backgroundImage: 'url("/thankyou.png")' }}
      className="w-screen h-screen"
    ></div>
    // <div className="flex flex-col items-center justify-center h-screen text-center bg-[#048c6b] text-white">
    //   <h1 className="text-4xl lg:text-6xl font-bold mb-4">Баярлалаа!</h1>
    //   <p className="text-lg lg:text-2xl">
    //     Та бүхэнд цаг заваа зориулсан танд баярлалаа.
    //   </p>
    //   <p className="mt-2 text-base lg:text-lg">
    //     Хэрэв асуух зүйл байвал бидэнтэй холбогдоорой.
    //   </p>
    //   <div className="mt-8">
    //     <Image
    //       src="/thankyou.png" // Эцсийн зурагныхаа замыг энд оруулна уу
    //       alt="Баярлалаа"
    //       width={200}
    //       height={200}
    //       className="rounded-full object-cover border-4 border-white"
    //     />
    //   </div>
    // </div>
  );
}
