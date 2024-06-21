import Image from "next/image";

interface IChurchEmployeeBlockProps {
  src: string;
  fullName: string;
  position: string;
}

export function ChurchEmployeeBlock({
  src,
  fullName,
  position,
}: IChurchEmployeeBlockProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="group flex cursor-pointer flex-col items-center">
        <div className="relative flex size-[150px] items-center justify-center overflow-hidden rounded-full border-4 bg-[#E8E8E8] group-hover:border-hover-blue group-hover:bg-white xl:size-[190px]">
          <div className="after:absolute after:bottom-[21px] after:right-[19px] after:size-4 after:rounded-full after:bg-black group-hover:after:bg-hover-blue after:xl:bottom-[28px] after:xl:right-[26px]" />
          <Image
            src={src}
            width={160}
            height={160}
            alt="icon"
            className="size-[126px] rounded-full object-cover object-[70%_30%] xl:size-[160px]"
          />
        </div>
        <p className="mt-[10px] whitespace-pre-wrap text-center text-base font-bold xl:mt-[20px] xl:text-[22px]">
          {fullName}
        </p>
      </div>
      <p className="mt-[10px] text-base font-normal text-[#8A8A8A] xl:text-[22px]">
        {position}
      </p>
    </div>
  );
}
