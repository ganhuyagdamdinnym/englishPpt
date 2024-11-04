import Image from "next/image";
export const Slide1 = () => {
  return (
    <div className="flex overflow-scroll flex-col-reverse gap-4 lg:flex-row  justify-between items-center text-center bg-[#048c6b] rounded-lg p-8 lg:p-[100px] w-full max-w-6xl">
      <div className="w-full lg:w-[400px] flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
        <h1 className="text-3xl lg:text-2xl font-extrabold text-white my-2">
          Олон төрлийн мэргэжлүүдийг ойлгохын ач холбогдол
        </h1>
        <p className="text-white text-lg mb-4">
          Дасан зохицох чадвар: Олон төрлийн ажлын орчинд дасан зохицож,
          хэрэгцээтэй ур чадваруудыг эзэмших боломжтой.
        </p>
        <p className="text-white text-lg mb-4">
          Өөрийгөө хөгжүүлэх: Мэргэжлүүдийн уялдаа холбоог ойлгосноор илүү сайн
          шийдвэр гаргаж, өөрийгөө хөгжүүлэх боломжтой.
        </p>

        <button
          //   onClick={() => router.push("/ethics/slides")}
          className="bg-[#00765a] w-40 text-white font-semibold px-6 py-2 rounded-full hover:bg-green-400"
        >
          Start Slide
        </button>
      </div>
      <div className="relative w-48 h-48 border-2 lg:w-96 lg:h-96 mb-4 rounded-full overflow-hidden lg:border-[8px] border-white">
        <Image
          src="/jobSearch.png"
          alt="Team Working"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
