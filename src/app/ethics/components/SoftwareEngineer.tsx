import Image from "next/image";
import { useRouter } from "next/navigation";

export const SoftwareEngineer = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col gap-10 p-8 lg:p-[100px] rounded-lg text-white pb-10 h-full max-w-6xl">
      {/* <div className="fixed h-20 w-full top-0 bg-[#07b98e]"></div> */}
      <div className="text-center">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Программ хангамжийн инженерийн ёс зүй
        </h1>
        <p className="mt-4 inline-block bg-white text-[#048c6b] px-4 py-1 rounded-md font-medium">
          Хариуцлага, шударга байдал, хүндэтгэл, мэргэжлийн ёс зүй
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold">Хариуцлага</h2>
          <p className="mt-2">
            Хариуцлага бол программ хангамжийн инженерийн ёс зүйн үндэс юм.
            Инженерийн гаргасан шийдвэр, бүтээсэн бүтээгдэхүүн нь хэрэглэгчдийн
            өдөр тутмын амьдралд нөлөөлж болох тул хариуцлагатай байж, ямар
            нэгэн асуудал, алдаа гарсан тохиолдолд засч залруулахыг хичээх
            ёстой.
          </p>
          <p className="mt-2">
            Программ хангамжийн бүтээгдэхүүнийг найдвартай, аюулгүй байхаар
            бүтээх нь инженерийн хариуцлагын нэг хэсэг юм.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Шударга байдал</h2>
          <p className="mt-2">
            Шударга байдал нь зөвхөн хэрэглэгчидтэй бус, хамт ажилладаг баг,
            байгууллага, харилцагчидтай ч шударгаар харьцахыг шаарддаг.
            Мэдээллийг үнэн зөвөөр хүргэх, ажил үүргийн талаар бодит мэдээлэл
            өгөх, өөрийн ур чадварыг хэтрүүлэн үнэлэхгүй байх нь чухал.
          </p>
          <p className="mt-2">
            Шударга байдал нь итгэлцэл бий болгодог тул хэрэглэгчид болон
            хамтран ажиллагсад инженерийг илүү үнэлдэг.
          </p>
        </div>

        {/* Баруун хэсэг - Зурагнууд */}
        <div className="flex flex-col gap-4 items-center">
          <div className="relative w-48 h-48 border-2 lg:w-52 lg:h-52 rounded-full overflow-hidden lg:border-[4px] border-white">
            <Image
              src="/software1.png"
              alt="Зураг 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-48 h-48 border-2 lg:w-52 lg:h-52 rounded-full overflow-hidden lg:border-[4px] border-white">
            <Image
              src="/ssss.png"
              alt="Зураг 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="text-lg leading-relaxed">
        <h2 className="text-2xl font-semibold">Бусдыг хүндэтгэх</h2>
        <p className="mt-2">
          Инженерийн ажил багийн орчинд ихэвчлэн хийгддэг тул бусдын санал
          бодлыг хүндэтгэн сонсох, хамтын ажиллагаанд эерэгээр оролцох нь ёс
          зүйн нэг хэсэг юм.
        </p>
        <p className="mt-2">
          Хэрэглэгчид болон багийн гишүүдийн хувь нэмэр, санаа оноог үнэлж,
          ажлын орчинд эерэг уур амьсгал бүрдүүлэх нь чухал.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          Мэргэжлийн ёс зүйг мөрдөх
        </h2>
        <p className="mt-2">
          Инженерүүд аливаа төслөө хөгжүүлэхдээ мэргэжлийн ёс зүйн дүрмийг
          баримтлах ёстой. Программ хангамжийн бүтээгдэхүүнийг хууль ёсны, үнэн
          зөв, хэрэглэгчдийн эрх ашгийг хамгаалах байдлаар хөгжүүлэх нь чухал.
        </p>
        <p className="mt-2">
          Мэргэжлийн ёс зүйн зарчмуудыг мөрдөх нь инженерийн нэр хүнд болон
          бүтээсэн бүтээгдэхүүний үнэлгээнд эерэг нөлөөтэй.
        </p>
      </div>
      <div className="w-full flex justify-center p-4">
        <button
          onClick={() => router.push("/ethics/end")}
          className="bg-[#07b98e] w-40 text-2xl text-white font-semibold px-6 py-2 rounded-full hover:bg-green-400"
        >
          End
        </button>
      </div>
    </div>
  );
};
